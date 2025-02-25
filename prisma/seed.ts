import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "jane.doe@email.com";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("janeDoe2024", 10);

  const user = await prisma.user.create({
    data: {
      firstName: "Jane",
      lastName: "Doe",
      birthDate: new Date("1990-01-18"),
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      topic: "Other",
      favorites: true,
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      topic: "Family",
      favorites: false,
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My third note",
      body: "I like prisma!!",
      topic: "Work",
      favorites: true,
      userId: user.id,
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
