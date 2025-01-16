import fs from 'fs/promises'
import { cssDirectoryPath } from '../index.js'

let cssContent = `CSS content`

export const createCss = async () => {
    // Create HTML folder
    await createCssFolder()
    // await createCssFile(cssDirectoryPath)

}

const createCssFolder = async () => {
    try {
        await fs.mkdir(cssDirectoryPath)
    } catch (error) {
        if(error) throw error
    }
}

// const createCssFile = async (path) => {
//     try {
//         await fs.writeFile(path, cssContent, {flag: 'a+'})
//     } catch (error) {
//         if (error) throw error
//     }
// }