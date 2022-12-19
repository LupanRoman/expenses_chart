import React from 'react';

const Chart = () => {
  return (
    <>
      <div className="bg-pale-orange rounded-xl flex gap-2 flex-col p-5">
        <h5 className="font-extrabold text-xl">Spending - Last 7 days</h5>
        <div className="h-28 flex justify-between items-end">
          <div className="holder">
            <div className="sum">$17.45</div>
            <div className="bg-soft-red h-6 w-6 rounded-sm active:bg-cyan cursor-pointer"></div>
            <sub>mon</sub>
          </div>
          <div className="holder">
            <div className="sum">$34.91</div>
            <div className="bg-soft-red h-11 w-6 rounded-sm active:bg-cyan cursor-pointer"></div>
            <sub>tue</sub>
          </div>
          <div className="holder">
            <div className="sum">$52.36</div>
            <div className="bg-soft-red h-20 w-6 rounded-sm active:bg-cyan cursor-pointer"></div>
            <sub>wed</sub>
          </div>
          <div className="holder">
            <div className="sum">$31.07</div>
            <div className=" div bg-soft-red h-10 w-6 rounded-sm active:bg-cyan cursor-pointer"></div>
            <sub>thu</sub>
          </div>
          <div className="holder">
            <div className="sum">$23.39</div>
            <div className="bg-soft-red h-8 w-6 rounded-sm active:bg-cyan cursor-pointer"></div>
            <sub>fri</sub>
          </div>
          <div className="holder">
            <div className="sum">$43.28</div>
            <div className="bg-soft-red h-14 w-6 rounded-sm active:bg-cyan cursor-pointer"></div>
            <sub>sat</sub>
          </div>
          <div className="holder">
            <div className="sum">$25.48</div>
            <div className="bg-soft-red h-8 w-6 rounded-sm active:bg-cyan cursor-pointer"></div>
            <sub>sun</sub>
          </div>
        </div>
        <hr></hr>
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
