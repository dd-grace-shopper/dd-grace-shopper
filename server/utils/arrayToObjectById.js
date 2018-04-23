module.exports = (dataArray, key = 'id') => {
  return dataArray.reduce((dataByIdObj, item) => {
    dataByIdObj[item[key]] = item;
    return dataByIdObj;
  }, {});
};
