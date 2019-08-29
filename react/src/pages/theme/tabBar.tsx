import React from 'react';
import { ThemeContext } from '../../components/context/theme';

const TabBar: React.FC = (props)=> {
  return (
    <div>
      <ThemeContext.Consumer>
        {theme => (
          <button
            {...props}
            style={
              {
                backgroundColor: theme.background, 
                color: theme.foreground
              }
            }
          >color</button>

        )}
      </ThemeContext.Consumer>
    </div>
  )
}

export default TabBar