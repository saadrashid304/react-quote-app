import { Fragment, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending === "asc") {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sorting, setSorting] = useState("asc");

  const queryParams = new URLSearchParams(location.search); // it is a JavaScript built-in function
  console.log(queryParams.get("sort"));

  const changeSortingHandler = () => {
    setSorting((prevState) => (prevState === "asc" ? "desc" : "asc"));
    navigate("/quotes?sort=" + sorting);
  };

  const sortedQuotes = sortQuotes(props.quotes, sorting);

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          {sorting === "asc" ? "Sort Ascending" : "Sort Descending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
