import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./AlbumCard.scss";
import { useDispatch } from "react-redux";
import {
  addToFavorite,
  getFavorite,
} from "../../redux/actions/favoriteActions";

const AlbumCard = ({ albumlist }) => {
  const dispatch = useDispatch();

  const [active, setActive] = useState();

  useEffect(() => {
    dispatch(getFavorite()).then((favorite) => {
      if (favorite) {
        favorite.forEach((item) => {
          if (item.id === albumlist.id) {
            setActive(item.id);
          }
        });
      }
    });
  }, []);

  const handleFavorite = (event) => {
    dispatch(addToFavorite(albumlist));
    setActive(event.target.id);
  };

  return (
    <Card className="card-container">
      <Card.Img variant="top" src={albumlist.thumbnailUrl} />
      <Card.Body>
        <Card.Text>
          <span>Album No: {albumlist.id}</span>
          <span>{albumlist.title}</span>
        </Card.Text>
        <Button
          id={albumlist.id}
          className={
            Number(active) === albumlist.id ? "favorite" : "favorite-outline"
          }
          variant="primary"
          onClick={handleFavorite}
        >
          {
            Number(active) === albumlist.id ? "Added" : "Add to Favorite"
          }
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AlbumCard;
