var circuitsMap = "js/circuitsMap.vg.json";
vegaEmbed("#circuitsMap", circuitsMap).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// var circuitsEuropeMap = "circuitsEuropeMap.vg.json";
// vegaEmbed("#circuitsEuropeMap", circuitsEuropeMap).then(function(result) {
// // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);

var standings = "js/standings.vg.json";
vegaEmbed("#standings", standings).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var driverChampions = "js/champions.vg.json";
vegaEmbed("#champions", driverChampions).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var lapTimes = "js/lapTimes.vg.json";
vegaEmbed("#lapTimes", lapTimes).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);