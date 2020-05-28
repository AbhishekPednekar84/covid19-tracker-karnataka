import {
  GET_STATE_DATA,
  GET_LATEST_TIMESTAMP,
  SET_LOADING,
  FILTER_DISTRICTS,
  GENDER_DATA,
  CLEAR_FILTER,
  TIME_SERIES,
  DARK_MODE,
  GET_TESTING_DATA,
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
    case FILTER_DISTRICTS:
      return {
        ...state,
        filtered: action.payload,
      };
    case GENDER_DATA:
      return {
        ...state,
        genderData: action.payload,
        genderDataFetched: true,
        loading: false,
      };
    case TIME_SERIES:
      return {
        ...state,
        stateTimeSeries: action.payload,
        timeSeriesLoaded: true,
        loading: false,
      };
    case GET_TESTING_DATA:
      return {
        ...state,
        testingData: action.payload,
        testingDataFetched: true,
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
