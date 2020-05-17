import React, {Component} from "react";
import RiddleFour from './../RiddleFour/RiddleFour';
import { Route, Link } from 'react-router-dom';

import './RiddleManager.css';

class RiddleManager extends Component {

    state = {
    };

    render() {
        return (
            <div>
                {/* 3) bold & beautiful, liściki, suma pod fortunami*/}
                <Route path="/zagadka" exact component={RiddleFour}>
                    <RiddleFour
                        coins="4"
                        music="bb_piano.mp3"
                        options={['number-0.png', 'number-1.png', 'number-2.png', 'number-3.png', 'number-4.png', 'number-5.png', 'number-6.png', 'number-7.png', 'number-8.png', 'number-9.png']}
                    />
                </Route>
                {/*4) kolory z naklejek z liścików*/}
                <Route path="/a29sb3J5Cg" exact component={RiddleFour}>
                    <RiddleFour
                        coins="4"
                        image="platon.jpg"
                        options={['color-0.png', 'color-1.png', 'color-2.png', 'color-3.png', 'color-4.png', 'color-5.png', 'color-6.png', 'color-7.png', 'color-8.png', 'color-9.png']}
                    />
                </Route>
                {/*5) dinozaury*/}
                <Route path="/ZGlubwo" exact component={RiddleFour}>
                    <RiddleFour
                        coins="4"
                        image="france.png"
                        options={['dino-0.png', 'dino-1.png', 'dino-2.png', 'dino-3.png', 'dino-4.png', 'dino-5.png']}
                    />
                </Route>
                {/*6) filmy na półce*/}
                <Route path="/ZmlsbQ" exact component={RiddleFour}>
                    <RiddleFour
                        coins="6"
                        image="white.png"
                        options={['movie-0.jpg', 'movie-1.jpg', 'movie-2.jpg', 'movie-3.jpg', 'movie-4.jpg', 'movie-5.jpg']}
                    />
                </Route>
                {/*7) chronologia przyjaciół*/}
                <Route path="/am9leQo" exact component={RiddleFour}>
                    <RiddleFour
                        coins="6"
                        image="friends.jpg"
                        options={['friends-0.png', 'friends-1.png', 'friends-2.png', 'friends-3.png', 'friends-4.png', 'friends-5.png']}
                    />
                </Route>
                {/*9) olejki*/}
                <Route path="/b2xlago" exact component={RiddleFour}>
                    <RiddleFour
                        coins="3"
                        image="gift.jpg"
                        options={['oil-0.png', 'oil-1.png', 'oil-2.png', 'oil-3.png', 'oil-4.png', 'oil-5.png']}
                        backgroundImages={['color-1.png', 'color-2.png', 'color-4.png']}
                    />
                </Route>
                {/*10) kcal ze słodyczy*/}
                <Route path="/a2NhbA" exact component={RiddleFour}>
                    <RiddleFour
                        coins="4"
                        image="riddle-10-message.png"
                        options={['number-0.png', 'number-1.png', 'number-2.png', 'number-3.png', 'number-4.png', 'number-5.png', 'number-6.png', 'number-7.png', 'number-8.png', 'number-9.png']}
                    />
                </Route>
                {/*11) Qt*/}
                <Route path="/UXQ" exact component={RiddleFour}>
                    <RiddleFour
                        coins="0"
                        image="qt.jpg"
                        options={[]}
                    />
                </Route>
            </div>
        )
    }
}

export default RiddleManager;