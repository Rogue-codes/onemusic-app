import { reducerCases } from "./contants"
import { data } from "./data"

export const initialState = {
    tracks: data,
    selectedTrack : null,
    isPlaying : true
}


export const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.ADD_TRACK:{
            return{
                ...state, selectedTrack: action.selectedTrack
            }
        }
        case reducerCases.SET_PLAYING:{
            return{
                ...state, isPlaying: action.isPlaying
            }
        }
        case reducerCases.NEXT_TRACK:{
            return{
                ...state, selectedTrack: action.selectedTrack
            }
        }
        default: return state
    }
}