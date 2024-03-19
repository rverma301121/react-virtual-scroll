import {
  ADD_TO_FAVORITE,
  GET_FAVORITE,
  REMOVE_FAVORITE,
} from "../constants/favoriteConstant";

let INITIAL_STATE = {
  favorite: [],
};

if (localStorage.getItem("favorite")) {
  INITIAL_STATE.favorite = JSON.parse(localStorage.getItem("favorite"));
} else {
  INITIAL_STATE.favorite = [];
}

const favoriteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FAVORITE:
      return {
        favorite: [...(action.paylod || [])],
      };
    case ADD_TO_FAVORITE:
      return {
        favorite: [...(action.paylod || [])],
      };
    case REMOVE_FAVORITE:
      return {
        favorite: [...(action.paylod || [])],
      };
    default:
      return state;
  }
};

export default favoriteReducer;
