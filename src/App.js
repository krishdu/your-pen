import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/your-pen/" element={<Navigate to="/quotes" />} />
        <Route path="/-pen/quotes" element={<Quotes />} />
        <Route path="/-pen/quotes/:quoteId/*" element={<QuoteDetail />} />
        <Route path="/your-pen/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
