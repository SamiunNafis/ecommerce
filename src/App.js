import { React } from "react";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import { Product } from "./components/Product";
/*import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
    ScrollRestoration
} from 'react-router-dom'*/
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="font-bodyFont">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={Product} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

