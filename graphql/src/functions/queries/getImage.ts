import { Image, QueryGetImageArgs } from "../../__generated__/resolvers-types";
import { callDB } from "../../database";

export default async ({ route }: QueryGetImageArgs): Promise<Image> => {
  const allRouteNames = route.split('/')
  const imageName = allRouteNames.pop()
  const onlyRoute = allRouteNames.join('/') + '/'
  const result = await callDB(`SELECT * FROM Images WHERE route="${onlyRoute}" AND name="${imageName}";`)

  return result[0]
}