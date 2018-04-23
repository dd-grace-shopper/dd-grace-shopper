module.exports = (reqUser, reqSession, ...params) => {
  const searchFilter = {};
  if (reqUser) searchFilter.userId = reqUser.id;
  else searchFilter.sessionId = reqSession.id;
  params.forEach(param => {
    let key = Object.keys(param)[0];
    searchFilter[key] = param[key];
  });
  return searchFilter;
}
