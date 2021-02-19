import React from 'react'

const Image = ({ url, title }) => {
    return (
        <li>
            <img src={`https://image.tmdb.org/t/p/w500${url}`} width="100%" alt={title} />
            {title}
        </li>
    )
}
export default Image