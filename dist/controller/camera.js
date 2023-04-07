import Camera from '../models/cameraModel.js';
const getCameraData = async (req, res) => {
    try {
        const getAllCameras = await Camera.find();
        res.status(200).json({
            success: true,
            response: getAllCameras
        });
    }
    catch (error) {
        res.status(500).json({
            success: true,
            response: error
        });
    }
};
const postCameraData = async (req, res) => {
    const { name, description, url } = req.body;
    const newCamera = new Camera({
        name: name,
        description: description,
        url: url,
    });
    try {
        await newCamera.save();
        res.status(200).json({
            success: true,
            response: newCamera
        });
    }
    catch (error) {
        // console.log(error)
        res.status(500).json({
            success: true,
            response: error
        });
    }
};
const updatedCameraData = async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    try {
        const updatedCameraData = await Camera.findByIdAndUpdate(id, updatedData, options);
        res.status(200).json({
            success: true,
            response: updatedCameraData
        });
    }
    catch (error) {
        // console.log(error)
        res.status(500).json({
            success: true,
            response: error
        });
    }
};
const deleteCameraData = async (req, res) => {
    try {
        const id = req.params.id;
        const DeletedData = await Camera.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            response: DeletedData
        });
    }
    catch (error) {
        // console.log(error)
        res.status(500).json({
            success: true,
            response: error
        });
    }
};
export { getCameraData, postCameraData, updatedCameraData, deleteCameraData };
//# sourceMappingURL=camera.js.map