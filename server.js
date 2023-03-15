const exp = require("express");
const app = exp();
const diseaseApp= require("./APIS/diseaseApi")
const symptomApp=require("./APIS/symptomApi")
//execute routes based on path
app.use("/diseaseOperations",diseaseApp)
app.use("/symptomOperations",symptomApp)

//homepage
app.get("/", function (req, res) {
  res.send("Home Page");
});

const port = 5000;
app.listen(port, () => console.log(`Server can hear you on ${port}....`));
