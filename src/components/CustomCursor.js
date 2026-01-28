"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, frame } from "framer-motion";

export default function CustomCursor() {
    const ref = useRef(null);

    // 彈性設定
    const springConfig = { damping: 60, stiffness: 1000, restDelta: 0.001 };
    const x = useMotionValue(0, springConfig);
    const y = useMotionValue(0, springConfig);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handlePointerMove = (e) => {
            frame.read(() => {
                // 計算座標後置中
                x.set(e.clientX - element.offsetWidth / 2);
                y.set(e.clientY - element.offsetHeight / 2);
            });
        };

        window.addEventListener("pointermove", handlePointerMove);
        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, [x, y]);



    // hover 效果

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleOver = () => setIsHovered(true);
        const handleOut = () => setIsHovered(false);

        // 監聽畫面上所有的按鈕或連結
        const targets = document.querySelectorAll("button, a");
        targets.forEach((t) => {
            t.addEventListener("mouseenter", handleOver);
            t.addEventListener("mouseleave", handleOut);
        });

        return () => {
            targets.forEach((t) => {
                t.removeEventListener("mouseenter", handleOver);
                t.removeEventListener("mouseleave", handleOut);
            });
        };
    }, []);



    return (
        <motion.div
            ref={ref}
            className={`fixed top-0 left-0 pointer-events-none opacity-80 z-9999 bg-brand-primary`}
            style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                x,
                y,
            }}
            animate={{
                scale: isHovered ? 2 : 0.75
            }}
        />
    );
}