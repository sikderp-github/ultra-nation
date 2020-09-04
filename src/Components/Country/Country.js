import React from 'react';

const Country = (props) => {
    const { name, population, region, flag } = props.country;
    const handleAddCountry = props.handleAddCountry;
    // console.log(props.country);
    const flagStyle = { height: '50px' }
    const countryStyle = { border: '2px solid blue', margin: '10px', borderRedius: '20px', padding: '5px' }

    return (
        <div style={countryStyle}>
            <h4>{name} </h4>
            <img style={flagStyle} src={flag} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region} </small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;