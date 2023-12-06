/**
 * Read and write Datasets with the I/O functions.
 */

import formatsPretty from '@rdfjs/formats/pretty.js'
import rdf from 'rdf-ext'

const run = document.getElementById('io-dataset-run')
const turtle = document.getElementById('io-dataset-turtle')

run.onclick = async event => {
  event.preventDefault()

  const url = 'https://housemd.rdf-ext.org/person/gregory-house'

  // read a Dataset from a http URL
  const gregoryHouse = await rdf.io.dataset.fromURL(url)
  console.log(`read ${gregoryHouse.size} triples from ${url}`)

  // clone the default environment
  const rdfPretty = rdf.clone()

  // import pretty print serializers
  rdfPretty.formats.import(formatsPretty)

  // serialize a Dataset to plain text
  turtle.innerHTML = await rdfPretty.io.dataset.toText('text/turtle', gregoryHouse)
}
