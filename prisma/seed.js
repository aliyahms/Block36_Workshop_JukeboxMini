// import prisma client
const prisma = require("../prisma");
const { faker } = require("@faker-js/faker");

// Create users who own a few playlists each
const seed = async (numUsers = 3, numPlaylists = 5) => {
  for (let i = 0; i < numUsers; i++) {
    // created the playlist that will seed the Users playlist type/property 'playlist' in schema
    const playlists = Array.from({ length: numPlaylists }, () => ({
      name: faker.music.album(),
      description: faker.lorem.sentences(2),
    }));
    // created a user thats data is a username and a playlist
    await prisma.user.create({
      data: {
        username: faker.internet.displayName(),
        playlists: { create: playlists },
      },
    });
  }
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
