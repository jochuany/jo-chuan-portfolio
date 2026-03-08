"use client";

import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';

function CardRotate({ children, onSendToBack, sensitivity, disableDrag = false }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [60, -60]);
    const rotateY = useTransform(x, [-100, 100], [-60, 60]);

    function handleDragEnd(_, info) {
        if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
            onSendToBack();
        } else {
            x.set(0);
            y.set(0);
        }
    }

    if (disableDrag) {
        return (
            <motion.div className="absolute inset-0 cursor-pointer" style={{ x: 0, y: 0 }}>
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            className="absolute inset-0 cursor-grab"
            style={{ x, y, rotateX, rotateY }}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragElastic={0.6}
            whileTap={{ cursor: 'grabbing' }}
            onDragEnd={handleDragEnd}
        >
            {children}
        </motion.div>
    );
}

export default function Stack({
    randomRotation = true,
    sensitivity = 200,
    cards = [],
    animationConfig = { stiffness: 260, damping: 20 },
    sendToBackOnClick = false,
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    mobileClickOnly = false,
    mobileBreakpoint = 768
}) {
    const [isMobile, setIsMobile] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth < mobileBreakpoint);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [mobileBreakpoint]);

    const shouldDisableDrag = mobileClickOnly && isMobile;
    const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

    const [stack, setStack] = useState(() => {
        if (cards.length) {
            return cards.map((content, index) => ({ id: index + 1, content }));
        } else {
            return (cards || []).map((content, index) => ({
                id: index + 1,
                content
            }));
        }
    });

    useEffect(() => {
        if (cards.length) {
            setStack(cards.map((content, index) => ({ id: index + 1, content })));
        }
    }, [cards]);

    const sendToBack = id => {
        setStack(prev => {
            const newStack = [...prev];
            const index = newStack.findIndex(card => card.id === id);
            const [card] = newStack.splice(index, 1);
            newStack.unshift(card);
            return newStack;
        });
    };

    useEffect(() => {
        if (autoplay && stack.length > 1 && !isPaused) {
            const interval = setInterval(() => {
                const topCardId = stack[stack.length - 1].id;
                sendToBack(topCardId);
            }, autoplayDelay);

            return () => clearInterval(interval);
        }
    }, [autoplay, autoplayDelay, stack, isPaused]);

    if (!hasMounted) return <div className="relative w-full lg:w-[360px] h-[280px]" />;

    return (
        <div
            className="relative w-full md:w-[360px] lg:w-[360px] h-[280px]"
            style={{
                perspective: 600
            }}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
            {stack.map((card, index) => {
                const total = stack.length;
                const centerIndex = (total - 1) / 2;
                const offsetMultiplier = isMobile ? 10 : 80;
                const offsetX = (index - centerIndex) * offsetMultiplier;
                const startRotate = 8;
                const endRotate = -10;
                const step = total > 1 ? (endRotate - startRotate) / (total - 1) : 0;
                const baseRotate = startRotate + (index * step);
                const pseudoRandom = randomRotation ? ((index * 7) % 10) - 5 : 0;
                return (
                    <CardRotate
                        key={card.id}
                        onSendToBack={() => sendToBack(card.id)}
                        sensitivity={sensitivity}
                        disableDrag={shouldDisableDrag}
                    >
                        <motion.div
                            className="rounded-md overflow-hidden w-full h-full shadow-md border"
                            onClick={() => shouldEnableClick && sendToBack(card.id)}
                            animate={{
                                x: -offsetX + (isMobile ? 40 : 60),
                                rotateZ: baseRotate + pseudoRandom + 5,
                                scale: 1 + index * 0.04 - total * 0.04,
                                transformOrigin: 'center center',
                            }}
                            initial={false}
                            transition={{
                                type: 'spring',
                                stiffness: animationConfig.stiffness,
                                damping: animationConfig.damping
                            }}
                        >
                            {card.content}
                        </motion.div>
                    </CardRotate>
                );
            })}
        </div>
    );
}
