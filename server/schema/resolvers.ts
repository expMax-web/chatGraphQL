const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const messages = [];

export const resolvers = {
  Query: {
    books: () => books,
  },
};
