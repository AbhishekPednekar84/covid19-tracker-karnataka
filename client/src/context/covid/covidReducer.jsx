import {
  GET_STATE_DATA,
  GET_LATEST_TIMESTAMP,
  SET_LOADING,
  GET_ZONE_INFO,
  FILTER_DISTRICTS,
  CLEAR_FILTER,
  TIME_SERIES,
  DARK_MODE,
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case GET_STATE_DATA:
      return {
        ...state,
        stateData: action.payload,
        stateDataFetched: true,
        loading: false,
      };
    case GET_LATEST_TIMESTAMP:
      return {
        ...state,
        timestamp: action.payload,
        loading: false,
      };
    case GET_ZONE_INFO:
      return {
        ...state,
        zoneData: action.payload,
        zoneDataFetched: true,
        loading: false,
      };
    case FILTER_DISTRICTS:
      return {
        ...state,
        filtered: action.payload,
      };
    case TIME_SERIES:
      return {
        ...state,
        stateTimeSeries: action.payload,
        timeSeriesLoaded: true,
        loading: false,
      };
    case DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
