/* MAIN CONFIGURATION FILE (config.js) */
/* Make sure to keep these environment variables somewhere safe */

const env = process.env.NODE_ENV || 'development'

const config = {
	development :{
		APIKey : '',
		APISecret : '',
		DBUri: '',
		DBUser : '',
		DBKey: ''
	}
};

module.exports = config[env]