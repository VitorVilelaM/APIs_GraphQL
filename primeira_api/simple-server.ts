import { ApolloServer, gql } from "apollo-server";
import {randomUUID} from 'node:crypto'

const typeDefs = gql`
    type User{
        id: String!
        name: String!
    }

    type Query{
        users: [User!]!
    }


    type Mutation{
        createUser(name:String!): User!
    }
`

interface IUser{
    id: String,
    name: String
}

const users: IUser[] = [];

const server = new ApolloServer({
    typeDefs, 
    resolvers:{
        Query:{
            users: () =>{
                return users
            }
        },

        Mutation:{
            createUser: (_, args) =>{
                const newUser = {
                    id: randomUUID(),
                    name: args.name
                };
                
                users.push(newUser)
                return newUser;
            }
        }
    },
});

server.listen().then(({url}) => {
    console.log(`HTTP server running on ${url}`);
});

