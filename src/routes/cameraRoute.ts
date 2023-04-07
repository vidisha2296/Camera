import express from 'express';
import {Router} from "express";
import { getCameraData ,postCameraData,updatedCameraData,deleteCameraData} from '../controller/camera.js';
const router = Router()

router.route('/getCameras').get(getCameraData)
router.route('/createCameras').post(postCameraData)
router.route('/updatedCamera/:id').patch(updatedCameraData)
router.route('/deletedCamera/:id').delete(deleteCameraData)
export default router;