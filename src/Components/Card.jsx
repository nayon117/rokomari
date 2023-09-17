import PropTypes from "prop-types";

const Card = ({ book }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 py-2">
        <figure>
          <img src={book.bookImg} alt="books" />
        </figure>
        <div className="card-body mx-auto">
          <h2 className="card-title">{book.bookTitle}</h2>
          <h2 className="card-title">{book.bookAuthor}</h2>
          <h2 className="card-title mx-auto">Price: {book.bookPrice} tk</h2>
          
          <div className="card-actions justify-center">
            <button className="btn btn-primary">select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  book: PropTypes.array,
};

export default Card;
