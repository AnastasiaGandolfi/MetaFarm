import { useState } from 'react';
import '../assets/style/css/button.css';

export function Button({ type, text }) {
  const [style, setStyle] = useState({});

  const handleClick = () => {
    if (type === 'pill-one') {
      setStyle((style) => ({
        backgroundColor: style.backgroundColor === '#dbf0ec' ? '#239c82' : '#dbf0ec',
        color: style.backgroundColor === '#dbf0ec' ? 'white' : '#239c82'
      }));
    }
  };

  return (
    <div>
      <button className={type} style={style} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}
