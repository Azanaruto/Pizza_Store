import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;
