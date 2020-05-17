import React, {Component} from "react";
import "./RiddleButton.css";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class RiddleButton extends Component {

    state = {
        triesLeft: 3,
        blocked: false,
        blockedAt: null,
        blockedSecondsLeft: 0,
        checking: false
    };

    componentDidMount() {
        axios.get('/status')
            .then(response => {
                console.log('GET /status:');
                console.log(response);
                this.setState({
                    triesLeft: response.data.triesLeft,
                    blocked: response.data.blocked,
                    blockedAt: response.data.blockedAt ? new Date(response.data.blockedAt) : null
                });
            });
        setInterval(this.tick, 1000);
    }

    tick = () => {
        if (this.state.blockedAt) {
            const leftSeconds = 10 - Math.floor((new Date().getTime() - this.state.blockedAt.getTime()) / 1000);

            if (leftSeconds <= 0) {
                this.setState({blocked: false, blockedSecondsLeft: 0, blockedAt: null, triesLeft: 3});
            } else {
                this.setState({blockedSecondsLeft: leftSeconds});
            }
        }
    };

    checkResultHandler = () => {
        this.setState({checking: true});
        const data = {riddle: this.props.location.pathname, solution: this.props.solution};
        axios.post('/check', data)
            .then(response => {
                console.log(response);
                this.setState({
                    triesLeft: response.data.triesLeft,
                    blocked: response.data.blocked,
                    blockedAt: response.data.blockedAt ? new Date(response.data.blockedAt) : null
                });
                if (response.data.success) {
                    this.props.history.push(response.data.url);
                }
            });
    };

    render() {
        return (
            <div className="RiddleButton">
                {
                    this.state.blocked ? (<p>Pozostało {this.state.blockedSecondsLeft}s blokady</p>) : (
                    <div>
                        <button onClick={this.checkResultHandler}>Sprawdź</button>
                        <p>Pozostałe próby przed blokadą: {this.state.triesLeft}</p>
                    </div>
                )}
            </div>
        )
    }
}

export default withRouter(RiddleButton);
