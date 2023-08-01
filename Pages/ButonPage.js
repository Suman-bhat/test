import {
  GoAlert,
  GoCheckCircleFill,
  GoCircle,
  GoDash,
  GoXCircle,
} from "react-icons/go";
import "../index.css";
import Button from "../Components/Button";

function ButtonPage() {
  const handleClick = () => {};
  return (
    <div className="allign">
      <div className="button-style primary ">
        <Button
          primary
          rounded
          outline
          className="button"
          onClick={handleClick}
        >
          <GoDash />
          Primary
        </Button>
      </div>
      <div className="secondary button-style">
        <Button secondary>
          <GoCircle />
          secondary
        </Button>
      </div>
      <div className="danger button-style">
        <Button danger rounder>
          <GoXCircle />
          Danegr
        </Button>
      </div>
      <div className="warning button-style">
        <Button warning>
          <GoAlert />
          warning
        </Button>
      </div>
      <div className="success button-style">
        <Button success>
          <GoCheckCircleFill />
          Success
        </Button>
      </div>
      <div className="success button-style">
        <Button success rounded>
          <GoCheckCircleFill />
          Success
        </Button>
      </div>
      <div className="warning button-style">
        <Button warning outline>
          <GoAlert />
          warning
        </Button>
      </div>
    </div>
  );
}
export default ButtonPage;
