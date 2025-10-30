const MedicalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Fondo base con degradado navy a azul medio */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#1e3a5f] to-[#2874A6]" />
      
      {/* Patrón SVG de hexágonos y cruces médicas */}
      <div className="absolute inset-0 opacity-[0.15]">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="hexagon-pattern" x="0" y="0" width="120" height="104" patternUnits="userSpaceOnUse">
              {/* Hexágonos */}
              <path 
                d="M30,0 L60,0 L75,26 L60,52 L30,52 L15,26 Z" 
                fill="none" 
                stroke="rgba(59, 130, 246, 0.35)" 
                strokeWidth="1.5"
              />
              <path 
                d="M90,26 L120,26 L135,52 L120,78 L90,78 L75,52 Z" 
                fill="none" 
                stroke="rgba(59, 130, 246, 0.25)" 
                strokeWidth="1.5"
              />
              
              {/* Cruces médicas pequeñas */}
              <g transform="translate(45, 26)" opacity="0.5">
                <rect x="-2" y="-8" width="4" height="16" fill="rgba(96, 165, 250, 0.4)" rx="1" />
                <rect x="-8" y="-2" width="16" height="4" fill="rgba(96, 165, 250, 0.4)" rx="1" />
              </g>
              <g transform="translate(105, 52)" opacity="0.4">
                <rect x="-1.5" y="-6" width="3" height="12" fill="rgba(147, 197, 253, 0.35)" rx="0.75" />
                <rect x="-6" y="-1.5" width="12" height="3" fill="rgba(147, 197, 253, 0.35)" rx="0.75" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagon-pattern)" />
        </svg>
      </div>

      {/* Overlay blanco sutil */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Gradiente superior para mejor legibilidad del navbar */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a1628]/90 to-transparent" />
      
      {/* Overlay sutil para integración con cards blancas */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/3" />
    </div>
  );
};

export default MedicalBackground;
