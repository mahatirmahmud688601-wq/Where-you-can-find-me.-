import React, { useState } from 'react';
import { Layers, Sun, Moon, Sparkles, RotateCw, ZoomIn, Eye } from 'lucide-react';

export const AuroraGlowSimulator: React.FC = () => {
  const [rotation, setRotation] = useState(45);
  const [lighting, setLighting] = useState<'atelier' | 'runway' | 'golden'>('runway');
  const [colorway, setColorway] = useState<'obsidian' | 'sapphire' | 'emerald'>('obsidian');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [autoRotate, setAutoRotate] = useState(true);

  // Palettes for the digital twin simulation
  const colorways = {
    obsidian: {
      base: '#0f1015',
      accent: '#f59e0b',
      glow: 'rgba(245, 158, 11, 0.4)',
      name: 'Obsidian & 24K Gold Filigree'
    },
    sapphire: {
      base: '#0c1527',
      accent: '#38bdf8',
      glow: 'rgba(56, 189, 248, 0.4)',
      name: 'Royal Sapphire Silk & Platinum'
    },
    emerald: {
      base: '#061f18',
      accent: '#34d399',
      glow: 'rgba(52, 211, 153, 0.4)',
      name: 'Emerald Aurora Metallic Thread'
    }
  };

  const currentTheme = colorways[colorway];

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-slate-200">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-slate-100">Aurora Glow 3D Digital Twin Viewport</h4>
            <p className="text-xs text-slate-400">PBR Textile Shader &amp; Micro-Stitch Inspection</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded transition-colors ${
              autoRotate ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40' : 'bg-slate-900 text-slate-400'
            }`}
          >
            <RotateCw className="w-3 h-3" />
            <span>{autoRotate ? 'Turntable Active' : 'Turntable Paused'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Visual 3D Canvas Mockup Container */}
        <div className="md:col-span-8 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 rounded-xl border border-slate-800 p-6 flex flex-col items-center justify-center min-h-[280px] overflow-hidden">
          {/* Ambient Lighting Gradient based on preset */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{
              background:
                lighting === 'atelier'
                  ? 'radial-gradient(circle at 50% 20%, rgba(255,255,255,0.12) 0%, transparent 70%)'
                  : lighting === 'golden'
                  ? 'radial-gradient(circle at 30% 30%, rgba(245,158,11,0.18) 0%, transparent 75%)'
                  : 'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.15) 0%, transparent 60%)'
            }}
          />

          {/* Interactive Garment & Embroidery Canvas Simulation */}
          <div
            className="relative transition-transform duration-300 ease-out flex items-center justify-center"
            style={{
              transform: `scale(${zoomLevel}) rotateY(${rotation}deg)`,
              perspective: '800px'
            }}
          >
            <svg
              width="220"
              height="200"
              viewBox="0 0 220 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-2xl"
            >
              <defs>
                <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={currentTheme.base} />
                  <stop offset="100%" stopColor="#000000" />
                </linearGradient>
                <filter id="threadGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Haute couture bodice silhouette */}
              <path
                d="M60 20 C80 35 140 35 160 20 L180 80 C160 110 170 180 180 190 L40 190 C50 180 60 110 40 80 Z"
                fill="url(#bodyGrad)"
                stroke="#334155"
                strokeWidth="1.5"
              />

              {/* Embroidered floral & geometric filigree */}
              <g stroke={currentTheme.accent} strokeWidth="2" fill="none" filter="url(#threadGlow)">
                <path d="M110 50 Q130 90 110 130 Q90 90 110 50 Z" strokeWidth="2.5" />
                <path d="M85 80 Q110 100 135 80" />
                <path d="M75 110 Q110 130 145 110" />
                <path d="M90 140 Q110 155 130 140" />
                <circle cx="110" cy="90" r="6" fill={currentTheme.accent} />
                <circle cx="85" cy="110" r="3.5" fill={currentTheme.accent} />
                <circle cx="135" cy="110" r="3.5" fill={currentTheme.accent} />
                <circle cx="110" cy="130" r="4" fill={currentTheme.accent} />
              </g>

              {/* Fine stitch detail overlay */}
              <g stroke="#ffffff" strokeOpacity="0.4" strokeDasharray="2 3" strokeWidth="1">
                <path d="M68 40 L78 180" />
                <path d="M152 40 L142 180" />
              </g>
            </svg>
          </div>

          {/* Turntable Info Bar */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>AZIMUTH: {rotation}°</span>
            <span>SHADING: PBR DUAL-LOBE</span>
            <span>ZOOM: {(zoomLevel * 100).toFixed(0)}%</span>
          </div>
        </div>

        {/* Studio Controls */}
        <div className="md:col-span-4 space-y-4 text-xs">
          {/* Colorway Selection */}
          <div className="space-y-1.5">
            <label className="text-slate-400 font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" /> Textile Colorway
            </label>
            <div className="space-y-1">
              {(Object.keys(colorways) as Array<keyof typeof colorways>).map(key => (
                <button
                  key={key}
                  onClick={() => setColorway(key)}
                  className={`w-full text-left px-2.5 py-1.5 rounded transition-colors flex items-center justify-between ${
                    colorway === key
                      ? 'bg-slate-800 text-white font-medium border border-slate-700'
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="capitalize">{key} Edition</span>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colorways[key].accent }} />
                </button>
              ))}
            </div>
          </div>

          {/* Lighting Rig */}
          <div className="space-y-1.5">
            <label className="text-slate-400 font-medium flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-amber-400" /> Lighting Environment
            </label>
            <div className="grid grid-cols-3 gap-1">
              <button
                onClick={() => setLighting('atelier')}
                className={`py-1 rounded text-center transition-colors ${
                  lighting === 'atelier' ? 'bg-slate-800 text-white border border-slate-700' : 'bg-slate-900/60 text-slate-400'
                }`}
              >
                Atelier
              </button>
              <button
                onClick={() => setLighting('runway')}
                className={`py-1 rounded text-center transition-colors ${
                  lighting === 'runway' ? 'bg-slate-800 text-white border border-slate-700' : 'bg-slate-900/60 text-slate-400'
                }`}
              >
                Runway
              </button>
              <button
                onClick={() => setLighting('golden')}
                className={`py-1 rounded text-center transition-colors ${
                  lighting === 'golden' ? 'bg-slate-800 text-white border border-slate-700' : 'bg-slate-900/60 text-slate-400'
                }`}
              >
                Sunset
              </button>
            </div>
          </div>

          {/* Rotation & Zoom Slider */}
          <div className="space-y-2 pt-1 border-t border-slate-800">
            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>Orbit Angle</span>
                <span className="font-mono">{rotation}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={rotation}
                onChange={e => setRotation(Number(e.target.value))}
                className="w-full accent-pink-500 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span className="flex items-center gap-1"><ZoomIn className="w-3 h-3" /> Macro Zoom</span>
                <span className="font-mono">{(zoomLevel * 100).toFixed(0)}%</span>
              </div>
              <input
                type="range"
                min="0.8"
                max="1.5"
                step="0.05"
                value={zoomLevel}
                onChange={e => setZoomLevel(Number(e.target.value))}
                className="w-full accent-pink-500 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
