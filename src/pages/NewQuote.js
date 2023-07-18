import QuoteForm from "../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";

const NewQuote = () => {
  const navigate = useNavigate();

  const addQuoteHandler = (quoteData) => {
    console.dir(quoteData);
    navigate("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
