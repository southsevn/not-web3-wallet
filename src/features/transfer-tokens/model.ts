import { ethers } from "ethers";

export const transferTokens = async (
  recipient: string,
  amount: string,
  tokenAddress: string,
  signer: ethers.Signer
) => {
  if (!ethers.isAddress(recipient)) {
    throw new Error("Invalid recipient address");
  }

  const erc20Abi = [
    "function transfer(address to, uint256 amount) public returns (bool)"
  ];

  try {
    const contract = new ethers.Contract(tokenAddress, erc20Abi, signer);
    const tx = await contract.transfer(recipient, ethers.parseUnits(amount, 18));
    await tx.wait();
    return tx.hash;
  } catch (error) {
    throw new Error("Transaction failed");
  }
};
