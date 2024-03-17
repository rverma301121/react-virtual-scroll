import React, { useEffect, useState } from "react";
import AlbumCard from "../../AlbumCard/AlbumCard";
import "./AlbumList.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

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
      setAlbumData((prevItems) => [...prevItems, ...data]);
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
        <InfiniteScroll
          dataLength={albumData.length}
          next={fetchData}
          hasMore={true}
        >
          {albumData.map((list, index) => (
            <AlbumCard albumlist={list} key={index}></AlbumCard>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default AlbumList;
