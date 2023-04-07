import { toast } from "react-toastify";
import { reducerCases } from "./contants";
import { artist, data } from "./data";

export const initialState = {
  tracks: data,
  artist: artist,
  selectedTrack: null,
  isPlaying: true,
  isOnRepeat: false,
  isShuffle: false,
  favorite: localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite"))
    : [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.ADD_TRACK: {
      return {
        ...state,
        selectedTrack: action.selectedTrack,
      };
    }
    case reducerCases.SET_PLAYING: {
      return {
        ...state,
        isPlaying: action.isPlaying,
      };
    }
    case reducerCases.NEXT_TRACK: {
      return {
        ...state,
        selectedTrack: action.selectedTrack,
      };
    }
    case reducerCases.ADD_FAVORITES: {
      const newFavorite = action.favorite;

      // Check if the song is already in the favorites array
      const isAlreadyInFavorites = state.favorite.find(
        (song) => song.name === newFavorite.name
      );

      if (isAlreadyInFavorites) {
        toast.warning("Song is already in favorites!");
        return state; // Return the current state without adding the song
      }
      const updatedFavorites = [...state.favorite, newFavorite];
      localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
      toast.success("Added to Favorites");
      return {
        ...state,
        favorite: updatedFavorites,
      };
    }
    case reducerCases.REMOVE_FAVORITE: {
      const newFavorite = action.favorite;
      const newFavorites = state.favorite.filter(
        (song) => song.name !== newFavorite.name
      );
      localStorage.setItem("favorite", JSON.stringify(newFavorites));
      toast.error("Removed from Favorites");
      return {
        ...state,
        favorite: newFavorites,
      };
    }

    case reducerCases.TOGGLE_REPEAT:{
      return{
        ...state,
        isOnRepeat : action.isOnRepeat
      }
    }
    case reducerCases.TOGGLE_SHUFFLE:{
      return{
        ...state,
        isShuffle : action.isShuffle
      }
    }
    default:
      return state;
  }
};
