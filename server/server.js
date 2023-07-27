import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import votesRoutes from './routes/votes.js';
import userloginRoutes from './routes/user.js';
import authRoutes from './routes/authhumanities.js';
import Voter from './models/Voter.js';
import ScienceStudents from './models/ScienceStudents.js';
import HumanitiesStudents from './models/HumanitiesStudents.js';
import cookieParser from 'cookie-parser';

/*CONFIGURATIONS*/
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

/*ROUTES*/
app.use("/api/client", clientRoutes);
app.use("/api/general", generalRoutes);
app.use("/api/management", managementRoutes);
app.use("/api/votes", votesRoutes);
app.use("/api/userlogin", userloginRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});


//updates a single voter in database
app.put('/voter/:id', async(req, res) => {
    try {
        const{id} =req.params;
        const voter = await Voter.findByIdAndUpdate(id, req.body);
        //we cannot find any voter in database
        if(!voter){
            return res.status(404).json({message: `cannot find any voter with ID ${id}`})
        }
        const updatedVoter = await Voter.findById(id);
        res.status(200).json(updatedVoter);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


//gets data of one voter by ID from the database
app.get('/voter/:id', async(req, res) => {
   try{
        const {id} = req.params;
        const voter = await Voter.findById(id);
        res.status(200).json(voter);
   } catch (error) {
    res.status(500).json({message: error.message})
   }
})

//sends data to database using postman
app.post('/voter', async(req, res) => {
    try{
        const voter = await Voter.create(req.body)
        res.status(200).json(voter);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//sends data to database using postman
app.post('/science-students', async(req, res) => {
    try{
        const scienceStudent = await ScienceStudents.create(req.body)
        res.status(200).json(scienceStudent);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//sends data to database using postman
app.post('/humanities-students', async(req, res) => {
    try{
        const humanitiesStudent = await HumanitiesStudents.create(req.body)
        res.status(200).json(humanitiesStudent);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

mongoose.set("strictQuery", false)

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log("Backend server is running!");
        })
        console.log("DB Connection is successful")
    }).catch((err) => {
        console.log(err);
    });






