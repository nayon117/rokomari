 
import PropTypes from 'prop-types';

const Cart = ({ selectedBooks,totalPrice }) => {
    let count = 0
    return (
        <div>
           <h2 className='text-3xl md:text-xl lg:text-2xl font-bold py-3 whitespace-nowrap'>Selected Books</h2>
            {
            
                selectedBooks.map((book, idx) => {
                    count++
                    return (
                        <div className='font-bold whitespace-nowrap' key={idx}>{count}. {book.bookTitle}</div>
                    )
                })
            }
            
            <p className='text-3xl md:text-xl lg:text-2xl font-bold pt-10 whitespace-nowrap'>Total Price: {totalPrice} Tk</p>
        </div>
    );
};

Cart.propTypes = {
    selectedBooks: PropTypes.array,
    totalPrice:PropTypes.number.isRequired
};

export default Cart;