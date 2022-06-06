// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

export {
    useMaterialDesignIcon,
    useAnimateCss,
    useMaterialColors,
    useElementPlus,
    usePrivateComponents,
    configureApplication,
    useLocalizations,
    usePinia
} from "./plugins";
export { useComponentStateStore } from "./store";
export { getExternalAppManifest } from "./app-configuration";
export {
    useBasicAuthenticator,
    usePrincipal
} from "./services";
import { useLocalization } from "./locale";
export { useLocalization };

Error.create = function (resourceName: string): Error {
    return new Error(useLocalization().t(resourceName));
};