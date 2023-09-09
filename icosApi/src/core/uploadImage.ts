import { failure, success } from "../utils"
import { Client } from "basic-ftp"
import sharp = require("sharp")
import { Readable } from "stream"

const ftpClient = new Client()

export default async (route: string, name: string, image: string) => {
  if (!route.startsWith('/images/')) return failure({ message: 'The route must start with `/images/`' })
  if (!route.endsWith('/')) return failure({ message: 'The route must end with `/`' })

  const imageName = name.split('.')[0] + '.webp'
  const completeRoute = route + imageName
  const imageUrl = `https://icos.magicdidac.com${completeRoute}`
  const imageBuffer = await sharp(Buffer.from(image)).webp({ quality: 50 }).toBuffer()

  await ftpClient.access({
    host: 'ftp.magicdidac.com',
    user: process.env.FTP_ACCOUNT,
    password: process.env.FTP_PASSWORD,
    secure: false
  })

  await ftpClient.uploadFrom(Readable.from(imageBuffer), completeRoute)
  ftpClient.close()

  return success({ url: imageUrl })
}