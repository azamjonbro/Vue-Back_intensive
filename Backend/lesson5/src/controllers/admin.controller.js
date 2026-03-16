const AdminModel = require("../models/admin.model")
const bcrypt = require("bcrypt")
const getAllAdmins = async (req, res)=>{
    try {
        let allAdmin = await AdminModel.find()
        res.status(200).json(allAdmin)
    } catch (error) {
        console.log("admin get qilishda server hatoligi mavjud");
    }
}
const getOneAdmin = async (req,res)=>{
    try {
        let {id} = req.params
        console.log(id);

        let oneAdmin = await AdminModel.findOne({_id:id})
        console.log(oneAdmin);
        
        
    } catch (error) {
        console.log("admin get qilishda server hatoligi mavjud");
    }
}

const createAdmin = async (req, res) => {
    try {
        let { name, username, password } = req.body;

        if (!name || !username || !password) {
            return res.status(403).json({ message: "Malumot to'liq emas" });
        }
        let passwordHash = await bcrypt.hash(password,12);
        
        let newAdmin = new AdminModel({
            name,
            username,
            password: passwordHash
        });

        await newAdmin.save();
        res.status(201).json({ message: "Admin muvoffaqiyatli yaratildi" });
    } catch (error) {
        res.status(500).json({ message: "Serverda muammo bor" });
    }
};


module.exports={
    getAllAdmins,
    getOneAdmin,
    createAdmin
}