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
            img: "https://https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzi0WM51sEEacWAHYe0a5HediW_RGPcVthg&s://m.media-amazon.com/images/I/71lqDylcvGL.jpg://i0.wp.com/kampungilmubojonegoro.or.id/wp-content/uploads/2022/08/cantik-itu-luka.jpg?fit=991%2C991&ssl=1images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9.RI_TTW.jpg", 
        }, 
        { 
            title: "Di Tanah Lada", id: 2, 
            info: 5, 
            genre: "Fiksi", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzi0WM51sEEacWAHYe0a5HediW_RGPcVthg&s://m.media-amazon.com/images/I/71lqDylcvGL.jpg://ihttps://ebooks.gramedia.com/ebook-covers/31754/big_covers/ID_MIZ2016MTH03DDADT_B.jpgmages-nahttps://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1444954928i/27213435.jpg.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9.RI_TTW.jpg", 
        }, 
        { 
            title: "Laskar Pelangi", id: 3, 
            rate: 5, 
            genre: "Fiksi", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzi0WM51sEEacWAHYe0a5HediW_RGPcVthg&s://m.media-amazon.com/images/I/71lqDylcvGL.jpg://images-https://simpus.mkri.id/uploaded_files/sampul_koleksi/original/Monograf//uploadedfiles/perpustakaan/11610-11613.jpg.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9.RI_TTW.jpg", 
        }, 
         
    ]; 
    const data = [ 
        { 
            title: "Dunia Sophie", id: 1, 
            rate: 4, 
            genre: "biografi, filsafat, sejarah", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzi0WM51sEEacWAHYe0a5HediW_RGPcVthg&s://m.media-amazon.com/images/I/71lqDylcvGL.jpg", 
        }, 
        { 
            title: "Bumi Manusia", id: 2, 
            rate: 4, 
            genre: "biografi, drama, sejarah", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzi0WM51sEEacWAHYe0a5HediW_RGPcVthg&s://m.media-amazon.com/images/I/71lqDylcvGL.jpg", 
        }, 
        { 
            title: "Perahu Kertas", id: 3, 
            rate: 4, 
            genre: "fiksi, romansa", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzi0WM51sEEacWAHYe0a5HediW_RGPcVthg&s://m.media-amazon.com/images/I/71lqDylcvGL.jpg", 
        }, 
        { 
            title: "Supernova", id: 4, 
            rate: 4, 
            genre: "fiksi, sains", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzi0WM51sEEacWAHYe0a5HediW_RGPcVthg&s://m.media-amazon.com/images/I/71lqDylcvGL.jpg", 
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