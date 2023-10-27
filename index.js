require('dotenv').config();

const express=require('express');
const mongoose=require('mongoose');

const cors=require('cors');

const multer=require('multer');
const {storage}=require('./cloudinary');

const Buyer=require('./models/buyer');

const upload=multer({storage});

const app=express();
// app.use(express.json());
app.use(cors());

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch(err=>{
    console.log('Error', err);
});


app.post('/api/add_buyer', upload.single('screenshot'), async(req, res)=>{
    console.log(req.body);
    const buyer=new Buyer({
        size: req.body.size,
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        college: req.body.college,
        year: req.body.year,
        scholar_no: req.body.scholar_no,
        address: req.body.address,
        quantity: req.body.quantity,
        amount: req.body.amount,
        img_url: req.file.path,
    });

    await buyer.save();
    res.send({"status": "200"});
});


app.get('/api/admin', async (req, res)=>{
    const buyers=await Buyer.find({});
    console.log(buyers);
    res.send(buyers);
});


app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`);
});

