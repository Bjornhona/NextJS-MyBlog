const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) { // In development mode
    return {
      env: {
        mongodb_username: 'asaeri3',
        mongodb_password: 'Asaeri33',
        mongodb_cluster: 'cluster0',
        mongodb_database:'my-blog-dev'
      }
    }
  }

  return {
    env: {
      mongodb_username: 'asaeri3',
      mongodb_password: 'Asaeri33',
      mongodb_cluster: 'cluster0',
      mongodb_database:'my-blog'
    }
  }
}
