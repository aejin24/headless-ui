import { useState } from "react";
import DropDown from "./components/Dropdown";

export default function App() {
  const [selected, setSelected] = useState("-- 선택 --");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <h3>DropDown</h3>

      <DropDown
        isVisible={isVisible}
        onChange={(activate) => {
          setSelected(activate);
          setIsVisible(!isVisible);
        }}
      >
        <DropDown.DropDownButton
          style={{ width: "200px" }}
          onClick={() => setIsVisible(!isVisible)}
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
