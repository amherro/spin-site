import fs from 'fs/promises'

let jsContent = "console.log('Hello World')"

export const createJs = async (path) => {
    // Create Javascript folder and file
    try {
        await fs.mkdir(path)
        await fs.writeFile(`${path}/index.js`, jsContent, { flag: "a+" })
    } catch (error) {
        if(error) throw error
    }
}