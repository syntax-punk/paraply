import { useEffect, useState } from "react"
import { Store } from "../definitions/common";

export const useParaply = <T extends unknown>(store: Store<T>) => {
    const [state, setState] = useState(store.getState());
  
    useEffect(() => {

        const unsubscribe = store.subscribe(() => {
            setState(store.getState());
        });

        setState(store.getState());

        return unsubscribe;
    }, [store]);

    return [state, store.setState] as const;
}