const uniqid = require('uniqid');
const cubes = [
    {
        id: '83i46xbhkli8iiphj',
        name: 'Mirror Cube',
        description: 'A cool mirror cube',
        imageUrl: 'https://m.media-amazon.com/images/I/71TrvUl50OL.jpg',
        difficultyLevel: 4
    },
    {
        id: '23i46xbhkli8iiphj',
        name: 'Rubic Classic',
        description: 'Evergreen',
        imageUrl: 'https://m.media-amazon.com/images/I/61+L5rfW2NL._AC_UF1000,1000_QL80_.jpg',
        difficultyLevel: 3
    }
];

exports.getAll = (search, from, to) => {
    let result = cubes.slice();

    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to)); 
    }

    return result;
};

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;
};