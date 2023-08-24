import { callDB } from "../../../database"

export default async () => {
  const data = await callDB('SELECT * FROM Table')

  return data
}