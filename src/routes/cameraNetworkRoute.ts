import express from 'express';
import {Router} from "express";
import {postCameraNetworkData,updatedCameraNetworkData,deleteCameraNetorkData,getCameraNetorkData} from '../controller/cameraNetwork.js'
const router = Router()

router.route('/createCameraNetwork').post(postCameraNetworkData)
router.route('/getCameraNetwork').get(getCameraNetorkData)
router.route('/updatedCameraNetwork/:id').patch(updatedCameraNetworkData)
router.route('/deletedCameraNetwork/:id').delete(deleteCameraNetorkData)

export default router;