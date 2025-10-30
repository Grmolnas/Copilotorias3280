const MedicalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end" />
      
      {/* Cruz médica - Top-left */}
      <div className="absolute left-[10%] top-[15%] opacity-[0.03] animate-float-slow">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 3C13.5 2.17157 12.8284 1.5 12 1.5C11.1716 1.5 10.5 2.17157 10.5 3V10.5H3C2.17157 10.5 1.5 11.1716 1.5 12C1.5 12.8284 2.17157 13.5 3 13.5H10.5V21C10.5 21.8284 11.1716 22.5 12 22.5C12.8284 22.5 13.5 21.8284 13.5 21V13.5H21C21.8284 13.5 22.5 12.8284 22.5 12C22.5 11.1716 21.8284 10.5 21 10.5H13.5V3Z" fill="currentColor" className="text-primary"/>
        </svg>
      </div>

      {/* Estetoscopio - Top-right */}
      <div className="absolute right-[15%] top-[20%] opacity-[0.04] animate-float-medium">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 14C19 12.8954 19.8954 12 21 12C22.1046 12 23 12.8954 23 14C23 15.1046 22.1046 16 21 16C19.8954 16 19 15.1046 19 14Z" fill="currentColor" className="text-primary"/>
          <path d="M17 14C17 11.7909 18.7909 10 21 10C23.2091 10 25 11.7909 25 14C25 15.8638 23.7252 17.4299 22 17.874V19C22 21.2091 20.2091 23 18 23C15.7909 23 14 21.2091 14 19V9.5C14 6.46243 11.5376 4 8.5 4C5.46243 4 3 6.46243 3 9.5C3 12.5376 5.46243 15 8.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary"/>
          <circle cx="5.5" cy="3.5" r="2.5" stroke="currentColor" strokeWidth="2" className="text-primary"/>
          <circle cx="11.5" cy="3.5" r="2.5" stroke="currentColor" strokeWidth="2" className="text-primary"/>
        </svg>
      </div>

      {/* Jeringa - Middle-left */}
      <div className="absolute left-[8%] top-[50%] opacity-[0.05] animate-float-slower">
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 3L18 6M18 6L15 3M18 6L12 12M12 12L9 9L3 15L9 21L15 15L12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
          <path d="M11 13L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary"/>
        </svg>
      </div>

      {/* Listón rosa (cáncer) - Middle-right */}
      <div className="absolute right-[12%] top-[55%] opacity-[0.04] animate-float-slow hidden md:block">
        <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 8 8 9 9 10L7 22L12 19L17 22L15 10C16 9 16.5 8 16.5 6.5C16.5 4 14.5 2 12 2Z" fill="currentColor" className="text-primary"/>
        </svg>
      </div>

      {/* Diente - Bottom-left */}
      <div className="absolute left-[12%] bottom-[20%] opacity-[0.04] animate-float-medium">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.5 2 6 4.5 6 8V14C6 16 7 18 8 19C8.5 19.5 9 21 9 22C9 22.5 9.5 23 10 23C10.5 23 11 22.5 11 22V19H13V22C13 22.5 13.5 23 14 23C14.5 23 15 22.5 15 22C15 21 15.5 19.5 16 19C17 18 18 16 18 14V8C18 4.5 15.5 2 12 2Z" fill="currentColor" className="text-primary"/>
        </svg>
      </div>

      {/* Madre-bebé - Bottom-right */}
      <div className="absolute right-[18%] bottom-[22%] opacity-[0.05] animate-float-slower">
        <svg width="65" height="65" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="5" r="3" fill="currentColor" className="text-primary"/>
          <path d="M9 10C6.5 10 4 11.5 4 14V20C4 20.5 4.5 21 5 21H13C13.5 21 14 20.5 14 20V14C14 11.5 11.5 10 9 10Z" fill="currentColor" className="text-primary"/>
          <circle cx="17" cy="8" r="2" fill="currentColor" className="text-primary"/>
          <path d="M17 11C15.5 11 14 12 14 13.5V17C14 17.5 14.5 18 15 18H19C19.5 18 20 17.5 20 17V13.5C20 12 18.5 11 17 11Z" fill="currentColor" className="text-primary"/>
        </svg>
      </div>

      {/* Elementos adicionales para desktop */}
      <div className="hidden lg:block absolute left-[75%] top-[35%] opacity-[0.03] animate-float-medium">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 3C13.5 2.17157 12.8284 1.5 12 1.5C11.1716 1.5 10.5 2.17157 10.5 3V10.5H3C2.17157 10.5 1.5 11.1716 1.5 12C1.5 12.8284 2.17157 13.5 3 13.5H10.5V21C10.5 21.8284 11.1716 22.5 12 22.5C12.8284 22.5 13.5 21.8284 13.5 21V13.5H21C21.8284 13.5 22.5 12.8284 22.5 12C22.5 11.1716 21.8284 10.5 21 10.5H13.5V3Z" fill="currentColor" className="text-primary"/>
        </svg>
      </div>

      <div className="hidden lg:block absolute left-[25%] top-[70%] opacity-[0.04] animate-float-slower">
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 8 8 9 9 10L7 22L12 19L17 22L15 10C16 9 16.5 8 16.5 6.5C16.5 4 14.5 2 12 2Z" fill="currentColor" className="text-primary"/>
        </svg>
      </div>
    </div>
  );
};

export default MedicalBackground;
