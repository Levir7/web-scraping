

import 'dotenv/config';
import * as joi from 'joi';

interface EnVars{
    //* PORT of Application
    APP_PORT: number;
    // * BD Connection Interface
    DATABASE_PORT: number;
    DATABASE_NAME: string;
    DATABASE_HOST: string;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
}

const envsSchema = joi.object({
    // * PORT of application
    APP_PORT: joi.number().required(),
    //* BD CONNECTION 
    DATABASE_PORT: joi.number().required(),
    DATABASE_NAME: joi.string().required(),
    DATABASE_HOST: joi.string().required(),
    DATABASE_USER: joi.string().required(),
    DATABASE_PASSWORD:  joi.string().required(),
    

})
.unknown(true)

const { error, value } = envsSchema.validate( process.env );

if( error ){
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnVars = value;

export const envs = {
    app_port: envVars.APP_PORT,
    
    port: envVars.DATABASE_PORT,
    host: envVars.DATABASE_HOST,
    username: envVars.DATABASE_USER,
    password:  envVars.DATABASE_PASSWORD,
    database: envVars.DATABASE_NAME,
}