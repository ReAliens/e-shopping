import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query($category: CategoryInput) {
    category(input: $category) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            id
            value
            displayValue
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;
