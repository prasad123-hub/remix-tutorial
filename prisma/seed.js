const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getPosts().map((post) => {
      return db.post.create({
        data: post,
      });
    })
  );
}

seed();

function getPosts() {
  return [
    {
      title: "What is HTML ?",
      body: "abababababhdhfhdjahfhdhfjhgruuytyerguhjdnvjn",
      image: "",
    },
    {
      title: "What is css ?",
      body: "abababababhdhfhdjahfhdhfjhgruuytyerguhjdnvjnsdfd",
      image: "",
    },
    {
      title: "What is javascript ?",
      body: "abababababhdhfhdjahfhdhfjhgruuytyerguhjdnvjasfsdn",
      image: "",
    },
    {
      title: "What is react ?",
      body: "abababababhdhfhdjahfhdhfjhgruuytyerguhjadfsddnvjn",
      image: "",
    },
  ];
}
