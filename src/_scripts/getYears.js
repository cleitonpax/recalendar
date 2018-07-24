export function getYears() {
  let year = 2030;
  let out = [];
  while(year > 1980){
    out.push({ value: year, label: year });
    year--;
  }
  return out;
}
