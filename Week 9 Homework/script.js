var circuitsMap = "https://raw.githubusercontent.com/vincent-wijaya/FIT3179/main/Week%209%20Homework/circuitsMap.vg.json";
vegaEmbed("#circuitsMap", circuitsMap).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var circuitsEuropeMap = "https://raw.githubusercontent.com/vincent-wijaya/FIT3179/main/Week%209%20Homework/circuitsEuropeMap.vg.json";
vegaEmbed("#circuitsEuropeMap", circuitsEuropeMap).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);