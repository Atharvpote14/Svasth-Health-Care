import Link from "next/link";

export default function PatientCharterPage() {
  return <div className="p-8 text-center">
    <h2 className="text-2xl font-semibold">Patient Charter</h2>
    <p className="mt-4 text-neutral-600">Our commitment to patients and families receiving home healthcare services.</p>
    <div className="mt-8 pt-8 border-t border-primary/10">
      <h3 className="font-display text-[20px] font-semibold text-neutral-900 mb-4">Patient Charter Principles</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-primary/10 bg-white p-8">
          <h3 className="font-display text-[20px] font-semibold text-neutral-900 mb-4">Right to Quality Care</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li>Receive compassionate, professional care tailored to your needs</li>
            <li>Services delivered with dignity and respect</li>
            <li>Access to qualified healthcare professionals</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-primary/10 bg-white p-8">
          <h3 className="font-display text-[20px] font-semibold text-neutral-900 mb-4">Right to Information</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li>Full information about services, costs, and treatment options</li>
            <li>Clear communication about care plans and progress</li>
            <li>Access to medical records and treatment history</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-primary/10 bg-white p-8">
          <h3 className="font-display text-[20px] font-semibold text-neutral-900 mb-4">Right to Safety</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li>Safe care environment with proper hygiene protocols</li>
            <li>Trained and verified healthcare professionals</li>
            <li>Emergency support and response protocols</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-primary/10">
        <h3 className="font-display text-[20px] font-semibold text-neutral-900 mb-4">Our Commitment</h3>
        <p className="text-neutral-600 mb-4">Apollo Homecare is committed to providing transparent, safe, and compassionate home healthcare services. We respect patient rights, maintain confidentiality, and continuously work to improve the quality of care delivered at home.</p>
        <Link href="/contact/" className="btn btn-primary">
          Contact Care Team
        </Link>
      </div>
    </div>
  </div>;
}