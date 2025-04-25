export default ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'strapi'),
			user: env('DATABASE_USERNAME', null),
			password: env('DATABASE_PASSWORD', null),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
