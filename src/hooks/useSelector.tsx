import { useEffect, useState, useSyncExternalStore } from "react";
import { Store } from "../definitions/common";

export const useSelector = <T, S>(store: Store<T>, selector: (state: T) => S) => {
  const [state, setState] = useState(selector(store.getState()));

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(selector(store.getState()));
    });

    setState(selector(store.getState()));

    return unsubscribe;
  }, [store, selector]);

  return state;
};

export const userSyncSelector = <T, S>(store: Store<T>, selector: (state: T) => S) => {
  const result = useSyncExternalStore(store.subscribe, () => selector(store.getState()));
  return result;
}
