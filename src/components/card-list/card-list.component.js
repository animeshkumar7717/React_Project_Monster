// import { Component  } from "react";

import './card-list.style.css'
import Card from "../card/card.component";

// First letter of component is always should be capitalized
// class CardList extends Component {
//     // Component will change, whenver it's props change... when our props changes, our application is re-render again.
//     render() {
//         const { monster } = this.props
//         return (
//             <div className="card-list" >
//                 {monster.map((monsters) => {
//                     return(
//                         <div key={monsters.id}>
//                             <Card monsters={monsters} />
//                         </div>
//                 )
//                 })}
//             </div>
//         )
//     }

// }

const CardList = ({ monster }) => (
    <div className="card-list" >
        {monster.map((monsters) => {
            return(
                <div key={monsters.id}>
                    <Card monsters={monsters} />
                </div>
        )
        })}
    </div>
)

export default CardList;