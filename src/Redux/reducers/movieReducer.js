import { AllMOVIES } from '../type/moviesType';

const initialValue = { movies: [], pageCount: 0 };
export const moviesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case AllMOVIES:
      return { movies: action.data, pageCount: action.pages };

    default:
      return state;
  }
};
