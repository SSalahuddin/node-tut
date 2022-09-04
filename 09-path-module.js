//path module functions
const path = require('path')

//shows platform-specific file separator, in case of windows it is \
console.log(path.sep)

//relative path
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

//provides filename
const base = path.basename(filePath)
console.log(base)

//absolute path
const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute)