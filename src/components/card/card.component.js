// import { Component } from "react";

import './card.style.css'

// class Card extends Component {
//     render() {
//         const { name, id, email } = this.props.monsters;
//             return(
//                 <div className="card-container" key={id} >
//                     <img alt={`monster: ${name}`} 
//                     src={`https://robohash.org/${id}`}
//                     />
//                     <h2>{name}</h2>
//                     <p>{email}</p>
//                 </div>
//             )
//     }
// }

const Card = ({ monsters: { name, id, email } }) => (
    <div className="card-container" key={id} >
        <img alt={`monster: ${name}`} 
        src={`https://robohash.org/${id}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
)

export default Card;
