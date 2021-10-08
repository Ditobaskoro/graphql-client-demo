function userData(data, id) {
  return {
    id,
    createdAt: data.createdAt,
    name: data.name
  }
}

module.exports = userData
