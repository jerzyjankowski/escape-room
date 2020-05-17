import React, {Component} from "react";
import "./Coin.css";


class Coin extends Component {

    state = {
        coinRotate: 0,
        coinRotateStyle: 'rotateY(0deg)',
        currentSideNumber: 0,
    };

    flipCoinHandler = () => {
        const rotation = this.state.coinRotate + 180;
        const rotationStyle = 'rotateY(' + rotation + 'deg)';
        const sideNumber = (this.state.currentSideNumber + 1) % this.props.options.length;
        this.props.changed(sideNumber);
        this.setState({
            coinRotate: rotation,
            coinRotateStyle: rotationStyle,
            currentSideNumber: sideNumber
        })
    };
    render() {
        const sideNumber = this.state.currentSideNumber;
        const previousSideNumber = (sideNumber - 1 + this.props.options.length) % this.props.options.length;
        let sideNumberFront = 0;
        let sideNumberBack = 1;
        if (sideNumber % 2 === 0) {
            [sideNumberFront, sideNumberBack] = [sideNumber, previousSideNumber];
        } else {
            [sideNumberFront, sideNumberBack] = [previousSideNumber, sideNumber];
        }
        const imageFront = this.props.options[sideNumberFront];
        const imageBack = this.props.options[sideNumberBack];

        const sides = (
            <div className="inner" style={{transform: this.state.coinRotateStyle}}>
                <div className="side-front" style={{backgroundImage: `url("/images/${imageFront}")`}}></div>
                <div className="side-back" style={{backgroundImage: `url("/images/${imageBack}")`}}></div>
            </div>
        );
        return (
            <div className='Coin' onClick={this.flipCoinHandler} style={{backgroundImage: this.props.backgroundImage ? `url("/images/${this.props.backgroundImage}")` : "none"}}>
                {sides}
            </div>

        )
    }
}

export default Coin;
