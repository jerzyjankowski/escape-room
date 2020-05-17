import React, {Component} from "react";
import Coin from "../../components/Coin/Coin";
import RiddleButton from "../../components/RiddleButton/RiddleButton";


class RiddleFour extends Component {

    state = {
        solution: [0, 0, 0, 0]
    };

    constructor(props) {
        super(props);

    }

    coinChangedHandler = (index, sideNumber) => {
        const solution = this.state.solution.slice();
        solution[index] = sideNumber;
        this.setState({solution: solution});
    };

    render() {
        const coins = [];
        for (let i = 0; i < this.props.coins; i++) {
            const backgroundImage = this.props.backgroundImages && this.props.backgroundImages[i] ? this.props.backgroundImages[i] : null;
            coins.push(<Coin options={this.props.options} backgroundImage={backgroundImage} changed={(sideNumber) => this.coinChangedHandler(i, sideNumber)}/>);
        }
        return (
            <div className="Riddle">
                {
                    this.props.music &&
                    <div>
                        <audio controls>
                            <source src={`/music/${this.props.music}`} type="audio/mpeg"/>
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                }
                {
                    this.props.image &&
                    <div>
                        <img style={{maxHeight: '240px', borderRadius: '12px'}} src={`/images/${this.props.image}`}/>
                    </div>
                }
                <div className="coins">
                    {coins}
                </div>
                {
                    this.props.coins > 0 &&
                    <RiddleButton solution={this.state.solution}/>
                }
            </div>
        )
    }
}

export default RiddleFour;
