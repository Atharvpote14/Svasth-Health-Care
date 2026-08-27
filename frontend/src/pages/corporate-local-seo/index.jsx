import Link from "next/link";
import { PersonCPage, PAGE_DATA } from "./shared";

export default function CorporateLocalSEOIndex() {
    return <PersonCPage data={PAGE_DATA.about} />;
}