import React from 'react';

export const GrowthGraph = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Glow Background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle, rgba(232, 69, 5, 0.15) 0%, transparent 70%)',
                filter: 'blur(40px)',
            }} />

            <svg viewBox="0 0 400 300" style={{ width: '100%', height: '100%', maxWidth: '500px', overflow: 'visible' }}>
                <defs>
                    <linearGradient id="lineSafeGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#E84505" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#E84505" stopOpacity="1" />
                        <stop offset="100%" stopColor="#E84505" stopOpacity="1" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Grid Lines */}
                <line x1="50" y1="250" x2="350" y2="250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="50" y1="180" x2="350" y2="180" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50" y1="110" x2="350" y2="110" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />

                {/* Axis Labels */}
                <text x="30" y="255" fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="end">0</text>
                <text x="30" y="185" fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="end">5k</text>
                <text x="30" y="115" fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="end">10k</text>

                {/* The Growth Line */}
                <path
                    d="M50,250 C100,250 120,200 150,180 C180,160 200,190 230,150 C260,110 300,50 350,20"
                    fill="none"
                    stroke="url(#lineSafeGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    filter="url(#glow)"
                />

                {/* Data Points */}
                <circle cx="150" cy="180" r="4" fill="#0a0a0a" stroke="#E84505" strokeWidth="2" />
                <circle cx="230" cy="150" r="4" fill="#0a0a0a" stroke="#E84505" strokeWidth="2" />

                {/* Final Point with Pulse */}
                <g>
                    <circle cx="350" cy="20" r="6" fill="#E84505" filter="url(#glow)" />
                    <circle cx="350" cy="20" r="12" fill="none" stroke="#E84505" strokeOpacity="0.5">
                        <animate attributeName="r" from="6" to="20" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="1" to="0" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                </g>

                {/* Floating Label */}
                <g transform="translate(260, 40)">
                    <rect x="0" y="0" width="80" height="24" rx="4" fill="rgba(232, 69, 5, 0.1)" stroke="#E84505" strokeWidth="1" />
                    <text x="40" y="16" fill="#E84505" fontSize="12" fontWeight="bold" textAnchor="middle">+248%</text>
                </g>
            </svg>
        </div>
    );
};
