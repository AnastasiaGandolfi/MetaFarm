import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'

export default function Filter() {
    const elements = [
        {
            name: "Azuki",
            logo: "https://media.nft.crypto.com/75c36624-6eb1-487f-aa5a-1de8c3b71538/original.jpeg",
        },
        {
            name: "Bored Ape Yacht Club",
            logo: "https://media.nft.crypto.com/77ffeae9-9666-4da9-9386-a87b73c2b6d7/original.png",
        },
        {
            name: "Otherdeed for Otherside",
            logo: "https://media.nft.crypto.com/5d705f0f-8553-41cc-babb-973e96dc86d8/original.jpeg",
        },
        {
            name: "BEANZ Official",
            logo: "https://media.nft.crypto.com/20ffa91a-45e3-4235-bc8e-4a72adf9d039/original.png",
        },
        {
            name: "Mutant Ape Yacht Club",
            logo: "https://media.nft.crypto.com/6b32b537-c7a7-4820-a640-e39576aa8508/original.png",
        },
        {
            name: "Doodles",
            logo: "https://media.nft.crypto.com/ad95ecc9-6d0a-4a97-bf21-2e1cf9747a93/original.jpeg",
        },
        {
            name: "Mutant Ape Yacht Club",
            logo: "https://media.nft.crypto.com/6b32b537-c7a7-4820-a640-e39576aa8508/original.png",
        },
        {
            name: "Mutant Ape Yacht Club",
            logo: "https://media.nft.crypto.com/6b32b537-c7a7-4820-a640-e39576aa8508/original.png",
        },
    ];

    return (
        <div>
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
                                                                <input className="form-field-input" type="text" placeholder="Search Collections" data-test-id="undefined-input" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            elements.map((el) => {
                                                return (
                                                    <label className="checkbox-row collection-row filter-row">
                                                        <div className="title-container">
                                                            <div className="checkbox-wrapper checkbox-container">
                                                                <input type="checkbox" className="styles-checkbox" />
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
        </div>
    )
}


