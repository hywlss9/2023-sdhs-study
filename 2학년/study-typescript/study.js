const data2 = [1, 2, 3, 4, 5];
const mixData2 = [1, 2, 3, 4, "5"];

const mapData2 = data2.map((v) => {
  return v;
});

const mixMapData2 = mixData2.map((v) => {
  return v.length;
});
