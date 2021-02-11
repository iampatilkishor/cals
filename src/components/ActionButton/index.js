import React from 'react';

export function ActionButton( { value, onClick, displayValue, className }) {
    return <div role="button" className={className} onClick={() => onClick(value)}>
    {displayValue}
  </div>
}