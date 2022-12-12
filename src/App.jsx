import React from 'react';
import Balance from './components/Balance';
import Chart from './components/Chart';

const App = () => {
  return (
    <>
      <div className="bg-cream h-screen w-full flex justify-center">
        <div className="mt-auto mb-auto ml-5 mr-5 flex flex-col justify-center gap-5 w-96">
          <div className="">
            <Balance />
          </div>
          <div>
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
