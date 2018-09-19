# 快速上手
## 在项目中使用组件库
``` javascript
# 全局引用
import 'vui/lib/style/vui.css'
import vui from 'vui/lib/vui.js'

Vue.use(vui)

# 一般引用
import { Button, Header } from 'vui/src/index'

# 按需引用（借助 babel-plugin-import）
import { Button, Header } from 'vui'

# mixins
import mixinsA from 'vui/src/mixins/A'

# utils
import utilsB from 'vui/src/utils/B'
```
**注意:** 全局引用和按需引用不能同时使用
