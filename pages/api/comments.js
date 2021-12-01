import { GraphQlClient, gql } from 'graphql-request';

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

const { graphqlAPI } = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function comments(req, res) {
  const graphQlClient = new GraphQlClient(graphqlAPI, {
    headers: { 
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    }
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!){
      createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug}}}) { id }
    }
  `
  const result = await graphQlClient.request(query, req.body)
  return res.status(200).send(result);
}