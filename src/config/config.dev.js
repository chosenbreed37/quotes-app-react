const config = {};

config.api_url = process.env.API_URL || 'http://localhost:3000';
config.env = process.env.NODE_ENV || 'dev';

export default config;

