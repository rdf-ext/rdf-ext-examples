import express from 'express'

async function main () {
  const app = express()

  app.use(express.static('dist'))
  app.use(express.static('public'))

  const server = app.listen(8080, err => {
    if (err) {
      console.error(err)
    } else {
      console.log(`server listening at http://localhost:${server.address().port}/`)
    }
  })
}

main()
