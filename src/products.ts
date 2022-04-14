
import graphql from 'babel-plugin-relay/macro';

// Define a query
export const Products = graphql`fragment productsFragment on Product {
  _id,createdAt,title,description,price,type,file_path,img_path
}
`