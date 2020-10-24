
import React from 'react';

const Overview = ({ tasks }) => {

    return (
        <ul>
            {
                tasks.map((tarea) => {
                    return <li key={tarea}>{tarea}</li>
                })
            }
        </ul>
    );
};

export default Overview;
