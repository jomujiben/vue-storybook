<template>
  <h1 :class="classes">{{ title }}</h1>
</template>

<script>
import "./title.css";

export default {
  name: "MyTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
