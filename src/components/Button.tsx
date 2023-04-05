import { useState } from 'react';


export function Button({ type, text }:{type: string, text: string|JSX.Element}) {
  const [style, setStyle]:[React.CSSProperties, any] = useState({});

  const handleClick = () => {
    if (type === 'pill-one') {
      setStyle((style:React.CSSProperties) => ({
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
