- xml声明
- DTD声明 （建议废弃）
- svg
- - version 
- - baseProfile
- - xmlns

---

##属性

- 渲染顺序从上而下，下面覆盖上面
- 嵌入html
- - xhtml 且 `contentType：application/xhtml+xml`直接嵌入
- - html5直接嵌入
- - `<object data="image.svg" type="image/svg+xml" />`
- - `<iframe src="image.svg"></iframe>`
- - `<embed src="01.svg" type="image/svg+xml" />`
- - `<img src="01.svg" />`
- - js动态注入

---

##坐标定位

