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

const updateAdmin = async(req, res)=>{
    try {
        let {id} = req.params
        let {username, name, password} = req.body

        
        let checkAdmin = await AdminModel.findOne({_id:id})
        if(!checkAdmin){
            return res.status(403).json({message:"admin mavjud emas"})
        }

        
        let hashedpass =await bcrypt.hash(password, 12)

        let newUpdatedAdmin = await AdminModel.findOneAndUpdate({_id:id}, {username, name, password:hashedpass}, {new:true})


        res.status(200).json({message:"Admin muvoffaqiyatli yangilandi", newUpdatedAdmin})
        

    } catch (error) {
         res.status(500).json({ message: "Serverda muammo bor" });
    }
}

const deleteAdmin = async(req, res)=>{
    try {
        let {id} = req.params
        let deletedAdmin = await AdminModel.findOneAndDelete({_id:id})
        if(!deletedAdmin){
            return res.status(403).json({message:"admin mavjud emas"})
        }
        res.status(200).json({message:"Admin muvoffaqiyatli o'chirildi", deletedAdmin})
    } catch (error) {
        res.status(500).json({ message: "Serverda muammo bor" });
    }
}


module.exports={
    getAllAdmins,
    getOneAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin
}