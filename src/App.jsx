
import styles from './App.module.css'
import { Navbar } from './components/NavBar/Navbar'
import { Profile } from './components/profile/Profile'
import { About } from './components/About/About'
import '@fontsource-variable/fira-code'

function App() {
  return (
    <div className={styles.App}>
      <Navbar>

      </Navbar>
      <Profile>

      </Profile>

      <About>
        
      </About>
    </div>
  )
}

export default App
