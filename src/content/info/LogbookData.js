const mostCommon = (logbook) => {
  let most = [];
  logbook.map((flight) => most.push(flight.Geo.dep.AP));
  console.log(most);
};

const LogbookData = {
  mostCommon,
};
export default LogbookData;
