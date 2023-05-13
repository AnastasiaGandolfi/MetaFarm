import React, { useState } from "react";

const languages = [
  { name: 'Bahasa Indonesia', prefix: 'ID' },
  { name: 'Español', prefix: 'ES' },
  { name: 'Italiano', prefix: 'IT' },
  { name: 'Polski', prefix: 'PL' },
  { name: 'Română', prefix: 'RO' },
  { name: 'Türkçe', prefix: 'TR' },
  { name: 'Dansk', prefix: 'DA' },
  { name: 'Français', prefix: 'FR' },
  { name: '한국어', prefix: 'KO' },
  { name: 'Português', prefix: 'PT' },
  { name: 'Svenska', prefix: 'SV' },
  { name: '繁體中文', prefix: 'ZH' },
  { name: 'English', prefix: 'EN' },
  { name: 'हिन्दी', prefix: 'HI' },
  { name: 'Magyar', prefix: 'HU' },
  { name: 'Русский', prefix: 'RU' },
  { name: 'Tiếng Việt', prefix: 'VI' },
];

const BoxDiv: React.FC<{}> = () => {
  const [show, setShow] = useState(false);
  const [prefix, setPrefix] = useState('EN');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLanguageSelect = (prefix: string) => {
    setPrefix(prefix);
    setShow(false);
  };
  return (
    <div>
      {!show && <>
        <button className="language-button" onClick={handleShow}>{prefix}</button>
      </>}
      {show && (
        <>
          <button className="language-button" onClick={handleShow}>{prefix}</button>
          <div className="backdrop"></div>
          <div className="select-language-modal">
            <div className="box-select-language">
              <div className="title-select-language ">Select language</div>
              <svg onClick={handleClose}
                width="24"
                height="24"
                className="close-icon"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.0001 16.0001L4.00008 28.0001L3.29297 27.293L15.293 15.293L4.00007 4.00008L4.70718 3.29297L16.0001 14.5859L27.293 3.29297L28.0001 4.00008L16.7072 15.293L28.7072 27.293L28.0001 28.0001L16.0001 16.0001Z"
                  fill="#000"
                ></path>
              </svg>
              <ul className="select-language">
                {languages.map((language, index) => (
                  <li key={index} onClick={() => handleLanguageSelect(language.prefix)}>{language.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BoxDiv;
