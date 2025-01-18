import fs from 'fs/promises'
import { cssDirectoryPath } from '../index.js'

let cssContent = `CSS content`

export const createCss = async () => {
    // Create CSS folder and file
    await fs.mkdir(cssDirectoryPath)
    await fs.writeFile(`${cssDirectoryPath}/style.css`, cssContent, {flag: 'a+'})
}