var express = require("express");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });

var app = express();

app.get("/", (req, res) =>
  res.send(
    `
<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="text" name="username" placeholder="name"/>
  <input type="file" name="avatar" />
  <button type="submit">submit</button>
</form>
`
  )
);

app.post("/profile", upload.single("avatar"), function(req, res, next) {
  // req.file is the `avatar` file
  console.log("uploaded file is: ", req.file.originalname);
  // req.body will hold the text fields, if there were any
  console.log("name field is: ", req.body.username);
});

app.listen(3000, () =>
  console.log(`Example app listening at http://localhost:${3000}`)
);
