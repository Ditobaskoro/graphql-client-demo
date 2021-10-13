function userData(data, id) {
  return {
    id,
    createdAt: new Date(data.createdAt).toISOString(),
    name: data.name
  }
}

module.exports = userData
