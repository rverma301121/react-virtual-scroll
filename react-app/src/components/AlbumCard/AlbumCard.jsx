import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./AlbumCard.scss";
import { ReactReduxContext, useDispatch } from "react-redux";
import { addToFavorite } from "../../redux/actions/favoriteActions";

const AlbumCard = ({ albumlist }) => {
  const dispatch = useDispatch();

  const { store } = useContext(ReactReduxContext);
  const [active, setActive] = useState();

  useEffect(() => {
    if (store.getState().favorite.favorite.length) {
      const favorite = store.getState().favorite.favorite;
      favorite.forEach((item) => {
        if (item.id === albumlist.id) {
          setActive(item.id);
        }
      });
    }
  }, [albumlist.id]);

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
          Add to Favorite
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AlbumCard;
