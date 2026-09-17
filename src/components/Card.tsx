"use client";

import { useState } from "react";
import Rating from "@mui/material/Rating";
import styles from "./Card.module.css";

type CardProps = { venueName: string; location: string; image: string; onRatingChange: (venueName: string, rating: number) => void };

export default function Card({ venueName, location, image, onRatingChange }: CardProps) {
  const [rating, setRating] = useState(0);

  function changeRating(newRating: number | null) {
    const selectedRating = newRating ?? 0;
    setRating(selectedRating);
    onRatingChange(venueName, selectedRating);
  }

  return (
    <article className={styles.card}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={styles.content}>
        <h2>{venueName}</h2><p>{location}</p>
        <Rating id={`${venueName} Rating`} name={`${venueName} Rating`} data-testid={`${venueName} Rating`} value={rating} onChange={(_, newRating) => changeRating(newRating)} />
      </div>
    </article>
  );
}
