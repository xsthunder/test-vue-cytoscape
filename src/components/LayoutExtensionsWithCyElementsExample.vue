<template>
  <div id="holder">
    <button @click="click">test</button>
    <!-- {{elements}} -->
    <cytoscape
      :config="config"
      :preConfig="preConfig"
      :afterCreated="afterCreated"
      :debug="true"
      v-if="cyLoad"
    >
      <cy-element
        v-for="def in elements.nodes"
        :key="`${def.data.id}`"
        :definition="def"
      />
      <cy-element
        v-for="def in elements.edges"
        :key="`${def.data.id}`"
        :definition="def"
      />
    </cytoscape>
  </div>
</template>

<script>
/* eslint-disable */
import cola from "cytoscape-cola";
import static_elements from "./assets/test.json";
import static_config from "./assets/config";
function deep_copy(obj){
  return JSON.parse(JSON.stringify(obj))
}
// import cyspringy from 'cytoscape-springy'

// const elements = elements
const wait = (func, time=500)=>{
  setTimeout(func(), time);
}
export default {
  name: "app",
  data() {
    return {
      config:deep_copy(static_config),
      elements:deep_copy(static_elements),
      i: 1,
      cyLoad:false
    };
  },
  methods: {
    preConfig(cytoscape) {
      console.log("calling pre-config", static_config, static_elements);
      // cytoscape: this is the cytoscape constructor
      cytoscape.use(cola);
      // cyspringy(cytoscape)
    },
    afterCreated(cy) {
      console.log("after created", cy);
      // setTimeout(
      // ()=>cy.layout({
      //   name: 'breadthfirst',
      //   circle: false,
      //   roots: '#existingnode',
      //   spacingFactor: 1,
      //   padding: 50,
      //   fit: true,
      // }).run()
      // , 500
      // )

      setTimeout(
      ()=>cy.layout({
        name: 'random'
      }).run()
      , 500
      )
    },
    remove(cytoscape){

    },
    click(){
      console.log('onclick')
      if(this.cyLoad){
        this.elements = this.config = null
        this.cyLoad = false
      }
      else{
        this.elements = deep_copy(static_elements)
        this.config = deep_copy(static_config)
        this.cyLoad = true
      }
    }
  }
};
</script>

<style>
#holder {
  width: 100%;
  height: 1000px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
