import UpdateTimer from '../../CustomHooks/UpdateTimer/UpdateTimer'
import { Timer } from '../../utils/Timer/Timer'
import './Header.css'

const Header = () => {
  const time = Timer()
  return (
    <header id='header'>
      <UpdateTimer time={time}></UpdateTimer>
    </header>
  )
}

export default Header
