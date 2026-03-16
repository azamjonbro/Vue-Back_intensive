const {getAllAdmins, getOneAdmin, createAdmin} = require("../controllers/admin.controller")

const express = require("express")

const router = express.Router()


router.get("/admins", getAllAdmins)
router.get("/admins/:id", getOneAdmin)
router.post("/admin", createAdmin)

module.exports= router