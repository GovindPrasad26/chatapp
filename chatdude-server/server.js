// const express = require('express')
// const cors =require('cors')
// const app  = express()
// app.use(express.json())
// app.use(cors())
// port =5665
// const routes =require('./routes/UserRoutes')
// app.use('/users',routes)
// const secondroute=require("./routes/chatRoutes")
// app.use('/chat',secondroute)
//   app.listen(port,()=>{
//     console.log("server is created",port)
//   })

 const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const routes = require('./routes/UserRoutes');
app.use('/users', routes);

const secondroute = require('./routes/chatRoutes');
app.use('/chat', secondroute);

// ✅ Use dynamic port for deployment, default to 5665 locally
const PORT = process.env.PORT || 5665;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

