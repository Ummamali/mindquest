import { useCallback, useState } from "react";

export default function useAsyncStatus(asyncProcess, initial = {}) {
  const [dataState, setDataState] = useState({ ...initial, loadStatus: 0 });

  const runProcess = useCallback(
    (...args) => {
      setDataState((prev) => ({ ...prev, loadStatus: 1 }));
      asyncProcess(...args)
        .then((result) =>
          setDataState((prev) => ({ ...prev, result: result, loadStatus: 2 }))
        )
        .catch((err) =>
          setDataState((prev) => ({ ...prev, err: err, loadStatus: 3 }))
        );
    },
    [asyncProcess]
  );

  const reset = useCallback(
    () => setDataState({ ...initial, loadStatus: 0 }),
    []
  );

  return [dataState, runProcess, reset];
}
