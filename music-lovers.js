const { faker } = require("@faker-js/faker");

function createRandomUser() {
  const user = {
    avatar: faker.image.avatar(),
    username: faker.internet.displayName(),
    birthday: faker.date.birthdate(),
    zodiacSign: faker.person.zodiacSign(),
    sex: faker.person.sex(),
    favoriteGenre: faker.music.genre(),
    favoriteSong: faker.music.songName(),
  };
  return user
}

function createRandomGroup(number) {
  let members = [];
  for (let i = 0; i < number; i++) {
    members.push(createRandomUser());
  }
  return members;
}

module.exports = {
	createRandomUser,
	createRandomGroup
}