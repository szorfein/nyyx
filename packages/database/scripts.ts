import { prisma } from "./src/index.ts";

async function main() {
  const post = await prisma.post.findFirst();
  console.log(post);
  console.log(!!post);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
