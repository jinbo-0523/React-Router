import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    // <BrowserRouter>で囲うと遷移が有効になる
    <BrowserRouter>
      <div className="App">
        {/* <Link>で囲うとリンクが有効になる */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
        <br />
      </div>
      <Router />
    </BrowserRouter>
  );
}
