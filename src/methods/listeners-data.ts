const faker = require('faker');

const getData = (amount) => {
    return new Array(amount).fill(null).map((value, index) => {
        return {
            id: index,
            handle: faker.name.findName(),
            imageUrl: faker.image.avatar()
        };
    });
};
export const data = getData(2);
