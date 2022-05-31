import { Component } from "react";
import Card from "../card/card.components";

import './card-list.styles.css'

class CardList extends Component {
    render() {
        // grab the monsters from the props aka the attribute in <Cardlist/> in app.js
        const { monster } = this.props;
        console.log(monster);
        return (
            <div className="card-list">
                {monster.map((monster) => {
                    
                return (
                   <Card monster = {monster}/>
                )})}
            </div>
        );
    }
}

export default CardList;