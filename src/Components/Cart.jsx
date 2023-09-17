 
import PropTypes from 'prop-types';

const Cart = ({ selectedBooks,totalPrice }) => {
    let count = 0
    return (
        <div>
           <h2 className='text-3xl md:text-xl lg:text-3xl font-bold py-3'>Selected Books</h2>
            {
            
                selectedBooks.map((book, idx) => {
                    count++
                    return (
                        <div className='font-bold' key={idx}>{count} {book.bookTitle}</div>
                    )
                })
            }
            
            <p className='text-3xl md:text-xl lg:text-3xl font-bold pt-10'>Total Price: {totalPrice} Tk</p>
        </div>
    );
};

Cart.propTypes = {
    selectedBooks: PropTypes.array,
    totalPrice:PropTypes.number.isRequired
};

export default Cart;