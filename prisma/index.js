// To seed the database, we must first create and export a new PrismaClient.

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
module.exports = prisma;
