const static_config = {
  autounselectify: false,
  boxSelectionEnabled: true,
  // zoom:1,
  // maxZoom:1e50,
  layout: {
    name: "cola"
  },
  style: [
    {
      selector: "node",
      css: {
        'label':'data(name)',
        // 'source-label':'data(name)',
        // 'target-label':'data(name)',
        "background-color": "red",
        // "width": "mapData(degree, 0, 20, 20, 60)",
        // "height": "mapData(degree, 0, 20, 20, 60)",
        // 'shape':'star',
        // 'border-style':'dotted',
        "text-valign" : "bottom",
        "text-halign" : "center",
        "font-size":'15',
        'text-wrap': 'wrap',
        // 'text-max-width':'1px',
        // 'text-overflow-wrap':'\n'
        // 'curve-style': 'taxi'

      }
    },
    {
      selector: "node[type='comp']",
      css: {
        label:'data(name)',
        "background-color": 'darkcyan', 
        "width": '45',
        "height": '45',
        // 'shape':'star',
        // 'border-style':'dotted',
        "text-valign" : "bottom",
        "text-halign" : "center",
        'text-wrap': 'wrap'

      }
    },
    {
      selector: "edge",
      css: {
        label:'data(type)',
        "line-color": "coral",
        'width':1,
        // "curve-style":'taxi'

      }
    }
  ],
  autolock:false,
  autoungrabify:false,
  elements: []
};
export default static_config;