import { Route, Routes } from 'react-router-dom';
import { ServicePageTemplate } from './components/ServicePageTemplate';
import { services } from './data/siteData';
import { Layout } from './layout/Layout';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ElectricalRepairsPage } from './pages/ElectricalRepairsPage';
import { EmergencyPlumbingPage } from './pages/EmergencyPlumbingPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const electricalRepairs = services.find((service) => service.path === '/electrical-repairs');
  const rewiring = services.find((service) => service.path === '/rewiring');
  const emergencyPlumbing = services.find((service) => service.path === '/emergency-plumbing');
  const boilerRepairs = services.find((service) => service.path === '/boiler-repairs');

  if (!electricalRepairs || !rewiring || !emergencyPlumbing || !boilerRepairs) {
    throw new Error('Service content is missing.');
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/electrical-repairs" element={<ElectricalRepairsPage />} />
        <Route path="/rewiring" element={<ServicePageTemplate content={rewiring} />} />
        <Route path="/emergency-plumbing" element={<EmergencyPlumbingPage />} />
        <Route path="/boiler-repairs" element={<ServicePageTemplate content={boilerRepairs} />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
