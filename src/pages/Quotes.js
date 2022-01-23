import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useLocalstorage from '../components/hooks/use-localstorage';
import { getAllQuotes } from '../components/lib/api';
import { useEffect } from 'react';


const Quotes = () => {
    const {sendRequest, status, data: loadedQuotes, error} = useLocalstorage(getAllQuotes, true);

    useEffect(() => {
      sendRequest();
    }, [sendRequest]);

    if(status === 'pending'){
      return <div className='centered'>
          <LoadingSpinner />
      </div>
    }

    if(error){
      return <div className='centered focused'>
          {error}
      </div>
    }

    if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)){
      <NoQuotesFound />
    }

    return <QuoteList quotes={loadedQuotes} />;
};

export default Quotes;