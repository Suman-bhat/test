import Accordion from "../Components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "1a!",
      label: "Best way to code",
      content: "Learn bit by bit with attitude of not giving up",
    },
    {
      id: "2b@",
      label: "Learn coding",
      content: "Learn bit by bit with attitude of not giving up",
    },
    {
      id: "3c#",
      label: "You will be proud of yourself",
      content: "Learn bit by bit with attitude of not giving up",
    },
  ];
  return <Accordion items={items} />;
}
export default AccordionPage;
