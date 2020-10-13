import React, { useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';

const GifSearch = () => {


    const [predefinedGifs, setPredefinedGifs] = useState(['Dragon Ball', 'Los Simpson', 'Slam Dunk']);

    const handleAdd = () => {
        setPredefinedGifs( ['SamuraiX', ...predefinedGifs] );

    }

    return(
        <>

        <ToggleButton onClick={ handleAdd }> Add</ToggleButton>


        <ol>
           {
               predefinedGifs.map( gif => {
                   return <li key={ gif }> { gif } </li>
               })
           }
        </ol>

        </>
    )
}

GifSearch.displayName = 'GifSearch';
export default GifSearch;