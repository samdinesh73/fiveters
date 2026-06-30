"use client";

import React from 'react';
import Ribbons from './Ribbons';

export default function CursorRibbons() {
  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none z-30 select-none overflow-hidden">
      <Ribbons
        baseThickness={8}
        colors={['#9a0002']}
        speedMultiplier={0.4}
        maxAge={450}
        pointCount={60}
        enableFade={true}
        enableShaderEffect={true}
        effectAmplitude={1.5}
        backgroundColor={[0, 0, 0, 0]}
      />
    </div>
  );
}
