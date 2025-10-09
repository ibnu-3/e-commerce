import multer from 'multer'
import path from 'path'
import fs from 'fs';
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}
const multerStorage = multer.diskStorage({
    destination:(req,file, cb)=>{
        cb(null, 'uploadDir');
    },
    filename:(req,file,cb)=>{
        const ext =file.mimetype.split('/')[1];
        cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
    }
});

const multerFilter = (req,file,cb)=>{
    if (file.mimetype.startsWith('image')) {
        cb(null, true)
    } else {
        cb(new Error('Not an image! please upload image only:'),false)
    }
}
const upload=multer({
    storage:multerStorage,
    fileFilter:multerFilter
})
export default upload;