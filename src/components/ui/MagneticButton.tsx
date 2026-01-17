'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import styles from './MagneticButton.module.css';

interface MagneticButtonProps {
    href?: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

export default function MagneticButton({ href, children, className = '', style = {}, onClick }: MagneticButtonProps) {
    const btnRef = useRef<HTMLAnchorElement | HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!btnRef.current) return;

        const rect = btnRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    const content = (
        <>
            <span className={styles.btnText}>{children}</span>
            <div
                className={styles.glow}
                style={{
                    opacity,
                    background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.3), transparent 70%)`
                }}
            />
        </>
    );

    const commonProps = {
        className: `${styles.magneticBtn} ${className}`,
        style: style,
        onMouseMove: handleMouseMove,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
    };

    if (href) {
        return (
            <Link
                href={href}
                ref={btnRef as React.RefObject<HTMLAnchorElement>}
                {...commonProps}
            >
                {content}
            </Link>
        );
    }

    return (
        <div
            ref={btnRef as React.RefObject<HTMLDivElement>}
            onClick={onClick}
            {...commonProps}
            role="button"
            tabIndex={0}
        >
            {content}
        </div>
    );
}
