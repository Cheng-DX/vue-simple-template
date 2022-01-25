const userInfo = {
  state: {
    githubUsername: '',
  },
  mutations: {
    setGithubUsername(state, username) {
      state.githubUsername = username
    },
  },
}

const githubStateArray = [
  userInfo,
]
export default githubStateArray
