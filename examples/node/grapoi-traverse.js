/**
 * Traverse a graph with Grapoi to find the nationalities of all people.
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

console.log(`house givenName: ${house.out(ns.schema.givenName).value}`)

/*
  - start at the Person class
  - traverse o->s over rdf:type
  - traverse s->o over schema:nationality
  - reduce to unique pointers
  - traverse s->o over schema:name
*/
const nationalities = rdf.grapoi({ dataset, term: ns.schema.Person })
  .in(ns.rdf.type)
  .out(ns.schema.nationality)
  .distinct()
  .out(ns.schema.name)

console.log('nationalities of known people:')

for (const value of nationalities.values) {
  console.log(`\t${value}`)
}
