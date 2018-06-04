<template>
  <div id="app">
    <round-button @click="onClick()">ボタン</round-button>
    <div>メッセージ: {{message}}</div>
    <div v-if="$navigator.isPC">clickイベントが発火するはず</div>
    <div v-if="!$navigator.isPC">touchEndイベントが発火するはず</div>
    <ul>
      <li>width : {{$navigator.width}}</li>
      <li>PC : {{$navigator.isPC}}</li>
      <li>Tablet : {{$navigator.isTablet}}</li>
      <li>Phone : {{$navigator.isPhone}}</li>
    </ul>
  </div>
</template>

<script>
import RoundButton from "./components/RoundButton";
export default {
  name: "App",
  data() {
    return {
      message: ""
    };
  },
  methods: {
    onClick() {
      this.message = new Date();
    }
  },
  components: {
    RoundButton
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
