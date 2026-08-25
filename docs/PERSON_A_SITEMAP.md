# Person A — Long Term Care & Home Visit Vertical (Sitemap Extract)

## 1. Source

Extracted from: `docs/Apollo Home Care Sitemap.pdf`

Owner of this scope: **Atharv**

Includes all Person A pages from the sitemap **plus the Home page**,
which Atharv is also building.

---

## 2. Person A Pages

### 2.1 Home (added — Atharv owns it)

```text
Page:       Home
Path:       /
How reached: Navbar (link 1 of 6)
```

### 2.2 Long Term Care vertical

```text
1. Long Term Care (hub)
   Path:        /long-term-care/
   How reached: Navbar (link 2 of 6)

2. Nurse at Home
   Path:        /long-term-care/nurse-at-home/
   How reached: Card/link on /long-term-care/
   Note:        Links out to procedure pages Ryle's Tube, Foley Catheter,
                IV Infusion, Wound Dressing

3. Attendant / Caregiver at Home
   Path:        /long-term-care/attendant-at-home/
   How reached: Card/link on /long-term-care/

4. ICU at Home
   Path:        /long-term-care/icu-at-home/
   How reached: Card/link on /long-term-care/
   Note:        Links out to procedure page Tracheostomy Care

5. Elder Care
   Path:        /long-term-care/elder-care/
   How reached: Card/link on /long-term-care/
```

### 2.3 Home Visit vertical

```text
6. Home Visit (hub)
   Path:        /home-visit/
   How reached: Navbar (link 3 of 6)

7. Doctor at Home
   Path:        /home-visit/doctor-at-home/
   How reached: Card/link on /home-visit/

8. Physiotherapy at Home
   Path:        /home-visit/physiotherapy-at-home/
   How reached: Card/link on /home-visit/

9. Post-Surgical Care
   Path:        /home-visit/post-surgical-care/
   How reached: Card/link on /home-visit/
```

### 2.4 Utility pages

```text
10. FAQ / Help Center
    Path:        /faq/
    How reached: Footer link (not navbar)
    Note:        Content sourced from these two verticals;
                 coordinates with Person C on city-page links

11. Pricing & Plans
    Path:        /pricing/
    How reached: Footer link + CTA button on /long-term-care/ and /home-visit/
    Note:        Long Term Care + Home Visit packages compared side by side
```

### 2.5 Procedure pages

```text
12. Procedure — Ryle's Tube
    Path:        /procedures/ryles-tube-insertion/
    How reached: Linked from Nurse at Home page

13. Procedure — Foley Catheter
    Path:        /procedures/foley-catheter-care/
    How reached: Linked from Nurse at Home page

14. Procedure — IV Infusion
    Path:        /procedures/iv-infusion-at-home/
    How reached: Linked from Nurse at Home page

15. Procedure — Wound Dressing
    Path:        /procedures/wound-dressing-at-home/
    How reached: Linked from Nurse at Home page

16. Procedure — Tracheostomy Care
    Path:        /procedures/tracheostomy-care/
    How reached: Linked from ICU at Home page
```

---

## 3. Shared Notes

1. **Patient Charter fix:** the old footer link pointed to `/account/`.
   The sitemap assigns the real page to Person C at `/about/patient-charter/`
   — coordinate with Person C so the footer link is corrected.
2. **Procedure pages:** each must follow the SEO template (unique title, H1,
   JSON-LD schema, local keyword variants).
3. **Navbar boundary:** only 6 links live in the navbar (Home, Long Term Care,
   Home Visit, Medical Equipment, Home Diagnostics, Adult Vaccination).
   Everything else is reached via footer, in-page cards, or breadcrumbs.
4. **Cross-links:**
   - /long-term-care/ and /home-visit/ → link to /pricing/
   - Nurse at Home → 4 procedure pages
   - ICU at Home → Tracheostomy Care
   - City pages (Person C) cross-link back to Person A service pages

---

## 4. Build Order (aligned with spec-kit/tasks.md)

```text
1. Components (care-services): domain → sections
2. Home page (/)
3. Hubs: /long-term-care/ → /home-visit/
4. Service details: Nurse → Attendant → Elder → Doctor → Physio → Post-Surgical → ICU
5. Procedures: Ryle's → Foley → IV Infusion → Wound Dressing → Tracheostomy
6. Utility: /faq/ → /pricing/
7. Integration, SEO, tests
```

END OF PERSON A SITEMAP