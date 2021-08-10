import "../cards/Cards.css";
import { data } from "../../helper/data";

export const Cards = () => {
    return (
        <div className="cards--container">
            <div className="card card--1"> 
                <h3>{data[0].title}</h3>
                <div className="image">
                    <img src={data[0].image}/>
                    <p>{data[0].desc}</p>
                </div>
            </div>
            <div className="card card--2"> 
                <h3>{data[1].title}</h3>
                <div className="image">
                    <img src={data[1].image}/>
                    <p>{data[1].desc}</p>
                </div>
            </div>
            <div className="card card--3"> 
                <h3>{data[2].title}</h3>
                <div className="image">
                    <img src={data[2].image}/>
                    <p>{data[2].desc}</p>
                </div>
            </div>
            <div className="card card--4"> 
                <h3>{data[3].title}</h3>
                <div className="image">
                    <img src={data[3].image}/>
                    <p>{data[3].desc}</p>
                </div>
            </div>
            <div className="card card--5"> 
                <h3>{data[4].title}</h3>
                <div className="image">
                    <img src={data[4].image}/>
                    <p>{data[4].desc}</p>
                </div> 
                </div>
            <div className="card card--6"> 
                <h3>{data[5].title}</h3>
                <div className="image">
                    <img src={data[5].image}/>
                    <p>{data[5].desc}</p>
                </div> 
            </div>
            <div className="card card--7"> 
                <h3>{data[6].title}</h3>
                <div className="image">
                    <img src={data[6].image}/>
                    <p>{data[6].desc}</p>
                </div> 
            </div>
            <div className="card card--8"> 
                <h3>{data[7].title}</h3>
                <div className="image">
                    <img src={data[7].image}/>
                    <p>{data[7].desc}</p>
                </div> 
            </div>
            <div className="card card--9"> 
                <h3>{data[8].title}</h3>
                <div className="image">
                    <img src={data[8].image}/>
                    <p>{data[8].desc}</p>
                </div> 
            </div>
            <div className="card card--10">
                <h3>{data[9].title}</h3>
                <div className="image">
                    <img src={data[9].image}/>
                    <p>{data[9].desc}</p>
                </div>  
            </div>
            <div className="card card--11">
                <h3>{data[10].title}</h3>
                <div className="image">
                    <img src={data[10].image}/>
                    <p>{data[10].desc}</p>
                </div> 
            </div>
            <div className="card card--12">
                <h3>{data[11].title}</h3>
                <div className="image">
                    <img src={data[11].image}/>
                    <p>{data[11].desc}</p>
                </div> 
            </div>
        </div>
    )
}

export default Cards;
