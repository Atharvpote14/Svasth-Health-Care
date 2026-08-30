import { PersonCPage, PAGE_DATA, PageShell } from "../../components/corporate-local-seo/shared";

export default function CorporateLocalSEOIndex() {
    return (
        <PageShell>
            <PersonCPage data={PAGE_DATA.about} />
        </PageShell>
    );
}