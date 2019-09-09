import React, {useState} from 'react'
import TabBar from './tabBar';
import { themes, ThemeContext } from '../../context/theme';

const Theme: React.FC = ()=> {
  const [theme, setTheme] = useState(themes.light)
  const changeColor = (): void=> {
    setTheme(theme => theme === themes.dark ? themes.light : themes.dark)
  }
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <TabBar></TabBar>
      </ThemeContext.Provider>
      
      <button onClick={changeColor}>change</button>
    </div>
  )
}

export default Theme