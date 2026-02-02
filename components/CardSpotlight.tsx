'use client';

import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export function CardSpotlight({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative border border-border bg-surface/[0.02] overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className='pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100'
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(124, 58, 237, 0.15),
              transparent 80%
            )
          `,
                }}
            />
            <div className='relative h-full'>{children}</div>
        </div>
    );
}
