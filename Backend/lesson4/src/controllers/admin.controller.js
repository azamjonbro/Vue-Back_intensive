const AdminModel = require("../models/admin.model")

const getAllAdmins = async (req, res)=>{
    try {
        let allAdmin = await AdminModel.find()
        res.status(200).json(allAdmin)
    } catch (error) {
        console.log("admin get qilishda server hatoligi mavjud");
    }
}

module.exports={
    getAllAdmins
}