import express, { Application } from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

import * as colors from 'colors';

import { PORT } from './config/env';
import { mainRouter } from './main/main.routes';

export class Server {
    private app: Application;
    public color: any;

    constructor(private port?: number | string) {
        this.color = colors;
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    public async listen(): Promise<any> {
        await this.app.listen(this.app.get('port'), () => {
            console.log('Server on port:', this.app.get('port').green);
        });
    }

    private settings(): void {
        this.app.set('port', PORT || this.port || process.env.PORT || 3000);
    }

    private middlewares(): void {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.static(path.resolve(__dirname, 'public'), { extensions: ['html'] }));
        this.app.use(cors());
    }

    private routes(): void {
        this.app.use('/api', mainRouter);
    }
}