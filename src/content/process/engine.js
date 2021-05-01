const coords = (i, data) => data.filter((loc) => loc.ident === i && loc);
const route = (x, data) => {
  let temp = [];
  x.forEach((i) => {
    i.length > 1 &&
      temp.push({
        Ap: i,
        Data: coords(i, data),
      });
  });
  return temp;
};
const fileRead = async (file) => {
  const data = await getter();
  const index = file.findIndex((x) => x.data[0] === "Flights Table");
  const key = file[index + 1].data;
  let flights = [];
  for (var i = index + 2; i < file.length; i++) flights.push(file[i].data);
  let logbook = [];
  for (let i = 0; i < flights.length; i++) {
    let obj = {};
    for (let j = 0; j < key.length; j++) obj[key[j]] = flights[i][j];
    if (obj["Route"]) obj["Route"] = obj["Route"].split(" ");
    obj["Geo"] = {
      dep: {
        Ap: obj["From"],
        Data: coords(obj["From"], data),
      },
      route: obj["Route"] && route(obj["Route"], data),
      dest: {
        Ap: obj["To"],
        Data: coords(obj["To"], data),
      },
    };
    logbook.push(obj);
  }
  return logbook;
};
const getter = async () => {
  const url =
    "https://pkgstore.datahub.io/core/airport-codes/airport-codes_json/data/9ca22195b4c64a562a0a8be8d133e700/airport-codes_json.json";

  async function getData(url) {
    const response = await fetch(url);
    return response.json();
  }
  return await getData(url);
};
export { route, coords, fileRead, getter };
