import React  from 'react';

function Card({data}) {
    return (
        <div className='card'>
            <h2>Name:{data.name}</h2>
            <p>Email:{data.email}</p>
            <p>Destination:{data.destination}</p>
            <p>No. of Persons:{data.travelNumber}</p>
            <p>Budget:{data.budget}</p>
        </div>
    )
}



export default Card