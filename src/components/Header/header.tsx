import './header.modules.scss'

type HeaderProps ={
  showHidden: boolean,
  onToggle: () => void
}
export const Header = ({showHidden, onToggle}: HeaderProps) => {
  return(
    <div className='header'>
      <label className='label'>
        <input type="checkbox" checked={showHidden} onChange={onToggle} className='checkbox'/>
        Show hidden
      </label>
    </div>
  )
}