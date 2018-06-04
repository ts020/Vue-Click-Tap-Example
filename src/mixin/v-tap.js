export default {
  computed: {
    tap() {
      const self = this;

      if (!this.$navigator.isPC) {
        return {
          touchend() {
            self.$emit("touchend");
          }
        };
      }
      return {
        click() {
          self.$emit("click");
        }
      };
    }
  }
};
