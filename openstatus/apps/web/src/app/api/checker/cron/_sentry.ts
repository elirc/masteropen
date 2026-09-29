// Props: https://github.com/getsentry/sentry-javascript/issues/9335#issuecomment-1779057528
import { captureCheckIn, flush } from "@sentry/nextjs";

export function runSentryCron(monitorSlug: string) {
  // 🟡 Notify Sentry your job is running:
  const checkInId = captureCheckIn({
    monitorSlug,
    status: "in_progress",
  });
  return {
    cronCompleted: async () => {
      // 🟢 Notify Sentry your job has completed successfully:
      captureCheckIn({
        checkInId,
        monitorSlug,
        status: "ok",
      });
      return flush();
    },
    cronFailed: async () => {
      // 🔴 Notify Sentry your job has failed:
      captureCheckIn({
        checkInId,
        monitorSlug,
        status: "error",
      });
      return flush();
    },
  };
}
