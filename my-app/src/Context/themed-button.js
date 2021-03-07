import {ThemeContext} from './theme-context';
import React from 'react';

class ThemedButton extends React.Component {
    render() {
        return(
            <ThemeContext.Consumer>
                {({theme, toogleTheme}) => (
                    <button 
                        onClick={toogleTheme}
                        style={{backgroundColor: theme.background}}>
                            Toogle Theme
                        </button>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default ThemedButton;