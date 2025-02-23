import { FC, ReactNode } from "react";
import { useWalletStore } from "@/entities/wallet/store";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { address, balance, disconnect } = useWalletStore();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="bg-gray-800 p-4 flex justify-between items-center shadow-lg fixed top-0 left-0 w-full">
        <h1 className="text-xl font-bold">Not Web3 Wallet</h1>

        {address && (
          <div className="flex items-center space-x-4">
            <p className="text-sm text-gray-400">
              {address.slice(0, 6)}...{address.slice(-4)}
            </p>
            <p className="text-sm font-bold">{balance} BNB</p>
            <button
              className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded-lg text-white font-bold"
              onClick={disconnect}
            >
              Logout
            </button>
          </div>
        )}
      </header>

      <main className="flex-grow flex items-center justify-center pt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;
