function square (x) {
    return x * x;
};

console.log(square(9));

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(8));

//const Name = 'Jay Desai';

// const getFirstname = (Name) => {
//     return Name.split(' ');
// };

const getFirstname = (Name) => Name.split(' ')[0];

console.log(getFirstname('Jay Desai'));