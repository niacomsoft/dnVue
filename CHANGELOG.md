# CHANGELOG
## [1.0.0-preview.1](https://github.com/niacomsoft/dnVue/compare/v1.0.0-preview.0...v1.0.0-preview.1) (2022-06-11)


### PERFORMANCE OPTIMIZE

* **Issue #17:** 修复了 v-page.vue 组件中样式、属性错误。 ([30b5bed](https://github.com/niacomsoft/dnVue/commit/30b5bed4d28fad68b0c1c03cb7841ee5a6bbe37d)), closes [#17](https://github.com/niacomsoft/dnVue/issues/17)

## [1.0.0-preview.0](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.21...v1.0.0-preview.0) (2022-06-11)


### PERFORMANCE OPTIMIZE

* 优化了 v-content-container.vue 组件样式。 ([751a828](https://github.com/niacomsoft/dnVue/commit/751a8281b1ccc121c82ad2db693210081acff63e))
* 优化了 v-flexbox 样式。 ([26d2e34](https://github.com/niacomsoft/dnVue/commit/26d2e3421f6101ee0b87f76f1f6d33012027a2ea))


### NEW FEATURE

* 调整 el-button 为 v-btn 组件。 ([1754b11](https://github.com/niacomsoft/dnVue/commit/1754b11f750c8a22e3b369f38e051a77fac41051))
* 新增 v-btn.vue 组件。 ([afb8cd5](https://github.com/niacomsoft/dnVue/commit/afb8cd5711acd0037f95ee645b23ef7c523bb284))
* Daily-Build 2022.6.10-alpha.1820 ([881d168](https://github.com/niacomsoft/dnVue/commit/881d1687653b8522cff04173fb81455f6d6555f1))
* **Issue #17:** 完成了数据分页组件。 ([ec3ece1](https://github.com/niacomsoft/dnVue/commit/ec3ece126e89b13e0927c868cb14fef638bd1ee5)), closes [#17](https://github.com/niacomsoft/dnVue/issues/17) [#17](https://github.com/niacomsoft/dnVue/issues/17)


### CHORE

* 修改了版本号。 ([b533adc](https://github.com/niacomsoft/dnVue/commit/b533adc900bee2aee278bbc8e4c1f32cd4e2e257))

## [1.0.0-alpha.21](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.20...v1.0.0-alpha.21) (2022-06-09)


### BUG FIXED

* 修改了构建路径配置。 ([2e3d826](https://github.com/niacomsoft/dnVue/commit/2e3d82624015ec2c0b5422356c742f7d0d236adf))


### NEW FEATURE

* **Issue #16:** 完成了菜单组件。 ([5afd2d2](https://github.com/niacomsoft/dnVue/commit/5afd2d21c7233b266871064cf574077b2636fbb6)), closes [#16](https://github.com/niacomsoft/dnVue/issues/16) [#16](https://github.com/niacomsoft/dnVue/issues/16)
* **Issue #16:** 重启 Issues [#16](https://github.com/niacomsoft/dnVue/issues/16) ([6af5221](https://github.com/niacomsoft/dnVue/commit/6af5221013ab6c2f2f9176df945fcce8367694c4))
* **Issue #17:** 完善了 v-content-container.vue 组件。增加了通用加载中状态。 ([050eca6](https://github.com/niacomsoft/dnVue/commit/050eca65fd52366f480c7779abdec5ebec7eb710)), closes [#17](https://github.com/niacomsoft/dnVue/issues/17)
* **Issue #17:** 新增数据内容容器组件。 ([0bb1865](https://github.com/niacomsoft/dnVue/commit/0bb18656982c248482297b0f4c275c35d173db5d)), closes [#17](https://github.com/niacomsoft/dnVue/issues/17)


### CHORE

* 调整了应用图标样式。 ([51206a9](https://github.com/niacomsoft/dnVue/commit/51206a945f31f2b5374490ff7d46430448f5ae15))
* 修改了版本号。 ([5cbef42](https://github.com/niacomsoft/dnVue/commit/5cbef4233f54b2a9ccb43d1088d0701de491463b))

## [1.0.0-alpha.20](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.19...v1.0.0-alpha.20) (2022-06-08)


### PERFORMANCE OPTIMIZE

* 调整了样式。 ([3c10ec9](https://github.com/niacomsoft/dnVue/commit/3c10ec9787a17004fffcda7c5af535127a998569))
* 删除了无用的运行时日志。 ([cf57c4b](https://github.com/niacomsoft/dnVue/commit/cf57c4b18859cbb133f29da2e5bbdac70e35dda4))


### BUG FIXED

* 修复应用清单中 <a /> 超链接无法携带同源会话存储的问题。 ([5680c2e](https://github.com/niacomsoft/dnVue/commit/5680c2edf0bf8c248fa8d6b52f2dda49a81a65a7))


### NEW FEATURE

* **Issue #15:** 完成了登出功能。 ([9e0381b](https://github.com/niacomsoft/dnVue/commit/9e0381b123fe1fd7f92665662094715b2d5f9187)), closes [#15](https://github.com/niacomsoft/dnVue/issues/15) [#15](https://github.com/niacomsoft/dnVue/issues/15)
* **Issue #15:** 新增 v-toolbar.vue 组件。 ([582896e](https://github.com/niacomsoft/dnVue/commit/582896e3fe3b2a143fa8b80c29539ce26407e5c4)), closes [#15](https://github.com/niacomsoft/dnVue/issues/15)
* **Issue #15:** 修改了 IAuthenticationService 接口，增加了 signoutAsync 退出方法。 ([95b59b2](https://github.com/niacomsoft/dnVue/commit/95b59b2a0a32ed7975df1ed33b7d7149b1b096fd)), closes [#15](https://github.com/niacomsoft/dnVue/issues/15)
* **Issue #16:** 完成了侧边栏组件。 ([333d379](https://github.com/niacomsoft/dnVue/commit/333d379f29fb913ec0bda581abf62b3c9ae86adf)), closes [#16](https://github.com/niacomsoft/dnVue/issues/16)
* **Issue #16:** 完成了全局菜单验证。 ([5dfce27](https://github.com/niacomsoft/dnVue/commit/5dfce27e3fc03bd907329bcd8d6da3c7c5d3a042)), closes [#16](https://github.com/niacomsoft/dnVue/issues/16) [#16](https://github.com/niacomsoft/dnVue/issues/16)


### CHORE

* 修改了全局版本号。 ([72af432](https://github.com/niacomsoft/dnVue/commit/72af4324a1eafcfbbbb92b326a22728ac368a3b4))

## [1.0.0-alpha.19](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.18...v1.0.0-alpha.19) (2022-06-06)


### DOCUMENTATION

* 调整了本地化资源配置表。 ([d88e32b](https://github.com/niacomsoft/dnVue/commit/d88e32b03ea65a62c070b6f7d2fc0fe47376065e))
* 调整了资源定义文档。 ([67037aa](https://github.com/niacomsoft/dnVue/commit/67037aadd31e100bd6338484b5a959e660c95e86))


### REFACTOR

* **Issue #6:** 重构本地化配置。 ([3562b0a](https://github.com/niacomsoft/dnVue/commit/3562b0aac9b22af8c74e002ecf979b2e822f6ca8)), closes [#6](https://github.com/niacomsoft/dnVue/issues/6)


### NEW FEATURE

* **Issue #14:** 调整了 IAuthenticationService 接口定义。 ([6e9f2e1](https://github.com/niacomsoft/dnVue/commit/6e9f2e138be27f7356a685ad14473eb1041c5597)), closes [#14](https://github.com/niacomsoft/dnVue/issues/14)
* **Issue #14:** 完成了登录视图的布局。 ([77ed1e9](https://github.com/niacomsoft/dnVue/commit/77ed1e94d1047db601fa704559504333476fdf0f)), closes [#14](https://github.com/niacomsoft/dnVue/issues/14)
* **Issue #14:** 完成了路由拦截。 ([3f104ad](https://github.com/niacomsoft/dnVue/commit/3f104ad50b094c1215b6bb77ee0622ec5ee72a83)), closes [#14](https://github.com/niacomsoft/dnVue/issues/14)
* **Issue #14:** 完成了身份认证相关功能。 ([19e4d01](https://github.com/niacomsoft/dnVue/commit/19e4d01c602bce02ca57231db623a4fd7b7952bb)), closes [#14](https://github.com/niacomsoft/dnVue/issues/14) [#14](https://github.com/niacomsoft/dnVue/issues/14)
* **Issue #14:** 新增身份认证视图。 ([98495a6](https://github.com/niacomsoft/dnVue/commit/98495a68b1f3d9e14c5f609767aa881f587206cd)), closes [#14](https://github.com/niacomsoft/dnVue/issues/14)
* **Issue #14:** 新增身份认证相关方法。 ([8445117](https://github.com/niacomsoft/dnVue/commit/8445117474eb8a4bd17c6b79f41f9935c474dc18)), closes [#14](https://github.com/niacomsoft/dnVue/issues/14)
* **Issue #14:** 新增用来模拟登录的基础身份认证方法。 ([e95661f](https://github.com/niacomsoft/dnVue/commit/e95661fb4a54266a2e7fa2b38188513ec08ffe27)), closes [#14](https://github.com/niacomsoft/dnVue/issues/14)
* **Issue #6:** 新增本地话资源配置。 ([ed7daee](https://github.com/niacomsoft/dnVue/commit/ed7daee626af91553f926969944c4ffd51af24f4)), closes [#6](https://github.com/niacomsoft/dnVue/issues/6)

## [1.0.0-alpha.18](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.17...v1.0.0-alpha.18) (2022-05-28)


### CHORE

* 新增背景图片。 ([61282b1](https://github.com/niacomsoft/dnVue/commit/61282b1110f2e9964337721948087d1fa4e6a81d))


### BUG FIXED

* **Issue #1:** 修复 v-appmanifest 组件样式表 v-appmanifest.scss 中的语法错误。 ([0d52ce7](https://github.com/niacomsoft/dnVue/commit/0d52ce75cd9f15a55d3e833ee92f9956adfef0e3)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)


### NEW FEATURE

* 从 GitIgnore 配置中排除了 .env 配置文件。 ([2249722](https://github.com/niacomsoft/dnVue/commit/22497220831ca60cd2707a3c1ee3816c9153edc7))
* **Issue #14:** 新增身份认证服务接口。 ([f341c83](https://github.com/niacomsoft/dnVue/commit/f341c832f424d9fd169674e8aeec44828e41c26c)), closes [#14](https://github.com/niacomsoft/dnVue/issues/14)
* **Issue #14:** 新增身份认证凭据和相关基类。 ([93e9360](https://github.com/niacomsoft/dnVue/commit/93e9360841e2adc9b297129d5d313114d834265a)), closes [#14](https://github.com/niacomsoft/dnVue/issues/14)
* **Issue #14:** 新增身份认证相关类库。 ([e3dd1c2](https://github.com/niacomsoft/dnVue/commit/e3dd1c2218dced1f6d54772bb360c17247717a14)), closes [#14](https://github.com/niacomsoft/dnVue/issues/14)
* **Issue #14:** 新增身份信息接口和基类。 ([ff0254d](https://github.com/niacomsoft/dnVue/commit/ff0254d590a75d52059ad661e186079f70f9d268)), closes [#14](https://github.com/niacomsoft/dnVue/issues/14)
* **Issue #14:** 新增用户身份摘要信息的方法。 ([2c81927](https://github.com/niacomsoft/dnVue/commit/2c81927e00dee95a2a45e5fba895e60ab4d522f3)), closes [#14](https://github.com/niacomsoft/dnVue/issues/14)


### BUILD

* 新增 @dnvue/http-authen 依赖。 ([338fc8e](https://github.com/niacomsoft/dnVue/commit/338fc8ee2e96b7f72f89ef195cd241413946445e))

## [1.0.0-alpha.17](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.16...v1.0.0-alpha.17) (2022-05-27)


### REFACTOR

* **Issue #13:** 开始重构 Vite 应用骨架。 ([2858942](https://github.com/niacomsoft/dnVue/commit/28589428b157cdd61d3c52d8c43b85db275eeef6)), closes [#13](https://github.com/niacomsoft/dnVue/issues/13)


### NEW FEATURE

* **Issue #1 #13:** 新增 Pinia 状态管理和组件的集成。 ([cc842db](https://github.com/niacomsoft/dnVue/commit/cc842dbc59bc7ae97ac8a3835d7cc3d319834f92)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1) [#13](https://github.com/niacomsoft/dnVue/issues/13)
* **Issue #13 #1:** 完成了 v-appmanifest 应用清单组件。 ([9910b9b](https://github.com/niacomsoft/dnVue/commit/9910b9bc739ad73145c532a88008ac5614c1037a)), closes [#13](https://github.com/niacomsoft/dnVue/issues/13) [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #13 #1:** 新增 v-container 容器组件。 ([43c55b8](https://github.com/niacomsoft/dnVue/commit/43c55b8286fdcb84380bd30bd9e47bae258baa0f)), closes [#13](https://github.com/niacomsoft/dnVue/issues/13) [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #13 #1:** 新增弹性盒组件 vFlexbox。 ([e66586a](https://github.com/niacomsoft/dnVue/commit/e66586aef5ce2bbdf14695402a1a6179e6da9636)), closes [#13](https://github.com/niacomsoft/dnVue/issues/13) [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #13 #1:** 新增应用清单抽屉组件 v-appmanifest。 ([921b170](https://github.com/niacomsoft/dnVue/commit/921b170f40d95a6a136700ade56fad89dfbd494d)), closes [#13](https://github.com/niacomsoft/dnVue/issues/13) [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #13 #1:** 新增应用清单组件 v-appmanifest。 ([677b1da](https://github.com/niacomsoft/dnVue/commit/677b1da24ffa4d7b40b73e1a5852f13d52a8be53)), closes [#13](https://github.com/niacomsoft/dnVue/issues/13) [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #13:** 调整了 LOGO 图片的样式。 ([aa3654e](https://github.com/niacomsoft/dnVue/commit/aa3654e7e8a684001e842a3e7acf2bb0ebe656f7)), closes [#13](https://github.com/niacomsoft/dnVue/issues/13)
* **Issue #13:** 完善了 v-appbar 组件。 ([75b27a9](https://github.com/niacomsoft/dnVue/commit/75b27a9669c2daaa61cfb393551d6514b019546c)), closes [#13](https://github.com/niacomsoft/dnVue/issues/13)
* **Issue #13:** 新增 vApp 组件。 ([1bd2742](https://github.com/niacomsoft/dnVue/commit/1bd274296ee9c1b24dc7cc7a5ea6d610f627109f)), closes [#13](https://github.com/niacomsoft/dnVue/issues/13)
* **Issue #13:** 新增 vAppbar 组件。 ([fba4d5e](https://github.com/niacomsoft/dnVue/commit/fba4d5ece26d9c7d22be63520d6129b7dc022bbe)), closes [#13](https://github.com/niacomsoft/dnVue/issues/13)
* **Issue #13:** 新增基于 @mdi/font 的图标组件 v-icon。 ([3844741](https://github.com/niacomsoft/dnVue/commit/384474177226f010aadadccea0454bd163993995)), closes [#13](https://github.com/niacomsoft/dnVue/issues/13)
* **Issue #13:** 优化了 v-icon 组件，增加了 tooltip 属性定义。 ([7969970](https://github.com/niacomsoft/dnVue/commit/7969970576d4bb62905701f98e3a7d9900b550ef)), closes [#13](https://github.com/niacomsoft/dnVue/issues/13)


### CHORE

* 新增 http 包依赖。 ([6708c89](https://github.com/niacomsoft/dnVue/commit/6708c89188cb2843d9bd00b5aafb02249acf631c))
* 修改了版本号。 ([b746237](https://github.com/niacomsoft/dnVue/commit/b7462377760b36029df12fafeeb2035f6de9db93))

## [1.0.0-alpha.16](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.15...v1.0.0-alpha.16) (2022-05-26)


### BUG FIXED

* **Issue #10:** 修改了 httpclient 接口缺失的 httpmethod 定义。 ([4a51355](https://github.com/niacomsoft/dnVue/commit/4a513552e7e6e26b79e5d73b4fb6dc8e9c75c84b)), closes [#10](https://github.com/niacomsoft/dnVue/issues/10)


### NEW FEATURE

* **Issue #12:** 完成了 Axios HTTP 请求类库。 ([e8574db](https://github.com/niacomsoft/dnVue/commit/e8574db41f5310fb2c37f5e36bac5800f8b28cf8)), closes [#12](https://github.com/niacomsoft/dnVue/issues/12) [#12](https://github.com/niacomsoft/dnVue/issues/12)
* **Issue #12:** 新增基于 Axios 的 HTTP 请求类库。 ([8942430](https://github.com/niacomsoft/dnVue/commit/8942430e77e79a709f86fe6be034d80a790e14ba)), closes [#12](https://github.com/niacomsoft/dnVue/issues/12)

## [1.0.0-alpha.15](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.14...v1.0.0-alpha.15) (2022-05-25)


### BUILD

* **Issue #1:** 新增缓存类库依赖。 ([97e340f](https://github.com/niacomsoft/dnVue/commit/97e340fa9f3bd400e42cf710e90444be42f14a98)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)


### NEW FEATURE

* **Issue #11:** 新增 HTTP 抽象 HttpClient 方法。 ([23a494a](https://github.com/niacomsoft/dnVue/commit/23a494aeafcb777ea8d4e0569fd68b476ee13117)), closes [#11](https://github.com/niacomsoft/dnVue/issues/11) [#11](https://github.com/niacomsoft/dnVue/issues/11)
* **Issue #11:** 新增 HTTP 核心项目。 ([1f744ac](https://github.com/niacomsoft/dnVue/commit/1f744acf4c0dd0856bf8c7dbf0f5eff76f21c2c0)), closes [#11](https://github.com/niacomsoft/dnVue/issues/11)
* **Issue #11:** 新增 HTTP 请求方法枚举。 ([4987f3c](https://github.com/niacomsoft/dnVue/commit/4987f3cac1ef33def98fcf0aeb006a01ef613fec)), closes [#11](https://github.com/niacomsoft/dnVue/issues/11)
* **Issue #11:** 新增 HTTP 请求配置构建程序。 ([03b563c](https://github.com/niacomsoft/dnVue/commit/03b563cf400efee346279077e9b5f994af958ad6)), closes [#11](https://github.com/niacomsoft/dnVue/issues/11)
* **Issue #11:** 新增 HTTP 响应类型定义。 ([ae79559](https://github.com/niacomsoft/dnVue/commit/ae79559fe3c01f08fb6a0414fb7603d29a3e182b)), closes [#11](https://github.com/niacomsoft/dnVue/issues/11)
* **Issue #11:** 新增 HTTP 响应状态码枚举类型。 ([2c5ce58](https://github.com/niacomsoft/dnVue/commit/2c5ce58774f697ac470e20be3e5234ba1a94118a)), closes [#11](https://github.com/niacomsoft/dnVue/issues/11)
* **Issue #2 #3 #11:** 新增 DEFAULT_HTTP_BASE_URL 全局变量。 ([1c88d5a](https://github.com/niacomsoft/dnVue/commit/1c88d5ac2dd9aae858d2c0b8b0731009424122bd)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2) [#3](https://github.com/niacomsoft/dnVue/issues/3) [#11](https://github.com/niacomsoft/dnVue/issues/11)

## [1.0.0-alpha.14](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.13...v1.0.0-alpha.14) (2022-05-25)


### NEW FEATURE

* **Issue #1 #10:** 新增数据缓存相关全局变量定义。 ([c4c1ebf](https://github.com/niacomsoft/dnVue/commit/c4c1ebfa97824d522d08ae6545111e715d955e46)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1) [#10](https://github.com/niacomsoft/dnVue/issues/10)
* **Issue #10 #5:** 新增缓存组合式 API。 ([a5a9315](https://github.com/niacomsoft/dnVue/commit/a5a931512822784a3a17488a7d996d833103a42c)), closes [#10](https://github.com/niacomsoft/dnVue/issues/10) [#5](https://github.com/niacomsoft/dnVue/issues/5)
* **Issue #10:** 完成了数据缓存类库开发。 ([6ebcd9a](https://github.com/niacomsoft/dnVue/commit/6ebcd9ad83484c612209c9720288a12d6e8b2573)), closes [#10](https://github.com/niacomsoft/dnVue/issues/10)
* **Issue #10:** 新建 Caching 项目。 ([5a4d68f](https://github.com/niacomsoft/dnVue/commit/5a4d68f14157d1281f052a8b20205b44c83afe33)), closes [#10](https://github.com/niacomsoft/dnVue/issues/10)
* **Issue #10:** 新增缓存抽象服务。 ([82d6b91](https://github.com/niacomsoft/dnVue/commit/82d6b91c5bf292e78f7799bed127a910b6228b2c)), closes [#10](https://github.com/niacomsoft/dnVue/issues/10)
* **Issue #2 #10:** 新增缓存相关的接口。 ([f0f000f](https://github.com/niacomsoft/dnVue/commit/f0f000fd18975eed28ba31993b0d065428a86b93)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2) [#10](https://github.com/niacomsoft/dnVue/issues/10)


### CHORE

* 调整了版本号。 ([89ae990](https://github.com/niacomsoft/dnVue/commit/89ae99067ef1065f7a6b357a22149acfa2bbb43e))

## [1.0.0-alpha.13](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.12...v1.0.0-alpha.13) (2022-05-24)


### REFACTOR

* **Issue #2 #9:** 重构了 IHashAlgorithm 哈希算法接口。 ([018c76b](https://github.com/niacomsoft/dnVue/commit/018c76b2d9eb1142cc286602ebe9348b7ecb82fe)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2) [#9](https://github.com/niacomsoft/dnVue/issues/9)
* **Issue #5 #9:** 重构了 computeHash 组合式 API。 ([42b4304](https://github.com/niacomsoft/dnVue/commit/42b4304a1e72444365623f770a7b37ff1511a72b)), closes [#5](https://github.com/niacomsoft/dnVue/issues/5) [#9](https://github.com/niacomsoft/dnVue/issues/9)


### BUG FIXED

* **Issue #1:** 调整了 vite.config.ts 中获取 {mode} 参数的错误。 ([4d92af4](https://github.com/niacomsoft/dnVue/commit/4d92af4fd7fd7fd4feeeed45da9982888ab99928)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #1:** 修改了属性 activedAppShortcutIndex 类型为 Number。 ([6d1e1f0](https://github.com/niacomsoft/dnVue/commit/6d1e1f0c5b8ea5bccde13c6fc154b10dce33ba40)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)


### BUILD

* 添加依赖。 ([1adb3a7](https://github.com/niacomsoft/dnVue/commit/1adb3a77eae79de4b3ca93d228cc188bb50bdc74))


### NEW FEATURE

* **Issue #1:** 新增加密密钥配置。 ([6a1a51d](https://github.com/niacomsoft/dnVue/commit/6a1a51d28978bd01243cf94f54686f565f178e30)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #3:** 新增默认加密算法密钥配置。 ([96e4494](https://github.com/niacomsoft/dnVue/commit/96e44947ba1395e1b41fcfefb51483a51be65278)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3)
* **Issue #3:** 新增主机环境信息的方法。 ([cca4f1f](https://github.com/niacomsoft/dnVue/commit/cca4f1f46fd17a7943d33ddd9c2f176580f689b1)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3)
* **Issue #5:** 新增 AppContext 相关的组合式 API。 ([069c1fc](https://github.com/niacomsoft/dnVue/commit/069c1fc5973dba429714ff03eada48429ec5fe8a)), closes [#5](https://github.com/niacomsoft/dnVue/issues/5)
* **Issue #9 #3:** 新增加密、解密算法。 ([5171f22](https://github.com/niacomsoft/dnVue/commit/5171f2290d718ec4b0d896d14463084e22603fb9)), closes [#9](https://github.com/niacomsoft/dnVue/issues/9) [#3](https://github.com/niacomsoft/dnVue/issues/3)
* **Issue #9 #5:** 新增 useCrypto 组合式 API。 ([db65463](https://github.com/niacomsoft/dnVue/commit/db654639b2bef18190733b11c0d01a410845e0ec)), closes [#9](https://github.com/niacomsoft/dnVue/issues/9) [#5](https://github.com/niacomsoft/dnVue/issues/5)
* **Issue #9:** 新增 getFingerprintAsync 方法。 ([f5d9bd8](https://github.com/niacomsoft/dnVue/commit/f5d9bd88a892235686ffe7b13db7aefc85255baa)), closes [#9](https://github.com/niacomsoft/dnVue/issues/9)

## [1.0.0-alpha.12](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.11...v1.0.0-alpha.12) (2022-05-21)


### CHORE

* **Issue #1:** 修改了 Content-Placeholder 组件 Side-Bar 插槽样式。 ([4acf342](https://github.com/niacomsoft/dnVue/commit/4acf342546aa55d719a4cd1467811ee2fc732668)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)


### NEW FEATURE

* **Issue #1:** 完善了 Content-Placeholder 组件。 ([f62f0c0](https://github.com/niacomsoft/dnVue/commit/f62f0c004a063b8c5a2aaf6e4b15ae14e067d79f)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #3 #2:** 新增 Number 扩展方法。 ([3b4f0f5](https://github.com/niacomsoft/dnVue/commit/3b4f0f57d1003641fd658f0dd77e9b618d2641d3)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3) [#2](https://github.com/niacomsoft/dnVue/issues/2)
* **Issue #3 #9:** 新增哈希算法集。 ([4f7f6ab](https://github.com/niacomsoft/dnVue/commit/4f7f6abc2f4743c6fd50b4cc1952b8480df7af17)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3) [#9](https://github.com/niacomsoft/dnVue/issues/9)
* **Issue #9:** 初始化安全、加密类库。 ([d71bbbb](https://github.com/niacomsoft/dnVue/commit/d71bbbbc1bf7bf9010d36a44609000d78c0441d4)), closes [#9](https://github.com/niacomsoft/dnVue/issues/9)
* **Issue #9:** 新增 SafeNumber 和组合式 API。 ([2fcc516](https://github.com/niacomsoft/dnVue/commit/2fcc5165d3e3dace91b0bde4d22014c0cb330ee6)), closes [#9](https://github.com/niacomsoft/dnVue/issues/9)
* **Issue #9:** 新增哈希算法相关的组合式 API。 ([c4aed02](https://github.com/niacomsoft/dnVue/commit/c4aed02d263e70dea18be7b0bce55c4de952a361)), closes [#9](https://github.com/niacomsoft/dnVue/issues/9)
* **Issue #9:** 新增加了 computeHash  组合式 API 的导出。 ([dd0dbd2](https://github.com/niacomsoft/dnVue/commit/dd0dbd28ae823f56499d439f1f74f4d173153e2a)), closes [#9](https://github.com/niacomsoft/dnVue/issues/9)

## [1.0.0-alpha.11](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.10...v1.0.0-alpha.11) (2022-05-20)


### NEW FEATURE

* **Issue #1:** 调整了应用清单超链标签的 a:target 属性。 ([9432998](https://github.com/niacomsoft/dnVue/commit/94329987f3c4aeb82d65c3e07d47b7bf868828e8)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #1:** 完善了 TopBanner 组件。 ([157e007](https://github.com/niacomsoft/dnVue/commit/157e0071f020d6491f817bdb7c6c84e445a7bde5)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #1:** 新增 Content-Placeholder 组件。 ([387de21](https://github.com/niacomsoft/dnVue/commit/387de216c0df9046c6e31b61a764c34447f9e6da)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #1:** 修改了 TopBanner 组件，增加了 Drawer 全局应用清单组件。 ([7218b1f](https://github.com/niacomsoft/dnVue/commit/7218b1fef8a9e3d3da7ffe59bd7738c4031d3037)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)


### CHORE

* 升级了程序版本。 ([6e1a919](https://github.com/niacomsoft/dnVue/commit/6e1a91957ce38b72c1a33369763488452092fa82))
* 修改了包版本。 ([25727fb](https://github.com/niacomsoft/dnVue/commit/25727fb870d4eb541016c6213da690523a0a07c7))

## [1.0.0-alpha.10](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.9...v1.0.0-alpha.10) (2022-05-17)


### REFACTOR

* **Issue #1:** 调整了组件中的代码。 ([63f6bd7](https://github.com/niacomsoft/dnVue/commit/63f6bd7701ffa00dbee7097e71be92e73d809993)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)


### PERFORMANCE OPTIMIZE

* **Issue #2:** 优化了 ColoredConsoleLogWriter 类的输出结构。 ([91f8725](https://github.com/niacomsoft/dnVue/commit/91f87259329ceaa099ed8bbcddf6bd2c9b7a67cc)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2)


### CHORE

* 新增多语言支持包 i18next 和 @panter/vue-i18next。 ([5812c93](https://github.com/niacomsoft/dnVue/commit/5812c93365a0f8eea19e7510de73c8cbbdc9c7c9))


### NEW FEATURE

* **Issue #1 #6:** 新增 i18n 支持。 ([1948e3e](https://github.com/niacomsoft/dnVue/commit/1948e3ebc133145f11cc94d0c225701a48a7a8f3)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1) [#6](https://github.com/niacomsoft/dnVue/issues/6)
* **Issue #1:** 新增 ControlPanel 组件的运行时日志。 ([4b34fb8](https://github.com/niacomsoft/dnVue/commit/4b34fb8d4c3526795b9a670239b3948b0b087e98)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #1:** 新增 Material Design Icon 组件。 ([58e3a51](https://github.com/niacomsoft/dnVue/commit/58e3a51b24100143c2d041f23cdfd964e9f73d45)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #1:** 新增 TopBanner 组件。 ([1968cce](https://github.com/niacomsoft/dnVue/commit/1968ccede58fe8669d855ba21827adfa260fa746)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #1:** 新增弹性盒容器组件。 ([c202289](https://github.com/niacomsoft/dnVue/commit/c202289c5065f4049dd2434be955b5b3620083d0)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #1:** 新增控制面板组件。 ([d3c40df](https://github.com/niacomsoft/dnVue/commit/d3c40df2feaa16004d89e97a6bfb608da6749cff)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)

## [1.0.0-alpha.9](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.8...v1.0.0-alpha.9) (2022-05-14)


### BUILD

* **Issue #1:** 新增环境变量和构建脚本。 ([186a0c2](https://github.com/niacomsoft/dnVue/commit/186a0c28da75d4f15bee4721e7f2fec247403368)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)


### NEW FEATURE

* **Issue #1 #2:** 新增组件属性类型定义。 ([f8cef2f](https://github.com/niacomsoft/dnVue/commit/f8cef2fc2e690283c222c70727c6d5884c9e8062)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1) [#2](https://github.com/niacomsoft/dnVue/issues/2)
* **Issue #1:** 调整了组件继承关系。 ([75d8024](https://github.com/niacomsoft/dnVue/commit/75d80243f1e771646b99cb823844e768f0bc33b4)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #1:** 新增 App 应用组件。 ([6ef00b3](https://github.com/niacomsoft/dnVue/commit/6ef00b36cd74b039dbd1296c542e6b1eeeb31558)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #1:** 新增 Element-Plus 组件管理程序。 ([8d5e615](https://github.com/niacomsoft/dnVue/commit/8d5e615292f5fe63f4595f69d181e61dfb2f104e)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #1:** 新增弹性盒容器组件。 ([bf94bb3](https://github.com/niacomsoft/dnVue/commit/bf94bb3cc006480b12c7114c55388d3787bc2f8c)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #1:** 新增公共组件。 ([ebe1de4](https://github.com/niacomsoft/dnVue/commit/ebe1de4a95f896d214f972adf0de292a684da01f)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #1:** 新增路由配置。 ([e6d98f6](https://github.com/niacomsoft/dnVue/commit/e6d98f6e9ce58102ba7d54c96c092c36fcff239d)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)

## [1.0.0-alpha.8](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.7...v1.0.0-alpha.8) (2022-05-11)


### REFACTOR

* **Issue #6:** 删除了不合理的类型。 ([e4b2ad1](https://github.com/niacomsoft/dnVue/commit/e4b2ad101142e2082be9d45a241cea3e304bd4ab)), closes [#6](https://github.com/niacomsoft/dnVue/issues/6)
* **Issue #6:** 重构多语言支持。 ([11c2cb5](https://github.com/niacomsoft/dnVue/commit/11c2cb59ae56258b8d8c495c95ac0c53b3500e97)), closes [#6](https://github.com/niacomsoft/dnVue/issues/6)
* **Issue #6:** 重构多语言支持相关代码。 ([f21caee](https://github.com/niacomsoft/dnVue/commit/f21caeef5123d9f1ac776bc28562e4f9ab3ef3e2)), closes [#6](https://github.com/niacomsoft/dnVue/issues/6)


### DOCUMENTATION

* **Issue #6:** 新增多语言设置清单。 ([1a95f43](https://github.com/niacomsoft/dnVue/commit/1a95f43f895e89958cb083fbcab3b300accf751b)), closes [#6](https://github.com/niacomsoft/dnVue/issues/6)


### NEW FEATURE

* 新建空白 Vite 项目。 ([9c9041c](https://github.com/niacomsoft/dnVue/commit/9c9041c3ba1f6728a18120d310307abc539226d3))
* **Issue #1:** 初始化 Vite 应用骨架。 ([8990883](https://github.com/niacomsoft/dnVue/commit/899088346eaf73bc40de10e63ff7b2f73686bcaf)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #1:** 初始化插件系统脚本。 ([1553e65](https://github.com/niacomsoft/dnVue/commit/1553e65ed5cb15383f3a806103acfb7ffcb0b58f)), closes [#1](https://github.com/niacomsoft/dnVue/issues/1)
* **Issue #2 #6:** 新增资源信息类型。 ([b89bb7c](https://github.com/niacomsoft/dnVue/commit/b89bb7c67950a946a1f34f12d38be1fe816673b3)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2) [#6](https://github.com/niacomsoft/dnVue/issues/6)
* **Issue #6 #3 #2:** 新增抽象类 CultureInfoManager。 ([8fe2735](https://github.com/niacomsoft/dnVue/commit/8fe2735c149330c6e6b98cbcc19b098515377985)), closes [#6](https://github.com/niacomsoft/dnVue/issues/6) [#3](https://github.com/niacomsoft/dnVue/issues/3) [#2](https://github.com/niacomsoft/dnVue/issues/2)
* **Issue #6:** 新增 ICultureInfoManager 接口定义。 ([f6b7d9d](https://github.com/niacomsoft/dnVue/commit/f6b7d9d8d6fe4310ea92d21cf87bf88472601b2b)), closes [#6](https://github.com/niacomsoft/dnVue/issues/6)

## [1.0.0-alpha.7](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.6...v1.0.0-alpha.7) (2022-05-06)


### NEW FEATURE

* 新增 i18next 依赖。 ([d0a63e5](https://github.com/niacomsoft/dnVue/commit/d0a63e5d7d1b1d4c06c87a06e160bab34185bd69))
* **Issue #2 #3 #8:** 新增 Object 扩展方法。 ([d10069b](https://github.com/niacomsoft/dnVue/commit/d10069bed5d67dd836f0e4e1376d9f8041b60735)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2) [#3](https://github.com/niacomsoft/dnVue/issues/3) [#8](https://github.com/niacomsoft/dnVue/issues/8)
* **Issue #2 #3 #8:** 新增字符串扩展方法。 ([16bd37b](https://github.com/niacomsoft/dnVue/commit/16bd37b6c7b104dcacc06a91651c16c679d462fd)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2) [#3](https://github.com/niacomsoft/dnVue/issues/3) [#8](https://github.com/niacomsoft/dnVue/issues/8)
* **Issue #2 #6:** 新增文化区域类型定义。 ([1b5a843](https://github.com/niacomsoft/dnVue/commit/1b5a8436fd07ac8eab1f67afe7cb1f86e6e76f98)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2) [#6](https://github.com/niacomsoft/dnVue/issues/6)
* **Issue #3 #2 #8:** 新增字符串解释程序组合 API。 ([bb5411e](https://github.com/niacomsoft/dnVue/commit/bb5411ef81ca7004d71fdbe1ea77790d3bafb9fb)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3) [#2](https://github.com/niacomsoft/dnVue/issues/2) [#8](https://github.com/niacomsoft/dnVue/issues/8)
* **Issue #3 #8:** 新增 ConstantStringResolver 工具类。 ([51cedba](https://github.com/niacomsoft/dnVue/commit/51cedba29f5c5d92a710da78fa447f608bd8aa25)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3) [#8](https://github.com/niacomsoft/dnVue/issues/8)
* **Issue #3 #8:** 新增 StringResolver 基类。 ([2738822](https://github.com/niacomsoft/dnVue/commit/273882285bdacfbe1b04bd4a14945893101d7139)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3) [#8](https://github.com/niacomsoft/dnVue/issues/8)
* **Issue #6:** 新增文化区域持久化抽象方法。 ([cdb23d6](https://github.com/niacomsoft/dnVue/commit/cdb23d6ec27797d7d423c2ce82c3eb5d073c9368)), closes [#6](https://github.com/niacomsoft/dnVue/issues/6)

## [1.0.0-alpha.6](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2022-05-05)


### NEW FEATURE

* **Issue #2 #7:** 新增应用上下文接口定义。 ([2b49524](https://github.com/niacomsoft/dnVue/commit/2b495248e034f026fb9584264e552c12657dc22a)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2) [#7](https://github.com/niacomsoft/dnVue/issues/7)
* **Issue #3 #5 #7:** 新增应用初始化配置组合 API。 ([294ad73](https://github.com/niacomsoft/dnVue/commit/294ad735a4036562662aff3ae81d591ffc990360)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3) [#5](https://github.com/niacomsoft/dnVue/issues/5) [#7](https://github.com/niacomsoft/dnVue/issues/7) [#7](https://github.com/niacomsoft/dnVue/issues/7)
* **Issue #3 #7:** 新增 Startup 类。 ([33e1eee](https://github.com/niacomsoft/dnVue/commit/33e1eee2bbfc03a6a3de2bab035756b40967229a)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3) [#7](https://github.com/niacomsoft/dnVue/issues/7)
* **Issue #3 #7:** 新增应用上下文类型 AppContext。 ([05e2301](https://github.com/niacomsoft/dnVue/commit/05e23011f408732f0d2a9e9e2dbdecfef06c3569)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3) [#7](https://github.com/niacomsoft/dnVue/issues/7)

## [1.0.0-alpha.5](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2022-05-05)


### NEW FEATURE

* **Issue #2 #3 #4:** 新增 ColoredConsoleLogWriter 和 ColoredConsoleLogWriterFactory 类。 ([dd6f56e](https://github.com/niacomsoft/dnVue/commit/dd6f56e9b55b990468038c3456dd07abdf05636e)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2) [#3](https://github.com/niacomsoft/dnVue/issues/3) [#4](https://github.com/niacomsoft/dnVue/issues/4)
* **Issue #2 #4:** 调整 LogWriterFactory 构建方法为 SingletonManager 来管理。 ([f20d2ae](https://github.com/niacomsoft/dnVue/commit/f20d2aeac751d86318bc362c1d6975dfc9ee3d97)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2) [#4](https://github.com/niacomsoft/dnVue/issues/4)
* **Issue #2 #4:** 新增统一记录运行时日志的方法 Logger。 ([3a230c0](https://github.com/niacomsoft/dnVue/commit/3a230c0ad61d6d10c2e3c6c9a39aed7a47379418)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2) [#4](https://github.com/niacomsoft/dnVue/issues/4)
* **Issue #2:** 新增单例服务管理程序 SingletonManager。 ([c8163fd](https://github.com/niacomsoft/dnVue/commit/c8163fd32c0ceece76ea8535ca6c1df4235113ae)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2)
* **Issue #3 #4 #5:** 新增日志相关的组合式 API。 ([5842384](https://github.com/niacomsoft/dnVue/commit/58423849c085b575072a0af1026c421a26e9b250)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3) [#4](https://github.com/niacomsoft/dnVue/issues/4) [#5](https://github.com/niacomsoft/dnVue/issues/5)

## [1.0.0-alpha.4](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2022-05-04)


### REFACTOR

* 重构日志模块。 ([0a7ef91](https://github.com/niacomsoft/dnVue/commit/0a7ef91c27c02f4b2356bd11d6b36ce66e451cce))
* 重构日志模块。 ([92c142e](https://github.com/niacomsoft/dnVue/commit/92c142e08248124b002105e3cb82ae500ce26321))


### PERFORMANCE OPTIMIZE

* **Issue #2:** 调整了 LogLevel 枚举定义。 ([88e5e58](https://github.com/niacomsoft/dnVue/commit/88e5e5848f3969cceb14626af7c918ac7db19210)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2)


### NEW FEATURE

* **Issue #2 #4:** 新增 LogWriter 基类。 ([746a4de](https://github.com/niacomsoft/dnVue/commit/746a4dedd8626ddf6aa9edfe647a8f9485a079d0)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2) [#4](https://github.com/niacomsoft/dnVue/issues/4)
* **Issue #2 #4:** 新增运行时日志接口定义。 ([3254980](https://github.com/niacomsoft/dnVue/commit/3254980f0bee16c3a4d8f38103d145457ed2f167)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2) [#4](https://github.com/niacomsoft/dnVue/issues/4)
* **Issue #3 #4:** 新增 ColoredConsoleLogWriter 类。 ([f423775](https://github.com/niacomsoft/dnVue/commit/f42377534f402604eaa4116ea47f6dd63455aa1f)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3) [#4](https://github.com/niacomsoft/dnVue/issues/4)
* **Issue #3 #4:** 新增 ConsoleLogWriter 类型。 ([8b1a892](https://github.com/niacomsoft/dnVue/commit/8b1a892140a9d8d622d6628421d209d248b9f1c5)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3) [#4](https://github.com/niacomsoft/dnVue/issues/4)
* **Issue #3 #4:** 新增 ConsoleLogWriterFactory 类。 ([498368f](https://github.com/niacomsoft/dnVue/commit/498368fbe92bbcf3d8e148834f14253cb92be4ea)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3) [#4](https://github.com/niacomsoft/dnVue/issues/4)

## [1.0.0-alpha.3](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2022-05-03)


### REFACTOR

* **Issue #4:** 抽象了 LoggerManager 接口。 ([a73d8f4](https://github.com/niacomsoft/dnVue/commit/a73d8f4c914ca4e6fb7ed4a00c83a9c46dd9c97a)), closes [#4](https://github.com/niacomsoft/dnVue/issues/4)


### NEW FEATURE

* **Issue #5:** 调整了日志相关组合式 API。 ([d0c44e6](https://github.com/niacomsoft/dnVue/commit/d0c44e6c6fb550c453004be64960827697bb37e8)), closes [#5](https://github.com/niacomsoft/dnVue/issues/5)
* **Issue #5:** 新增日志相关的组合式 API。 ([dddb62f](https://github.com/niacomsoft/dnVue/commit/dddb62fc3d2d10f6ed8209a57beacc7e9693d836)), closes [#5](https://github.com/niacomsoft/dnVue/issues/5)
* **Issue #5:** 新增组合式 API 项目。 ([0eaa5eb](https://github.com/niacomsoft/dnVue/commit/0eaa5eb26a9fb4d3e449ed304b9e17b8713bb974)), closes [#5](https://github.com/niacomsoft/dnVue/issues/5)

## [1.0.0-alpha.2](https://github.com/niacomsoft/dnVue/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2022-05-03)


### DOCUMENTATION

* 新增项目变更日志文档。 ([a4cc660](https://github.com/niacomsoft/dnVue/commit/a4cc660fa1566720c8655905a108939331d58d29))
* 修改了项目自述文档。 ([6968255](https://github.com/niacomsoft/dnVue/commit/69682556c0fa96c22e7071175f7b866a37d1ce21))
* 修改了项目自述文档。 ([643e2a9](https://github.com/niacomsoft/dnVue/commit/643e2a9218980f472c05249bc5abd6bf92af5f44))


### NEW FEATURE

* **Issue #4:** 新增管理输出运行时日志方法的统一方法。 ([d216676](https://github.com/niacomsoft/dnVue/commit/d21667692e9ba606720f43f15101fdd056ce7cf3)), closes [#4](https://github.com/niacomsoft/dnVue/issues/4)
* **Issue #4:** 新增基于浏览器 console 的记录运行时日志的方法。 ([cf6899f](https://github.com/niacomsoft/dnVue/commit/cf6899fef21d07a50afe29f849dde1cf336e4a35)), closes [#4](https://github.com/niacomsoft/dnVue/issues/4)
* **Issue #4:** 新增日志抽象类。 ([4dc9da2](https://github.com/niacomsoft/dnVue/commit/4dc9da215a5b7989b88031cb4c503b33a1ba4b1c)), closes [#4](https://github.com/niacomsoft/dnVue/issues/4)
* **Issue #4:** 新增日志接口。 ([fd5ba25](https://github.com/niacomsoft/dnVue/commit/fd5ba259d647dbfbc07d28696bd4ba6722253eb0)), closes [#4](https://github.com/niacomsoft/dnVue/issues/4)


### CHORE

* 升级包的版本号。 ([a63a513](https://github.com/niacomsoft/dnVue/commit/a63a513ed6257c190f6c82ad7c1430709eab73a5))
* 修改了脚本库版本号。 ([9ce3d06](https://github.com/niacomsoft/dnVue/commit/9ce3d06f4677fe64055520c77734d3f195ddc2d2))

## 1.0.0-alpha.1 (2022-05-02)


### BUILD

* 新增 NPM 管理脚本 standard-version 相关。 ([4b67c97](https://github.com/niacomsoft/dnVue/commit/4b67c97657b33ca23effb2504f2d4e1fddc6c46f))


### CHORE

* 初始化仓库忽略配置文件。 ([8817e63](https://github.com/niacomsoft/dnVue/commit/8817e63b228640db882bf0de776d26d692bf908a))
* 新增 VSCode 代码片段。 ([5e98902](https://github.com/niacomsoft/dnVue/commit/5e989023b1c692558b25cb445c691829d41abfbd))
* 修改了 Git 忽略配置文件。 ([b99bd2e](https://github.com/niacomsoft/dnVue/commit/b99bd2ec6afede39e59115cf871f7a1e167dc885))


### DOCUMENTATION

* 调整了 License 文件格式。 ([e1a3239](https://github.com/niacomsoft/dnVue/commit/e1a3239a38d8580cc36fbd2e613d93d86c5efcd5))
* 新增 NPM 依赖包说明文档。 ([98bf331](https://github.com/niacomsoft/dnVue/commit/98bf33175563a68c05d4f98c494640f3f2e56324))
* 新增项目自述文档。 ([0f01f4b](https://github.com/niacomsoft/dnVue/commit/0f01f4b349630f3e13e1ad1ab8f729acb17a38f1))


### NEW FEATURE

* **Issue #2:** 新增 Vite 应用全局类型定义。 ([a0a0087](https://github.com/niacomsoft/dnVue/commit/a0a00873fca95388d73d2f30a1702a1e701fef25)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2)
* **Issue #2:** 新增核心类型项目。 ([2fdaa34](https://github.com/niacomsoft/dnVue/commit/2fdaa34f1743993633ec39c00a0a44ce0b35a0cd)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2)
* **Issue #2:** 新增核心类型项目。 ([6c058e2](https://github.com/niacomsoft/dnVue/commit/6c058e268fd970bb3da21ef266e2a800d7aeee8c)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2)
* **Issue #2:** 新增唯一标识类型定义。 ([31ac8ed](https://github.com/niacomsoft/dnVue/commit/31ac8ed2dd645b996ff5f3d00f528be1da019e2f)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2)
* **Issue #2:** 新增无返回函数类型。 ([f061701](https://github.com/niacomsoft/dnVue/commit/f061701fe5a97212e9809f34e55f4dcae3c535fb)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2)
* **Issue #2:** 新增有返回值的方法定义。 ([846b976](https://github.com/niacomsoft/dnVue/commit/846b97652e512646c83dced8b2ba2b0efbd26a7e)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2)
* **Issue #2:** 新增字符串解释程序接口定义。 ([ac62d4a](https://github.com/niacomsoft/dnVue/commit/ac62d4a096b7ec92c6cb2f1fa4da3399ad9c97fe)), closes [#2](https://github.com/niacomsoft/dnVue/issues/2)
* **Issue #3:** 新增公共类库项目。 ([c711559](https://github.com/niacomsoft/dnVue/commit/c711559e6e6619daf6c75d921af207c400891bf2)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3)
* **Issue #3:** 新增密闭类装饰器。 ([a03c4bd](https://github.com/niacomsoft/dnVue/commit/a03c4bd25c559370991ea45df629cf02a8406704)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3)
* **Issue #3:** 新增日志类型枚举。 ([112c376](https://github.com/niacomsoft/dnVue/commit/112c37677dab9659c40b5f6f32d2f46df2f3841e)), closes [#3](https://github.com/niacomsoft/dnVue/issues/3)
