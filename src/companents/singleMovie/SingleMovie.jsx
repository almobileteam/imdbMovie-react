import React from 'react'
import './_singleMovie.scss'
import { Link } from 'react-router-dom'
import image from '../../images/nomoviepic.jpg'

export default function SingleMovie({
  id,
  title,
  backdrop_path,
  vote_average,
  original_name,
  original_title,
}) {
  const movieImg =
    `https://image.tmdb.org/t/p/original/${backdrop_path}` || image
  return (
    <div className="movie">
      <div className="movie-img">
        <img src={movieImg} alt="background" />
        <h2>{title || original_name || original_title}</h2>
        <span>{vote_average}</span>
      </div>
      <div className="movie-footer">
       <Link to={`/detail/${id}`}>Details</Link>
        <i className="fa-solid fa-heart-circle-plus"></i>
      </div>
    </div>
  )
}
