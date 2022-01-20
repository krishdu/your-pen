import { useNavigate } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const navigate = useNavigate();

    const addQuoteHandler = (data) => {
        console.log(data);

        navigate('/quotes');
    };

    return <QuoteForm onAddQuote={addQuoteHandler}/>;
};

export default NewQuote;