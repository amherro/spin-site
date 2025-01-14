import fs from 'fs'

// Create a new directory 


// Push a new file to directory


// Write to file
let data = ''
fs.writeFile('./project/index.html', data, 'utf8', (err) => {
    if(err) throw err;

    // Print out data added to (file name)
    console.log('Data added to file')
})
