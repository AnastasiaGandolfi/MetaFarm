import React, { useEffect } from 'react'
import useSWR from "swr";
import { useState } from "react";
import { useContext } from "react";
import FilterContext from "./FilterContext"
import { BsFillPatchCheckFill } from 'react-icons/bs'

let allCollections: Object[] = []

export default function Filter(): JSX.Element {
    // @ts-ignore
    const { filterCollections, setFilterCollections } = useContext(FilterContext)

    const [collections, setCollections] = useState([]);

    useEffect(() => {
        fetch('https://metafarm.me/api/getCollections')
            .then(response => response.json())
            .then(data => {
                setCollections(data)
                data.forEach((el: {}) => allCollections.push(el))
                console.log("ciao");
            })
            .catch(error => console.error(error));
    }, []);

    const [inputText, setInputText] = useState("");

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let lowerCase = e.target.value.toLowerCase();
        console.log(lowerCase.length);

        setInputText(e.target.value);
        if (lowerCase.length > 0) {
            // @ts-ignore
            const includedCollections = allCollections.filter((el: { name: string }) =>
                el.name.toLowerCase().includes(lowerCase))
            // @ts-ignore
            setCollections(includedCollections)
        } else {
            // @ts-ignore
            setCollections(allCollections);
            console.log(allCollections);
        }
    }

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const collectionName: string = event.target.value;
        const isChecked: boolean = event.target.checked;

        if (isChecked) {
            // @ts-ignore
            setFilterCollections([...filterCollections, collectionName]);
        } else {
            setFilterCollections(
                filterCollections.filter((name: string) => name !== collectionName)
            );
        }
        console.log(filterCollections)

    };

    return (
        <div className="filter-container">
            <div className="filter-panel-container">
                <div className="filter-panel filter-style" data-scroll-lock-scrollable="true">
                    <div className="filters">
                        <div className="title-row filter-style">
                            <div className="title-container">
                                <div className="title">
                                    Filters</div>
                            </div>
                        </div>
                        <div className="separator">
                        </div>
                        <div className="filter-card filters">
                            <div className="title-row filter-style">
                                <div className="title">Collections</div>
                            </div>
                            <div className="filter-container">
                                <div className="filters">
                                    <div className="search-bar-container">
                                        <div className="search-box filter-style">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.5583 16.8083C13.3884 17.5624 11.9953 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 12.0619 17.5226 13.5122 16.7057 14.7131L20.5607 18.568C21.1464 19.1538 21.1464 20.1036 20.5607 20.6893C19.9749 21.2751 19.0251 21.2751 18.4393 20.6893L14.5607 16.8107C14.5599 16.8099 14.5591 16.8091 14.5583 16.8083Z" fill="#239C82">
                                                </path>
                                            </svg>
                                            <div className="form-field filter-container">
                                                <div className="input-container filter-style">
                                                    <div className="prefix-container">
                                                        <div className="input-field-container filter-style">
                                                            <input className="form-field-input" type="text" placeholder="Search Collections" data-test-id="undefined-input" value={inputText} onChange={inputHandler} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        collections.map((el: { name: string, logo: string }) => {
                                            return (
                                                <label className="checkbox-row collection-row filter-row">
                                                    <div className="title-container">
                                                        <div className="checkbox-wrapper checkbox-container" key={el.name}>
                                                            <input type="checkbox" className="styles-checkbox" id={`collection-${el.name}`}
                                                                value={el.name}
                                                                /* checked={filter.includes(el.id)} */
                                                                onChange={handleCheckboxChange}
                                                            />
                                                        </div>
                                                        <div className="filter-style">
                                                            <img src={el.logo} className="styles-img" />
                                                        </div>
                                                        <div className="collection-name" style={{ wordBreak: "break-all" }}>
                                                            {el.name}</div>
                                                    </div>
                                                    <div className="check-container">
                                                        <span className="icon-card">
                                                            <BsFillPatchCheckFill />
                                                        </span>
                                                    </div>
                                                </label>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="separator">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


