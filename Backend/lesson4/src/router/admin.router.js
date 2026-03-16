const {getAllAdmins} = require("../controllers/admin.controller")

const express = require("express")

const router = express.Router()


router.get("/admins", getAllAdmins)

module.exports= router