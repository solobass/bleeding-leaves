import React from "react"

interface HeadingBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function HeadingBackground({ children, className }: HeadingBackgroundProps) {
  return (
    <div className={`relative w-full py-2 md:py-3 mb-2 md:mb-4 flex justify-center px-2 md:px-6 ${className || ''}`}>
      <div className="relative w-full max-w-7xl">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-40 rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
        </div>
        
        {/* Border effect */}
        <div className="absolute inset-0 border border-orange-500/40 rounded-lg"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center py-2 md:py-3 px-2 md:px-6">
          {children}
        </div>
      </div>
    </div>
  )
} 