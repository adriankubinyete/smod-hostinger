// modConfig: config do módulo (análogo ao `config` do framework)
export const modConfig = {
	// developers.hostinger.com é o host de verdade da API (não api.hostinger.com, que não
	// resolve) - confirmado ao vivo, não só pela doc.
	apiToken: process.env.MOD_HOSTINGER_TOKEN,
} as const;
