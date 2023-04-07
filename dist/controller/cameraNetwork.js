import CameraNetwork from '../models/cameraNetworkModel.js';
const postCameraNetworkData = async (req, res) => {
    const { name, description, cameras } = req.body;
    const newCameraNetork = new CameraNetwork({
        name: name,
        description: description,
        cameras: cameras,
    });
    try {
        await newCameraNetork.save();
        res.status(200).json({
            success: true,
            response: newCameraNetork
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: true,
            response: error
        });
    }
};
const getCameraNetorkData = async (req, res) => {
    try {
        const getAllCamerasNetworks = await CameraNetwork.find().populate('cameras');
        res.status(200).json({
            success: true,
            response: getAllCamerasNetworks
        });
    }
    catch (error) {
        res.status(500).json({
            success: true,
            response: error
        });
    }
};
const updatedCameraNetworkData = async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    try {
        const updatedCameraData = await CameraNetwork.findByIdAndUpdate(id, { $push: { cameras: req.body.cameraId } }, options);
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
const deleteCameraNetorkData = async (req, res) => {
    try {
        const id = req.params.id;
        const DeletedData = await CameraNetwork.findByIdAndDelete(id);
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
export { postCameraNetworkData, updatedCameraNetworkData, deleteCameraNetorkData, getCameraNetorkData };
//# sourceMappingURL=cameraNetwork.js.map