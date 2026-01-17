import CTA from '@/components/sections/CTA';
import Value from '@/components/sections/Value';

export default function ResultsPage() {
    return (
        <>
            <div style={{ paddingTop: '150px', paddingBottom: '60px' }}>
                <div className="container">
                    <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Logic. Systems. <br />
                        <span className="text-orange">Revenue.</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-grey-text)', maxWidth: '700px', marginBottom: '4rem' }}>
                        We don't sell design; we sell outcomes. Our 7-figure growth systems are engineered to turn traffic into ownership and clicks into cash.
                    </p>
                </div>
            </div>

            <Value />

            <div style={{ padding: '100px 0', background: 'var(--color-charcoal-light)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Expected Outcomes</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        <div style={{ padding: '2rem', background: 'var(--color-charcoal)', borderRadius: '1rem' }}>
                            <h3 style={{ fontSize: '3rem', color: 'var(--color-orange-primary)', marginBottom: '0.5rem' }}>90+</h3>
                            <p style={{ color: 'var(--color-white)', fontWeight: 'bold' }}>Performance Score</p>
                            <p style={{ color: 'var(--color-grey-text)', fontSize: '0.9rem', marginTop: '1rem' }}>
                                Google PageSpeed metrics that boost SEO and user retention.
                            </p>
                        </div>
                        <div style={{ padding: '2rem', background: 'var(--color-charcoal)', borderRadius: '1rem' }}>
                            <h3 style={{ fontSize: '3rem', color: 'var(--color-orange-primary)', marginBottom: '0.5rem' }}>2x</h3>
                            <p style={{ color: 'var(--color-white)', fontWeight: 'bold' }}>Conversion Rate</p>
                            <p style={{ color: 'var(--color-grey-text)', fontSize: '0.9rem', marginTop: '1rem' }}>
                                Clearer messaging and faster loads lead to more action.
                            </p>
                        </div>
                        <div style={{ padding: '2rem', background: 'var(--color-charcoal)', borderRadius: '1rem' }}>
                            <h3 style={{ fontSize: '3rem', color: 'var(--color-orange-primary)', marginBottom: '0.5rem' }}>100%</h3>
                            <p style={{ color: 'var(--color-white)', fontWeight: 'bold' }}>Ownership</p>
                            <p style={{ color: 'var(--color-grey-text)', fontSize: '0.9rem', marginTop: '1rem' }}>
                                You own the code, the assets, and the system. No lock-ins.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <CTA />
        </>
    );
}
