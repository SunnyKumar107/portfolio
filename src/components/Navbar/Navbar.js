import { useContext, useState } from 'react'
import { FaMoon, FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { MdSunny } from 'react-icons/md'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'
import { ThemeContext } from '../../contexts/theme'

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {theme === 'dark' ? <FaMoon size={22} /> : <MdSunny size={30} />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <IoClose size={24} /> : <FaBars size={24} />}
      </button>
    </nav>
  )
}

export default Navbar
