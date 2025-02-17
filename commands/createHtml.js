import fs from 'fs/promises'

// Placeholder HTML content
let htmlFileContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spin Site</title>
    <link rel="stylesheet" href="./styles/style.css">
    <script src="./scripts/main.js"></script>
</head>
<body>
    <h1 class="title">Thank you for using Spin Site!</h1>
</body>
</html>`

export const createHtmlFile = async (path) => {
    // Create HTML file
    try {
        await fs.writeFile(path, htmlFileContent, { flag: 'a+' })
    } catch (error) {
        if(error) throw error
    }
}