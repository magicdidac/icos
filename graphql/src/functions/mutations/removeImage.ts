import { Image, MutationRemoveImageArgs } from "../../__generated__/resolvers-types";
import { callDB } from "../../database";
import getImage from "../queries/getImage";

export default async ({ route, name }: MutationRemoveImageArgs): Promise<Image> => {
  const image = await getImage({ route: `${route}${name}` })
  await callDB(`DELETE FROM Images WHERE route="${route}" AND name: "${name}";`)

  return image
}