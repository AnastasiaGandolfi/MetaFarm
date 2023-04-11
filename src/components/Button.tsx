import { useState, useRef, useEffect } from 'react';

type ButtonProps = {
  type: string;
  text: string | JSX.Element;
  handle?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button ({ type, text, handle }: ButtonProps)  {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const buttons = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        setActive(false);
      });
    });
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActive(true);
    if(handle){
      handle(event);
    }
    const buttons = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    buttons.forEach(button => {
      if (button !== ref.current) {
        button.classList.remove('active');
      }
    });
  };

  const className = `button ${type} ${active ? 'active' : ''}`;

  return (
    <div>
      <button ref={ref} className={className} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}