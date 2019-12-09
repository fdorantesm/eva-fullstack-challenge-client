const initialState = {
  _id: "5dec1a2418dc50a4b36d9128",
  email: "fdorantesm@gmail.com",
  nickname: "fdorantesm",
  createdAt: "2019-12-07T21:31:16.371Z",
  updatedAt: "2019-12-07T21:31:35.038Z",
  deleted: false,
  deletedAt: null,
  __v: 0,
  lastLogin: "2019-12-07T21:31:35.037Z",
  accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZGVjMWEyNDE4ZGM1MGE0YjM2ZDkxMjgiLCJpYXQiOjE1NzU3NTQyOTUsImV4cCI6MTYwNzI5MDI5NX0.yl8SuHFHt8Go6QZkH14nlppFM1x-15-IPJJfKUpobdI",
  expiresAt: 1607290295
}

export default (state = initialState, action) => {
  switch (action.type) {
      case 'LOGIN':
        return action.payload
      case 'RESTORED_SESSION':
        return action.payload
      default:
        return state
  }
}
