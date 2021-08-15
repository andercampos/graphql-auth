import { GraphQLObjectType, GraphQLString } from 'graphql';

import { UserType } from './user';
import { signup, login } from '../../services/auth';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: (_parentValue, { email, password }, req) => {
        return signup({ email, password, req });
      },
    },
    logout: {
      type: UserType,
      resolve: (_parentValue, _args, req) => {
        const { user } = req;
        req.logout();
        return user;
      },
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: (_parentValue, { email, password }, req) => {
        return login({ email, password, req });
      },
    },
  },
});
export { mutation };
