import { FolderInfo, QueryGetFolderArgs } from "../../__generated__/resolvers-types";
import { callDB } from "../../database";

export default async ({ route }: QueryGetFolderArgs): Promise<FolderInfo> => {
  const images = await callDB(`SELECT * FROM Images WHERE route="${route}" AND url IS NOT NULL ORDER BY name`)
  const folders = await callDB(`SELECT route, name FROM Images WHERE route="${route}" AND url IS NULL ORDER BY name`)

  return {
    images,
    folders
  }
}