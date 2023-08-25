import { Resolvers } from "./__generated__/resolvers-types";
import { removeImage, uploadImage } from "./functions/mutations";
import { getFolder, getImage } from "./functions/queries";

export const resolvers: Resolvers = {
    Query: {
        getImage: (_, args) => getImage(args),
        getFolder: (_, args) => getFolder(args),
    },
    Mutation: {
        uploadImage: (_, args) => uploadImage(args),
        removeImage: (_, args) => removeImage(args)
    }
}