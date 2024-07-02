import { prisma } from "../src/lib/prisma"

async function seed(){
  await prisma.event.create({
    data:{
      id:'c05c9a70-66bf-48f7-abb3-487d7cf95588',
      title:'Unite Summit',
      slug:'unite-summit',
      details:'um evento para paixadonados por tech',
      maximumAttendees:120,
    }
  })

}


seed().then(()=>{
  console.log('Database seeded!')
  prisma.$disconnect()
})