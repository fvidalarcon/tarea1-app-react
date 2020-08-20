import React, { useState } from 'react';

const GifSearch = () => {

    const predefinedGifs = ['Dragon Ball', 'Los Simpson', 'Slam Dunk'];

    return(
        <>
        <h1>Gif</h1>  

        <ol>
           {
               predefinedGifs.map(( gif,i) => {
                   return <li key={ gif }> { gif } </li>
               })
           }
        </ol>

        </>
    )
}

GifSearch.displayName = 'GifSearch';
export default GifSearch;