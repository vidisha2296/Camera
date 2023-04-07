import mongoose, { Document, Schema } from 'mongoose';
// import ICameraModel from './cameraModel.js'
export interface IPayments {
    
        name: string;
        description: string;
        url:string;
       
    }

export interface ICameraNetwork {
    name: string;
    description:string;
    cameras:Array<IPayments>;
}

export interface ICameraModelNetwork extends ICameraNetwork, Document {}

const CameraNetworkSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        description :{ type: String, required: true },
        cameras:[{ 
            type: Schema.Types.ObjectId, 
            ref: 'Camera' }]
    }
    
);
//@ts-ignore
export default mongoose.model('CameraNetwork', CameraNetworkSchema);