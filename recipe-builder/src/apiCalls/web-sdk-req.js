import {Utility} from "./common/utils.js";
import {SCYLLA_CONFIG, isExecutedFromCloud} from "./../common/scylla_config";

const ActivateGadget = () => {
  if(!Utility.isWebSDKInitiated()) {
    console.log("Activating Recipe player");

    garudapro.webapi.scylla.init(
      SCYLLA_CONFIG.scheme,
      SCYLLA_CONFIG.host,
      SCYLLA_CONFIG.port,
    );

    garudapro.webapi.base.Activate(
      SCYLLA_CONFIG.Config.gadgetName,
      SCYLLA_CONFIG.Config.gadgetID
    );
  }
}

export {
    ActivateGadget
}