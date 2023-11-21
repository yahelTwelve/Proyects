const QuoteBox = ({quote, handleChangeQuote}) => {
   
    const {phrase, author} = quote

    return (
        <article className="quoteBox">
            <h1 className="quoteBox__title">INFOGALAXI</h1>
            
            <div className="quoteBox__phrase-container">
              <p className="quoteBox__phrase">{phrase}</p>  
            </div>
            <button onClick={handleChangeQuote} className="quoteBox__button"><img src="/img/Vector.svg" alt="" /></button>
            <span className="quoteBox__author">Fuente: {author}</span>
            
        </article>
    );
};

export default QuoteBox;