import '../assets/style/css/button.css'

export function Button({ type , text}) {
  return (
    <div>
      <button className={type}>{text}</button>
    </div>
  )
}


