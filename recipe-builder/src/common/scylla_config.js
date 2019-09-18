import {CONFIG} from "./config";
import {ENV} from "./deploymentConfig";

let gadget_key = "";

let scylla_port = CONFIG.SCYLLA_PORT;
let apache_port = CONFIG.APACHE_PORT;

let host = CONFIG.URL;

var Config =
{
	gadgetName	: 'GarudaRecipeBuilder'
};

if(ENV.DEVELOPMENT)
{
	gadget_key = "FbvkhrpNgtOxhA72tEOhS0PN30LdsPa+iH6IMXYxv6I=";//"pMQjw42s549z/blXnh2pk4WkhKfzXKqM8t77NUXVglwh5V+XYll/9Q==";
}
else
{
	gadget_key = "FbvkhrpNgtOxhA72tEOhS0PN30LdsPa+iH6IMXYxv6I=";
}

var scylla_config = 
{
		scheme					: 	CONFIG.METHOD,
		port					: 	scylla_port,
		host					:  	host
};

var cdn_config = 
{
		scheme					: 	CONFIG.METHOD,
		port					: 	apache_port,
		host					:	host
};

Config.gadgetID = gadget_key;

const SCYLLA_CONFIG = {
  scheme: CONFIG.METHOD,
  port: scylla_port,
  host: host
};

const isExecutedFromCloud = true;

export {
  CONFIG,
  SCYLLA_CONFIG,
  isExecutedFromCloud
};