import { create } from "zustand";
import { ethers } from "ethers";
import { WalletState } from "./types";

export const useWalletStore = create<WalletState>((set) => ({
  provider: null,
  signer: null,
  address: null,
  isAuthenticated: false,
  balance: "0",
  connect: async () => {
    if (!window.ethereum) {
      alert("MetaMask not found");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const balanceRaw = await provider.getBalance(address);
      const balance = ethers.formatEther(balanceRaw);

      set({ provider, signer, address, balance, isAuthenticated: true });
    } catch (error: unknown) {
      console.error("Connection error:", error);
    }
  },

  disconnect: () => {
    set({ provider: null, signer: null, address: null, balance: "0", isAuthenticated: false });
  },
}));