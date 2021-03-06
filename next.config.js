const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: "andrewbraun",
				mongodb_clustername: "cluster0",
				mongodb_database: "Next-Blog-dev",
				mongodb_password: "next-blog-open",
			},
		}
	}
	return {
		env: {
			mongodb_username: "andrewbraun",
			mongodb_clustername: "cluster0",
			mongodb_database: "Next-Blog",
		},
	}
}
