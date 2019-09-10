<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <md-field>
      <label contextmenu>Product name</label>
      <md-input v-model="name"></md-input>
    </md-field>
    <h4>Name :{{product.name}}</h4>
    <md-button class="md-raised md-primary" :md-ripple="true" @click="addProduct">Primary</md-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      product: {
        name: 'bb',
        description: ''
      },
      name: ""
    }
  },
  methods: {
    addProduct() {
      console.log(this.product)
      return this.product.name = this.name
    }
  },
  mounted: function () { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
