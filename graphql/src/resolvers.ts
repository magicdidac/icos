import { Resolvers } from "./__generated__/resolvers-types";
import { getExample, addExample } from "./functions/example";

export const resolvers: Resolvers = {
    Query: {
        getExample: () => getExample()
    },
    Mutation: {
        addExample: (_, args) => addExample(args)
    }
}