import multer from 'multer'
import path from 'path'

const multerStorage = multer.diskStorage({
    destination:(req,file, cb)=>{
        cb(null, 'uploads');
    },
    filename:(req,file,cb)=>{
        const ext =file.mimetype.split('/')[1];
        cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
    }
});

const multerFilter = (req,file,cb)=>{
    if (file.mimetype.startsWith('images')) {
        cb(null, true)
    } else {
        cb(new Error('Not an image! please upload image only:'))
    }
}
const upload=multer({
    storage:multerStorage,
    fileFilter:multerFilter
})
export default upload;