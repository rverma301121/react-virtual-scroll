import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./AlbumCard.scss";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../redux/actions/favoriteActions";

const AlbumCard = ({ albumlist }) => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(addToFavorite(albumlist));
  };

  return (
    <Card className="card-container">
      <Card.Img variant="top" src={albumlist.thumbnailUrl} />
      <Card.Body>
        <Card.Text>{albumlist.title}</Card.Text>
        <Button className="favorite" variant="primary" onClick={handleFavorite}>
          Add to Favorite
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AlbumCard;
