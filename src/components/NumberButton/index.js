import React from "react";

export function NumberButton({ value, onClick, className }) {
  return (
    <div role="button" onClick={() => onClick(value)} className={className} >
      {value}
    </div>
  );
}
