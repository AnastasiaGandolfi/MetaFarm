import { useState } from 'react';
type ButtonProps = {
  type: string;
  text: string | JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button ({ type, text, onClick }: ButtonProps)  {
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
