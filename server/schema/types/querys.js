import { GraphQLObjectType } from 'graphql';

import { UserType } from './user';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(_parentValue, _args, req) {
        return req.user;
      },
    },
  },
});

export { RootQueryType };
