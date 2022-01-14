import { BrowserRouter , Routes, Route } from "react-router-dom"

import './styles/index.css';

import CustomNavbar from "./components/customNavbar";
import MemeOfTheMonthPage from "./views/memeOfTheMonthPage";
import BuyMemePage from "./views/buyMemePage";
import BestDealsPage from "./views/bestDealsPage";


const App = () => {
  
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes> 
        <Route path="/ofTheMonth" element={<MemeOfTheMonthPage />} exact/>
        <Route path="/buyMeme" element={<BuyMemePage />} exact/>
        <Route path="/bestDeals" element={<BestDealsPage />} exact/>
        <Route path="*" element={<div>No hubo presupuesto para esta pagina</div> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
