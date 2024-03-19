import {
  ADD_TO_FAVORITE,
  GET_FAVORITE,
  REMOVE_FAVORITE,
} from "../constants/favoriteConstant";

// To get list of favorite albums
export const getFavorite = () => async (dispatch) => {
  const favorite = localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite")).reverse()
    : [];

  dispatch({
    type: GET_FAVORITE,
    payload: favorite,
  });

  return favorite;
};

// To add albums to the favorite list
export const addToFavorite = (album) => async (dispatch) => {
  const favorite = localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite"))
    : [];

  const duplicates = favorite.filter((item) => item.id === album.id);

  if (duplicates.length === 0) {
    const albumToAdd = {
      ...album,
      flag: true,
    };

    favorite.push(albumToAdd);

    localStorage.setItem("favorite", JSON.stringify(favorite));

    dispatch({
      type: ADD_TO_FAVORITE,
      payload: favorite,
    });
  }
};

// To delete album from the favorite list
export const removeFavorite = (album) => async (dispatch) => {
  const favorite = localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite"))
    : [];

  const filteredAlbum = favorite.filter((item) => item.id !== album.id);

  localStorage.setItem("favorite", JSON.stringify(filteredAlbum));

  dispatch({
    type: REMOVE_FAVORITE,
    payload: filteredAlbum,
  });
};
