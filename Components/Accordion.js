import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState();

  const renderItems = items.map((items, index) => {
    const isExpanded = index == expandedIndex;
    const handleClick = (newIndex) => {
      if (expandedIndex === newIndex) {
        setExpandedIndex(-1);
      } else setExpandedIndex(newIndex);
    };
    const icon = (
      <span> {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div key={items.id}>
        <div
          className=" flex justify-between p-3 bg-slate-200 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {items.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{items.content}</div>}
      </div>
    );
  });

  return <div className="border-x">{renderItems}</div>;
}
export default Accordion;
