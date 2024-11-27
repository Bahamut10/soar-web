import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { TabBody, TabHeader, TabList } from './Tab';

interface TabContextTypes {
  activeTab: string;
  setActiveTab: (val: string) => void;
}

const TabContext = createContext<TabContextTypes>({
  activeTab: '',
  setActiveTab: () => {},
});

export default function Tab({
  children,
  activeTab,
}: {
  children: ReactNode;
  activeTab: string;
}) {
  const [value, setValue] = useState(activeTab);

  const _value = useMemo(() => {
    return { activeTab: value, setActiveTab: setValue };
  }, [value, setValue]);

  return <TabContext.Provider value={_value}>{children}</TabContext.Provider>;
}

export const useTabContext = () => useContext(TabContext);

Tab.TabHeader = TabHeader;
Tab.List = TabList;
Tab.Body = TabBody;
