import Link from 'next/link';
import { StarIcon } from '../ui/StarSystem';
import styles from './Services.module.css';

export default function Services() {
    return (
        <section className={styles.section} id="services">
            <div className="container">
                <div className={styles.heading}>
                    <h2>
                        <span className="text-orange">Core</span> & Support
                    </h2>
                    <p>We focus on the engine first, then the fuel.</p>
                </div>

                <div className={styles.servicesGrid}>
                    {/* Primary Service */}
                    <div className={styles.mainServiceCard}>
                        <div>
                            <StarIcon className="text-orange" size={32} />
                            <h3 className={styles.serviceTitle} style={{ marginTop: '1rem' }}>
                                High-Performance Websites
                            </h3>
                            <p className={styles.serviceDescription}>
                                Custom-built engines designed for speed and scale. We don't do templates.
                                We build digital products that position you as a market leader.
                            </p>
                            <ul style={{ listStyle: 'none', color: 'var(--color-grey-text)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li>✓ Next.js & React Architecture</li>
                                <li>✓ Advanced Animations</li>
                                <li>✓ SEO-First Structure</li>
                            </ul>
                        </div>
                        <div className={styles.highlight}>
                            The Foundation <StarIcon size={16} />
                        </div>
                    </div>

                    {/* Secondary Services */}
                    <div className={styles.secondaryServiceCard}>
                        <h3 className={styles.secondaryTitle}>Upwork Optimization</h3>
                        <p className={styles.secondaryDescription}>
                            Align your profile to convert high-ticket clients.
                            Trust flows from your website to your profile.
                        </p>
                    </div>

                    <div className={styles.secondaryServiceCard}>
                        <h3 className={styles.secondaryTitle}>Social Sync</h3>
                        <p className={styles.secondaryDescription}>
                            Unified visual identity across LinkedIn and Twitter.
                            One cohesive brand voice.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
