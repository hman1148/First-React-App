// import { Component } from "react";

import './card.styles.css'

const Card = ({monster}) => {
    // we destructure the monster prop that we get from our cardlist file which is a prop that comes from the app.jsn
    const {id, name, email} = monster;
    return (
    <div className="card-container">
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>  
    )  
    
}
export default Card;

// class Card extends Component {

//     render() {
//         const {id, name, email} = this.props.monster;

//         return(
//             <div className="card-container" key={id}>
//             {/* We are grabbing the monsters photo from an api and including the monsters id value in the href */}
//                 <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }
// export default Card;
