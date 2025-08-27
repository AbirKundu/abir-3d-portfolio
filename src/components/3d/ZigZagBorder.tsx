import React from 'react';

interface ZigZagBorderProps {
  className?: string;
  itemCount?: number;
}

export const ZigZagBorder: React.FC<ZigZagBorderProps> = ({ 
  className = "", 
  itemCount = 6 
}) => {
  return (
    <div className={`zigzag-wrapper ${className}`}>
      {/* First zigzag container */}
      <div className="zigzag-container">
        {Array.from({ length: itemCount }).map((_, index) => (
          <div 
            key={index} 
            className="zigzag-item"
            style={{ '--i': index } as React.CSSProperties}
          >
            <span>
              <b>{index + 1}</b>
            </span>
          </div>
        ))}
      </div>
      
      {/* Second zigzag container (rotated) */}
      <div className="zigzag-container zigzag-container-rotated">
        {Array.from({ length: itemCount }).map((_, index) => (
          <div 
            key={index} 
            className="zigzag-item"
            style={{ '--i': index } as React.CSSProperties}
          >
            <span>
              <b>{index + 1}</b>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};