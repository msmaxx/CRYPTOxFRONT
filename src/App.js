import {BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import HomePage from "./components/homePage";
import CoinPage from "./components/currencies/currencyPage";
import Footer from "./components/footer";

function App() {
  return(
      <>
        <Router>
            <Navbar/>
            <Route exact path="/" component={HomePage} />
            <Route path="/currencies/:id" component={CoinPage} />
            <Route path="/promote/" component={CoinPage} />
            <Route path="/add-new-coin/" component={CoinPage} />
            <Footer/>
        </Router>

      </>
  );
}

export default App;
