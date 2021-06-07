import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
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
      {/* <Switch>はどのパスの時どのコンポーネントを表示するかを表す */}
      {/* その時使うのが<Route>
          <Route path="/">と書く */}
      <Switch>
        {/* exact path="OOO"は「完全一致」という意味 */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/Page1"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                {console.log(url)}
                <Page1 />
              </Route>
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />

        <Route path="/Page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
