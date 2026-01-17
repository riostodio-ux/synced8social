'use client';

import { useEffect, useRef } from 'react';

export default function MagneticLiquid() {
    const blobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const blob = blobRef.current;
        if (!blob) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let blobX = mouseX;
        let blobY = mouseY;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            // Smooth "magnetic" easing
            // The lower the number (0.05), the slower/more liquid the lag
            blobX += (mouseX - blobX) * 0.08;
            blobY += (mouseY - blobY) * 0.08;

            if (blob) {
                blob.style.transform = `translate(${blobX}px, ${blobY}px) translate(-50%, -50%)`;
            }
            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div
            ref={blobRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '600px', // Large size for soft ambient effect
                height: '600px',
                backgroundColor: 'var(--color-orange-primary)',
                borderRadius: '50%',
                mixBlendMode: 'screen', // Blends nicely with dark bg
                filter: 'blur(100px)', // High blur creates "liquid" feel
                opacity: 0.15, // Subtle, not overwhelming
                pointerEvents: 'none',
                zIndex: 0,
                transition: 'opacity 0.5s ease',
                willChange: 'transform',
            }}
        />
    );
}
