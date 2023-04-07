import axios from 'axios'
import express, { Request, Response } from "express";
import CameraNetwork from '../models/cameraNetworkModel.js';


const postCameraNetworkData =async (req: Request, res: Response) => {
   

    const {name,description,cameras} = req.body
    const newCameraNetork =  new CameraNetwork({
        name: name,
        description: description,
        cameras: cameras,
    });
    try {
        await newCameraNetork.save()
        res.status(200).json({
           success: true,
          
            response:newCameraNetork
         });
    }catch(error){
        console.log(error)
        res.status(500).json({
            success: true,
            
             response:error
          });
    }
    
  
  }

  const getCameraNetorkData =async (req: Request, res: Response) => {
   
    try {
        const getAllCamerasNetworks =await CameraNetwork.find().populate('cameras')
        
         res.status(200).json({
            success: true,
          
             response:getAllCamerasNetworks
          });
    }catch(error){
        res.status(500).json({
            success: true,
           
             response:error
          });
    }
   
  
  }

const updatedCameraNetworkData =async (req: Request, res: Response) => {
   

    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    try {
        const updatedCameraData = await CameraNetwork.findByIdAndUpdate(
            id, {$push:{cameras:req.body.cameraId}}, options
        )
        res.status(200).json({
           success: true,
           
            response:updatedCameraData
         });
    }catch(error){
        // console.log(error)
        res.status(500).json({
            success: true,
           
             response:error
          });
    }
    
  
  }


  const deleteCameraNetorkData =async (req: Request, res: Response) => {
   

    
    try {
        const id = req.params.id;
        const DeletedData = await CameraNetwork.findByIdAndDelete(id)
        res.status(200).json({
           success: true,
          
            response:DeletedData
         });
    }catch(error){
        // console.log(error)
        res.status(500).json({
            success: true,
           
             response:error
          });
    }
    
  
  }

  export {
    postCameraNetworkData,
    updatedCameraNetworkData,
    deleteCameraNetorkData,
    getCameraNetorkData
  }