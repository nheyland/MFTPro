const colors = {
  vfr: "#00c71b",
  mvfr: "#36a8ff",
  ifr: "#ff0d00",
  lifr: "#ff59e9",
};
const airports = [
  {
    key: 1,
    id: "KSFM",
    cat: colors.vfr,
    raw: "Raw Data",
  },
  {
    key: 2,
    id: "KDEN",
    cat: colors.lifr,
    raw: "Raw Data",
  },
  {
    key: 3,
    id: "KBGR",
    cat: colors.mvfr,
    raw: "Raw Data",
  },
];

const Data = { airports };

export default Data;
