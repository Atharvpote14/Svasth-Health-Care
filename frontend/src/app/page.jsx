export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl md:text-5xl">Expert healthcare that comes to you.</h1>
      <p className="max-w-xl text-lg text-neutral-600">
        CareNest is a home healthcare platform. This is the initial scaffold —
        the homepage is built next, following the specifications in
        <code className="mx-1 rounded bg-neutral-100 px-1.5 py-0.5 text-sm text-primary-700">
          docs/PAGE_SPECIFICATIONS.md
        </code>
        .
      </p>
    </main>
  );
}