import React, { useEffect, useState } from "react";
import AlbumCard from "../../AlbumCard/AlbumCard";
import "./AlbumList.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const AlbumList = () => {
  const [albumData, setAlbumData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${currentPage}&_limit=10`
      );
      const data = await response.json();
      setAlbumData([...albumData, ...data]);
      setCurrentPage(currentPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper-container">
      <div className="heading-container">
        <Link to="/">Go Back</Link>
        <h2 className="heading">Album Lists</h2>
      </div>

      <div className="album-list">
        <Card>
          <InfiniteScroll
            dataLength={albumData.length}
            next={fetchData}
            hasMore={true}
            height={550}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
            useWindow={false}
          >
            {albumData &&
              albumData.map((item, index) => (
                <AlbumCard albumlist={item} key={index} />
              ))}
          </InfiniteScroll>
        </Card>
      </div>
    </div>
  );
};

export default AlbumList;
