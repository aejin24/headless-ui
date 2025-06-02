import styles from "./tabType.module.scss";

import {
  HTMLAttributes,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
} from "react";

type TTabContextProps = {
  onChangeHandler: (index: number) => void;
};

const TabContext = createContext<TTabContextProps>({
  onChangeHandler: () => {},
});

export default function GlobalTab({
  onChangeHandler,
  children,
  className,
  ...props
}: PropsWithChildren<TTabContextProps & HTMLAttributes<HTMLUListElement>>) {
  const contextValue = useMemo(() => {
    return { onChangeHandler };
  }, [onChangeHandler]);

  return (
    <TabContext.Provider value={contextValue}>
      <ul {...props} className={`${styles.globalTab} ${className}`}>
        {children}
      </ul>
    </TabContext.Provider>
  );
}

function Tab({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLLIElement>>) {
  const { onChangeHandler } = useContext(TabContext);

  return (
    <li
      {...props}
      onClick={(e) => {
        const getIndex = Array.prototype.indexOf.call(
          e.currentTarget.parentElement?.children || [],
          e.currentTarget
        );

        onChangeHandler(getIndex);
      }}
    >
      {children}
    </li>
  );
}

GlobalTab.Tab = Tab;
