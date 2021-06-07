import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to="/page1/detailA">Page1 DetailA</Link>
      <br />
      <Link to="/page1/detailB">Page1 DetailB</Link>
      <br />
    </div>
  );
};
