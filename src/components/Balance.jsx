import React from 'react';
import logo from '../assets/logo.svg';

const Balance = () => {
  return (
    <>
      <div className="bg-soft-red flex justify-between p-5 rounded-xl h-full items-center">
        <div>
          <sub className="text-cream text-xs">My balance</sub>
          <p className="text-white text-3xl font-extrabold mt-1">$921.48</p>
        </div>
        <div>
          <img src={logo} height={50} width={50} alt="" />
        </div>
      </div>
    </>
  );
};

export default Balance;
