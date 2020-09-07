import React from 'react'


const Pagination = (props) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(props.totalListings / props.listingsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div class="ui pagination menu">
            {pageNumbers.map(number => (
                <a onClick={() => props.paginate(number)} class="item">
                    {number}
                </a>
            ))}
        </div>
    )
}

export default Pagination
