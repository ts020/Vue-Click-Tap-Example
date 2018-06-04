<template>
  <div class="round-button" v-on="tap"><slot /></div>
</template>
<style scoped>
.round-button {
  background: green;
  padding: 4px 24px;
  display: inline-block;
  border-radius: 30px;
  color: white;
  cursor: pointer;
}

.round-button:hover {
  background: lightgreen;
  color: green;
}
</style>
<script>
import vTap from "../mixin/v-tap";
export default {
  mixins: [vTap]
};
</script>
