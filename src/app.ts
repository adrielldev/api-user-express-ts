import express from "express";

const app = express();

import userRouter from './routers/user.routes'

app.use(express.json())
app.use('/users',userRouter)

/* app.listen(3000,()=>{
    console.log('running on 3000');
})
 */

export default app
