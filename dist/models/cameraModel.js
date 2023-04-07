import mongoose, { Schema } from 'mongoose';
const CameraSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true }
});
export default mongoose.model('Camera', CameraSchema);
//# sourceMappingURL=cameraModel.js.map