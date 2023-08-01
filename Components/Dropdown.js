import { useEffect, useRef, useState } from "react";
import { GrCaretDown } from "react-icons/gr";
import "../index.css";

function Dropdown({ options, onSelect, select }) {
  const [open, setOpen] = useState(false);
  const divEl = useRef();

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handle = (event) => {
      if (!divEl.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handle, true);
  }, []);

  const handleOptinClick = (option) => {
    setOpen(false);
    onSelect(option);
  };

  const renderOptions = options.map((options) => {
    return (
      <div onClick={() => handleOptinClick(options)} key={options.value}>
        {options.label}
      </div>
    );
  });
  // let content = "select...";
  // if (select) {
  //   content = select.label;
  // }
  return (
    <div>
      Select a color
      <div
        ref={divEl}
        className=" flex mt-0.5 bg-slate-200  cursor-pointer items-center border-2 rounded border-slate-300 text-xl w-24 h-10  place-content-evenly "
        onClick={handleClick}
      >
        {/* {content} */}
        {select?.label || "Select"}

        <GrCaretDown />
      </div>
      {open && (
        <div className=" italic text-justify rounded px-1 w-24  cursor-pointer  ">
          {renderOptions}
        </div>
      )}
    </div>
  );
}
export default Dropdown;
