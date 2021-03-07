import {ThemeContext, themes} from './theme-context';
import React from 'react';
import ThemedButton from './themed-button';

function Toolbar() {
    return(
        <ThemedButton>
            Change Theme
        </ThemedButton>
    );
}

class AppContext extends React.Component {
    constructor(props) {
        super(props);
        this.toogleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme ===  themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        }

        this.state = {
            theme: themes.dark,
            toogleTheme: this.toogleTheme,
        }
    }

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state} >
                    <Toolbar changeTheme={this.toogleTheme} />
                    <div>
                        <ThemedButton />
                    </div>
                </ThemeContext.Provider>
            </div>
        );
    }
}

function Content() {
    return (
        <div></div>
    );
}
export default AppContext;
