import {BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import HomePage from "./components/homePage";
import CoinPage from "./components/currencies/currencyPage";

function App() {
  return(
      <>
        <Router>
            <Navbar/>
            <Route exact path="/" component={HomePage} />
            <Route path="/currencies/:id" component={CoinPage} />
        </Router>

      </>
  );
}

export default App;
