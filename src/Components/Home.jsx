 import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
import Cart from './Cart';

const Home = () => {
    const [books, setBooks] = useState([])
    const [selectedBooks, setSelectedBooks] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setBooks(data))
        
    }, [])
    
    const handleSelected = (book) => {
        let price = book.bookPrice;
        selectedBooks.forEach(item => {
            price = price + item.bookPrice
        })
        setTotalPrice(price)
         setSelectedBooks([...selectedBooks,book])
    }
    return (
        <div className='flex flex-col md:flex-row gap-4'>
            {/* card section  */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    books.map((book, idx) => <Card
                        key={idx}
                        book={book}
                        handleSelected={handleSelected}
                    ></Card>)
                }
            </div>

            {/* cart section  */}
            <div>
                <Cart
                    selectedBooks={selectedBooks}
                    totalPrice={totalPrice}
                ></Cart>
            </div>
        </div>
    );
};

Home.propTypes = {
    Home:PropTypes.func
};

export default Home;