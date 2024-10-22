import React from 'react';
import { useParams } from 'react-router-dom';
import './BookDetail.css';

export default function BookDetail() {
  const { id } = useParams(); // Getting the Book ID from the URL

  // Sample Book data for demonstration
  const Books = [
    {
        title: "Cantik Itu Luka", id: 1, 
        rate: 5, 
        genre: "Fiksi", 
        img: "https://https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzi0WM51sEEacWAHYe0a5HediW_RGPcVthg&s://m.media-amazon.com/images/I/71lqDylcvGL.jpg://i0.wp.com/kampungilmubojonegoro.or.id/wp-content/uploads/2022/08/cantik-itu-luka.jpg?fit=991%2C991&ssl=1images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9.RI_TTW.jpg", 
         Desc : "Buku menceritakan tentang sejarah Indonesia"
    }, 
    { 
        title: "Di Tanah Lada", id: 2, 
        rate: 5, 
        Desc : "Buku menceritakan tentang sejarah Indonesia",
        genre: "Fiksi", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzi0WM51sEEacWAHYe0a5HediW_RGPcVthg&s://m.media-amazon.com/images/I/71lqDylcvGL.jpg://ihttps://ebooks.gramedia.com/ebook-covers/31754/big_covers/ID_MIZ2016MTH03DDADT_B.jpgmages-nahttps://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1444954928i/27213435.jpg.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9.RI_TTW.jpg", 
         Desc : "Buku menceritakan tentang sejarah Indonesia"
    }, 
    { 
        title: "Laskar Pelangi", id: 3, 
        rate: 5, 
        Desc : "Buku menceritakan tentang sejarah Indonesia",
        genre: "Fiksi", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzi0WM51sEEacWAHYe0a5HediW_RGPcVthg&s://m.media-amazon.com/images/I/71lqDylcvGL.jpg://images-https://simpus.mkri.id/uploaded_files/sampul_koleksi/original/Monograf//uploadedfiles/perpustakaan/11610-11613.jpg.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9.RI_TTW.jpg", 
         Desc : "Buku menceritakan tentang sejarah Indonesia"
    }, 
  ];

  const Book = Books.find(g => g.id === parseInt(id));

  if (!Book) {
    return <div className="Book-detail-container">Book not found.</div>;
  }

  return (
    <div className="Book-detail-container">
      <div className="Book-detail-card">
        <img src={Book.img} alt={Book.title} className="Book-image" />
        <div className="Book-info">
          <h2>{Book.title}</h2>
          <p className="Book-genre">Genre: {Book.genre}</p>
          <p className="Book-rate">Rating: {Book.rate} / 5</p>
          <p className="Book-description">{Book.description}</p>
        </div>
      </div>
    </div>
  );
}