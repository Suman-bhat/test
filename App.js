import Sidebar from "./Components/Sidebar";
import Route from "./Components/Route";
import AccordionPage from "./Pages/AccordionPage";
import DropdownPage from "./Pages/DropdownPage";
import ButtonPage from "./Pages/ButonPage";
import ModalPage from "./Pages/ModalPage";
function App() {
  return (
    <div className="link">
      <Sidebar />
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
      </div>
    </div>
  );
}
export default App;
