import { gql } from 'apollo-server-lambda'

export default gql`
type Query {
    getImage(route: String!): Image
    getFolder(route: String!): FolderInfo
}

type Mutation {
    uploadImage(route: String!, name: String!, url: String!): Image!
    removeImage(route: String!, name: String!): Image!
}

type Image {
    route: String!
    name: String!
    url: String!
}

type Folder {
    route: String!
    name: String!
}

type FolderInfo {
    images: [Image]
    folders: [Folder]
}
`