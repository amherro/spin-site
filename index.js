import fs from 'fs/promises'
import { createHtmlFile } from './commands/createHtml.js'
import { createCss } from './commands/createCss.js'

let newDirName = 'test-site-spin'
export let cssDirectoryPath = `${newDirName}/styles`
export let jsDirectoryPath = `${newDirName}/scripts`

let htmlPath = `${newDirName}/index.html`
let cssPath = `${cssDirectoryPath}/style.css`
let jsPath = `${newDirName}/scripts/main.js`

// Create a new directory 
const makeDir = async () => {
    try {
        await fs.mkdir(newDirName)
        await createHtmlFile(htmlPath)
        await createCss(cssPath)
    } catch (error) {
        if(error) throw error
    }
}
makeDir()