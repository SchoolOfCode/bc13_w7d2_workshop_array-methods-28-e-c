let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

const multipleOf3 = someNumbers.some(
    (number) => {
        return Number.isInteger(number/3);
    }
);

const multipleOf5 = someNumbers.some(
    (number) => {
        return Number.isInteger(number/5);
    }
);

const multipleOf60 = someNumbers.some(
    (number) => {
        return Number.isInteger(number/60);
    }
);

const multipleOf90 = someNumbers.some(
    (number) => {
        return Number.isInteger(number/90);
    }
)
