

import 'dotenv/config';
import * as joi from 'joi';

interface EnVars{
    //* PORT of Application
    APP_PORT: number;
    // * BD Connection Interface
    DB_PORT: number;
    DB_NAME: string;
    DB_HOST: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
}

const envsSchema = joi.object({
    // * PORT of application
    APP_PORT: joi.number().required(),
    //* BD CONNECTION 
    DB_PORT: joi.number().required(),
    DB_NAME: joi.string().required(),
    DB_HOST: joi.string().required(),
    DB_USERNAME: joi.string().required(),
    DB_PASSWORD:  joi.string().required(),
})
.unknown(true)

const { error, value } = envsSchema.validate( process.env );

if( error ){
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnVars = value;

export const envs = {
    app_port: envVars.APP_PORT,
    
    port: envVars.DB_PORT,
    host: envVars.DB_HOST,
    username: envVars.DB_USERNAME,
    password:  envVars.DB_PASSWORD,
    database: envVars.DB_NAME,
}