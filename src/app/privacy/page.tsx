import { BrandPattern } from '@/components/ui/BrandPattern';
import CTA from '@/components/sections/CTA';
import styles from '@/styles/ServicePage.module.css';

export default function PrivacyPage() {
    return (
        <main>
            <section className={styles.heroSection} style={{ minHeight: '60vh' }}>
                <BrandPattern />
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.heroTitle}>Privacy Policy</h1>
                    <p className={styles.heroDesc} style={{ maxWidth: '800px' }}>
                        Your data security is paramount. This policy outlines how Synced collects, uses, and protects your information.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container" style={{ color: 'var(--color-grey-text)', lineHeight: 1.8 }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>1. Information Collection</h2>
                    <p style={{ marginBottom: '2rem' }}>We collect information necessary to provide our services, including contact details and usage data.</p>

                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>2. Data Usage</h2>
                    <p style={{ marginBottom: '2rem' }}>Your data is used solely to improve your experience and deliver requested services. We never sell your data.</p>

                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>3. Contact</h2>
                    <p>For privacy concerns, please contact hello@synced.com.</p>
                </div>
            </section>
            <CTA />
        </main>
    );
}
