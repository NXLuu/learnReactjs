import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContext from './Context/app'
import MyComponent from'./Refs/Refs'
function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        alert("The link was clicked.");
    }
    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    );
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
        )
    }
}
function ListItem(props) {
    const value = props.value;
    return (
        <li>
            {value}
        </li>
    )

}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) => <ListItem value={number} key={index} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A new was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


function BoiloingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 32;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(temperature);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''}
    }

    handleChange(e) {
        this.props.onTemperature(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>
                    Enter temperature in {scaleNames[scale]}:
                </legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

const scaleNames = {
    f:'Fahrenheit',
    c:'Celsius'
};

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale:'c'};
    }

    handleCelsiusChange(temperature) {
        this.setState({scale:'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale:'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;

        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return(
            <div>
                <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperature={this.handleCelsiusChange} />

                <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperature={this.handleFahrenheitChange} />
                <BoiloingVerdict 
                celsius={parseFloat(celsius)} />
            </div>

        );
    }

}

// 10. Fancyborder
function Fancyborder(props) {
    return(
        <div className={'FancyBorder FancyBorden-' + props.color}> 
            {props.children}
        </div>
    );
}

function WelcomDialog() {
    return(
        <Fancyborder color="blue" >
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </Fancyborder>

    );
}

ReactDOM.render(
    <MyComponent />,
    document.getElementById('root')
)

