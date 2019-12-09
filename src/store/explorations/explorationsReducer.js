const initialState = {
  docs: [],
  totalDocs: 0,
  limit: 100,
  hasPrevPage: false,
  hasNextPage: true,
  page: 1,
  totalPages: 1,
  pagingCounter: 1,
  prevPage: null,
  nextPage: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EXPLORATIONS':
      return action.payload
    default:
      return state
  }
}
