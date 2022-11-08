let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

const checkSevens = sevenTimesTable.every(
    (number) => {
        return Number.isInteger(number/7);
    }
);

const checkSeventySevens = seventySevenTimesTable.every(
    (number) => {
        return Number.isInteger(number/77);
    }
)

const findRogueNumber = seventySevenTimesTable.find(
    (number) => {
        if (Number.isInteger(number/77) === false) {
            return number
        }
    }
);

const findRogueNumberIndex = seventySevenTimesTable.findIndex(
    (number) => {
        if (Number.isInteger(number/77) === false) {
            return number
        }
    }
);

