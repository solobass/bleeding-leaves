import React from 'react';
import { Component as EtheralShadow } from '../ui/etheral-shadow';

interface HeadingBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function HeadingBackground({ children, className = '' }: HeadingBackgroundProps) {
  return (
    <div className={`heading-background-wrapper ${className}`}>
      <EtheralShadow
        color="rgba(255, 115, 0, 0.1)"
        animation={{ scale: 20, speed: 50 }}
        noise={{ opacity: 0.3, scale: 0.5 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '20px',
          overflow: 'hidden'
        }}
      />
      <div className="heading-content">
        {children}
      </div>
    </div>
  );
} 