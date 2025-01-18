import fs from 'fs/promises'
import { createHtmlFile } from './commands/createHtml.js'
import { createCss } from './commands/createCss.js'
import { createJs } from './commands/createJs.js'
import { createGo } from './commands/createGo.js'

let newDirName = 'test-site-spin'

let _cssDirectoryPath = `${newDirName}/styles`
let _jsDirectoryPath = `${newDirName}/scripts`

let _htmlPath = `${newDirName}/index.html`

// Create a new directory 
const makeDir = async (projectType) => {
    try {
        await fs.mkdir(newDirName)
        switch (projectType) {
            case 'Frontend Website':
                await createHtmlFile(_htmlPath)
                await createCss(_cssDirectoryPath)
                await createJs(_jsDirectoryPath)
                break;
            case 'Go':
                await createGo(newDirName)
                break;
            default:
                throw new Error('Please select a project type')
        }
    } catch (error) {
        if(error) throw error
    }
}

makeDir('Frontend Website')