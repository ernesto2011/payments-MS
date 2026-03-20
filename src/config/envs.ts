import 'dotenv/config';

import * as Joi from 'joi';

interface EnvConfig {
    PORT: number;
    STRIPE_SECRET_KEY: string;
    STRIPE_SUCCESS_URL: string;
    STRIPE_CANCEL_URL: string;
    STRIPE_ENDPOINT_SECRET_KEY:string;

}

const envSchema = Joi.object({
    PORT: Joi.number().required(),
    STRIPE_SECRET_KEY: Joi.string().required(),
    STRIPE_SUCCESS_URL: Joi.string().required(),
    STRIPE_CANCEL_URL: Joi.string().required(),
    STRIPE_ENDPOINT_SECRET_KEY: Joi.string().required(),
})
    .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
    throw new Error('Invalid environment variables');
}
const envVars: EnvConfig = value;

export const envs = {
    PORT: envVars.PORT,
    STRIPE_SECRET_KEY: envVars.STRIPE_SECRET_KEY,
    SUCCESS_URL:envVars.STRIPE_SUCCESS_URL,
    CANCEL_URL:envVars.STRIPE_CANCEL_URL,
    ENDPOINT_SECRET: envVars.STRIPE_ENDPOINT_SECRET_KEY
}