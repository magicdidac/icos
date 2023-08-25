import { Image, MutationUploadImageArgs } from "../../__generated__/resolvers-types";
import { callDB } from "../../database";
import { insert } from "../../utils";

export default async ({ route, name, url }: MutationUploadImageArgs): Promise<Image> => {
  await callDB(insert('Images', { route, name, url }))

  return {
    route,
    name,
    url
  }
}