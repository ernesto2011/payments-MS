import 'dotenv/config';

import * as Joi from 'joi';

interface EnvConfig {
    PORT: number;
}

const envSchema = Joi.object({
    PORT: Joi.number().required(),
})
    .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
    throw new Error('Invalid environment variables');
}
const envVars: EnvConfig = value;

export const envs = {
    PORT: envVars.PORT,
}