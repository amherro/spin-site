import fs from 'fs/promises'

let newDirName = 'new-project'
let fileContent = '<h1>CLI Tool</h1><h2>This is my first CLI tool</h2>'
let htmlPath = `${newDirName}/index.html`
let cssPath = `${newDirName}/styles/style.css`
let jsPath = `${newDirName}/scripts/main.js`

// Create a new directory 
const makeDir = async () => {
    try {
        await fs.mkdir(newDirName)
        await writeToFile()
    } catch (error) {
        if(error) throw error
    }
}
makeDir()

// Create new file in the new directory
const writeToFile = async () => {
    try {
        await fs.writeFile(htmlPath, fileContent, { flag: 'a+' })
    } catch (error) {
        if(error) throw error
    }
}
