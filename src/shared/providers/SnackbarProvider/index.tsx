import { createContext, useState, ReactNode } from "react";

interface SnackbarContextProps {
  showSnackbar: (msg: string, duration?: number) => void;
  message: string;
  isVisible: boolean;
}

export const SnackbarContext = createContext<SnackbarContextProps>({
  showSnackbar: () => {},
  message: "",
  isVisible: false,
});

export const SnackbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  const showSnackbar = (msg: string, duration = 3000) => {
    setMessage(msg);
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
      setMessage("");
    }, duration);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar, message, isVisible }}>
      {children}
    </SnackbarContext.Provider>
  );
};
