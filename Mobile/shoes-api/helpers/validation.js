const Joi = require("joi");

module.exports = {
	validation: data => {
		const Schema = Joi.object({
			username: Joi.string().alphanum().min(6).max(8).required(),
			email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
			password: Joi.string()
				.min(6)
				.pattern(new RegExp("[a-zA-Z0-9][!@#$%^&*;]"))
				.message({
					"string.pattern.base": "password must include number and special character.",
				})
				.required(),
		});
		return Schema.validate(data);
	},
};
