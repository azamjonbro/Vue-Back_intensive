const {getAllAdmins, getOneAdmin, createAdmin, updateAdmin, deleteAdmin} = require("../controllers/admin.controller")

const express = require("express")

const router = express.Router()


router.get("/admins", getAllAdmins)
router.get("/admins/:id", getOneAdmin)
router.post("/admin", createAdmin),
router.put("/admin/:id", updateAdmin)
router.delete("/admin/:id", deleteAdmin)

module.exports= router