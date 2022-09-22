import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useLocalstorage from "../components/hooks/use-localstorage";
import { addQuote } from "../components/lib/api";
import { useEffect } from "react";

const NewQuote = () => {
  const navigate = useNavigate();
  const { sendRequest, status } = useLocalstorage(addQuote);

  useEffect(() => {
    if (status === "completed") {
      navigate("/your-pen/quotes");
    }
  }, [status, navigate]);

  const addQuoteHandler = (data) => {
    sendRequest(data);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
