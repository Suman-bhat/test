import { useState } from "react";
import Dropdown from "../Components/Dropdown";
function DropdownPage() {
  const [select, setSelect] = useState(null);

  const handleSelect = (option) => {
    setSelect(option);
  };

  const options = [
    { label: "Red", value: "Red" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Blue" },
  ];
  return (
    <div className="flex place-content-evenly">
      <Dropdown options={options} select={select} onSelect={handleSelect} />
    </div>
  );
}
export default DropdownPage;
