import MyTitle from "./Title.vue";

export default {
  title: "Example/Title",
  component: MyTitle,
};

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyTitle },
  template: "<my-button />",
});
