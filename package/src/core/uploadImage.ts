// import sharp from "sharp";
import { IImageFile } from "../types";
import axios from 'axios';
import Client from 'ftp-ts';

export default async (route: string, image: IImageFile): Promise<string> => {
  if (!route.startsWith('/images/')) throw 'The route must start with `/images/`'
  if (!route.endsWith('/')) throw 'The route must end with `/`'
  const imageName = image.name.split('.')[0] + '.webp'
  const imageUrl = `https://icos.magicdidac.com${route}${imageName}`
  // const imageBuffer = await sharp(image.url).webp({ quality: 50 }).toBuffer()

  const ftpConnection = await Client.connect({
    host: 'ftp.magicdidac.com',
    user: process.env.FTP_ACCOUNT,
    password: process.env.FTP_PASSWORD,
    secure: false
  })
  await ftpConnection.put(new Buffer('Hello'), route + imageName)
  ftpConnection.end()

  // upload to db with gql
  const data = JSON.stringify({
    query: `mutation ($route: String!, $name: String!, $url: String!) {
      uploadImage (route: $route, name: $name, url: $url) {
        url
      }
    }`,
    variables: {
      route,
      name: imageName,
      url: imageUrl

    }
  })

  await axios.post(process.env.GRAPHQL_ENDPOINT ?? '', { data })

  return imageUrl
}