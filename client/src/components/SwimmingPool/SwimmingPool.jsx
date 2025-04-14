import React from 'react';
import PoolTypesSection from './PoolTypesSection';

const SwimmingPool = () => {
  return (
    <section className="px-6 lg:px-20 lg:mt-40 mt-0 py-12 bg-white text-[#0a2b66]">
      <h2 className="text-3xl lg:text-5xl font-semibold mb-6">Swimming Pool</h2>
      <p className="text-lg leading-8 mb-2">
      Aqua Care is the complete swimming pool contractor and can take care of every single aspect of your pool and spa construction project from initial design through to swimming pool installation and follow-up maintenance. We offer offer our best in all types of swimming pool such as, Italian swimming pool, Glass wall pool, Long Island pool, Above ground pool, Aquatic swimming pool, Indoor pool, Infinity pool etc.

      </p>
     
      
<PoolTypesSection />
      
    </section>
  );
};

export default SwimmingPool;
