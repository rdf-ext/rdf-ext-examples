/**
 * Traverse a graph with Grapoi and analyse the quads of the path.
 */

import { triples as housemd } from 'housemd'
import rdf from 'rdf-ext'

const dataset = rdf.dataset(housemd({ factory: rdf }))

const ns = {
  house: rdf.namespace('https://housemd.rdf-ext.org/person/'),
  schema: rdf.namespace('http://schema.org/'),
  rdf: rdf.namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#')
}

// create a Grapoi object for House
const house = rdf.grapoi({ dataset, term: ns.house('gregory-house') })

// traverse to the address
const address = house
  .out(ns.schema.homeLocation)
  .out(ns.schema.address)

// trim the path, traverse one level s->o, returns all traversed quads
const addressQuads = address
  .trim()
  .out()
  .quads()

console.log('address of the guy named Gregory:')
console.log(rdf.dataset(addressQuads).toString())
