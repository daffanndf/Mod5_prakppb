import React from 'react';
import { useParams } from 'react-router-dom';
import './GameDetail.css';

export default function GameDetail() {
  const { id } = useParams(); // Getting the game ID from the URL

  // Sample game data for demonstration
  const games = [
    {
      id: 1,
      title: 'Mario Bros',
      rate: 4,
      genre: 'Action, Crime',
      description: 'Mario Bros is a classic platform game that follows Mario on his quest to save Princess Peach.',
      img: 'https://media.wired.com/photos/64efb11c9df01ef1663a0108/1:1/w_997,h_997,c_limit/Super-Mario-Bros.-Wonder-Review-Featured-Games.jpg',
    },
    {
      id: 2,
      title: 'FF',
      rate: 4,
      genre: 'Action, Crime',
      description: 'Free Fire is an exciting battle royale game with fast-paced, intense gameplay.',
      img: 'https://cdn0-production-images-kly.akamaized.net/l_aWHGGnMhRkHn9StrlfnUfmu6k=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4058234/original/090110200_1655708618-Logo_Baru_Free_Fire.jpg',
    },
    {
      id: 3,
      title: 'PUBG',
      rate: 4,
      genre: 'Action, Crime',
      description: 'PUBG is a multiplayer battle royale game where players fight for survival on an island.',
      img: 'https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/09/17/6c321f96-4bde-42e8-bb93-368f34561968/pubg-theme',
    },
  ];

  const game = games.find(g => g.id === parseInt(id));

  if (!game) {
    return <div className="game-detail-container">Game not found.</div>;
  }

  return (
    <div className="game-detail-container">
      <div className="game-detail-card">
        <img src={game.img} alt={game.title} className="game-image" />
        <div className="game-info">
          <h2>{game.title}</h2>
          <p className="game-genre">Genre: {game.genre}</p>
          <p className="game-rate">Rating: {game.rate} / 5</p>
          <p className="game-description">{game.description}</p>
        </div>
      </div>
    </div>
  );
}
