import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

interface RootContextTypes {
  isNavbarOpen: boolean;
  setIsNavbarOpen: Dispatch<SetStateAction<boolean>>;
  isLoginSuccess: boolean;
  setIsLoginSuccess: Dispatch<SetStateAction<boolean>>;
  toggleNavbar: () => void;
}

export const RootContext = createContext<RootContextTypes>({
  isNavbarOpen: false,
  setIsNavbarOpen: () => {},
  isLoginSuccess: false,
  setIsLoginSuccess: () => {},
  toggleNavbar: () => {},
});

export default function RootContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const toggleNavbar = useCallback(() => {
    setIsNavbarOpen(!isNavbarOpen);
  }, [isNavbarOpen]);

  const _value = React.useMemo(() => {
    return {
      isNavbarOpen,
      setIsNavbarOpen,
      isLoginSuccess,
      setIsLoginSuccess,
      toggleNavbar,
    };
  }, [isLoginSuccess, isNavbarOpen, toggleNavbar]);

  return <RootContext.Provider value={_value}>{children}</RootContext.Provider>;
}

const useRootContext = () => React.useContext(RootContext);

export { RootContextProvider, useRootContext };
