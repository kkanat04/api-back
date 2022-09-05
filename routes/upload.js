const mullter = require('multer');
const path = require('path')

const storageEngine = mullter.diskStorage({
    destination: './public/files',
    filename: (req, file, fn) => {
        fn(
            null,
            `${new Date.getTime().toString()} - ${file.fieldname}${path.extname(file.originalname)}`
        )
    }
})

const upload = mullter({
    storage: storageEngine,
    limits: {fileSize: 200000},
    fileFilter:(req, file, callback) => {
        valideFile(file, callback)
    }
}).single('avatar')

const valideFile = (file, cb) => {
    let allowedFileTypes = /jpeg|jpg|png/
    const extension = allowedFileTypes.test(
        path.extname(file.orginalname).toLocaleLowerCase()
    )
    const mimeType = allowedFileTypes.test(file.mimetype)
    if (extension && mimeType) {
        return cb(null, true)
    }
    else {
        cb('invalid file type. Only jpeg|jpg|png file are allowed')
    }
}

module.exports = upload