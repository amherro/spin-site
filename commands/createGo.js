import fs from 'fs/promises'

let goContent = 'Hello from Go'

export const createGo = async (path) => {
    // Create CSS folder and file
    try {
        await fs.writeFile(`${path}/index.go`, goContent, { flag: 'a+' })
    } catch (error) {
        if(error) throw error
    }
}