'use client';
import { useRouter } from "next/navigation";
import { useEffect, useTransition } from "react";


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

  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleRetry = () => {
    startTransition(() => {
      // 2. Инвалидируем серверный кэш текущего маршрута
      router.refresh();
      // 3. Сбрасываем Error Boundary стейт в React
      reset();
    });
  };

  return (
    <main className="flex flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <button
        className="mt-4 rounded-md bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-700"
        onClick={handleRetry}
        disabled={isPending}
      >
        Try again
      </button>
    </main>
  );
}