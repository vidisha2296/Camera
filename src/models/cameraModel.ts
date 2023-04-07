import mongoose, { Document, Schema } from 'mongoose';

export interface ICamera {
    name: string;
    description:string;
    url:string;
}

export interface ICameraModel extends ICamera, Document {}

const CameraSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        description :{ type: String, required: true },
        url :{ type: String, required: true }
    }
    
);

export default mongoose.model<ICameraModel>('Camera', CameraSchema);