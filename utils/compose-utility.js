import fs from 'fs'
import path from 'path'
import creators from '../src/data/creators'

let contentTypes = creators
  .map((creator) => {
    return creator.content
  })
  .reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue)
  }, [])
  .filter((value, index, self) => {
    return self.indexOf(value) === index
  })
console.log(contentTypes)

fs.writeFile(path.join(__dirname, '../src/data/content.json'),
  JSON.stringify(contentTypes),
  err => {
    if (err) {
      console.error(err)
      return
    }
    console.info('Files written successfully!')
  }
)
