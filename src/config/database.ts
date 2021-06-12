import mongoose from 'mongoose';
import { MONGODB } from './env';

export class DBConnection {
    private uri: string = MONGODB;
    public async connectMongoose(): Promise<any> {
        try {
            await mongoose.connect(this.uri,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true,
                    useFindAndModify: false
                });
            console.log('MongoDB is connected');
        } catch (error) {
            console.error(error);
        }
    }
}