import { StarIcon } from './StarSystem';

export const BrandPattern = () => (
    <div
        className="brand-pattern"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.15, // Low opacity per brief
        }}
    >
        {/* We use a repeating CSS grid of star icons for the pattern */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: '2rem',
            width: '120%',
            height: '120%',
            marginLeft: '-10%',
            marginTop: '-10%',
            transform: 'rotate(-5deg)', // Slight dynamic tilt
        }}>
            {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: Math.random() * 0.5 + 0.1 // Random variance for "alive" feel
                }}>
                    <StarIcon size={12} variant="glass" opacity={0.6} />
                </div>
            ))}
        </div>
    </div>
);
