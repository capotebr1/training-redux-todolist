const actionsConstructor = (type, payload) => {
    return {
      type: type,
      payload: payload
    }
}

export default actionsConstructor;