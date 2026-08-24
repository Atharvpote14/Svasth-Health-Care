import Link from "next/link";
import PriceFromNote from "../domain/PriceFromNote";

const PricingTable = ({ plans = [], className = "" }) => {
  if (plans.length === 0) return null;

  return (
    <div className={`card overflow-hidden p-0 ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <caption className="sr-only">Care plans and packages</caption>

          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              <th scope="col" className="px-6 py-4 text-sm font-semibold text-neutral-900">
                Plan
              </th>
              <th scope="col" className="px-6 py-4 text-sm font-semibold text-neutral-900">
                Vertical
              </th>
              <th scope="col" className="px-6 py-4 text-sm font-semibold text-neutral-900">
                Pricing
              </th>
              <th scope="col" className="px-6 py-4 text-sm font-semibold text-neutral-900">
                What&apos;s included
              </th>
              <th scope="col" className="px-6 py-4 text-sm font-semibold text-neutral-900">
                <span className="sr-only">Action</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {plans.map((plan) => (
              <tr
                key={plan.id}
                className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50"
              >
                <td className="px-6 py-5">
                  <p className="flex items-center gap-2 font-semibold text-neutral-900">
                    {plan.name}
                    {plan.most_popular && <span className="badge badge-primary">Most popular</span>}
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">{plan.description}</p>
                </td>

                <td className="px-6 py-5 text-sm text-neutral-600">{plan.vertical}</td>

                <td className="px-6 py-5">
                  <PriceFromNote priceFrom={plan.price_from} priceNote={plan.price_note} />
                </td>

                <td className="px-6 py-5">
                  <ul className="list-disc space-y-1 pl-4 text-sm text-neutral-600">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </td>

                <td className="px-6 py-5">
                  <Link href={plan.cta?.href || "/contact/"} className="btn btn-secondary h-10 px-4 text-sm">
                    {plan.cta?.label || "Enquire"}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;