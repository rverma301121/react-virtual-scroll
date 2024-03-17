import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { ReactReduxContext } from "react-redux";
import "./FavoriteList.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const FavoriteList = () => {
  const { store } = useContext(ReactReduxContext);

  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    const favorite = localStorage.getItem("favorite")
      ? JSON.parse(localStorage.getItem("favorite"))
      : [];

    setFavoriteList([...favorite] || store.getState().favorite.favorite);
  }, [store]);

  console.log("fav-->", favoriteList);

  return (
    <div className="list-container">
      <Card>
        <div className="content-wrapper">
          <Card>
            <div className="item-container">
              <h4>Favorite Albums</h4>
              {favoriteList?.length > 0 ? (
                <div className="content-inner-wrapper">
                  {favoriteList.map((item) => (
                    <div className="main-content">
                      <div className="img-section">
                        <img
                          src={item.thumbnailUrl}
                          key={item.id}
                          alt="Album"
                        ></img>
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
                          <FontAwesomeIcon icon={faHeart} />
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