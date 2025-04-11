import React from 'react';
import Link from 'next/link';

const RequestButton = ({ examType = 'AP', buttonText = 'Request Lesson', className = '' }) => {
  return (
    <div className="flex justify-center mt-8 md:mt-10">
      <Link href={`https://www.vidyalai.com/request?exam=${examType}`}>
        <button 
          className={`w-full sm:w-auto inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-white shadow-md hover:bg-primary-dark transition-all duration-300 max-w-xs ${className}`}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default RequestButton;