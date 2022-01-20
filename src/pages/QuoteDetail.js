
import { Fragment } from "react";
import { Route, Routes, useParams, Link, useLocation} from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Nelson Mandela', text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.' },
  { id: 'q2', author: 'Walt Disney', text: 'The way to get started is to quit talking and begin doing.' },
];

/**
 * responsible for showing a particular Quote and it's behind thpught
 */

const QuoteDetail = () => {
    const params = useParams();
    const location = useLocation();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
  
    if(!quote){
        return <NoQuotesFound />
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Routes>
                <Route path='/' element={
                    <div className='centered'>
                        <Link className='btn--flat' to={`${location.pathname}/your-thought`}>
                            Load Thoughts
                        </Link>
                    </div>
                    }/>
            </Routes>
            <Routes>
                <Route path='/your-thought' element={<Comments />}/>
            </Routes>
        </Fragment>
    );
};

export default QuoteDetail;