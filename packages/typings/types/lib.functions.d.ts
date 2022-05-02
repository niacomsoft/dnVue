// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

declare namespace dnvue {
    /**
     * 定义了无参数和返回值的方法。
     *
     * @interface Action
     * @function
     */
    interface Action {
        /**
         * 定义了无参数和返回值的方法。
         * 
         * @function
         */
        (): void;
    }

    /**
     * (异步的方法) 定义了无参数和返回值的方法。
     *
     * @interface AsyncAction
     * @function
     * @async
     * @return {Promise<void>}
     */
    interface AsyncAction {
        /**
         * (异步的方法) 定义了无参数和返回值的方法。
         *
         * @function
         * @async
         * @returns {Promise<void>}
         */
        (): Promise<void>;
    }

    /**
     * 定义了 TArgument 类型参数的无返回值的方法。
     *
     * @interface ParameterizedAction
     * @template TArgument 参数类型。
     * @function
     */
    interface ParameterizedAction<TArgument> {
        /**
         * 定义了 TArgument 类型参数的无返回值的方法。
         *
         * @param {TArgument} arg 参数值。
         * @function
         * @return
         */
        (arg: TArgument): void;
    }

    /**
     * (异步的方法) 定义了 TArgument 类型参数的无返回值的方法。
     *
     * @interface ParameterizedAsyncAction
     * @template TArgument 参数类型。
     * @function
     * @return {Promise<void>}
     * @async
     */
    interface ParameterizedAsyncAction<TArgument> {
        /**
         * 定义了 TArgument 类型参数的无返回值的方法。
         *
         * @param {TArgument} arg 参数值。
         * @returns {Promise<void>}
         * @function
         * @async
         */
        (arg: TArgument): Promise<void>;
    }

    /**
     * 定义了 TReturn 类型返回值的方法。
     *
     * @interface Func
     * @template TReturn 返回值类型。
     * @function
     * @return {TReturn}
     */
    interface Func<TReturn> {
        /**
         * 定义了 TReturn 类型返回值的方法。
         *
         * @returns {TReturn}
         * @function
         */
        (): TReturn;
    }

    /**
     * 定义了 TReturn 类型返回值的方法。
     *
     * @interface ParameterizedFunc
     * @template TArgument 参数类型。
     * @template TReturn 返回值类型。
     * @function
     */
    interface ParameterizedFunc<TArgument, TReturn> {
        /**
         * 定义了 TReturn 类型返回值的方法。
         *
         * @param {TArgument} arg 参数值。
         * @returns {TReturn}
         * @function
         */
        (arg: TArgument): TReturn;
    }

    /**
     * (异步的方法) 定义了 TReturn 类型返回值的方法。
     *
     * @interface AsyncFunc
     * @template TReturn 返回值类型。
     * @function
     * @return {Promise<TReturn>}
     * @async
     */
    interface AsyncFunc<TReturn> {
        /**
         * (异步的方法) 定义了 TReturn 类型返回值的方法。
         *
         * @returns {Promise<TReturn>}
         * @function
         * @async
         */
        (): Promise<TReturn>;
    }

    /**
     * (异步的方法) 定义了 TReturn 类型返回值的方法。
     *
     * @interface ParameterizedAsyncFunc
     * @template TArgument 参数类型。
     * @template TReturn 返回值类型。
     * @function
     * @return {Promise<TReturn>}
     * @async
     */
    interface ParameterizedAsyncFunc<TArgument, TReturn> {
        /**
         * (异步的方法) 定义了 TReturn 类型返回值的方法。
         *
         * @param {TArgument} arg 参数值。
         * @returns {Promise<TReturn>}
         * @function
         * @return {Promise<TReturn>}
         * @async
         */
        (arg: TArgument): Promise<TReturn>;
    }
}