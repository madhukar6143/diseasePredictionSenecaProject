const exp = require("express");
const diseaseApp = exp.Router();
diseaseApp.use(exp.json());
const sequelize =require('../sequelizeInstance/sequelizeInstance')
const Disease = require('../models/disease')


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
 
 diseaseApp.get("/insert-data", (req, res) => {
    try {


        Disease.create({
            disease_id: 5,
            disease_name: "Covid"
        }).then(()=> {
            
            res.status(201).send("result.toJSON()")
            
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
            res.status(500).send(error.parent.sqlMessage)
        });
     
    } catch (error) {
        // Handle any other errors that may occur and return a 500 status code with an error message
        return res.status(500).send({ error: error.message });
    }
});

diseaseApp.get("/deletedisease", (req, res) => {
    try {
        // Get the request body as an object
        Disease.destroy({
            where: {
              disease_id: 2
            }
        }).then((numDeleted) => {
            if (numDeleted === 1) 
            res.status(201).send('data deleted succesfully')
            else
            res.status(404).send("record not found")
        }).catch((error) => {
            
            return res.status(400).send('Unable to delete data : ', error);
        });
    } catch (error) {
        // Handle any other errors that may occur and return a 500 status code with an error message
        return res.status(500).send({ error: error.message });
    }
});





module.exports=diseaseApp;