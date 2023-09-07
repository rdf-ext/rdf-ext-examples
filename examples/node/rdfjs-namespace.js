/**
 * Use the namespace builder to create NamedNode objects.
 */

import rdf from 'rdf-ext'

// create a namespace builder for the known namespaces
const ns = {
  house: rdf.namespace('https://housemd.rdf-ext.org/person/'),
  housePlace: rdf.namespace('https://housemd.rdf-ext.org/place/'),
  schema: rdf.namespace('http://schema.org/'),
  rdf: rdf.namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#')
}

// create RDF/JS NamedNode and BlankNode subjects
const house = ns.house('gregory-house')
const bakerStreet = ns.housePlace('221b-baker-street')
const address = rdf.blankNode()

// use the defined namespaces to create RDF/JS Quads
const housePersonQuad = rdf.quad(house, ns.rdf.type, ns.schema.Person)
const houseFamilyNameQuad = rdf.quad(house, ns.schema.familyName, rdf.literal('House'))
const houseGivenNameQuad = rdf.quad(house, ns.schema.givenName, rdf.literal('Gregory'))
const houseHomeLocationQuad = rdf.quad(house, ns.schema.homeLocation, bakerStreet)
const bakerStreetPlaceQuad = rdf.quad(bakerStreet, ns.rdf.type, ns.schema.Place)
const bakerStreetAddressQuad = rdf.quad(bakerStreet, ns.schema.address, address)
const bakerStreetPostalAddressQuad = rdf.quad(address, ns.rdf.type, ns.schema.PostalAddress)
const bakerStreetLocalityQuad = rdf.quad(address, ns.schema.addressLocality, rdf.literal('Plainsboro Township'))
const bakerStreetStreetAddressQuad = rdf.quad(address, ns.schema.streetAddress, rdf.literal('221B Baker Street'))

const dataset = rdf.dataset()

dataset
  .add(housePersonQuad)
  .add(houseFamilyNameQuad)
  .add(houseGivenNameQuad)
  .add(houseHomeLocationQuad)
  .add(bakerStreetPlaceQuad)
  .add(bakerStreetAddressQuad)
  .add(bakerStreetPostalAddressQuad)
  .add(bakerStreetLocalityQuad)
  .add(bakerStreetStreetAddressQuad)

console.log(dataset.toString())
