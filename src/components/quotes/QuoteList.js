import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const navigate = useNavigate();
  const [sorting, setSorting] = useState("asc");

  const changeSortingHandler = () => {
    setSorting((prevState) => (prevState === "asc" ? "desc" : "asc"));
    navigate("/quotes?sort=" + sorting);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          {sorting === "asc" ? "Sort Ascending" : "Sort Descending"}
        </button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
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
