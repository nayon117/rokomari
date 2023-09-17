 import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';

const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setBooks(data))
        
    },[])
    return (
        <div className='flex flex-col md:flex-row gap-4'>
            {/* card section  */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    books.map((book, idx) => <Card
                        key={idx}
                        book={book}
                    ></Card>)
                }
            </div>

            {/* cart section  */}
            <div>

            </div>
        </div>
    );
};

Home.propTypes = {
    Home:PropTypes.func
};

export default Home;