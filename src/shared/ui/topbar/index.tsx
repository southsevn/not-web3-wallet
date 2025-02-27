import { FC, useContext } from "react";
import { useWalletStore } from "@/entities/wallet/store";
import { SnackbarContext } from "@/shared/providers/SnackbarProvider";

const Topbar: FC = () => {
  const { address, balance, disconnect } = useWalletStore();
  const { showSnackbar } = useContext(SnackbarContext);

  const copyToClipboard = async () => {
    if (address) {
      try {
        await navigator.clipboard.writeText(address);
        showSnackbar("Copied to clipboard");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    }
  };

  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center shadow-lg fixed top-0 left-0 w-full">
      <img src="logo.svg" alt="logo" width={40} />
      <div className="flex items-center space-x-4">
        <p
          className="text-sm text-gray-400 cursor-pointer hover:text-gray-200 transition"
          onClick={copyToClipboard}
          title="Click to copy"
        >
          {address && `${address.slice(0, 6)}...${address.slice(-4)}`}
        </p>
        <p className="text-sm font-bold">{balance} BNB</p>
        <button
          className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded-lg text-white font-bold"
          onClick={disconnect}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;
