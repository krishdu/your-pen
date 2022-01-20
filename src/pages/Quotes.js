import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Nelson Mandela', text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.' },
  { id: 'q2', author: 'Walt Disney', text: 'The way to get started is to quit talking and begin doing.' },
];

const Quotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default Quotes;