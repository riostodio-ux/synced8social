import Link from 'next/link';
import { StarIcon } from '../ui/StarSystem';
import styles from './CTA.module.css';

export default function CTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div style={{ marginBottom: '2rem' }}>
                    <StarIcon className="text-orange" size={40} />
                </div>

                <h2 className={styles.headline}>
                    Ready to Get <span className="text-orange">Synced?</span>
                </h2>

                <p className={styles.subline}>
                    Stop losing traffic to bad design. Start converting with a system built for growth.
                </p>

                <Link href="/contact" className={styles.ctaButton}>
                    Start Project
                </Link>
            </div>
        </section>
    );
}
