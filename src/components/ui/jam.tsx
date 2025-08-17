"use client";

import { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center font-sans">
      <p className="font-semibold text-xl text-gray-800">
        {`${hours}:${minutes}:${seconds}`}
      </p>
      <p className="text-sm text-gray-500">
        {time.toLocaleDateString('id-ID', dateFormatOptions)}
      </p>
    </div>
  );
};

export default Clock;