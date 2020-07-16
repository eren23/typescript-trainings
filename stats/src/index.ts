import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);

matchReader.load();

let manUnitedWins = 0;
let manUnitedDraws = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  } else if (
    (match[1] === "Man United" || match[2] === "Man United") &&
    match[5] === MatchResult.Draw
  ) {
    manUnitedDraws++;
  }
}

console.log(
  `Man united won ${manUnitedWins} games and got ${manUnitedDraws} draws`
);
