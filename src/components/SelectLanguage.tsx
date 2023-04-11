import React from 'react';

const languages: string[] = [
  'Bahasa Indonesia',
  'Español',
  'Italiano',
  'Polski',
  'Română',
  'Türkçe',
  'Dansk',
  'Français',
  '한국어',
  'Português',
  'Svenska',
  '繁體中文',
  'English',
  'हिन्दी',
  'Magyar',
  'Русский',
  'Tiếng Việt'
];

const BoxDiv: React.FC<{}> = () => {
  return (
    <div className="box-select-language">
          <div className="title-select-language ">Seleziona la lingua</div>
          <svg width="24" height="24" className="close-icon" viewBox="0 0 32 32" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0001 16.0001L4.00008 28.0001L3.29297 27.293L15.293 15.293L4.00007 4.00008L4.70718 3.29297L16.0001 14.5859L27.293 3.29297L28.0001 4.00008L16.7072 15.293L28.7072 27.293L28.0001 28.0001L16.0001 16.0001Z" fill="#000"></path>
            </svg>
      <ul className='select-language'>
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </div>
  );
};

export default BoxDiv;