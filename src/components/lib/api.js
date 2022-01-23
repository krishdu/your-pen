import AsyncLocalStorage from '@createnextapp/async-local-storage';
/**
 * return a random string of length 21
 */
const generateRandomString = (length) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export const  getAllQuotes = async () => {
    const transformedQuotes = [];
    const keys = Object.keys(localStorage);
    //ommit all comments
    const keysExcludeComment = keys.filter(id => id.substring(0, 3) !== 'com');
    let i = keysExcludeComment.length;

   while ( i-- ) {
     let data = await AsyncLocalStorage.getItem(keysExcludeComment[i]);

      const quoteObj = {
        id: keysExcludeComment[i],
        ...JSON.parse(data)
      };

      transformedQuotes.push(quoteObj);
    }

  return transformedQuotes;
}

export async function getSingleQuote(quoteId) {
  const response = await AsyncLocalStorage.getItem(quoteId);
  const data = JSON.parse( response );

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
}

export const addQuote = async (quoteData) => {
  const body = JSON.stringify(quoteData);
  let generateRandomKey = generateRandomString(21);
  await AsyncLocalStorage.setItem(generateRandomKey, body);    
  return null;
}

export async function addComment(responseData) {
  const body = responseData.commentData;
  const digit10RandomKey = generateRandomString(10);
  const commentId = `com-${responseData.quoteId}-${digit10RandomKey}`;
  await AsyncLocalStorage.setItem(commentId, body);
  return { commentId };
}

export async function getAllComments(quoteId) {
  const keys = Object.keys(localStorage);
    //ommit all comments
  const keysExcludeQuotes = keys.filter(id => id.substring(0, 3) === 'com');
  const keysExcludeOtherQuotesComment = keysExcludeQuotes.filter(id => id.substring(4, 25) === quoteId);
  let i = keysExcludeOtherQuotesComment.length;

  const transformedComments = [];

  while ( i-- ) {
     let data = await AsyncLocalStorage.getItem(keysExcludeOtherQuotesComment[i]);

      const quoteObj = {
        id: keysExcludeOtherQuotesComment[i],
        data
      };

      transformedComments.push(quoteObj);
    }
    //console.log(transformedComments);
  return transformedComments;
}
