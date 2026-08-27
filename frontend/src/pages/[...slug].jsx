import { useRouter } from "next/router";

import {
    PersonBPage,
    PAGE_BY_SLUG as PERSON_B_PAGES,
} from "./diagnostics-equipment/shared";

import {
    PersonCPage,
    PAGE_BY_SLUG as PERSON_C_PAGES,
} from "./corporate-local-seo/shared";

export default function WebsiteRouter() {
    const router = useRouter();

    const slug = Array.isArray(router.query.slug)
        ? router.query.slug.join("/")
        : "";

    // Person C pages
    if (PERSON_C_PAGES[slug]) {
        return <PersonCPage data={PERSON_C_PAGES[slug]} />;
    }

    // Person B pages
    if (PERSON_B_PAGES[slug]) {
        return <PersonBPage data={PERSON_B_PAGES[slug]} />;
    }

    return (
        <div style={{ padding: "80px 20px", textAlign: "center" }}>
            <h1>Page not found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}