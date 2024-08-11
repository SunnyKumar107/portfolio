import Header from './components/Header/Header'
import './App.css'
import { useState } from 'react'
import { ThemeContext } from './contexts/theme'

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id='top' className={`app ${theme}`}>
        <Header />

        {/* <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer /> */}
      </div>
    </ThemeContext.Provider>
  )
}

export default App
