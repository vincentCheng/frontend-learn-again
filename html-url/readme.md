<!--
 * @Author: VincentCheng
 * @Date: 2021-05-30 16:16:29
 * @LastEditors: VincentCheng
 * @LastEditTime: 2021-05-30 17:59:45
 * @FilePath: \FontendLearnAgain\html-url\readme.md
-->

# 建立超链接

- [参考链接](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)

- URL。Unified resource locator 统一资源定位符。

  - URL 分为**绝对路径**和**相对路径**。
  - 跳到别的域名就使用绝对路径。
  - **跳到站内** 的链接使用相对路径。

- 超链接直接跳动到需要的位置

```html
<a href="contacts.html#Mailing_address">我们的地址</a>。
```

## 链接到非 HTML 资源 ——留下清晰的指示

- [参考链接](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#%E9%93%BE%E6%8E%A5%E5%88%B0%E9%9D%9Ehtml%E8%B5%84%E6%BA%90_%E2%80%94%E2%80%94%E7%95%99%E4%B8%8B%E6%B8%85%E6%99%B0%E7%9A%84%E6%8C%87%E7%A4%BA)

```html
<p>
  <a href="http://www.example.com/large-report.pdf">
    下载销售报告（PDF, 10MB）
  </a>
</p>

<p>
  <a href="http://www.example.com/video-stream/">
    观看视频（将在新标签页中播放, HD画质）
  </a>
</p>

<p>
  <a href="http://www.example.com/car-game"> 进入汽车游戏（需要Flash插件） </a>
</p>
```
