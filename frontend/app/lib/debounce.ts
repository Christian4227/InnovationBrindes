import { useCallback, useEffect, useRef } from "react";

export default function useDebounce<T extends (...args: string[]) => void>(fn: T, delay: number, deps: string[] = []) {
    const timeoutRef = useRef<number | null>(null);
    const fnRef = useRef(fn);

    // Atualiza a referência da função quando ela muda
    useEffect(() => {
        fnRef.current = fn;
    }, [fn]);

    const debouncedFn = useCallback(
        (...args: Parameters<T>) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = window.setTimeout(() => {
                fnRef.current(...args);
            }, delay);
        },
        [delay],
    );

    return debouncedFn;
}
