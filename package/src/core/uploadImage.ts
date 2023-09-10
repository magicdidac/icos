import axios from 'axios';

export default async (route: string, name: string, image: string): Promise<string> => {
  if (!route.startsWith('/images/')) throw 'The route must start with `/images/`'
  if (!route.endsWith('/')) throw 'The route must end with `/`'
  const imageName = name.split('.')[0] + '.webp'
  const imageUrl = `https://icos.magicdidac.com${route}${imageName}`

  const response = await axios.post('https://joaxmvql14.execute-api.us-east-1.amazonaws.com/prod/upload', {
    name: name,
    route: route,
    image: image
  })

  console.log(response.data)

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