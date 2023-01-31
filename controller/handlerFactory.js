const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/appError');
const { populate } = require('../model/userModel');



exports.createOne = Model => catchAsync(async (req,res,next)=>{
    doc = await Model.create(req.body);
    res.status(200).json({
        status: 'Success',
        data:{
            data:doc
        }
    });
})

exports.getAll = Model = catchAsync(async(req, res ,next)=>{
    doc = await Model.find();

    res.status(200).json({
        status:'Success',
        data:{
            data:doc
        }
    })
})

exports.getOne =(Model,popOption)=> catchAsync(async (req,res,next)=>{
    let query = Model.findById(req.params.id);

    if(popOption) query.populate(popOption);

    const doc = await query;

    if(!doc){
        return next(new AppError('No data Found with this ID',404))
    }

    res.status('200').json({
        status:'Success',
        data:{
            data:doc
        }
    })
})

exports.updateOne = Model = catchAsync(async(req,res,next)=>{
    const doc = await Model.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    });

    if(!doc) return next(new AppError('No Doc found on this ID',404));


    res.status(200).json({
        status:'Success',
        data:{
            data:doc
        }
    })
})

