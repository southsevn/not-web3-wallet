import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useWalletStore } from "@/entities/wallet/store";

const ProtectedRoute: FC = () => {
  const { isAuthenticated } = useWalletStore();

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
