/**
 * Service metadata presentation.
 *
 * `availability` is deliberately not surfaced on cards: every one of the 23
 * records in site-content.js has it set to "available", so a badge built on it
 * would differentiate nothing while implying it did. `type` does vary — five
 * services are continuing engagements and seven are single visits — and that
 * distinction is the first thing a family needs in order to choose, so it is
 * what the cards record instead.
 */

export const SERVICE_TYPE_LABELS = {
  long_term: "Ongoing",
  visit: "Single visit",
  assessment: "Assessment",
  booking: "Subscription",
};

export function serviceTypeLabel(type) {
  return SERVICE_TYPE_LABELS[type] || null;
}

/** Price rows read as recorded values, so an absent figure still reads as data. */
export function priceFromLabel(priceFrom) {
  return priceFrom ? `₹${Number(priceFrom).toLocaleString("en-IN")}` : "On enquiry";
}
