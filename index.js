const { parse } = require("csv-parse");
const fs = require("fs");

const data = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

// reading our csv file using fs
fs.createReadStream("./keeplers_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (resp) => {
    if (isHabitablePlanet(resp)) data.push(resp);
  })
  .on("end", () => {
    console.log(
      `Total numbers of habitable planets are ${data.length} thos are the following`
    );
    data.map((el) => console.log(el["kepler_name"]));
  });
