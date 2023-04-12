import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

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

const BoxDiv = () => {
  const [show, setShow] = useState(false);
  const [prefix, setPrefix] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLanguageSelect = (prefix: string) => {
    setPrefix(prefix);
    setShow(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow} style ={{backgroundColor : "#239C82", border:"none"}}>
        {prefix ? prefix : 'EN'}
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <div className ="title-select-language">
        Seleziona la lingua
        </div>
          <div className="box-select-language">
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
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BoxDiv;
