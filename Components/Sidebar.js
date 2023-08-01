import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/dropdown" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
  ];
  const renderedLinks = links.map((links) => {
    return (
      <Link key={links.label} to={links.path}>
        {links.label}
      </Link>
    );
  });

  return <div className="renderedLink">{renderedLinks}</div>;
}
export default Sidebar;
