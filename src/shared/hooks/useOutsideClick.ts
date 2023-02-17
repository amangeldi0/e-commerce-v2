import { useEffect, useRef, useState } from 'react';

export const useOutsideClick = (initialIsVisible: boolean) => {
    const [show, setShow] = useState<boolean>(initialIsVisible);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: Event) => {
        if (ref.current != null && !ref.current.contains(event.target as HTMLElement)) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
    });

    return { ref, show, setShow };
};
