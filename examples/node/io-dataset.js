/**
 * Read and write Datasets with the I/O functions.
 */

import formatsPretty from '@rdfjs/formats/pretty.js'
import rdf from 'rdf-ext'

const fileUrl = new URL('../../node_modules/housemd/dist/housemd.nt', import.meta.url)
const fileRelativeUrl = './node_modules/housemd/dist/housemd.nt'
const httpUrl = 'https://housemd.rdf-ext.org/person/gregory-house'

async function main () {
  // read a Dataset from a file URL
  const gregoryHouseFile = await rdf.io.dataset.fromURL(fileUrl)
  console.log(`read ${gregoryHouseFile.size} triples from ${fileUrl}`)

  // read a Dataset from a relative file URL
  const gregoryHouseFileRelative = await rdf.io.dataset.fromURL(fileRelativeUrl)
  console.log(`read ${gregoryHouseFileRelative.size} triples from ${fileRelativeUrl}`)

  // read a Dataset from a http URL
  const gregoryHouseHttp = await rdf.io.dataset.fromURL(httpUrl)
  console.log(`read ${gregoryHouseHttp.size} triples from ${httpUrl}`)

  // clone the default environment
  const rdfPretty = rdf.clone()

  // import pretty print serializers
  rdfPretty.formats.import(formatsPretty)

  // it's also possible import into the default like this:
  // rdf.formats.import(formatsPretty)

  // serialize a Dataset to plain text
  console.log(await rdfPretty.io.dataset.toText('text/turtle', gregoryHouseHttp))
}

main()
