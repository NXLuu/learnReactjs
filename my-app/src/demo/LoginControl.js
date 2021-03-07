import React from 'react'

function UserGreeting(props) {
    return <h2>Welcome back!</h2>;
}

function GuestGreetinng(props) {
    return <h2>Please sign up.</h2>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    } {
        return <GuestGreetinng />;
    }
}

function LogginButton(prop) {
    return (
        <button onClick={prop.onClick}>
            Login 
        </button>
    )
}

function LogoutButton(prop) {
    return (
        <button onClick={prop.onClick}>
            Logout 
        </button>
    )
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        let button;
        const isLogginIn = this.state.isLoggedIn;
        console.log(this.state.isLogginIn);
        if (!isLogginIn) {
            button = <LogginButton onClick={this.handleLoginClick} />
        } else {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        }

        return (
            <div>
                <Greeting isLoggedIn={isLogginIn} />
                {button}
            </div>
        );
    }
}
export default LoginControl;