import { ADD_TO_FAVORITE } from "../constants/favoriteConstant";

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
