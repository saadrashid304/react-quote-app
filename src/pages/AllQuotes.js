import { Link } from "react-router-dom";

const AllQuotes = () => {
  return (
    <section>
      <h1>All Quotes Page</h1>
      <ul>
        <li>
          <Link to="/quotes/q1">quote 1</Link>
        </li>
        <li>
          <Link to="/quotes/q2">quote 2</Link>
        </li>
        <li>
          <Link to="/quotes/q3">quote 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default AllQuotes;
