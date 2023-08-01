import useNavigation from "../Hooks/use-navigation";

function Link({ to, children }) {
  const { navigate, currentPath } = useNavigation();

  const handleClick = (e) => {
    e.preventDefault();

    navigate(to);
  };

  return (
    <div className="link">
      <a href={to} onClick={handleClick}>
        {children}
      </a>
    </div>
  );
}
export default Link;
