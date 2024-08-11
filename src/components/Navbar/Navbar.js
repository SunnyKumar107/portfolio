import { useContext, useState } from 'react'
import { FaSun, FaMoon, FaBars, FaClosedCaptioning } from 'react-icons/fa'
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
        {theme === 'dark' ? <FaMoon /> : <FaSun />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <FaClosedCaptioning /> : <FaBars />}
      </button>
    </nav>
  )
}

export default Navbar
