import {CONFIG} from "./../common/config";

const host = CONFIG.METHOD+"://" + CONFIG.URL + ":" + CONFIG.APACHE_PORT;
const FORGOT_USERNAME = host + "/GarudaGatewayPro/gadgets-main.jsp?page=forget-username";
const FORGOT_PASSWORD = host + "/GarudaGatewayPro/gadgets-main.jsp?page=forget-password";

export {
  FORGOT_USERNAME,
  FORGOT_PASSWORD
}