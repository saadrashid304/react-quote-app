import { useParams, Outlet } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Saad",
    text: "Learning React is fun!",
  },
  {
    id: "q2",
    author: "Fahad",
    text: "Learning React is great!",
  },
];

const QuoteDetail = () => {
  const param = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === param.quoteId);

  if (!quote) {
    return <p>No Quote Found!</p>;
  }

  return (
    <section>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Outlet />
    </section>
  );
};

export default QuoteDetail;
