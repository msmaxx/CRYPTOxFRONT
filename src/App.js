import {BrowserRouter as Router, Route } from "react-router-dom";
import nightwind from "nightwind/helper"
import {Helmet} from "react-helmet";

import Navbar from "./components/navbar";
import HomePage from "./components/homePage";
import CoinPage from "./components/currencies/currencyPage";
import Footer from "./components/footer";


import PromotePage from "./components/promote/promotePage";
import AddNewCoin from "./components/addNewCoin/addNewCoin";

function App() {
  return(
      <div>
          {nightwindInit}
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

const nightwindInit = `
(function() {
  function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem('nightwind-mode');
    if (typeof persistedColorPreference === 'string') {
      return persistedColorPreference;
    }
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (typeof mql.matches === 'boolean') {
      if (mql.matches) {
        window.localStorage.setItem("nightwind-mode", "dark");
        return "dark";
      } else {
        window.localStorage.setItem("nightwind-mode", "light");
        return "light";
      }
    }
    return 'light';
  }
  getInitialColorMode() == 'light' ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
  document.documentElement.classList.add('nightwind');
})()
`;

export default App;
