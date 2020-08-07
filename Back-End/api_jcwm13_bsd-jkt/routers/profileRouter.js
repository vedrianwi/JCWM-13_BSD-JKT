const router = require('express').Router()
const { upload } = require('../helpers/multer')

const { profileController } = require('../controllers')

// setup uploader
const DESTINATION = './public/images'
const uploader = upload(DESTINATION)

router.get('/profile/:id', profileController.getProfile)
router.patch('/profile/edit/:id', profileController.editProfile)
router.post('/profile/upload/:id', uploader, profileController.upload)

module.exports = router