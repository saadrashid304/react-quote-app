import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import AllQuotes from "./pages/AllQuotes";
// import QuoteDetail from "./pages/QuoteDetail";
// import NewQuote from "./pages/NewQuote";
// import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
// import NotFound from "./pages/NotFound";
// import LoadComment from "./components/comments/LoadComment";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Comments = React.lazy(() => import("./components/comments/Comments"));
const LoadComment = React.lazy(() =>
  import("./components/comments/LoadComment")
);

const App = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" />} />
          <Route path="/quotes" element={<AllQuotes />} />
          <Route path="/quotes/:quoteId/" element={<QuoteDetail />}>
            <Route path="" element={<LoadComment />} />
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="/new-quote" element={<NewQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
