import { ActionFunction, Store } from "./definitions/common";

export const createParaply = <T extends unknown>(initialState: T): Store<T> => {
  let state = initialState;

  const subscriptions = new Set<() => void>();
  const getState = () => state;

  const setState = (nextState: T | ActionFunction<T>) => {
    state =
      typeof nextState === "function"
        ? (nextState as ActionFunction<T>)(state)
        : nextState;

    subscriptions.forEach((callback) => callback());
  };

  const subscribe = (callback: () => void) => {
    subscriptions.add(callback);
    return () => {
      subscriptions.delete(callback);
    };
  };

  return { getState, setState, subscribe };
};