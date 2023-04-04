import { useState } from 'react';

export function Button({ type, text }) {
  const [style, setStyle] = useState({});

  const handleClick = () => {
    if (type === 'pill-one') {
      setStyle((style) => ({
        backgroundColor: style.backgroundColor === '$pastel-green' ? '$darkgreen' : '$pastel-green',
        color: style.backgroundColor === '$pastel-green' ? 'white' : '$darkgreen'
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
