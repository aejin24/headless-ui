import { useState } from "react";
import DropDown from "./components/menu/Dropdown";
import useGlobalModalContext from "./hooks/useGlobalModalContext";
import { ModalType } from "./utils/modal";

export default function App() {
  const [selected, setSelected] = useState("-- 선택 --");
  const [isOpen, setIsOpen] = useState(false);

  const { show, hide } = useGlobalModalContext();

  return (
    <>
      <h3>DropDown</h3>

      <DropDown
        isOpen={isOpen}
        onChange={(activate) => {
          setSelected(activate);
          setIsOpen(!isOpen);
        }}
      >
        <DropDown.DropDownButton
          style={{ width: "200px" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected}
        </DropDown.DropDownButton>
        <DropDown.DropDownItems
          style={{ width: "200px", display: "flex", flexDirection: "column" }}
        >
          <DropDown.DropDownItem>a</DropDown.DropDownItem>
          <DropDown.DropDownItem>b</DropDown.DropDownItem>
          <DropDown.DropDownItem>c</DropDown.DropDownItem>
        </DropDown.DropDownItems>
      </DropDown>

      <h3>Modal</h3>
      <button onClick={() => show(ModalType.LOADING)}>
        Loading Modal Show
      </button>
      <button
        onClick={() => show(ModalType.CONFIRM, { title: "으아아아아악" })}
      >
        Confirm Modal Show
      </button>
      <button onClick={hide}>Hide</button>
    </>
  );
}
