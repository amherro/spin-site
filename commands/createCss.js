import fs from 'fs/promises'

let cssContent = '* {margin: 0};'

export const createCss = async (path) => {
    // Create CSS folder and file
    try {
        await fs.mkdir(path)
        await fs.writeFile(`${path}/style.css`, cssContent, { flag: 'a+' })
    } catch (error) {
        if(error) throw error
    }
}