import "./App.css";
import Header from "./Header";
import Content from "./Content";
import { Routes, Route } from "react-router-dom";
import Item from "./components/Item";
import CreateItem from "./components/CreateItem";
import Error from "./components/Error";
import UpdateItem from "./components/UpdateItem";

/**
 * TODO List
 * 1. Setup react router ✅
 * 2. Single item page ✅
 * 3. Create repo ✅
 */
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact index element={<Content />} />
        {
          /*
            :id značí, že si pomocí v komponentu Item můžeme pomocí hooku useParams()
            vyjmout řetězec, který bude místo :id 
            to znamená, že vybereme přesně toho uživatele, na kterýho jsme kliknuli
          */
        }
        <Route path='item/:id' element={<Item />} />
        <Route path='create' element={<CreateItem />} />
        <Route path='update-item/:id' element={<UpdateItem />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
