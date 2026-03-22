type FormSubmissionPayload = {
  formName: 'shared-enquiry' | 'contact-enquiry';
  source: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  phone?: string;
  email?: string;
  serviceNeeded?: string;
  message?: string;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\s().-]{7,}$/;

function json(data: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
    },
    ...init,
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function requiredText(value: string | undefined, fieldName: string) {
  if (!value || value.trim().length === 0) {
    return `${fieldName} is required.`;
  }

  return null;
}

function validatePayload(payload: FormSubmissionPayload) {
  const baseError =
    requiredText(payload.source, 'Source') ??
    requiredText(payload.phone, 'Phone number') ??
    requiredText(payload.serviceNeeded, 'Service needed');

  if (baseError) return baseError;
  if (!phonePattern.test(payload.phone!.trim())) return 'Phone number is invalid.';

  if (payload.formName === 'shared-enquiry') {
    const sharedError =
      requiredText(payload.firstName, 'First name') ??
      requiredText(payload.lastName, 'Last name') ??
      requiredText(payload.email, 'Email address');

    if (sharedError) return sharedError;
    if (!emailPattern.test(payload.email!.trim())) return 'Email address is invalid.';
  }

  if (payload.formName === 'contact-enquiry') {
    const contactError = requiredText(payload.name, 'Name') ?? requiredText(payload.message, 'Message');

    if (contactError) return contactError;
  }

  return null;
}

function buildEmailContent(payload: FormSubmissionPayload) {
  const title =
    payload.formName === 'contact-enquiry'
      ? `New contact enquiry from ${payload.name}`
      : `New website enquiry from ${payload.firstName} ${payload.lastName}`;

  const rows = [
    ['Form', payload.formName],
    ['Source', payload.source],
    ['First name', payload.firstName],
    ['Last name', payload.lastName],
    ['Name', payload.name],
    ['Phone', payload.phone],
    ['Email', payload.email],
    ['Service needed', payload.serviceNeeded],
    ['Message', payload.message],
    ['Submitted at', new Date().toISOString()],
  ].filter(([, value]) => value);

  const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n');
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f2740">
      <h1 style="margin-bottom:16px">${escapeHtml(title)}</h1>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:680px">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border:1px solid #e2e8f0;font-weight:700;background:#f8fafc;width:180px">${escapeHtml(label)}</td>
                <td style="border:1px solid #e2e8f0">${escapeHtml(String(value))}</td>
              </tr>
            `,
          )
          .join('')}
      </table>
    </div>
  `;

  return { subject: title, text, html };
}

async function sendWithResend(payload: FormSubmissionPayload) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const enquiryToEmail = process.env.ENQUIRY_TO_EMAIL;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL;

  if (!resendApiKey || !enquiryToEmail || !resendFromEmail) {
    console.error('enquiry_submission_config_missing', {
      hasResendApiKey: Boolean(resendApiKey),
      hasEnquiryToEmail: Boolean(enquiryToEmail),
      hasResendFromEmail: Boolean(resendFromEmail),
    });

    throw new Error(
      'Server email delivery is not configured yet. Add RESEND_API_KEY, ENQUIRY_TO_EMAIL, and RESEND_FROM_EMAIL.',
    );
  }

  const { subject, text, html } = buildEmailContent(payload);

  let resendResponse: Response;

  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: resendFromEmail,
        to: [enquiryToEmail],
        reply_to: payload.email ? payload.email.trim() : undefined,
        subject,
        text,
        html,
      }),
      signal: AbortSignal.timeout(12000),
    });
  } catch (error) {
    console.error('enquiry_submission_email_request_error', error);

    if (error instanceof Error && error.name === 'TimeoutError') {
      throw new Error('Email sending timed out. Please try again in a moment.');
    }

    throw new Error('Could not reach the email service. Please try again.');
  }

  if (!resendResponse.ok) {
    const errorBody = await resendResponse.text();
    console.error('enquiry_submission_email_failed', errorBody);
    throw new Error('Email delivery failed. Please try again.');
  }
}

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let payload: FormSubmissionPayload;

  try {
    payload = (await request.json()) as FormSubmissionPayload;
  } catch {
    return json({ message: 'Invalid request body.' }, { status: 400 });
  }

  if (payload.website && payload.website.trim().length > 0) {
    console.info('enquiry_submission_spam_blocked', { source: payload.source });
    return json({ message: 'Your enquiry has been sent successfully.' });
  }

  const validationError = validatePayload(payload);
  if (validationError) {
    return json({ message: validationError }, { status: 400 });
  }

  const logPayload = {
    formName: payload.formName,
    source: payload.source,
    serviceNeeded: payload.serviceNeeded,
    phone: payload.phone,
    email: payload.email,
    submittedAt: new Date().toISOString(),
  };

  console.info('enquiry_submission_received', logPayload);

  try {
    await sendWithResend(payload);
    return json({ message: 'Thanks. Your enquiry has been sent and our team has been notified.' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected server error.';
    return json({ message }, { status: 500 });
  }
}

export async function GET() {
  return json({ message: 'Method not allowed.' }, { status: 405 });
}
