import { useState } from "react";
import DropDown from "./components/Dropdown";

export default function App() {
  const [selected, setSelected] = useState("-- 선택 --");
  const [isOpen, setIsOpen] = useState(false);

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
    </>
  );
}
