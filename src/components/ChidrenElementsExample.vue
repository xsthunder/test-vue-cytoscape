<template>
  <div id="holder">
    <button @click="click">test</button>
    <cytoscape
      :config="config"
      :debug="true"
      v-on:mousedown="addNode"
      v-on:cxttapstart="updateNode"
      v-if="isCy"
    >
      <cy-element
        v-for="def in elements"
        :key="`${def.data.id}`"
        :definition="def"
      />
    </cytoscape>
  </div>
</template>

<script>
import static_config from '../utils/dummy-config'

const static_elements = [...static_config.elements]
delete static_config.elements
function deep_copy(obj){
  return JSON.parse(JSON.stringify(obj))
}
export default {
  name: 'App',
  data () {
    return {
      config:static_config,
      i: 0,
      elements:static_elements,
      isCy:false
    }
  },
  methods: {
    click(){
      console.log('click')
      this.isCy = ! this.isCy
      this.elements = deep_copy(static_elements)
      this.config = deep_copy(static_config)
    },
    addNode (event) {
      const { position } = event
      const n = {
        group: 'nodes',
        data: { id: `n${this.i++}` },
        position
      }

      this.elements = [...this.elements, n]
    },
    updateNode (event) {
      if (event.target.id) {
        // event.target.style({shape:'rectangle'})
        event.target.classes('customClass')
        // console.log('event',event)
        // const n = {
        //   data: { id: event.target.id()}, 
        //   'style':{shape: 'rectangle'},
        //   position: event.target.position(),
        //   group: 'nodes'
        // }
        // // removeNode(event)
        // console.log('updating: ', n)
        // const elements = [
        //   ...this.elements.filter(e => e.data.id !== event.target.id()),
        //   n
        // ]
        // console.log('filtered elements: ', elements)
        // this.elements = elements
        console.log(event.cy)
      }
    },
    removeNode (event) {
      if (event.target.id) {
        console.log('removing: ', event.target.id())
        this.elements = this.elements.filter(
          e => e.data.id !== event.target.id()
        )
      }
    }
  }
}
</script>

<style>
#holder {
  width: 100%;
  height: 400px;
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
