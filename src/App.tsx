import { ConnectButton } from "@rainbow-me/rainbowkit";
import { BsGithub, BsTwitter } from "react-icons/bs";

function App() {
  return (
    <div className="bg-zinc-900 flex justify-center items-center h-screen text-white w-screen">
      <div>
        <div className="flex justify-center text-sm sm:text-base md:text-3xl lg:text-4xl pb-10">
          DefiDashboard 🪙 What's in your Wallet?
        </div>
        <div className="flex justify-center">
          <ConnectButton />
        </div>
        <div className="flex justify-center pt-10">
        </div>
      </div>
    </div>
  );
}

export default App;
