import { ActionFunction, Store } from "./definitions/common";


export const createStore = <T extends unknown>(initialState: T): Store<T> => {
  let state = initialState;

  const callbacks = new Set<() => void>();
  const getState = () => state;

  const setState = (nextState: T | ActionFunction<T>) => {
    state =
      typeof nextState === "function"
        ? (nextState as ActionFunction<T>)(state)
        : nextState;

    callbacks.forEach((callback) => callback());
  };

  const subscribe = (callback: () => void) => {
    callbacks.add(callback);
    return () => {
      callbacks.delete(callback);
    };
  };

  return { getState, setState, subscribe };
};