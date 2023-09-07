/**
 * Create Term, Quad, and Dataset objects and log them to the console.
 */

import rdf from 'rdf-ext'

// create all required RDF/JS Terms
const house = rdf.namedNode('https://housemd.rdf-ext.org/person/gregory-house')
const type = rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type')
const person = rdf.namedNode('http://schema.org/Person')
const familyName = rdf.namedNode('http://schema.org/familyName')
const houseFamilyName = rdf.literal('House')
const givenName = rdf.namedNode('http://schema.org/givenName')
const houseGivenName = rdf.literal('Gregory')
const homeLocation = rdf.namedNode('http://schema.org/homeLocation')
const bakerStreet = rdf.namedNode('https://housemd.rdf-ext.org/place/221b-baker-street')
const place = rdf.namedNode('http://schema.org/Place')
const address = rdf.namedNode('http://schema.org/address')
const bakerStreetAddress = rdf.blankNode()
const postalAddress = rdf.namedNode('http://schema.org/PostalAddress')
const addressLocality = rdf.namedNode('http://schema.org/addressLocality')
const bakerStreetLocality = rdf.literal('Plainsboro Township')
const streetAddress = rdf.namedNode('http://schema.org/streetAddress')
const bakerStreetStreetAddress = rdf.literal('221B Baker Street')

// then create RDF/JS Quads
const housePersonQuad = rdf.quad(house, type, person)
const houseFamilyNameQuad = rdf.quad(house, familyName, houseFamilyName)
const houseGivenNameQuad = rdf.quad(house, givenName, houseGivenName)
const houseHomeLocationQuad = rdf.quad(house, homeLocation, bakerStreet)
const bakerStreetPlaceQuad = rdf.quad(bakerStreet, type, place)
const bakerStreetAddressQuad = rdf.quad(bakerStreet, address, bakerStreetAddress)
const bakerStreetPostalAddressQuad = rdf.quad(bakerStreetAddress, type, postalAddress)
const bakerStreetLocalityQuad = rdf.quad(bakerStreetAddress, addressLocality, bakerStreetLocality)
const bakerStreetStreetAddressQuad = rdf.quad(bakerStreetAddress, streetAddress, bakerStreetStreetAddress)

// all Quads are added to an RDF/JS Dataset
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

// RDF-Ext provides .toString() methods for all objects:
console.log(`house NamedNode: ${house.toString()}`)
console.log(`givenName Literal: ${houseGivenName.toString()}`)
console.log(`givenName Quad: ${houseGivenNameQuad.toString()}`)
console.log('dataset:')
console.log(dataset.toString())
