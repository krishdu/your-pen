import { Fragment, useEffect } from "react";
import { Route, Routes, useParams, Link, useLocation } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useLocalstorage from "../components/hooks/use-localstorage";
import { getSingleQuote } from "../components/lib/api";

/**
 * responsible for showing a particular Quote and it's behind thpught
 */

const QuoteDetail = () => {
  const params = useParams();
  const location = useLocation();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useLocalstorage(getSingleQuote, true);

  const { quoteId } = params;

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
    return <div className="centered focused">{error}</div>;
  }

  if (status === "completed" && !loadedQuote.text) {
    <NoQuotesFound />;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="centered">
              <Link
                className="btn--flat"
                to={`${location.pathname}/your-thought`}
              >
                Load Thoughts
              </Link>
            </div>
          }
        />
      </Routes>
      <Routes>
        <Route path="/your-thought" element={<Comments />} />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;
