"use client";
import { PRODUCT_CATEGORIES } from "@/components/config/category";
import React, { useEffect, useRef, useState } from "react";

import { useOnClickOutside } from "@/components/hooks/use-on-click-outside";
import NavItem from "./Navitem";

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);
    const isAnyOpen = activeIndex !== null;
    const navRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveIndex(null);
            }
        };

        document.addEventListener("keydown", handler);

        return () => {
            document.removeEventListener("keydown", handler);
        };
    }, []);

    useOnClickOutside(navRef, () => setActiveIndex(null));

    return (
        <div className="flex gap-4 h-full" ref={navRef}>

            {PRODUCT_CATEGORIES.map((category, i) => {
                const handleOpen = () => {
                    if (activeIndex === i) {
                        setActiveIndex(null);
                    } else {
                        setActiveIndex(i);
                    }
                };
                const close = () => setActiveIndex(null)
                const isOpen = i === activeIndex;

                return (
                    <NavItem
                        category={category}
                        close={close}
                        handleOpen={handleOpen}
                        isOpen={isOpen}
                        key={category.value}
                        isAnyOpen={isAnyOpen}

                    />
                );
            })}
        </div>
    );
};

export default NavItems;
