import { ADD_TO_FAVORITE } from "../constants/favoriteConstant";

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
    case ADD_TO_FAVORITE:
      return {
        favorite: [...(action.paylod || [])],
      };
    default:
      return state;
  }
};

export default favoriteReducer;
