/**
 * Represents a timed activity
 * Resolve: completes with success (true) or failure (false)
 * Reject: error state, activity aborted
 */
export const TimedActivity = (action: () => boolean, completionDelayMs: number) => {
  return new Promise<boolean>(
    (resolve) => {
      setTimeout(() => {
        action();
        resolve(true);
      }, completionDelayMs);
    }
  );
}
