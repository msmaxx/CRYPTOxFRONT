import {BrowserRouter as Router, Route } from "react-router-dom";
import nightwind from "nightwind/helper"
import {Helmet} from "react-helmet";

import Navbar from "./components/navbar";
import HomePage from "./components/homePage";
import CoinPage from "./components/currencies/currencyPage";
import Footer from "./components/footer";


import PromotePage from "./components/promote/promotePage";
import AddNewCoin from "./components/addNewCoin/addNewCoin";

nightwind.init()

function App() {
  return(
      <div>
          <Router>
            <Navbar/>
            <Route exact path="/" component={HomePage} />
            <Route path="/currencies/:id" component={CoinPage} />
            <Route path="/promote/" component={PromotePage} />
            <Route path="/add-new-coin/" component={AddNewCoin} />
            <Footer/>
        </Router>
      </div>
  );
}

export default App;
