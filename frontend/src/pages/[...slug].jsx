import MedicalEquipmentPage from "./diagnostics-equipment/medical-equipment";
import RentEquipmentPage from "./diagnostics-equipment/medical-equipment/rent";
import BuyEquipmentPage from "./diagnostics-equipment/medical-equipment/buy";
import HomeDiagnosticsPage from "./diagnostics-equipment/home-diagnostics";
import BloodTestPage from "./diagnostics-equipment/home-diagnostics/blood-test-at-home";
import FullBodyCheckupPage from "./diagnostics-equipment/home-diagnostics/full-body-checkup-at-home";
import AdultVaccinationPage from "./diagnostics-equipment/adult-vaccination";
import FluVaccinePage from "./diagnostics-equipment/adult-vaccination/flu-vaccine";
import PneumoniaVaccinePage from "./diagnostics-equipment/adult-vaccination/pneumonia-vaccine";
import InsuranceTPAPage from "./diagnostics-equipment/insurance-tpa-tieups";
import NebulizationPage from "./diagnostics-equipment/procedures/nebulization-at-home";
import InjectionPage from "./diagnostics-equipment/procedures/injection-at-home";
import VitalMonitoringPage from "./diagnostics-equipment/procedures/vital-monitoring-at-home";
import TestimonialsPage from "./diagnostics-equipment/testimonials";

const ROUTES = {
  "medical-equipment": MedicalEquipmentPage,
  "medical-equipment/rent": RentEquipmentPage,
  "medical-equipment/buy": BuyEquipmentPage,
  "home-diagnostics": HomeDiagnosticsPage,
  "home-diagnostics/blood-test-at-home": BloodTestPage,
  "home-diagnostics/full-body-checkup-at-home": FullBodyCheckupPage,
  "adult-vaccination": AdultVaccinationPage,
  "adult-vaccination/flu-vaccine": FluVaccinePage,
  "adult-vaccination/pneumonia-vaccine": PneumoniaVaccinePage,
  "insurance-tpa-tieups": InsuranceTPAPage,
  "procedures/nebulization-at-home": NebulizationPage,
  "procedures/injection-at-home": InjectionPage,
  "procedures/vital-monitoring-at-home": VitalMonitoringPage,
  testimonials: TestimonialsPage,
};

export default function PersonBRoute({ slug }) {
  const Component = ROUTES[slug.join("/")];
  if (!Component) return null;
  return <Component />;
}

export function getStaticPaths() {
  return {
    paths: Object.keys(ROUTES).map((route) => ({ params: { slug: route.split("/") } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
