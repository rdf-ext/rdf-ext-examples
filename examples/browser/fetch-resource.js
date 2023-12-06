import rdf from 'rdf-ext'

async function fetchResource () {
  // make a GET request to the Gregory House resource of the housemd dataset
  const res = await rdf.fetch('https://housemd.rdf-ext.org/person/gregory-house')

  // check if the response is ok, otherwise log the problem to the console
  if (!res.ok) {
    console.log(`not able to load resource (${res.status}): ${await res.text()}`)
  }

  // parse the content and into a Dataset object
  const dataset = await res.dataset()

  return { dataset, res }
}

const run = document.getElementById('fetch-resource-run')
const status = document.getElementById('fetch-resource-status')
const contentType = document.getElementById('fetch-resource-content-type')
const ntriples = document.getElementById('fetch-resource-ntriples')

run.onclick = async event => {
  event.preventDefault()

  const { dataset, res } = await fetchResource()

  status.value = res.status
  contentType.value = res.headers.get('content-type')
  ntriples.innerHTML = dataset.toCanonical()
}
