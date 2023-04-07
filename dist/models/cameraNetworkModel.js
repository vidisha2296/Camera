import mongoose, { Schema } from 'mongoose';
const CameraNetworkSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    cameras: [{
            type: Schema.Types.ObjectId,
            ref: 'Camera'
        }]
});
//@ts-ignore
export default mongoose.model('CameraNetwork', CameraNetworkSchema);
//# sourceMappingURL=cameraNetworkModel.js.map