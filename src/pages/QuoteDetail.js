import { useParams, Outlet } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

// useRouteMatch
// instead of the string, we can provide object includes pathname and search field for the route

const QuoteDetail = () => {
  const param = useParams();
  const { quoteId } = param;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p className="centered">No Quote Found!</p>;
  }

  return (
    <section>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
      <Outlet />
    </section>
  );
};

export default QuoteDetail;
