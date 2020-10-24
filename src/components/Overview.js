
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Overview = ({ setLista }) => {


    const [campo, setCampo] = useState('');

    const handleChange = (e) => {
        setCampo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (campo.trim().length === 0) {
            alert("Fail");
        } else {
            setLista(arr => [...arr, campo]);
            setCampo("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={campo}
                onChange={handleChange}
            />
        </form>
    );
};

Overview.prototype = {
    setLista: PropTypes.func.isRequired
}

export default Overview;