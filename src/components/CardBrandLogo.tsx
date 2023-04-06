export default function CardBrandLogo({name, src}:{name: string, src: string}) {
  return (
    <div className='card-brand-logo-container'>
        <div className='card-logo-container'>
            <img className='logo' src={src} alt="logo" />
        </div>
        <div className='card-text-container'>
            <p className="text-brand">{name}</p>
        </div>
    </div>
  )
}

