import { gql } from 'apollo-server-lambda'

export default gql`
type Query {
    getExample: [String]
}

type Mutation {
    addExample(message: String!): String!
}
`