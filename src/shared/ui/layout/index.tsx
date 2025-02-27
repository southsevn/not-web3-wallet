import { FC, ReactNode, useContext } from "react";
import { useWalletStore } from "@/entities/wallet/store";
import Snackbar from "../snackbar";
import Topbar from "../topbar";
import { SnackbarContext } from "@/shared/providers/SnackbarProvider";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { address } = useWalletStore();
  const { message, isVisible: isSnackbarVisible } = useContext(SnackbarContext);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {address && <Topbar />}
      {isSnackbarVisible && <Snackbar message={message} />}

      <main className="flex-grow flex items-center justify-center pt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;
