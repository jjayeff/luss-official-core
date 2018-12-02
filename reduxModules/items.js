export const FETCH_ITEMS = 'alex/FETCH_ITEMS';
export const FETCH_ITEMS_SUCCESS = 'alex/FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILED = 'alex/FETCH_ITEMS_FAILED';

export const fetchItems = () => ({
  type: FETCH_ITEMS
});

const initialState = {
  ItemsDb: [],
  error: '',
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        ItemsDb: []
      };
    case FETCH_ITEMS_SUCCESS: {
      return {
        ...state,
        ItemsDb: action.payload,
        error: ''
      };
    }
    case FETCH_ITEMS_FAILED:
    case DELETE_Items:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
