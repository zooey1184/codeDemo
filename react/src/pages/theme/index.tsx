import React, {useState} from 'react'
import { ThemeContext, themes } from '../../components/context/theme';
import TabBar from './tabBar';

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