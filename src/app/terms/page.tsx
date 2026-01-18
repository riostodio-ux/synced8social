import { BrandPattern } from '@/components/ui/BrandPattern';
import CTA from '@/components/sections/CTA';
import styles from '@/styles/ServicePage.module.css';

export default function TermsPage() {
    return (
        <main>
            <section className={styles.heroSection} style={{ minHeight: '60vh' }}>
                <BrandPattern />
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.heroTitle}>Terms of Use</h1>
                    <p className={styles.heroDesc} style={{ maxWidth: '800px' }}>
                        By accessing Synced, you agree to these terms. Read them carefully to understand your rights and obligations.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container" style={{ color: 'var(--color-grey-text)', lineHeight: 1.8 }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>1. Acceptance</h2>
                    <p style={{ marginBottom: '2rem' }}>By using our services, you agree to be bound by these Terms of Use.</p>

                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>2. Services</h2>
                    <p style={{ marginBottom: '2rem' }}>Synced provides digital growth services. All deliverables are subject to the specific agreements signed per project.</p>

                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>3. Intellectual Property</h2>
                    <p>All content on this site is the property of Synced Inc.</p>
                </div>
            </section>
            <CTA />
        </main>
    );
}
