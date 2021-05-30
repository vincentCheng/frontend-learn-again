<!--
 * @Author: VincentCheng
 * @Date: 2021-05-30 16:16:29
 * @LastEditors: VincentCheng
 * @LastEditTime: 2021-05-30 17:05:32
 * @FilePath: \FontendLearnAgain\html-head\readme.md
-->

## <head>标签里有什么? Metadata-HTML中的元数据
- [参考链接](https://developer.mozilla.org/zh-CN/docs/learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)

### 视口
``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />

```
- 这段代码的意思是，让viewport的宽度等于物理设备上的真实分辨率，不允许用户缩放。
- width 控制 viewport 的大小

- device-width 获取当前设备的宽度

- initial-scale   设备初始缩放比例,就是当页面第一次 load 的时候缩放比例

- maxium-scale    允许用户缩放的最大比例

- manium-scale 允许用户缩放的最小的比例

- user-scalable  设备是否允许用户进行缩放  'yes/no'