import { FC, useState, useContext } from "react";
import { transferTokens } from "./model";
import { useWalletStore } from "@/entities/wallet/store";
import { SnackbarContext } from "@/shared/providers/SnackbarProvider";

const TransferForm: FC = () => {
  const { signer } = useWalletStore();
  const { showSnackbar } = useContext(SnackbarContext);

  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTransfer = async () => {
    if (!signer) {
      showSnackbar("Please connect your wallet first!");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const txHash = await transferTokens(recipient, amount, "0xTOKEN_CONTRACT_ADDRESS", signer);
      showSnackbar(`Transaction sent! Hash: ${txHash}`);
      setRecipient("");
      setAmount("");
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg text-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Send Tokens</h2>

      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="w-full p-2 mb-3 bg-gray-700 rounded text-white"
      />

      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 mb-3 bg-gray-700 rounded text-white"
      />

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <button
        className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded"
        onClick={handleTransfer}
        disabled={loading}
      >
        {loading ? "Processing..." : "Send"}
      </button>
    </div>
  );
};

export default TransferForm;
