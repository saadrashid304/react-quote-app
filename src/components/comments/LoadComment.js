import { Link, useParams } from "react-router-dom";

const LoadComment = () => {
  const param = useParams();

  return (
    <div className="centered">
      <Link className="btn--flat" to={`/quotes/${param.quoteId}/comments`}>
        Load Comments
      </Link>
    </div>
  );
};

export default LoadComment;
