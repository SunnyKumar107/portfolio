import Header from './components/Header/Header'
import './App.css'
import { useState } from 'react'
import { ThemeContext } from './contexts/theme'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id='top' className={`app ${theme}`}>
        <Header />

        <main>
          <About />
          <Projects />
        </main>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
