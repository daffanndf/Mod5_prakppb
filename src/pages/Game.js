import { Fragment } from "react";
import CardBig from "../component/CardBig"; 
import CardSmall from "../component/CardSmall"; 
import "./Game.css";

export default function Game() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const poster = [
        {
            title: "Mario", id: 1,
            rate: 4,
            genre: "action, crime",
            img: "https://media.wired.com/photos/64efb11c9df01ef1663a0108/1:1/w_997,h_997,c_limit/Super-Mario-Bros.-Wonder-Review-Featured-Games.jpg",
        },
        {
            title: "FF", id: 2,
            rate: 4,
            genre: "action, crime",
            img: "https://cdn0-production-images-kly.akamaized.net/l_aWHGGnMhRkHn9StrlfnUfmu6k=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4058234/original/090110200_1655708618-Logo_Baru_Free_Fire.jpg",
        },
        {
            title: "PUBG", id: 3,
            rate: 4,
            genre: "action, crime",
            img: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/09/17/6c321f96-4bde-42e8-bb93-368f34561968/pubg-theme",
        },
    ];
    
    const data = [
        {
            title: "PUBG", id: 4,
            rate: 4,
            genre: "biography, drama, history",
            img: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/09/17/6c321f96-4bde-42e8-bb93-368f34561968/pubg-theme",
        },
        {
            title: "FF", id: 5,
            rate: 4,
            genre: "biography, drama, history",
            img: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/09/17/6c321f96-4bde-42e8-bb93-368f34561968/pubg-theme",
        },
        {
            title: "FF", id: 6,
            rate: 4,
            genre: "biography, drama, history",
            img: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/09/17/6c321f96-4bde-42e8-bb93-368f34561968/pubg-theme",
        },
        {
            title: "PUBG", id: 7,
            rate: 4,
            genre: "biography, drama, history",
            img: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/09/17/6c321f96-4bde-42e8-bb93-368f34561968/pubg-theme",
        },
        {
            title: "PUBG", id: 8,
            rate: 4,
            genre: "biography, drama, history",
            img: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/09/17/6c321f96-4bde-42e8-bb93-368f34561968/pubg-theme",
        },
        {
            title: "FF", id: 9,
            rate: 4,
            genre: "biography, drama, history",
            img: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/09/17/6c321f96-4bde-42e8-bb93-368f34561968/pubg-theme",
        },
    ];

    return (
        <>
            <p id="Games">Top Games</p>
            <div className="containerTop">
                {poster.map((item) => (
                    <Fragment key={item.id}>
                        <CardBig 
                            title={item.title} 
                            img={item.img} 
                            genre={item.genre} 
                            size={STAR_SIZE} 
                            color={STAR_COLOR} 
                        />
                    </Fragment>
                ))}
            </div>

            <p id="Games">All Games</p>
            <div className="rowcoba">
                {[0, 1].map((columnIndex) => (
                    <div className="column" key={columnIndex}>
                        {data.slice(columnIndex * Math.ceil(data.length / 2), (columnIndex + 1) * Math.ceil(data.length / 2)).map((item) => (
                            <Fragment key={item.id}>
                                <CardSmall 
                                    title={item.title} 
                                    img={item.img} 
                                    genre={item.genre} 
                                    size={STAR_SIZE} 
                                    color={STAR_COLOR} 
                                    onClick={() => alert("Item id = " + item.id)}
                                />
                            </Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}
