import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const param = useParams();

  return (
    <section>
      <h1>Quote Detail Page</h1>
      <p>{param.quoteId}</p>
    </section>
  );
};

export default QuoteDetail;
