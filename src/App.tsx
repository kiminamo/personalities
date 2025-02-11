import { useState } from 'react';
import { artistList } from './data.tsx';
import './index.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < artistList.length - 1;
  const hasPrev = index > 0;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handlePrevClick() {
    setIndex(hasPrev ? index - 1 : artistList.length - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const artist = artistList[index];

  return (
    <div className="gallery-container">
      <h1>KIMBERLY MANALOTO </h1>

      <div className="buttons-container">
        <button onClick={handlePrevClick} disabled={!hasPrev}>
          Back
        </button>
        <button onClick={handleNextClick}>
          Next
        </button>
      </div>

      <div className="card">
        <h2>{artist.artist}</h2>
        <h3>({index + 1} of {artistList.length})</h3>
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p className="description">{artist.description}</p>}
        <img className="artist" src={artist.url} alt={artist.artist} />
      </div>
    </div>
  );
}
