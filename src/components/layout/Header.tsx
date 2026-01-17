'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MagneticButton from '../ui/MagneticButton';
import styles from './Header.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                {/* Logo - Left */}
                <Link href="/" className={styles.logoContainer}>
                    <Image
                        src="/images/Logo.png"
                        alt="Synced Logo"
                        fill
                        style={{ objectFit: 'contain', objectPosition: 'left' }}
                        priority
                    />
                </Link>

                {/* Navigation - Center */}
                <nav className={styles.centeredNav}>
                    <Link href="/websites" className={styles.navLink}>Websites</Link>
                    <Link href="/upwork" className={styles.navLink}>Upwork</Link>
                    <Link href="/social" className={styles.navLink}>Social</Link>
                    <Link href="/process" className={styles.navLink}>Process</Link>
                    <Link href="/results" className={styles.navLink}>Results</Link>
                </nav>

                {/* CTA - Right */}
                <div className={styles.rightAction}>
                    <MagneticButton
                        href="/contact"
                        style={{ padding: '0.75rem 2rem', fontSize: '1rem' }} // Match header sizing
                    >
                        Start Growth
                    </MagneticButton>
                </div>
            </div>
        </header>
    );
}
