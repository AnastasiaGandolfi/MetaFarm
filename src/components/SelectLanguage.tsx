import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { name: 'Español', prefix: 'es' },
  { name: 'English', prefix: 'en' },
  { name: 'Italiano', prefix: 'it' },
  { name: 'Русский', prefix: 'ru' },
  { name: 'Українська', prefix: 'ua' },
  { name: 'Veneto', prefix: 'veneto' },
  // Add more languages as needed
];

const BoxDiv: React.FC<{}> = () => {
  const { t, i18n } = useTranslation(); // Access the translation functions

  const [show, setShow] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLanguageSelect = (languagePrefix: string) => {
    i18n.changeLanguage(languagePrefix); // Switch the language
    setCurrentLanguage(languagePrefix);
    setShow(false);
  };

  return (
    <div>
      {!show && (
        <button className="language-button" onClick={handleShow}>
          {currentLanguage.toUpperCase()}
        </button>
      )}
      {show && (
        <>
          <button className="language-button" onClick={handleShow}>
            {currentLanguage.toUpperCase()}
          </button>
          <div className="backdrop"></div>
          <div className="select-language-modal">
            <div className="box-select-language">
              <div className="title-select-language">{t("selectLanguage.title")}</div>
              <svg
                onClick={handleClose}
                width="24"
                height="24"
                className="close-icon"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.0001 16.0001L4.00008 28.0001L3.29297 27.293L15.293 15.293L4.00007 4.00008L4.70718 3.29297L16.0001 14.5859L27.293 3.29297L28.0001 4.00008L16.7072 15.293L28.7072 27.293L28.0001 28.0001L16.0001 16.0001Z"
                  fill="#000"
                ></path>
              </svg>
              <ul className="select-language">
                {languages.map((language, index) => (
                  <li
                    key={index}
                    onClick={() => handleLanguageSelect(language.prefix)}
                  >
                    {language.name}
                  </li>
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
