import React from "react"
import { Store } from "../definitions/common";

export const useStore = <T extends unknown>(store: Store<T>) => {
    const [state, setState] = React.useState(store.getState());
  
    React.useEffect(() => {

        const unsubscribe = store.subscribe(() => {
            setState(store.getState());
        });

        setState(store.getState());

        return unsubscribe;
    }, [store]);

    return [state, store.setState] as const;
}