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
    usePinia,
    registerRouterInterceptor
} from "./plugins";
export {
    useTemporaryStateStore,
    usePersistentStateStore
} from "./store";
export { getExternalAppManifest } from "./app-configuration";
export {
    useBasicAuthenticator,
    usePrincipal
} from "./services";
import { useLocalization } from "./locale";
export { useLocalization };
export { useNotification, getComponentOpenApi } from "./utilities";

Error.create = function (resourceName: string): Error {
    return new Error(useLocalization().t(resourceName));
};