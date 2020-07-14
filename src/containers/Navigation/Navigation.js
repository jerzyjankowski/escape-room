import React, {Component} from "react";
import {Link} from "react-router-dom";


class Navigation extends Component {

    render() {
        return (
            <div>
                <div><Link to={'/zagadka'}>zagadka 01</Link></div>
                <div><Link to={'/a29sb3J5Cg'}>zagadka 02</Link></div>
                <div><Link to={'/ZGlubwo'}>zagadka 03</Link></div>
                <div><Link to={'/ZmlsbQ'}>zagadka 04</Link></div>
                <div><Link to={'/am9leQo'}>zagadka 05</Link></div>
                <div><Link to={'/ZmlsbTA'}>zagadka 06</Link></div>
                <div><Link to={'/ZmlsbTE'}>zagadka 07</Link></div>
                <div><Link to={'/ZmlsbTI'}>zagadka 08</Link></div>
                <div><Link to={'/ZmlsbTM'}>zagadka 09</Link></div>
                <div><Link to={'/b2xlago'}>zagadka 10</Link></div>
                <div><Link to={'/a2NhbA'}>zagadka 11</Link></div>
                <div><Link to={'/UXQ'}>KONIEC</Link></div>
            </div>
        )
    }
}

export default Navigation;
