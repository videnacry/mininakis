
import graphql from 'babel-plugin-relay/macro';

export const queryQuery = graphql`
  query queryQuery($pFirst:Int!) {
    products(pFirst:$pFirst){
        edges{
            node{
                ...productsFragment
            },cursor{_id,createdAt}
        },pageInfo{
            hasNextPage,hasPreviousPage,startCursor{_id,createdAt},endCursor{_id,createdAt}
        }
    },
    users(pFirst:$pFirst){
        edges{
            node{
                _id,
                img_path,
                cart,
                items,
                points,
                username,
                name,
                lastname,
                email,
                password,
                description,
                createdAt
            },cursor{_id,createdAt}
        },pageInfo{
            hasNextPage,hasPreviousPage,startCursor{_id,createdAt},endCursor{_id,createdAt}
        }
    }
  }
`;