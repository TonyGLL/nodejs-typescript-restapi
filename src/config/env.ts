import * as dotenv from 'dotenv';

dotenv.config();

export const PORT: string = process.env.PORT as string;
export const MONGODB: string = process.env.MONGODB_ATLAS as string;