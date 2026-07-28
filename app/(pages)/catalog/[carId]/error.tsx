'use client';
import { useEffect } from "react";


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  
    useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <button
        className="mt-4 rounded-md bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-700"
        onClick={
         
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}