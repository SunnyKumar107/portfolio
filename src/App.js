import Header from './components/Header/Header'
import './App.css'
import { useState } from 'react'
import { ThemeContext } from './contexts/theme'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id='top' className={`app ${theme}`}>
        <Header />

        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
