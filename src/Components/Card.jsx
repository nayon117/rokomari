import PropTypes from "prop-types";

const Card = ({ book,handleSelected }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 py-2">
        <figure>
          <img src={book.bookImg} alt="books" />
        </figure>
        <div className="card-body mx-auto">
          <h2 className="card-title">{book.bookTitle}</h2>
          <h2 className="card-title">{book.bookAuthor}</h2>
          <h2 className="card-title mx-auto">Price: {book.bookPrice} Tk</h2>
          
          <div className="card-actions justify-center">
            <button onClick={()=>{handleSelected(book)}} className="btn btn-outline btn-secondary">select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
    book: PropTypes.array,
    handleSelected:PropTypes.func
};

export default Card;
