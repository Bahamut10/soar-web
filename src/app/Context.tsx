import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

interface RootContextTypes {
  isNavbarOpen: boolean;
  setIsNavbarOpen: Dispatch<SetStateAction<boolean>>;
}

export const RootContext = createContext<RootContextTypes>({
  isNavbarOpen: false,
  setIsNavbarOpen: () => {},
});

export default function RootContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const _value = React.useMemo(() => {
    return {
      isNavbarOpen,
      setIsNavbarOpen,
    };
  }, [isNavbarOpen]);

  return <RootContext.Provider value={_value}>{children}</RootContext.Provider>;
}

const useRootContext = () => React.useContext(RootContext);

export { RootContextProvider, useRootContext };
