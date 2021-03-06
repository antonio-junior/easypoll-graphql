import EasyGraphQLTester from 'easygraphql-tester';

import { typeDefs, resolvers } from '../../../src/graphql/schema';

const typeDefsString = typeDefs.map(t => t.loc?.source.body);
const tester = new EasyGraphQLTester(typeDefsString, resolvers);

const context = {
  req: { cookies: [] },
  res: {
    cookie: (name: string, val: string, opt: string): string =>
      `Cookie added: ${name}, ${val}, ${opt}`
  }
};

export { tester, context };
