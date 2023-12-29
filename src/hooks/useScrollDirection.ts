const SCROLL_UP = "up";
const SCROLL_DOWN = "down";

import { useState, useEffect } from "react";

interface Props {
    initialDirection: "up" | "down";
}

const useScrollDirection = ({ initialDirection }: Props) => {
    const [scrollDir, setScrollDir] = useState(initialDirection);

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.scrollY;
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => console.log("request animation"));
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [initialDirection]);

    return scrollDir;
};

export default useScrollDirection;
