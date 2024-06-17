const userModel = require('../models/user');


//register
module.exports.register = async (req, res) => {
    console.log(req.body);

    try {
        let result = await userModel.create(req.body)


        res.send({ status: "success", data: { id: dataValues.id } });

    } catch (error) {

        res.send({ status: "error", message: "User registration failed" });

    };


}

//get
module.exports.get = async (req, res) => {


    try {
        let data = await userModel.findByPK(req.body.id)
        res.send({ status: "success", message: { data: data } });

    } catch (error) {

        res.send({ status: "error", message: "User not found" });

    };

}


module.exports.update = async (req, res) => {


    try {
        let status = await userModel.findByPK(req.body.id)
        userModel.password = req.body.password;
        await userModel.save();


        res.send({ status: "success", message: "user updated" });

    } catch (error) {

        res.send({ status: "error", message: "User not updated" });

    };

}


module.exports.delete = async (req, res) => {

    try {
        let user = await userModel.findByPK(req.body.id)
        await user.destroy();
        res.send({ status: "success", message: "user deleted" });
    } catch (error) {

        res.send({ status: "error", message: "User not deleted" });

    };
}



