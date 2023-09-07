/**
 * Use Grapoi to create the same triples as in the rdfjs-basics.js example file.
 */

import rdf from 'rdf-ext'

const ns = {
  house: rdf.namespace('https://housemd.rdf-ext.org/person/'),
  housePlace: rdf.namespace('https://housemd.rdf-ext.org/place/'),
  schema: rdf.namespace('http://schema.org/'),
  rdf: rdf.namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#')
}

// create a Grapoi object for House and add triples
const house = rdf.grapoi({ term: ns.house('gregory-house') })
  .addOut(ns.rdf.type, ns.schema.Person)
  .addOut(ns.schema.familyName, rdf.literal('House'))
  .addOut(ns.schema.givenName, rdf.literal('Gregory'))
  .addOut(ns.schema.homeLocation, ns.housePlace('221b-baker-street'), bakerStreet => {
    bakerStreet
      .addOut(ns.rdf.type, ns.schema.Place)
      .addOut(ns.schema.address, address => {
        address
          .addOut(ns.rdf.type, ns.schema.PostalAddress)
          .addOut(ns.schema.addressLocality, rdf.literal('Plainsboro Township'))
          .addOut(ns.schema.streetAddress, rdf.literal('221B Baker Street'))
      })
  })

console.log(house.dataset.toString())
