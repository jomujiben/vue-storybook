export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "beneva",
    values: [
      {
        name: "beneva",
        value: "#4b009b",
      },
      {
        name: "white",
        value: "#ffffff",
      },
      {
        name: "black",
        value: "#000000",
      },
    ],
  },
};
