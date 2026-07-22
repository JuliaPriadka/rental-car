import Link from 'next/link';
 
export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2">
      <p>Could not find the requested car.</p>
      <Link
        href="/catalog"
        className="mt-4 rounded-md bg-sky-500 px-4 py-2 text-sm text-white hover:bg-sky-700"
      >
        Return to Catalogue
      </Link>
    </main>
  );
}