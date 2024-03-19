import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./FavoriteList.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  getFavorite,
  removeFavorite,
} from "../../redux/actions/favoriteActions";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const FavoriteList = () => {
  const dispatch = useDispatch();

  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    getFavoriteList();
  }, []);

  const getFavoriteList = () => {
    dispatch(getFavorite()).then((res) => {
      setFavoriteList([...res]);
    });
  };

  const handleDelete = (album) => {
    dispatch(removeFavorite(album));
    getFavoriteList();
  };

  return (
    <div className="list-container">
      <Card>
        <div className="content-wrapper">
          <Card>
            <div className="item-container">
              <h4>Favorite Albums</h4>
              {favoriteList?.length > 0 ? (
                <div className="content-inner-wrapper">
                  {favoriteList.map((item, index) => (
                    <div className="main-content" key={index}>
                      <div className="img-section">
                        <img src={item.thumbnailUrl} alt="Album"></img>
                      </div>
                      <div className="content">
                        <div className="title-section">
                          <p>{item.title}</p>
                          <div className="action">
                            <a href={item.url} target="_blank" rel="noreferrer">
                              View Album
                            </a>
                            <span>Album No: {item.id}</span>
                          </div>
                        </div>
                        <div className="icon-container">
                          <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => handleDelete(item)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="not-found">No favorite album found</div>
              )}
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default FavoriteList;
