const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: "andrewbraun",
				mongodb_password: "next-blog-open",
				mongodb_clustername: "cluster0",
				mongodb_database: "Next-Blog-dev",
			},
		}
	}
	return {
		env: {
			mongodb_username: "andrewbraun",
			mongodb_password: "next-blog-restricted-ip",
			mongodb_clustername: "cluster0",
			mongodb_database: "Next-Blog",
		},
	}
}
