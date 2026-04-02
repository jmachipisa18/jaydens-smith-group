export const enquiryServiceOptions = [
  'Electrical problem',
  'Plumbing problem',
  'Electrical and plumbing problem',
  'Rewiring',
] as const;

export type SharedEnquiryValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  website: string;
};

export type ContactEnquiryValues = {
  name: string;
  phone: string;
  postcode: string;
  serviceNeeded: string;
  message: string;
  website: string;
};

export type SharedEnquiryErrors = Partial<Record<keyof SharedEnquiryValues, string>>;
export type ContactEnquiryErrors = Partial<Record<keyof ContactEnquiryValues, string>>;

export type FormSubmissionPayload = {
  formName: 'shared-enquiry' | 'contact-enquiry';
  source: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  phone: string;
  email?: string;
  postcode?: string;
  serviceNeeded: string;
  message?: string;
  website?: string;
};

export type SubmitState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\s().-]{7,}$/;

function isBlank(value: string) {
  return value.trim().length === 0;
}

export function validateSharedEnquiryForm(values: SharedEnquiryValues): SharedEnquiryErrors {
  const errors: SharedEnquiryErrors = {};

  if (isBlank(values.firstName)) errors.firstName = 'Enter a first name.';
  if (isBlank(values.lastName)) errors.lastName = 'Enter a last name.';
  if (isBlank(values.phone)) {
    errors.phone = 'Enter a phone number.';
  } else if (!phonePattern.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.';
  }
  if (isBlank(values.email)) {
    errors.email = 'Enter an email address.';
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (isBlank(values.serviceNeeded)) errors.serviceNeeded = 'Select the service needed.';

  return errors;
}

export function validateContactEnquiryForm(values: ContactEnquiryValues): ContactEnquiryErrors {
  const errors: ContactEnquiryErrors = {};

  if (isBlank(values.name)) errors.name = 'Enter your name.';
  if (isBlank(values.phone)) {
    errors.phone = 'Enter a phone number.';
  } else if (!phonePattern.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.';
  }
  if (isBlank(values.serviceNeeded)) errors.serviceNeeded = 'Select the service needed.';
  if (isBlank(values.message)) errors.message = 'Tell us a little about the problem.';

  return errors;
}

export async function submitFormPayload(payload: FormSubmissionPayload) {
  let response: Response;

  try {
    response = await fetch('/api/submit-enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
    });
  } catch (error) {
    if (error instanceof Error && error.name === 'TimeoutError') {
      throw new Error('The form request timed out. Please try again in a moment.');
    }

    throw new Error('Could not reach the enquiry service. Please refresh and try again.');
  }

  const data = (await response.json().catch(() => null)) as { message?: string } | null;

  if (!response.ok) {
    throw new Error(data?.message ?? 'Something went wrong while sending your enquiry.');
  }

  return data?.message ?? 'Your enquiry has been sent successfully.';
}
