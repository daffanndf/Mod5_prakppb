import { Fragment } from "react";
import CardBig from "../component/CardBig";  
import CardSmall from "../component/CardSmall";  
import "./Book.css";

 
export default function Book() { 
    const STAR_COLOR = "rgb(220, 117, 21)"; 
    const STAR_SIZE = 20; 
 
    const poster = [ 
        { 
            title: "Cantik Itu Luka", id: 1, 
            rate: 5, 
            genre: "Fiksi", 
            img: "https://i.pinimg.com/564x/06/1c/92/061c929370956bc5d8736978f039e161.jpg", 
        }, 
        { 
            title: "Di Tanah Lada", id: 2, 
            info: 5, 
            genre: "Fiksi", 
            img: "https://i.pinimg.com/564x/0c/03/ec/0c03ec8cd0c6ab8a6adf0d9d399644c6.jpg", 
        }, 
        { 
            title: "Laskar Pelangi", id: 3, 
            rate: 5, 
            genre: "Fiksi", 
            img: "https://i.pinimg.com/564x/77/b6/32/77b632b825ac2768f5a4d25ee9030158.jpg", 
        }, 
         
    ]; 
    const data = [ 
        { 
            title: "Dunia Sophie", id: 1, 
            rate: 4, 
            genre: "biografi, filsafat, sejarah", 
            img: "https://i.pinimg.com/564x/a0/81/4b/a0814b7e021a0d3c46de19dc2993efee.jpg", 
        }, 
        { 
            title: "Bumi Manusia", id: 2, 
            rate: 4, 
            genre: "biografi, drama, sejarah", 
            img: "https://i.pinimg.com/564x/bb/b7/87/bbb787af3b86bd98789e716ddd6f19bc.jpg", 
        }, 
        { 
            title: "Supernova", id: 3, 
            rate: 4, 
            genre: "fiksi, romansa", 
            img: "https://i.pinimg.com/736x/19/3e/d3/193ed379d4bca5a778b39a686cb6fa4d.jpg", 
        }, 
        { 
            title: "Perahu Kertas", id: 4, 
            rate: 4, 
            genre: "fiksi, sains", 
            img: "https://i.pinimg.com/564x/87/52/a6/8752a6564f7cd986cd99cade35f486cb.jpg", 
        }, 
        { 
            title: "Jejak Langkah", id: 5, 
            rate: 4, 
            genre: "biografi, sejarah", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzi0WM51sEEacWAHYe0a5HediW_RGPcVthg&s://m.media-amazon.com/images/I/71lqDylcvGL.jpg", 
        }, 
        { 
            title: "Dilan: Dia adalah Dilanku Tahun 1990", id: 6, 
            rate: 4, 
            genre: "romansa, remaja", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzi0WM51sEEacWAHYe0a5HediW_RGPcVthg&s://m.media-amazon.com/images/I/71lqDylcvGL.jpg://m.media-https://eBooks.gramedia.com/eBook-covers/31754/big_covers/ID_MIZ2016MTH03DDADT_B.jpg.com/images/I/71lqDylcvGL.jpg", 
        }, 
    ];
    
 
    return ( 
        <> 
            <p id="Books">Top Books</p> 
            <div className="containerTop"> 
                {poster.map((item, index) => ( 
                    <Fragment key={item.id}> 
                        <CardBig title={item.title} img={item.img} 
genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} 
                        /> 
                        {data.length === index + 1 ? ( 
                            <div style={{ marginRight: 40 }} /> 
                        ) : null} 
                    </Fragment> 
                ))} 
            </div> 
            <div className="rowcoba"> 
                <div className="column"> 
                <p id="Books">All Books</p> 
                {data.map((item, index) => ( 
                    <Fragment key={item.id}> 
                         
                        <CardSmall title={item.title} img={item.img} 
genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} 
                            onClick={() => alert("item id = " + 
item.id)} 
                        /> 
                        {data.length === index + 1 && <div style={{ 
marginBottom: 80 }} />} 
                    </Fragment> 
                ))} 
                </div> 
                <div className="column"> 
                <p id="Books">All Books</p> 
                {data.map((item, index) => ( 
                    <Fragment key={item.id}> 
                        <CardSmall title={item.title} img={item.img} 
genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} 
                            onClick={() => alert("item id = " + 
item.id)} 
                        /> 
                        {data.length === index + 1 && <div style={{ 
marginBottom: 80 }} />} 
                    </Fragment> 
                ))} 
                </div> 
            </div> 
        </> 
    ); 
}