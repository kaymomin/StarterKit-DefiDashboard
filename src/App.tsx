import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {
  return (
    <div className="flex flex-col items-center py-8">

    <h1 className="flex justify-center text-sm sm:text-base md:text-3xl lg:text-4xl pb-10">
      DefiDashboard 🪙 What's in your Wallet?
    </h1>
    
    <div className="flex justify-center">
      <ConnectButton showBalance={false}/>
    </div>
    <div className="flex gap-6 mt-8">
    <div className='flex flex-col'>
      </div>
      </div>
      </div>
  );
}

export default App;
