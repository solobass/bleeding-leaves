import React from 'react';
import { StarBorder } from '../ui/star-border';

interface StarBorderHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function StarBorderHeading({ children, className = '' }: StarBorderHeadingProps) {
  return (
    <div className={`star-border-heading-wrapper ${className}`}>
      <StarBorder
        as="div"
        color="#ff7300"
        speed="8s"
        className="w-full"
      >
        {children}
      </StarBorder>
    </div>
  );
} 