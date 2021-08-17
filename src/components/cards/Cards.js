import "../cards/Cards.css";
import { data } from "../../helper/data";

export const Cards = () => {
    return (
        <div className="cards--container">
            {data.map((card) => { //map ile data içine girip, içindeki her birinde card adı verdik, card.title card.image gibi kodlarla aşağıda verilere ulaşacağız
                return (
                <div className="card card--1"> 
                    <h3>{card.title}</h3> 
                    <div className="image">
                        <img src={card.image}/>
                        <p>{card.desc}</p>
                    </div>
                </div>
                )
            })}
        </div> 
    )
}

export default Cards;
