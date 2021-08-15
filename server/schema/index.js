import { GraphQLSchema } from 'graphql';

import { RootQueryType } from './types/querys';
import { mutation } from './types/mutations';

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation,
});

export { schema };
