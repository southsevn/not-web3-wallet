import { ethers } from "ethers";

export interface WalletState {
  provider: ethers.BrowserProvider | null;
  signer: ethers.Signer | null;
  address: string | null;
  balance: string;
  isAuthenticated: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
}
