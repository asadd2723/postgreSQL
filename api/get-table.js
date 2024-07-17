import { sql } from "@vercel/postgres";

export default async function(req, res){
  try {
    await sql `DROP TABLE IF EXISTS pets;`
    return console.log('done')
  } catch (error) {
    return res.error
  }
}