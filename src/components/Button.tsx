import { useState } from 'react';

export function Button({ type, text }: { type: string, text: string | JSX.Element }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const className = `button ${type} ${active ? 'active' : ''}`;

  return (
    <div>
      <button className={className} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}
