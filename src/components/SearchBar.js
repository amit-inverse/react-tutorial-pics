import { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('cars');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // console.log('I need to tell the parent about some data');

        onSubmit(
            // NEVER EVER EVER DO THIS
            document.querySelector('input').value
        );
    };

    const handleChange = (event) => {
        // console.log(event.target.value);

        setTerm(event.target.value.replace(/[a-z]/, ''));
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                Confirm your search: {term}
                <br />
                <input value={term} onChange={handleChange} />
                <br />
                {term.length < 3 && 'Term must be longer'}
            </form>
        </div>
    );
}

export default SearchBar;
