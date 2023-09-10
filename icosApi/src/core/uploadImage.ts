import { failure, success } from "../utils"
import { Client } from "basic-ftp"
import { arrayBufferToWebP } from "webp-converter-browser"

const ftpClient = new Client()

export default async (route: string, name: string, image: string) => {
  if (!route.startsWith('/images/')) return failure({ message: 'The route must start with `/images/`' })
  if (!route.endsWith('/')) return failure({ message: 'The route must end with `/`' })

  const imageName = name.split('.')[0] + '.webp'
  const completeRoute = route + imageName
  const imageUrl = `https://icos.magicdidac.com${completeRoute}`
  const imageBuffer = await (await arrayBufferToWebP(Buffer.from(image), { quality: .5 })).text()

  await ftpClient.access({
    host: 'ftp.magicdidac.com',
    user: process.env.FTP_ACCOUNT,
    password: process.env.FTP_PASSWORD,
    secure: false
  })

  await ftpClient.uploadFrom(imageBuffer, completeRoute)
  ftpClient.close()

  return success({ url: imageUrl })
}