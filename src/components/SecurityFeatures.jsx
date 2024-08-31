import React from 'react';
import { FaShieldAlt, FaLock, FaVideo } from 'react-icons/fa';

const SecurityFeatures = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
        {}
        <div className="sm:border-r border-black px-4">
          <FaShieldAlt className="mx-auto text-4xl mb-4 text-orange-700" />
          <h3 className="font-semibold text-xl">Trusted Security</h3>
          <p>Ensure that your properties are secure even when you're not around.</p>
        </div>
        {}
        <div className="sm:border-r border-black px-4 ">
          <FaLock className="mx-auto text-4xl mb-4 text-orange-700" />
          <h3 className="font-semibold text-xl">Protection System</h3>
          <p>Ensure that your properties are secure even when you're not around.</p>
        </div>
        {}
        <div className="px-4">
          <FaVideo className="mx-auto text-4xl mb-4 text-orange-700" />
          <h3 className="font-semibold text-xl">24 Hours Surveillance</h3>
          <p>Ensure that your properties are secure even when you're not around.</p>
        </div>
      </div>
    </div>
  );
};

export default SecurityFeatures;
