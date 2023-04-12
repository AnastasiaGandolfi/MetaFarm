import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import List from './List';

export const InputSearch = () => {
    const [inputText, setInputText] = useState("");
    const [showList, setShowList] = useState(false);

    let inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    const handleClick = () => {
        setShowList(!showList);
    };

    return (
        <div>
            <div className='input-with-icon-container'>
                <div className='input-icon-container '>
                    <FaSearch className='lens-icon' />
                </div>
                <div className='input-container'>
                    <input name='searchBox' className='input-search' type='search' placeholder='Search' onChange={inputHandler} onClick={handleClick} onBlur={handleClick} />
                </div>
            </div>
            {showList && <List input={inputText} />}
        </div>
    )
}
