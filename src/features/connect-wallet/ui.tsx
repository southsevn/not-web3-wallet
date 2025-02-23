import { FC, useEffect } from "react";
import { useWalletStore } from "@/entities/wallet/store";
import { useNavigate } from "react-router-dom";

const ConnectWallet: FC = () => {
  const { connect, isAuthenticated } = useWalletStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg transition"
        onClick={connect}
      >
        Connect MetaMask
      </button>
    </div>
  );
};

export default ConnectWallet;
