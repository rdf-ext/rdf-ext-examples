import housemd from 'housemd'
import rdf from 'rdf-ext'

// import the housemd RDF/JS Quads and use RDF-Ext as factory
const quads = housemd({ factory: rdf })

// load the quads into a RDF/JS dataset
const dataset = rdf.dataset(quads)

// dump the content of the dataset to the console
console.log(dataset.toCanonical())
