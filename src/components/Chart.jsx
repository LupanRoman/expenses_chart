import React from 'react';

const Chart = () => {
  return (
    <>
      <div className="bg-pale-orange rounded-xl flex gap-5 flex-col p-5">
        <h5 className="font-extrabold text-xl">Spending - Last 7 days</h5>
        <div className="bg-soft-red h-24"></div>
        <div className="flex justify-between h-full items-center">
          <div>
            <sub className="text-xs text-cyan">Total this month</sub>
            <h4 className="font-extrabold text-3xl ">$478.33</h4>
          </div>
          <div className="text-right flex flex-col">
            <p className="mb-2 font-extrabold text-md">+2.4%</p>
            <sub className="text-cyan font-bold">from last month</sub>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
