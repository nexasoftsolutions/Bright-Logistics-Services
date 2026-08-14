'use client';

import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./PakistanMap'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-full flex items-center justify-center bg-primary-container animate-pulse rounded-3xl shadow-2xl">
      <span className="font-label-bold text-on-primary-container uppercase tracking-wider">Loading Map...</span>
    </div>
  )
});

export default DynamicMap;
