import multer from 'multer';
import path from 'path';


export const multerDisk = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

export const upload = multer({
  storage: multerDisk,
  limits: { fileSize: '1000000' },
  fileFilter: (_req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/
    const mimeType = fileTypes.test(file.mimetype)
    const extname = fileTypes.test(path.extname(file.originalname))

    if (mimeType && extname) {
      return cb(null, true)
    }
    cb('Proporcione un formato de imagen válido.')
  }
}).single('image');
