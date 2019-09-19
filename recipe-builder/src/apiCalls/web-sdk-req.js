import {Utility} from "../common/utils.js";
import {SCYLLA_CONFIG, Config, isExecutedFromCloud} from "./../common/scylla_config";

const ActivateRecipeBuilder = () => {
  if(!Utility.isWebSDKInitiated()) {
    window.garudapro.webapi.scylla.init(
      SCYLLA_CONFIG.scheme,
      SCYLLA_CONFIG.host,
      SCYLLA_CONFIG.port,
    );

    window.garudapro.webapi.base.Activate(
      Config.gadgetName,
      Config.gadgetID
    );
  }
}

export {
    ActivateRecipeBuilder
}