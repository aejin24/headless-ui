import React, {
  createContext,
  HTMLAttributes,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";

type TDropDownContextProps = {
  onChange: (selected: string) => void;
  isVisible: boolean;
};

const DropDownContext = createContext<TDropDownContextProps>({
  onChange: () => {},
  isVisible: false,
});

export default function DropDown({
  onChange,
  isVisible,
  children,
}: TDropDownContextProps & PropsWithChildren) {
  // ?
  const value = useMemo(() => {
    return { onChange, isVisible };
  }, [onChange, isVisible]);

  return (
    <DropDownContext.Provider value={value}>
      {children}
    </DropDownContext.Provider>
  );
}

function DropDownButton({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

function DropDownItems({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
  const { isVisible } = useContext(DropDownContext);

  return isVisible ? <div {...props}>{children}</div> : null;
}

function DropDownItem({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLButtonElement>) {
  const { onChange } = useContext(DropDownContext);

  return (
    <button
      type="button"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        const text = e.currentTarget.innerText;
        onChange(text);
      }}
      {...props}
    >
      {children}
    </button>
  );
}

DropDown.DropDownButton = DropDownButton;
DropDown.DropDownItems = DropDownItems;
DropDown.DropDownItem = DropDownItem;
