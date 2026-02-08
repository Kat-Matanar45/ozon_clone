import { useEffect, useRef, useState } from "react";

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
    initialState = false
) {
    const ref = useRef<T>(null)
    const [isOpen, setIsOpen] = useState(initialState)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClick)

        return () => {
            document.addEventListener('mousedown', handleClick)
        }
    }, [])

    return {ref, isOpen, setIsOpen}
}