# Nowcoder Front-end 500 [https://www.nowcoder.com/ta/review-frontend/review?page=2]



[TOC]



### HTML Basic



##### 1. 浏览器页面有哪三层构成，分别是什么，作用是什么?

构成：结构层、表示层、行为层 

分别是：HTML、CSS、JavaScript 

作用：HTML实现页面结构，CSS完成页面的表现与风格，JavaScript实现一些客户端的功能与业务。



##### 2. HTML5的优点与缺点？

优点：

- 网络标准统一、HTML5本身是由W3C推荐出来的。
- 多设备、跨平台 
- 即时更新。
- 提高可用性和改进用户的友好体验；
- 有几个新的标签，这将有助于开发人员定义重要的内容； 
- 可以给站点带来更多的多媒体元素(视频和音频)；
- 可以很好的替代Flash和Silverlight；
- 涉及到网站的抓取和索引的时候，对于SEO很友好； 
- 被大量应用于移动应用程序和游戏。

缺点：

- 安全：像之前Firefox4的web socket和透明代理的实现存在严重的安全问题，同时web storage、web socket 这样的功能很容易被黑客利用，来盗取用户的信息和资料。 
- 完善性：许多特性各浏览器的支持程度也不一样。 
- 性能：某些平台上的引擎问题导致HTML5性能低下。 
- 浏览器兼容性：最大缺点，IE9以下浏览器几乎全军覆没。



##### 3.Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?

doctype声明指出阅读程序应该用什么规则集来解释文档中的标记。在Web文档的情况下，“阅读程序”通常是浏览器或者校验器这样的一个程序，“规则”则是W3C所发布的一个文档类型定义（DTD）中包含的规则

- 声明位于文档中的最前面，处于标签之前。告知浏览器的解析器，用什么文档类型 规范来解析这个文档。
- 严格模式的排版和JS 运作模式是以该浏览器支持的最高标准运行。 
- 在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。        
- DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。 



##### 4. HTML5有哪些新特性、移除了哪些元素？

```
Html5新增了 27 个元素，废弃了 16 个元素，根据现有的标准规范，把 HTML5 的元素按优先级定义为结构性属性、块级性元素、行内语义性元素和交互性元素 4 大类。

结构性元素主要负责web上下文结构的定义

section：在 web 页面应用中，该元素也可以用于区域的章节描述。

header：页面主体上的头部， header 元素往往在一对 body 元素中。

footer：页面的底部（页脚），通常会标出网站的相关信息。

nav：专门用于菜单导航、链接导航的元素，是 navigator 的缩写。

article：用于表现一篇文章的主体内容，一般为文字集中显示的区域。

块级性元素主要完成web页面区域的划分，确保内容的有效分割。

aside：用于表达注记、贴士、侧栏、摘要、插入的引用等作为补充主体的内容。

figure：是对多个元素进行组合并展示的元素，通常与 figcaption 联合使用。

code：表示一段代码块。

dialog：用于表达人与人之间的对话，该元素包含 dt 和 dd 这两个组合元素， dt 用于表示说话者，而 dd 用来表示说话内容。

行内语义性元素主要完成web页面具体内容的引用和描述，是丰富内容展示的基础。

meter：表示特定范围内的数值，可用于工资、数量、百分比等。

time：表示时间值。

progress：用来表示进度条，可通过对其 max 、 min 、 step 等属性进行控制，完成对进度的表示和监视。

video：视频元素，用于支持和实现视频文件的直接播放，支持缓冲预载和多种视频媒体格式。

audio：音频元素，用于支持和实现音频文件的直接播放，支持缓冲预载和多种音频媒体格式。

交互性元素主要用于功能性的内容表达，会有一定的内容和数据的关联，是各种事件的基础。

details：用来表示一段具体的内容，但是内容默认可能不显示，通过某种手段（如单击）与 legend 交互才会显示出来。

datagrid：用来控制客户端数据与显示，可以由动态脚本及时更新。

menu：主要用于交互菜单（曾被废弃又被重新启用的元素）。

command：用来处理命令按钮。
```

##### 5. 你做的网页在哪些浏览器测试过,这些浏览器的内核分别是什么?

a、 IE: trident 内核

b、 Firefox ： gecko 内核

c、 Safari:webkit 内核

d、 Opera: 以前是 presto 内核， Opera 现已改用 Google Chrome 的 Blink 内核

e、 Chrome:Blink( 基于 webkit ， Google 与 Opera Software 共同开发 )



###### 6. 每个HTML文件里开头都有个很重要的东西，Doctype，知道这是干什么的吗？

声明位于文档中的最前面的位置，处于标签之前。此标签可告知浏览器文档使用哪种 HTML 或 XHTML 规范。（重点：告诉浏览器按照何种规范解析页面）



##### 10. 什么是WebGL,它有什么优点?

**WebGL（全写 Web Graphics Library ）是一种 3D 绘图标准，这种绘图技术标准允许把 JavaScript 和 OpenGL ES 2.0 结合在一起，通过增加 OpenGL ES 2.0 的一个 JavaScript 绑定， WebGL 可以为 HTML5 Canvas 提供硬件 3D 加速渲染，这样 Web 开发人员就可以借助系统显卡来在浏览器里更流畅地展示 3D 场景和模型了，还能创建复杂的导航和数据视觉化。显然， WebGL 技术标准免去了开发网页专用渲染插件的麻烦，可被用于创建具有复杂 3D 结构的网站页面，甚至可以用来设计 3D 网页游戏等等。**

**WebGL完美地解决了现有的 Web 交互式三维动画的两个问题：**

**第一，它通过HTML脚本本身实现 Web 交互式三维动画的制作，无需任何浏览器插件支持 ;**

**第二，它利用底层的图形硬件加速功能进行的图形渲染，是通过统一的、标准的、跨平台的OpenGL接口实现的。**

**通俗说WebGL中 canvas 绘图中的 3D 版本。因为原生的 WebGL 很复杂，我们经常会使用一些三方的库，如 three.js 等，这些库多数用于 HTML5 游戏开发。**





##### 11. 请你描述一下 cookies，sessionStorage 和 localStorage 的区别?

**sessionStorage 和 localStorage 是 HTML5 Web Storage API 提供的，可以方便的在 web 请求之间保存数据。有了本地数据，就可以避免数据在浏览器和服务器间不必要地来回传递。**

**sessionStorage、 localStorage 、 cookie 都是在浏览器端存储的数据，其中 sessionStorage 的概念很特别，引入了一个“浏览器窗口”的概念。 sessionStorage 是在同源的同窗口（或 tab ）中，始终存在的数据。也就是说只要这个浏览器窗口没有关闭，即使刷新页面或进入同源另一页面，数据仍然存在。关闭窗口后， sessionStorage 即被销毁。同时“独立”打开的不同窗口，即使是同一页面， sessionStorage 对象也是不同的**

**cookies会发送到服务器端。其余两个不会。**

**Microsoft 指出 Internet Explorer 8 增加 cookie 限制为每个域名 50 个，但 IE7 似乎也允许每个域名 50 个 cookie 。 Firefox 每个域名 cookie 限制为 50 个。 Opera 每个域名 cookie 限制为 30 个。 Firefox 和 Safari 允许 cookie 多达 4097 个字节，包括名（ name ）、值（ value ）和等号。 Opera 许 cookie 多达 4096 个字节，包括：名（ name ）、值（ value ）和等号。 Internet Explorer 允许 cookie 多达 4095 个字节，包括：名（ name ）、值（ value ）和等号。**

**区别：**

**- Cookie**

**+ 每个域名存储量比较小（各浏览器不同，大致 4K ）**

**+ 所有域名的存储量有限制（各浏览器不同，大致 4K ）**

**+ 有个数限制（各浏览器不同）**

**+ 会随请求发送到服务器**

**- LocalStorage**

**+ 永久存储**

**+ 单个域名存储量比较大（推荐 5MB ，各浏览器不同）**

**+ 总体数量无限制**

**- SessionStorage**

**+ 只在 Session 内有效**

**+ 存储量更大（推荐没有限制，但是实际上各浏览器也不同）**



##### 12. 说说你对HTML语义化的理解?

**(1)什么是 HTML 语义化？**

**<基本上都是围绕着几个主要的标签，像标题（ H1~H6 ）、列表（ li ）、强调（ strong em ）等等 >**

**根据内容的结构化（内容语义化），选择合适的标签（代码语义化）便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析。**

**(2)为什么要语义化？**

**为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构 : 为了裸奔时好看；**

**用户体验：例如title、 alt 用于解释名词或解释图片信息、 label 标签的活用；**

**有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；**

**方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；**

**便于团队开发和维护，语义化更具可读性，是下一步网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。**

**(3) 语义化标签**

**<header></header>**

**<footer></footer>**

**<nav></nav>**

**<section></section>**

**<article></article> SM:用来在页面中表示一套结构完整且独立的内容部分**

**<aside></aside> SM:主题的附属信息 ( 用途很广，主要就是一个附属内容 ) ，如果 article 里面为一篇文章的话，那么文章的作者以及信息内容就是这篇文章的附属内容了**

<figure></figure>SM:媒体元素，比如一些视频，图片啊等等

**<datalist></datalist>**

**SM:选项列表，与 input 元素配合使用，来定义 input 可能的值**

**SM:用于描述文档或者文档某个部分的细节 ~ 默认属性为 open~**

**ps:配合 summary 一起使用**



##### 13. link和@import的区别?

**XML/HTML代码**

`<link rel='stylesheet' rev='stylesheet' href='CSS文件 ' type='text/css' media='all' />`

**XML/HTML代码**

```html
<style type='text/css' media='screen'>
	@import url('CSS文件 ');
</style>
```

**两者都是外部引用CSS的方式，但是存在一定的区别：**

**区别1： link 是 XHTML 标签，除了加载 CSS 外，还可以定义 RSS 等其他事务； @import 属于 CSS 范畴，只能加载 CSS 。**

**区别2： link 引用 CSS 时，在页面载入时同时加载； @import 需要页面网页完全载入以后加载。**

**区别3： link 是 XHTML 标签，无兼容问题； @import 是在 CSS2.1 提出的，低版本的浏览器不支持。**

**区别4： link 支持使用 Javascript 控制 DOM 去改变样式；而 @import 不支持。**



##### 14. 说说你对SVG理解?

SVG可缩放矢量图形（ Scalable Vector Graphics ）是基于可扩展标记语言（ XML ），用于描述二维矢量图形的一种图形格式。 SVG 是 W3C('World Wide Web ConSortium' 即 ' 国际互联网标准组织 ') 在 2000 年 8 月制定的一种新的二维矢量图形格式，也是规范中的网络矢量图形标准。 SVG 严格遵从 XML 语法，并用文本格式的描述性语言来描述图像内容，因此是一种和图像分辨率无关的矢量图形格式。 SVG 于 2003 年 1 月 14 日成为 W3C 推荐标准。

特点：

1. 任意放缩

   ​	用户可以任意缩放图像显示，而不会破坏图像的清晰度、细节等。

2. 文本独立

   SVG图像中的文字独立于图像，文字保留可编辑和可搜寻的状态。也不会再有字体的限制，用户系统即使没有安装某一字体，也会看到和他们制作时完全相同的画面。

3. 较小文件

   总体来讲，SVG文件比那些 GIF 和 JPEG 格式的文件要小很多，因而下载也很快。

4. 超强显示效果

   SVG图像在屏幕上总是边缘清晰，它的清晰度适合任何屏幕分辨率和打印分辨率。

5. 超级颜色控制

   SVG图像提供一个 1600 万种颜色的调色板，支持 ICC 颜色描述文件标准、 RGB 、线 X 填充、渐变和蒙版。

6. 交互 X 和智能化。 SVG 面临的主要问题一个是如何和已经占有重要市场份额的矢量图形格式 Flash 竞争的问题，另一个问题就是 SVG 的本地运行环境下的厂家支持程度。

**浏览器支持：**

**Internet Explorer9，火狐，谷歌 Chrome ， Opera 和 Safari 都支持 SVG 。**

**IE8和早期版本都需要一个插件 - 如 Adobe SVG 浏览器，这是免费提供的。**



##### 15. HTML全局属性(global attribute)有哪些?

MDN: html global attribute或者W3C HTML global-attributes 

- accesskey:设置快捷键，提供快速访问元素如aaa在windows下的firefox中按alt + shift + a可激活元素 
- class:为元素设置类标识，多个类名用空格分开，CSS和javascript可通过class属性获取元素 
- contenteditable: 指定元素内容是否可编辑 
- contextmenu: 自定义鼠标右键弹出菜单内容 data-*: 为元素增加自定义属性 dir: 设置元素文本方向 
- draggable: 设置元素是否可拖拽 dropzone: 设置元素拖放类型： 
- copy, move, link hidden: 表示一个元素是否与文档。样式上会导致元素不显示，但是不能用这个属性实现样式效果
-  id: 元素id，文档内唯一 
- lang: 元素内容的的语言 
- spellcheck: 是否启动拼写和语法检查 style: 行内css样式 
- tabindex: 设置元素可以获得焦点，通过tab可以导航 
- title: 元素相关的建议信息 
- translate: 元素和子孙节点内容是否需要本地化

##### 16. 说说超链接target属性的取值和作用？

**target 这个属性指定所链接的页面在浏览器窗口中的打开方式。**

**它的参数值主要有：**

**a、 _blank ：在新浏览器窗口中打开链接文件**

**b、 _parent ：将链接的文件载入含有该链接框架的父框架集或父窗口中。如果含有该链接的框架不是嵌套的，则在浏览器全屏窗口中载入链接的文件，就象 _self 参数一。**

**c、 _self ：在同一框架或窗口中打开所链接的文档。此参数为默认值，通常不用指定。但是我不太理解。**

**d、 _top ：在当前的整个浏览器窗口中打开所链接的文档，因而会删除所有框架。**



##### 17. `data-`属性的作用是什么？

**`data-`为H5新增的为前端开发者提供自定义的属性，这些属性集可以通过对象的 `dataset` 属性获取，不支持该属性的浏览器可以通过 `getAttribute` 方法获取 :**

**需要注意的是：`data-`之后的以连字符分割的多个单词组成的属性，获取的时候使用驼峰风格。** 所有主流浏览器都支持 data-* 属性。

**即：当没有合适的属性和元素时，自定义的 data 属性是能够存储页面或 App 的私有的自定义数据。**



##### 18. 介绍一下你对浏览器内核的理解？

主要分成两部分：

​	渲染引擎(layout engineer或 Rendering Engine) 和 JS 引擎。

​		渲染引擎：负责取得网页的内容（HTML、 XML 、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

​		JS引擎则：解析和执行 javascript 来实现网页的动态效果。最开始渲染引擎和JS引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。



##### 19. 常见的浏览器内核有哪些？

**Trident内核： IE,MaxThon,TT,The World,360, 搜狗浏览器等。 [ 又称 MSHTML]**

**Gecko内核： Netscape6 及以上版本， FF,MozillaSuite/SeaMonkey 等**

**Presto内核： Opera7 及以上。    [Opera 内核原为： Presto ，现为： Blink;]**

**Webkit内核： Safari,Chrome 等。   [ Chrome 的： Blink （ WebKit 的分支） ]**

##### 20. iframe有那些缺点？

iframe会阻塞主页面的 Onload 事件；

​		搜索引擎的检索程序无法解读这种页面，不利于 SEO;

​		iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。

​		使用iframe之前需要考虑这两个缺点。如果需要使用 iframe ，最好是通过 javascript

​		动态给iframe添加 src 属性值，这样可以绕开以上两个问题。



##### 21. Label的作用是什么，是怎么用的？

**label标签来定义表单控制间的关系 , 当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。**

```html
<label for='Name'>Number:</label>
	<input type=“ text “ name='Name' id='Name'/>
<label>Date:<input type='text' name='B'/></label>
```

**注意:label的for属性值要与后面对应的input标签id属性值相同**

```html
<label for='Name'>Number:</label>
<input type=“ text “ name='Name' id='Name'/>
```

##### 22. 如何实现浏览器内多个标签页之间的通信?

**WebSocket、 SharedWorker ；**

**也可以调用localstorage、 cookies 等本地存储方式；**

**localstorage另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，**

**我们通过监听事件，控制它的值来进行页面信息通信；**

**注意quirks： Safari 在无痕模式下设置 localstorge 值时会抛出 QuotaExceededError 的异常；**



##### 23. 如何在页面上实现一个圆形的可点击区域？

**a、 map+area 或者 svg**

**b、 border-radius**

**c、纯 js 实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等**



##### 24. title与h3的区别、b与strong的区别、i与em的区别？

**title属性没有明确意义只表示是个标题， H1 则表示层次明确的标题，对页面信息的抓取也有很大的影响；**

**strong是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时： <strong> 会重读，而 <B> 是展示强调内容。**

**i内容展示为斜体， em 表示强调的文本；**

**Physical Style Elements -- 自然样式标签**

**b, i, u, s, pre**

**Semantic Style Elements -- 语义样式标签**

**strong, em, ins, del, code**

**应该准确使用语义样式标签, 但不能滥用 , 如果不能确定时首选使用自然样式标签。**



##### 25. 实现不使用 border 画出1px高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果？

```html
<div  style="width:100%;height:1px;background-color:black"></div>
```



##### 26. HTML5标签的作用?(用途)

a、使Web页面的内容更加有序和规范

b、使搜索引擎更加容易按照HTML5规则识别出有效的内容 

c、使Web页面更接近于一种数据字段和表



##### 27. 简述一下src与href的区别？

src用于替换当前元素， href 用于在当前文档和引用资源之间确立联系。

src是 source 的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求 src 资源时会将其指向的资源下载并应用到文档内，例如 js 脚本， img 图片和 frame 等元素。

<script src ='js.js'></script>

**当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。**

href是 Hypertext Reference 的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，如果我们在文档中添加

```
<link href='common.css' rel='stylesheet'/>
```

那么浏览器会识别该文档为css文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用 link 方式来加载 css ，而不是使用 @import 方式。



##### 28. 谈谈你对canvas的理解？

canvas是HTML5中新增一个HTML5标签与操作canvas的javascript API，它可以实现在网页中完成动态的2D与3D图像技术。标记和 SVG以及 VML 之间的一个重要的不同是，有一个基于 JavaScript 的绘图 API，而 SVG 和 VML 使用一个 XML 文档来描述绘图。SVG 绘图很容易编辑与生成，但功能明显要弱一些。 canvas可以完成动画、游戏、图表、图像处理等原来需要Flash完成的一些功能。



##### 29. WebSocket与消息推送？

B/S架构的系统多使用HTTP协议，

​	HTTP协议的特点： 1 无状态协议 2 用于通过 Internet 发送请求消息和响应消息 3 使用端口接收和发送消息，默认为80端口 底层通信还是使用Socket完成。

HTTP协议决定了服务器与客户端之间的连接方式，无法直接实现消息推送（ F5 已坏） , 一些变相的解决办法：

​	双向通信与消息推送

​		轮询：客户端定时向服务器发送Ajax请求，服务器接到请求后马上返回响应信息并关闭连接。
​		优点：后端程序编写比较容易。
​		缺点：请求中有大半是无用，浪费带宽和服务器资源。
​		实例：适于小型应用。

​	长轮询：客户端向服务器发送Ajax请求，服务器接到请求后 hold 住连接，直到有新消息才返回响应信息并关闭连接，客户端处理完响应信息后再向服务器发送新的请求。

​		优点：在无消息的情况下不会频繁的请求，耗费资小。
​		缺点：服务器hold连接会消耗资源，返回数据顺序无保证，难于管理维护。 Comet 异步的 ashx ，
​		实例：WebQQ、 Hi 网页版、 Facebook IM 。

​	长连接：在页面里嵌入一个隐蔵iframe，将这个隐蔵 iframe 的 src 属性设为对一个长连接的请求或是采用 xhr 请求，服务器端就能源源不断地往客户端输入数据。

​		优点：消息即时到达，不发无用请求；管理起来也相对便。
​		缺点：服务器维护一个长连接会增加开销。
​		实例：Gmail聊天

​	Flash Socket：在页面中内嵌入一个使用了 Socket 类的 Flash 程序 JavaScript 通过调用此 Flash 程序提供的 Socket 接口与服务器端的 Socket 接口进行通信， JavaScript 在收到服务器端传送的信息后控制页面的显示。

​		优点：实现真正的即时通信，而不是伪即时

​		缺点：客户端必须安装Flash插件；非 HTTP 协议，无法自动穿越防火墙。
​		实例：网络互动游戏。



WebSocket是 HTML5 开始提供的一种浏览器与服务器间进行全双工通讯的网络技术。依靠这种技术可以实现客户端和服务器端的长连接，双向实时通信

特点: a、事件驱动 b、异步 c、使用 ws 或者 wss 协议的客户端 socket d、能够实现真正意义上的推送功能

缺点：少部分浏览器不支持，浏览器支持的程度与方式有区别。



##### 30. img的title和alt有什么区别？

Alt 用于图片无法加载时显示 Title 为该属性提供信息，通常当鼠标滑动到元素上的时候显示



##### 31. 表单的基本组成部分有哪些，表单的主要用途是什么？

组成：表单标签、表单域、表单按钮

a、表单标签：这里面包含了处理表单数据所用 CGI 程序的 URL, 以及数据提交到服务器的方法。

b、表单域：包含了文本框、密码框、隐藏域、多行文本框、复选框、单选框、下拉选择框、和文件上传框等。

c、表单按钮：包括提交按钮，复位按钮和一般按钮；用于将数据传送到服务器上的 CGI 脚本或者取消输入，还可以用表单按钮来控制其他定义了处理脚本的处理工作。

主要用途：表单在网页中主要负责数据采集的功能，和向服务器传送数据。



##### 32. 表单提交中Get和Post方式的区别？

(1)、 get 是从服务器上获取数据， post 是向服务器传送数据。

(2)、 get 是把参数数据队列加到提交表单的 ACTION 属性所指的 URL 中，值和表单内各个字段一一对应，在 URL 中可以看到。 post 是通过 HTTP post 机制，将表单内各个字段与其内容放置在 HTML HEADER 内一起传送到 ACTION 属性所指的 URL 地址 , 用户看不到这个过程。

(3)、对于 get 方式，服务器端用 Request.QueryString 获取变量的值，对于 post 方式，服务器端用 Request.Form 获取提交的数据。

(4)、 get 传送的数据量较小，不能大于 2KB 。 post 传送的数据量较大，一般被默认为不受限制。但理论上， IIS4 中最大量为 80KB ， IIS5 中为 100KB 。

(5)、 get 安全性低， post 安全性较高。



##### 33. HTML5 有哪些新增的表单元素？

HTML5 新增了很多表单元素让开发者构建更优秀的 Web 应用程序，主要有：

datalist

keygen

output



##### 34. HTML5 废弃了哪些 HTML4 标签？

HTML5 废弃了一些过时的，不合理的HTML 标签：

· frame

· frameset

· noframe

· applet

· big

· center

· basefont



#### 35. HTML5 标准提供了哪些新的 API？

HTML5 提供的应用程序 API 主要有：

· Media API

· Text Track API

· Application Cache API

· User Interaction

· Data Transfer API

· Command API

· Constraint Validation API

· History API



#### 36. HTML5 存储类型有什么区别？

HTML5 能够本地存储数据，在之前都是使用 cookies 使用的。 [HTML5 ](http://www.yyyweb.com/tag/html5) 提供了下面两种本地存储方案：

· **localStorage** 用于持久化的本地存储，数据永远不会过期，关闭浏览器也不会丢失。

· **sessionStorage** 同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储



##### 37. HTML5 应用程序缓存和浏览器缓存有什么区别？

应用程序缓存是 [HTML5 ](http://www.yyyweb.com/tag/html5) 的重要特性之一，提供了离线使用的功能，让应用程序可以获取本地的网站内容，例如 HTML 、 CSS 、图片以及 JavaScript 。这个特性可以提高网站性能，它的实现借助于 manifest 文件，如下：

<!doctype html>

<html manifest=”example.appcache”>

…..

</html>

 

与传统浏览器缓存相比，它不强制用户访问的网站内容被缓存。



##### 38. HTML5 Canvas 元素有什么用？

Canvas 元素用于在网页上绘制图形，该元素标签强大之处在于可以直接在 HTML 上进行图形操作，

```
<canvas id=” canvas1 ″ width= ” 300 ″ height= ” 100 ″ >
</canvas>
```

 

##### 39. 除了 audio 和 video，HTML5 还有哪些媒体标签？

HTML5 对于多媒体提供了强有力的支持，除了 audio 和 video 标签外，还支持以下标签：

`<embed>` 标签定义嵌入的内容，比如插件。

` <source>` 对于定义多个数据源很有用

`<track> `标签为诸如 video 元素之类的媒介规定外部文本轨道。 用于规定字幕文件或其他包含文本的文件，当媒介播放时，这些文件是可见的。

据源很有用。标签为诸如 video 元素之类的媒介规定外部文本轨道。 用于规定字幕文件或其他包含文本的文件，当媒介播放时，这些文件是可见的。



##### 40. HTML5 中如何嵌入视频？

和音频类似，HTML5 支持 MP4 、 WebM 和 Ogg 格式的视频，下面是简单示例：

```html
<video width=” 450 ″ height= ” 340 ″ controls>
  <source src=” jamshed.mp4 ″ type= ” video/mp4 ″ >
   Your browser does’ nt support video embedding feature.
</video>
```

##### 41 HTML5 中如何嵌入音频？

HTML5 支持 MP3 、 Wav 和 Ogg 格式的音频，下面是在网页中嵌入音频的简单示例：

````html
<audio controls>
    <source src=” jamshed.mp3 ″ type= ” audio/mpeg ” >
    Your browser does’ nt support audio embedding feature.
</audio>
````

##### 42. 新的 HTML5 文档类型和字符集是？

HTML5 文档类型很简单：

`<!doctype html>`

HTML5 使用 UTF-8 编码示例：

 `<meta charset=" UTF-8 ″ >`

##### 44. 请你说说CSS选择器的类型有哪些，并举几个例子说明其用法？

类型：基础的选择器、组合选择器、属性选择器、伪类、伪元素

基础的选择器

组合选择器

属性选择器

伪类

伪元素



##### 45. 请你说说CSS有什么特殊性?（优先级、计算特殊值）

**优先级**

(1)、同类型，同级别的样式后者先于前者
(2))、ID > 类样式 > 标签 > *
(3)、内联>ID选择器>伪类>属性选择器>类选择器>标签选择器>通用选择器(*)>继承的样式

(4)、具体 > 泛化的，特殊性即css优先级
(5)、近的 > 远的 (内嵌样式 > 内部样式表 > 外联样式表)
  内嵌样式：内嵌在元素中，<span style="color:red">span</span>
  内部样式表：在页面中的样式，写在<style></style>中的样式
   外联样式表：单独存在一个css文件中，通过link引入或import导入的样式
(6)、!important 权重最高，比 inline style 还要高

**计算特殊性值**

important > 内嵌 > ID > 类 > 标签 | 伪类 | 属性选择 > 伪对象 > 继承 > 通配符



##### 46. 要动态改变层中内容可以使用的方法？

innerHTML，innerText



##### 47. 常见浏览器兼容性问题与解决方案？

1. **浏览器兼容问题一：不同浏览器的标签默认的外补丁和内补丁不同**
2. **块属性标签float后，又有横行的margin情况下，在IE6显示margin比设置的大**
3. **设置较小高度标签（一般小于10px），在IE6，IE7，遨游中高度超出自己设置高度**
4. **行内属性标签，设置display:block后采用float布局，又有横行的margin的情况，IE6间距bug**
5. **图片默认有间距**
6. **标签最低高度设置min-height不兼容**
7. **透明度的兼容CSS设置**









##### 48. 列出display的值并说明他们的作用？

```
display： none | inline | block | list-item | inline-block | table | inline-table | table-caption | table-cell | table-row | table-row-group | table-column | table-column-group | table-footer-group | table-header-group | run-in | box | inline-box | flexbox | inline-flexbox | flex | inline-flex
默认值：inline

none： 隐藏对象。与visibility属性的hidden值不同，其不为被隐藏的对象保留其物理空间 
inline： 指定对象为内联元素。 
block： 指定对象为块元素。 
list-item： 指定对象为列表项目。 
inline-block： 指定对象为内联块元素。（CSS2） 
table： 指定对象作为块元素级的表格。类同于html标签<table>（CSS2） 
inline-table： 指定对象作为内联元素级的表格。类同于html标签<table>（CSS2） 
table-caption： 指定对象作为表格标题。类同于html标签<caption>（CSS2） 
table-cell： 指定对象作为表格单元格。类同于html标签<td>（CSS2） 
table-row： 指定对象作为表格行。类同于html标签<tr>（CSS2） 
table-row-group： 指定对象作为表格行组。类同于html标签<tbody>（CSS2） 
table-column： 指定对象作为表格列。类同于html标签<col>（CSS2） 
table-column-group： 指定对象作为表格列组显示。类同于html标签<colgroup>（CSS2） 
table-header-group： 指定对象作为表格标题组。类同于html标签<thead>（CSS2） 
table-footer-group： 指定对象作为表格脚注组。类同于html标签<tfoot>（CSS2） 
run-in： 根据上下文决定对象是内联对象还是块级对象。（CSS3） 
box： 将对象作为弹性伸缩盒显示。（伸缩盒最老版本）（CSS3） 
inline-box： 将对象作为内联块级弹性伸缩盒显示。（伸缩盒最老版本）（CSS3） 
flexbox： 将对象作为弹性伸缩盒显示。（伸缩盒过渡版本）（CSS3） 
inline-flexbox： 将对象作为内联块级弹性伸缩盒显示。（伸缩盒过渡版本）（CSS3） 
flex： 将对象作为弹性伸缩盒显示。（伸缩盒最新版本）（CSS3） 
inline-flex： 将对象作为内联块级弹性伸缩盒显示。（伸缩盒最新版本）（CSS3）
```



##### 49 如何居中div, 如何居中一个浮动元素?

(1)、非浮动元素居中：可以设置 margin:0 auto 令其居中, 定位 ,父级元素text-align:center等等
(2)、浮动元素居中:
方法一:设置当前div的宽度，然后设置margin-left:50%; position:relative; left:-250px;其中的left是宽度的一半。
方法二:父元素和子元素同时左浮动，然后父元素相对左移动50%，再然后子元素相对左移动-50%。
方法三:position定位等等。



##### 50 CSS中 link 和@import 的区别是？

(1)、link属于HTML标签，而@import是CSS提供的; 
(2)、页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
(3)、import只在IE5以上才能识别，而link是HTML标签，无兼容问题;
(4)、link方式的样式的权重 高于@import的权重.



##### 51. 请列举几种清除浮动的方法(至少两种)?

**(1)、父级div定义 height** 
原理：父级div手动定义height，就解决了父级div无法自动获取到高度的问题。 
优点：简单、代码少、容易掌握 
缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级div不一样时，会产生问题 
建议：不推荐使用，只建议高度固定的布局时使用
**(2)、结尾处加空div标签 clear:both** 
原理：添加一个空div，利用css提高的clear:both清除浮动，让父级div能自动获取到高度 
优点：简单、代码少、浏览器支持好、不容易出现怪问题 
缺点：不少初学者不理解原理；如果页面浮动布局多，就要增加很多空div，让人感觉很不好 
建议：不推荐使用，但此方法是以前主要使用的一种清除浮动方法 
**(3)、父级div定义 伪类:after 和 zoom** 
原理：IE8以上和非IE浏览器才支持:after，原理和方法2有点类似，zoom(IE转有属性)可解决ie6,ie7浮动问题 
优点：浏览器支持好、不容易出现怪问题（目前：大型网站都有使用，如：腾迅，网易，新浪等等） 
缺点：代码多、不少初学者不理解原理，要两句代码结合使用才能让主流浏览器都支持。
建议：推荐使用，建议定义公共类，以减少CSS代码。
**(4)、父级div定义 overflow:hidden** 
原理：必须定义width或zoom:1，同时不能定义height，使用overflow:hidden时，浏览器会自动检查浮动区域的高度 
优点：简单、代码少、浏览器支持好 
缺点：不能和position配合使用，因为超出的尺寸的会被隐藏。 
建议：只推荐没有使用position或对overflow:hidden理解比较深的朋友使用。 
**(5)、父级div定义 overflow:auto** 
原理：必须定义width或zoom:1，同时不能定义height，使用overflow:auto时，浏览器会自动检查浮动区域的高度 
优点：简单、代码少、浏览器支持好 
缺点：内部宽高超过父级div时，会出现滚动条。 
建议：不推荐使用，如果你需要出现滚动条或者确保你的代码不会出现滚动条就使用吧。



##### 52. block，inline和inlinke-block细节对比？

**• display:block**
a、block元素会独占一行，多个block元素会各自新起一行。默认情况下，block元素宽度自动填满其父元素宽度。
b、block元素可以设置width,height属性。块级元素即使设置了宽度,仍然是独占一行。
c、block元素可以设置margin和padding属性。
**• display:inline**
a、inline元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。
b、inline元素设置width,height属性无效。
c、inline元素的margin和padding属性，水平方向的padding-left, padding-right, margin-left, margin-right都产生边距效果；但竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果。
**• display:inline-block**
a、简单来说就是将对象呈现为inline对象，但是对象的内容作为block对象呈现。之后的内联对象会被排列在同一行内。比如我们可以给一个link（a元素）inline-block属性值，使其既具有block的宽度高度特性又具有inline的同行特性。
**补充说明**
a、一般我们会用display:block，display:inline或者display:inline-block来调整元素的布局级别，其实display的参数远远不止这三种，仅仅是比较常用而已。
b、IE（低版本IE）本来是不支持inline-block的，所以在IE中对内联元素使用display:inline-block，理论上IE是不识别的，但使用display:inline-block在IE下会触发layout，从而使内联元素拥有了display:inline-block属性的表象。



##### 53. 什么叫优雅降级和渐进增强？

**优雅降级：** Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会检查以确认它们是否能正常工作。由于IE独特的盒模型布局问题，针对不同版本的IE的hack实践过优雅降级了,为那些无法支持功能的浏览器增加候选方案，使之在旧式浏览器上以某种形式降级体验却不至于完全失效.

**渐进增强：** 从被所有浏览器支持的基本功能开始，逐步地添加那些只有新式浏览器才支持的功能,向页面增加无害于基础浏览器的额外样式和功能的。当浏览器支持时，它们会自动地呈现出来并发挥作用。



##### 54. 说说浮动元素会引起的问题和你的解决办法

（1）父元素的高度无法被撑开，影响与父元素同级的元素
（2）与浮动元素同级的非浮动元素会跟随其后
（3）若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构

使用CSS中的clear:both;属性来清除元素的浮动可解决问题(2)、(3)

对于问题(1)，添加如下样式，给父元素添加clearfix样式：

```css
.clearfix:after{content: ".";display: block;height: 0;clear: both;visibility: hidden;}
.clearfix{display: inline-block;} /* for IE/Mac */
```

**清除浮动的几种方法：**

1. 额外标签法，<div style="clear:both;"></div>（缺点：不过这个办法会增加额外的标签使HTML结构看起来不够简洁。）

2. 使用after伪类

   ```css
   #parent:after{
     content:" ";
     height:0;
     visibility:hidden;
     display:block;
     clear:both;
   }
   ```

   

3. 浮动外部元素

4. 设置`overflow`为`hidden`或者auto



##### 55. 你有哪些性能优化的方法？

（1）、减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。
（2）、前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数
（3）、用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。
（4）、当需要设置的样式很多时设置className而不是直接操作style。
（5）、少用全局变量、缓存DOM节点查找的结果。减少IO读取操作。
（6）、避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。
（7）、图片预加载，将样式表放在顶部，将脚本放在底部 加上时间戳。



(1)、减少HTTP请求次数 
(2)、使用CDN
(3)、避免空的src和href
(4)、为文件头指定Expires
(5)、使用gzip压缩内容
(6)、把CSS放到顶部
(7)、把JS放到底部
(8)、避 免使用CSS表达式 
(9)、将CSS和JS放到外部文件中 
(10)、避免跳转 
(11)、可缓存的AJAX 
(12)、使用GET来完成AJAX请求



##### 56. 为什么要初始化CSS样式？

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。
*最简单的初始化方法就是： * {padding: 0; margin: 0;} （不建议）





##### 57. 解释下浮动和它的工作原理？清除浮动的技巧？

浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。
**(1)、使用空标签清除浮动。**
这种方法是在所有浮动标签后面添加一个空标签 定义css clear:both. 弊端就是增加了无意义标签。
**(2)、使用overflow。**
给包含浮动元素的父标签添加css属性 overflow:auto; zoom:1; zoom:1用于兼容IE6。
**(3)、使用after伪对象清除浮动。**
该方法只适用于非IE浏览器。具体写法可参照以下示例。使用中需注意以下几点。一、该方法中必须为需要清除浮动元素的伪对象中设置 height:0，否则该元素会比实际高出若干像素；



##### 59. 谈谈你对CSS中刻度的认识？

**在CSS中刻度是用于设置元素尺寸的单位。**
a、特殊值0可以省略单位。例如：margin:0px可以写成margin:0 
b、一些属性可能允许有负长度值，或者有一定的范围限制。如果不支持负长度值，那应该变换到能够被支持的最近的一个长度值。 
c、长度单位包括：相对单位和绝对单位。 
相对长度单位有： em, ex, ch, rem, vw, vh, vmax, vmin 
绝对长度单位有： cm, mm, q, in, pt, pc, px
绝对长度单位：1in = 2.54cm = 25.4 mm = 72pt = 6pc = 96px
**文本相对长度单位：em**
相对长度单位是相对于当前对象内文本的字体尺寸，如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。(相对父元素的字体大小倍数)
body { font-size: 14px; }
h1 { font-size: 16px; }
.size1 p { font-size: 1em; }
.size2 p { font-size: 2em; }
.size3 p { font-size: 3em; }
**文本相对长度单位：rem**
rem是CSS3新增的一个相对单位（root em，根em），相对于根元素(即html元素)font-size计算值的倍数
只相对于根元素的大小
浏览器的默认字体大小为16像素，浏览器默认样式也称为user agent stylesheet，就是所有浏览器内置的默认样式，多数是可以被修改的，但chrome不能直接修改，可以被用户样式覆盖。



**rem**
rem是CSS3新增的一个相对单位（root em，根em），相对于根元素(即html元素)font-size计算值的倍数
只相对于根元素的大小
rem（font size of the root element）是指相对于根元素的字体大小的单位。简单的说它就是一个相对单位。
作用：利用rem可以实现简单的响应式布局，可以利用html元素中字体的大小与屏幕间的比值设置font-size的值实现当屏幕分辨率变化时让元素也变化，以前的天猫tmall就使用这种办法
**em**
文本相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸(默认16px)。(相对父元素的字体大小倍数)
em（font size of the element）是指相对于父元素的字体大小的单位。它与rem之间其实很相似，区别在。（相对是的HTML元素的字体大，默认16px）
**em与rem的重要区别：** 它们计算的规则一个是依赖父元素另一个是依赖根元素计算



##### 60. 请你说说em与rem的区别？

**rem**
rem是CSS3新增的一个相对单位（root em，根em），相对于根元素(即html元素)font-size计算值的倍数
只相对于根元素的大小
rem（font size of the root element）是指相对于根元素的字体大小的单位。简单的说它就是一个相对单位。
作用：利用rem可以实现简单的响应式布局，可以利用html元素中字体的大小与屏幕间的比值设置font-size的值实现当屏幕分辨率变化时让元素也变化，以前的天猫tmall就使用这种办法
**em**
文本相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸(默认16px)。(相对父元素的字体大小倍数)
em（font size of the element）是指相对于父元素的字体大小的单位。它与rem之间其实很相似，区别在。（相对是的HTML元素的字体大，默认16px）
**em与rem的重要区别：** 它们计算的规则一个是依赖父元素另一个是依赖根元素计算



##### 61. 请你说说box-sizing属性的的用法？

设置或检索对象的盒模型组成模式

**a、box-sizing:content-box：** padding和border不被包含在定义的width和height之内。对象的实际宽度等于设置的width值和border、padding之和，即 ( Element width = width + border + padding，但占有页面位置还要加上margin ) 此属性表现为标准模式下的盒模型。
**b、box-sizing:border-box：** padding和border被包含在定义的width和height之内。对象的实际宽度就等于设置的width值，即使定义有border和padding也不会改变对象的实际宽度，即 ( Element width = width ) 此属性表现为怪异模式下的盒模型。

##### 62. 浏览器标准模式和怪异模式之间的区别是什么？

```
所谓的标准模式是指，浏览器按W3C标准解析执行代码；怪异模式则是使用浏览器自己的方式解析执行代码，因为不同浏览器解析执行的方式不一样，所以我们称之为怪异模式。浏览器解析时到底使用标准模式还是怪异模式，与你网页中的DTD声明直接相关，DTD声明定义了标准文档的类型（标准模式解析）文档类型，会使浏览器使用相应的方式加载网页并显示，忽略DTD声明,将使网页进入怪异模式(quirks mode)。
```



##### 63. 怪异Quirks模式是什么，它和标准Standards模式有什么区别？

从IE6开始，引入了Standards模式，标准模式中，浏览器尝试给符合标准的文档在规范上的正确处理达到在指定浏览器中的程度。

在IE6之前CSS还不够成熟，所以IE5等之前的浏览器对CSS的支持很差， IE6将对CSS提供更好的支持，然而这时的问题就来了，因为有很多页面是基于旧的布局方式写的，而如果IE6 支持CSS则将令这些页面显示不正常，如何在即保证不破坏现有页面，又提供新的渲染机制呢？

在写程序时我们也会经常遇到这样的问题，如何保证原来的接口不变，又提供更强大的功能，尤其是新功能不兼容旧功能时。遇到这种问题时的一个常见做法是增加参数和分支，即当某个参数为真时，我们就使用新功能，而如果这个参数 不为真时，就使用旧功能，这样就能不破坏原有的程序，又提供新功能。IE6也是类似这样做的，它将DTD当成了这个“参数”，因为以前的页面大家都不会去写DTD，所以IE6就假定 如果写了DTD，就意味着这个页面将采用对CSS支持更好的布局，而如果没有，则采用兼容之前的布局方式。这就是Quirks模式（怪癖模式，诡异模式，怪异模式）。

区别：总体会有布局、样式解析和脚本执行三个方面的区别。

**盒模型：** 在W3C标准中，如果设置一个元素的宽度和高度，指的是元素内容的宽度和高度，而在Quirks 模式下，IE的宽度和高度还包含了padding和border。

**设置行内元素的高宽：** 在Standards模式下，给<span>等行内元素设置wdith和height都不会生效，而在quirks模式下，则会生效。
**设置百分比的高度：** 在standards模式下，一个元素的高度是由其包含的内容来决定的，如果父元素没有设置百分比的高度，子元素设置一个百分比的高度是无效的用margin:0 auto设置水平居中：使用margin:0 auto在standards模式下可以使元素水平居中，但在quirks模式下却会失效。
（还有很多，答出什么不重要，关键是看他答出的这些是不是自己经验遇到的，还是说都是看文章看的，甚至完全不知道。）

#####  64. 说说你对边距折叠的理解?

**外边距折叠：** 相邻的两个或多个外边距 (margin) 在垂直方向会合并成一个外边距（margin）
**相邻：** 没有被非空内容、padding、border 或 clear 分隔开的margin特性. 非空内容就是说这元素之间要么是兄弟关系或者父子关系
**垂直方向外边距合并计算:**
a、参加折叠的margin都是正值：取其中 margin 较大的值为最终 margin 值。
b、参与折叠的 margin 都是负值：取的是其中绝对值较大的，然后，从 0 位置，负向位移。
c、参与折叠的 margin 中有正值，有负值：先取出负 margin 中绝对值中最大的，然后，和正 margin 值中最大的 margin 相加



##### 65. 内联与块级标签有何区别？

Html中的标签默认主要分为两大类型，一类为块级元素，另一类是行内元素，许多人也把行内称为内联，所以叫内联元素，其实就是一个意思。为了很好的布局，必须理解它们间的区别。



##### 66. 说说隐藏元素的方式有哪些？

a、使用CSS的display:none，不会占有原来的位置
b、使用CSS的visibility:hidden，会占有原来的位置
c、使用HTML5中的新增属性hidden="hidden"，不会占有原来的位置



##### 67. 为什么重置浏览器默认样式，如何重置默浏览器认样式？

每种浏览器都有一套默认的样式表，即user agent stylesheet，网页在没有指定的样式时，按浏览器内置的样式表来渲染。这是合理的，像word中也有一些预留样式，可以让我们的排版更美观整齐。不同浏览器甚至同一浏览器不同版本的默认样式是不同的。但这样会有很多兼容问题。

a、最简单的办法：（不推荐使用）*{margin: 0;padding: 0;}。

b、使用CSSReset可以将所有浏览器默认样式设置成一样。

c、normalize：也许有些cssreset过于简单粗暴，有点伤及无辜，normalize是另一个选择。bootstrap已经引用该css来重置浏览器默认样式，比普通的cssreset要精细一些，保留浏览器有用的默认样式，支持包括手机浏览器在内的超多浏览器，同时对HTML5元素、排版、列表、嵌入的内容、表单和表格都进行了一般化。

天猫 使用的css reset重置浏览器默认样式





##### 68. 谈谈你对BFC与IFC的理解？(是什么，如何产生，作用)

(1)、什么是BFC与IFC
a、BFC（Block Formatting Context）即“块级格式化上下文”， IFC（Inline Formatting Context）即行内格式化上下文。常规流（也称标准流、普通流）是一个文档在被显示时最常见的布局形态。一个框在常规流中必须属于一个格式化上下文，你可以把BFC想象成一个大箱子，箱子外边的元素将不与箱子内的元素产生作用。

b、BFC是W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。当涉及到可视化布局的时候，Block Formatting Context提供了一个环境，HTML元素在这个环境中按照一定规则进行布局。一个环境中的元素不会影响到其它环境中的布局。比如浮动元素会形成BFC，浮动元素内部子元素的主要受该浮动元素影响，两个浮动元素之间是互不影响的。也可以说BFC就是一个作用范围。

c、在普通流中的 Box(框) 属于一种 formatting context(格式化上下文) ，类型可以是 block ，或者是 inline ，但不能同时属于这两者。并且， Block boxes(块框) 在 block formatting context(块格式化上下文) 里格式化， Inline boxes(块内框) 则在 Inline Formatting Context(行内格式化上下文) 里格式化。

(2)、如何产生BFC
当一个HTML元素满足下面条件的任何一点，都可以产生Block Formatting Context：
a、float的值不为none
b、overflow的值不为visible
c、display的值为table-cell, table-caption, inline-block中的任何一个
d、position的值不为relative和static

CSS3触发BFC方式则可以简单描述为：在元素定位非static，relative的情况下触发，float也是一种定位方式。

(3)、BFC的作用与特点
a、不和浮动元素重叠，清除外部浮动，阻止浮动元素覆盖

如果一个浮动元素后面跟着一个非浮动的元素，那么就会产生一个重叠的现象。常规流（也称标准流、普通流）是一个文档在被显示时最常见的布局形态，当float不为none时，position为absolute、fixed时元素将脱离标准流



##### 69. 说说你对页面中使用定位(position)的理解？

使用css布局position非常重要，语法如下：
position：static | relative | absolute | fixed | center | page | sticky
默认值：static，center、page、sticky是CSS3中新增加的值。
**(1)、static**
可以认为静态的，默认元素都是静态的定位，对象遵循常规流。此时4个定位偏移属性不会被应用，也就是使用left，right，bottom，top将不会生效。
**(2)、relative**
相对定位，对象遵循常规流，并且参照自身在常规流中的位置通过top，right，bottom，left这4个定位偏移属性进行偏移时不会影响常规流中的任何元素。
**(3)、absolute**
a、绝对定位，对象脱离常规流，此时偏移属性参照的是离自身最近的定位祖先元素，如果没有定位的祖先元素，则一直回溯到body元素。盒子的偏移位置不影响常规流中的任何元素，其margin不与其他任何margin折叠。
b、元素定位参考的是离自身最近的定位祖先元素，要满足两个条件，第一个是自己的祖先元素，可以是父元素也可以是父元素的父元素，一直找，如果没有则选择body为对照对象。第二个条件是要求祖先元素必须定位，通俗说就是position的属性值为非static都行。
**(4)、fixed**
固定定位，与absolute一致，但偏移定位是以窗口为参考。当出现滚动条时，对象不会随着滚动。
**(5)、center**
与absolute一致，但偏移定位是以定位祖先元素的中心点为参考。盒子在其包含容器垂直水平居中。（CSS3）
**(6)、page**
与absolute一致。元素在分页媒体或者区域块内，元素的包含块始终是初始包含块，否则取决于每个absolute模式。（CSS3）
**(7)、sticky**
对象在常态时遵循常规流。它就像是relative和fixed的合体，当在屏幕中时按常规流排版，当卷动到屏幕外时则表现如fixed。该属性的表现是现实中你见到的吸附效果。（CSS3）



##### 70. 如何解决多个元素重叠问题？

**使用z-index属性可以设置元素的层叠顺序**

z-index属性
语法：z-index: auto | <integer>
默认值：auto
适用于：定位元素。即定义了position为非static的元素
取值：
auto： 元素在当前层叠上下文中的层叠级别是0。元素不会创建新的局部层叠上下文，除非它是根元素。 
整数： 用整数值来定义堆叠级别。可以为负值。 说明：
检索或设置对象的层叠顺序。 
z-index用于确定元素在当前层叠上下文中的层叠级别，并确定该元素是否创建新的局部层叠上下文。 
当多个元素层叠在一起时，数字大者将显示在上面。



##### 71. 页面布局的方式有哪些？

方式：双飞翼、多栏、弹性、流式、瀑布流、响应式布局 

**双飞翼布局**

​	经典三列布局，也叫做圣杯布局【Holy Grail of Layouts】是Kevin Cornell在2006年提出的一个布局模型概念，在国内最早是由淘宝UED的工程师传播开来，在中国也有叫法是双飞翼布局，它的布局要求有几点：

a、三列布局，中间宽度自适应，两边定宽； 
b、中间栏要在浏览器中优先展示渲染； 
c、允许任意列的高度最高；
d、要求只用一个额外的DIV标签； 
e、要求用最简单的CSS、最少的HACK语句；

在不增加额外标签的情况下，圣杯布局已经非常完美，圣杯布局使用了相对定位，以后布局是有局限性的，而且宽度控制要改的地方也多。在淘宝UED（User Experience Design）探讨下，增加多一个div就可以不用相对布局了，只用到了浮动和负边距，这就是我们所说的双飞翼布局。

**多栏布局**

a、栏栅格系统：就是利用浮动实现的多栏布局，在bootstrap中用的非常多。
b、多列布局：栅格系统并没有真正实现分栏效果（如word中的分栏），CSS3为了满足这个要求增加了多列布局模块

**弹性布局（Flexbox）**

CSS3引入了一种新的布局模式——Flexbox布局，即伸缩布局盒模型（Flexible Box），用来提供一个更加有效的方式制定、调整和分布一个容器里项目布局，即使它们的大小是未知或者动态的，这里简称为Flex。
Flexbox布局常用于设计比较复杂的页面，可以轻松的实现屏幕和浏览器窗口大小发生变化时保持元素的相对位置和大小不变，同时减少了依赖于浮动布局实现元素位置的定义以及重置元素的大小。

Flexbox布局在定义伸缩项目大小时伸缩容器会预留一些可用空间，让你可以调节伸缩项目的相对大小和位置。例如，你可以确保伸缩容器中的多余空间平均分配多个伸缩项目，当然，如果你的伸缩容器没有足够大的空间放置伸缩项目时，浏览器会根据一定的比例减少伸缩项目的大小，使其不溢出伸缩容器。

综合而言，Flexbox布局功能主要具有以下几点：
a、屏幕和浏览器窗口大小发生改变也可以灵活调整布局；
b、可以指定伸缩项目沿着主轴或侧轴按比例分配额外空间（伸缩容器额外空间），从而调整伸缩项目的大小；
c、可以指定伸缩项目沿着主轴或侧轴将伸缩容器额外空间，分配到伸缩项目之前、之后或之间；
d、可以指定如何将垂直于元素布局轴的额外空间分布到该元素的周围；
e、可以控制元素在页面上的布局方向；
f、可以按照不同于文档对象模型（DOM）所指定排序方式对屏幕上的元素重新排序。也就是说可以在浏览器渲染中不按照文档流先后顺序重排伸缩项目顺序

**瀑布流布局**

瀑布流布局是流式布局的一种。是当下比较流行的一种网站页面布局，视觉表现为参差不齐的多栏布局，随着页面滚动条向下滚动，这种布局还会不断加载数据块并附加至当前尾部。最早采用此布局的网站是Pinterest，逐渐在国内流行开来。
**优点**
a、有效的降低了界面复杂度，节省了空间：我们不再需要臃肿复杂的页码导航链接或按钮了。
b、对触屏设备来说，交互方式更符合直觉：在移动应用的交互环境当中，通过向上滑动进行滚屏的操作已经成为最基本的用户习惯，而且所需要的操作精准程度远远低于点击链接或按钮。
c、更高的参与度：以上两点所带来的交互便捷性可以使用户将注意力更多的集中在内容而不是操作上，从而让他们更乐于沉浸在探索与浏览当中。
**缺点**
a、有限的用例：
无限滚动的方式只适用于某些特定类型产品当中一部分特定类型的内容。
例如，在电商网站当中，用户时常需要在商品列表与详情页面之间切换，这种情况下，传统的、带有页码导航的方式可以帮助用户更稳妥和准确的回到某个特定的列表页面当中。
b、额外的复杂度：
那些用来打造无限滚动的JS库虽然都自称很容易使用，但你总会需要在自己的产品中进行不同程度的定制化处理，以满足你们自己的需求;另外这些JS库在浏览器和设备兼容性等方面的表现也参差不齐，你必须做好充分的测试与调整工作。
c、再见了，页脚：
如果使用了比较典型的无限滚动加载模式，这就意味着你可以和页脚说拜拜了。
最好考虑一下页脚对于你的网站，特别是用户的重要性;如果其中确实有比较重要的内容或链接，那么最好换一种更传统和稳妥的方式。
千万不要耍弄你的用户，当他们一次次的浏览到页面底部，看到页脚，却因为自动加载的内容突然出现而无论如何都无法点击页脚中的链接时，他们会变的越发愤怒。
d、集中在一页当中动态加载数据，与一页一页的输出相比，究竟那种方式更利于SEO，这是你必须考虑的问题。对于某些以类型网站来说，在这方面进行冒险是很不划算的。
e、关于页面数量的印象：
其实站在用户的角度来看，这一点并非负面;不过，如果对于你的网站来说，通过更多的内容页面展示更多的相关信息(包括广告)是很重要的策略，那么单页无限滚动的方式对你并不适用。

**流式布局（Fluid）**

固定布局和流式布局在网页设计中最常用的两种布局方式。固定布局能呈现网页的原始设计效果，流式布局则不受窗口宽度影响，流式布局使用百分比宽度来限定布局元素，这样可以根据客户端分辨率的大小来进行合理的显示。

**响应式布局**

响应式布局是Ethan Marcotte在2010年5月份提出的一个概念，简而言之，就是一个网站能够兼容多个终端——而不是为每个终端做一个特定的版本。这个概念是为解决移动互联网浏览而诞生的。
响应式布局可以为不同终端的用户提供更加舒适的界面和更好的用户体验，而且随着目前大屏幕移动设备的普及，用“大势所趋”来形容也不为过。随着越来越多的设计师采用这个技术，我们不仅看到很多的创新，还看到了一些成形的模式。
**优点**
a、面对不同分辨率设备灵活性强
b、能够快捷解决多设备显示适应问题
**缺点**
a、兼容各种设备工作量大，效率低下
b、代码累赘，会出现隐藏无用的元素，加载时间加长
c、其实这是一种折中性质的设计解决方案，多方面因素影响而达不到最佳效果
d、一定程度上改变了网站原有的布局结构，会出现用户混淆的情况



##### 72. **overflow** :hidden是否形成新的块级格式化上下文？

会形成，触发BFC的条件有：
\- float的值不为none。
\- overflow的值不为visible。
\- display的值为table-cell, table-caption, inline-block 中的任何一个。
\- position的值不为relative 和static。



##### 73. 说一下http和https

https的SSL加密是在传输层实现的。

(1)http和https的基本概念

http: 超文本传输协议，是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准（TCP），用于从WWW服务器传输超文本到本地浏览器的传输协议，它可以使浏览器更加高效，使网络传输减少。

https: 是以安全为目标的HTTP通道，简单讲是HTTP的安全版，即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。

https协议的主要作用是：建立一个信息安全通道，来确保数组的传输，确保网站的真实性。

(2)http和https的区别？

http传输的数据都是未加密的，也就是明文的，网景公司设置了SSL协议来对http协议传输的数据进行加密处理，简单来说https协议是由http和ssl协议构建的可进行加密传输和身份认证的网络协议，比http协议的安全性更高。
主要的区别如下：

Https协议需要ca证书，费用较高。

http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。

使用不同的链接方式，端口也不同，一般而言，http协议的端口为80，https的端口为443

http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

(3)https协议的工作原理

客户端在使用HTTPS方式与Web服务器通信时有以下几个步骤，如图所示。

客户使用https url访问服务器，则要求web 服务器建立ssl链接。

web服务器接收到客户端的请求之后，会将网站的证书（证书中包含了公钥），返回或者说传输给客户端。

客户端和web服务器端开始协商SSL链接的安全等级，也就是加密等级。

客户端浏览器通过双方协商一致的安全等级，建立会话密钥，然后通过网站的公钥来加密会话密钥，并传送给网站。

web服务器通过自己的私钥解密出会话密钥。

web服务器通过会话密钥加密与客户端之间的通信。

(4)https协议的优点

使用HTTPS协议可认证用户和服务器，确保数据发送到正确的客户机和服务器；

HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性。

HTTPS是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻击的成本。

谷歌曾在2014年8月份调整搜索引擎算法，并称“比起同等HTTP网站，采用HTTPS加密的网站在搜索结果中的排名将会更高”。

(5)https协议的缺点

https握手阶段比较费时，会使页面加载时间延长50%，增加10%~20%的耗电。

https缓存不如http高效，会增加数据开销。

SSL证书也需要钱，功能越强大的证书费用越高。

SSL证书需要绑定IP，不能再同一个ip上绑定多个域名，ipv4资源支持不了这种消耗



##### 74. tcp三次握手，一句话概括

客户端和服务端都需要直到各自可收发，因此需要三次握手。

简化三次握手：

```
<img width="487" alt="2018-07-10 3 42 11" src="https://user-images.githubusercontent.com/17233651/42496289-1c6d668a-8458-11e8-98b3-65db50f64d48.png">
```

从图片可以得到三次握手可以简化为：C发起请求连接S确认，也发起连接C确认我们再看看每次握手的作用：第一次握手：S只可以确认 自己可以接受C发送的报文段第二次握手：C可以确认 S收到了自己发送的报文段，并且可以确认 自己可以接受S发送的报文段第三次握手：S可以确认 C收到了自己发送的报文段



##### 75. TCP和UDP的区别

（1）TCP是面向连接的，udp是无连接的即发送数据前不需要先建立链接。

（2）TCP提供可靠的服务。也就是说，通过TCP连接传送的数据，无差错，不丢失，不重复，且按序到达;UDP尽最大努力交付，即不保证可靠交付。 并且因为tcp可靠，面向连接，不会丢失数据因此适合大数据量的交换。

（3）TCP是面向字节流，UDP面向报文，并且网络出现拥塞不会使得发送速率降低（因此会出现丢包，对实时的应用比如IP电话和视频会议等）。

（4）TCP只能是1对1的，UDP支持1对1,1对多。

（5）TCP的首部较大为20字节，而UDP只有8字节。

（6）TCP是面向连接的可靠性传输，而UDP是不可靠的。



##### 76. WebSocket的实现和应用

(1)什么是WebSocket?

WebSocket是HTML5中的协议，支持持久连续，http协议不支持持久性连接。Http1.0和HTTP1.1都不支持持久性的链接，HTTP1.1中的keep-alive，将多个http请求合并为1个

(2)WebSocket是什么样的协议，具体有什么优点？

HTTP的生命周期通过Request来界定，也就是Request一个Response，那么在Http1.0协议中，这次Http请求就结束了。在Http1.1中进行了改进，是的有一个connection：Keep-alive，也就是说，在一个Http连接中，可以发送多个Request，接收多个Response。但是必须记住，在Http中一个Request只能对应有一个Response，而且这个Response是被动的，不能主动发起。

WebSocket是基于Http协议的，或者说借用了Http协议来完成一部分握手，在握手阶段与Http是相同的。我们来看一个websocket握手协议的实现，基本是2个属性，upgrade，connection。

基本请求如下：

```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com
```

多了下面2个属性：

```
Upgrade:webSocket
Connection:Upgrade
```

告诉服务器发送的是websocket

```
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
```

##### 77. HTTP请求的方式，HEAD方式

head：类似于get请求，只不过返回的响应中没有具体的内容，用户获取报头

options：允许客户端查看服务器的性能，比如说服务器支持的请求方式等等。



##### 78. 一个图片url访问后直接下载怎样实现？

请求的返回头里面，用于浏览器解析的重要参数就是OSS的API文档里面的返回http头，决定用户下载行为的参数。

下载的情况下：

1. x-oss-object-type:Normal

2. x-oss-request-id:598D5ED34F29D01FE2925F41

3. x-oss-storage-class:Standard

##### 79. 说一下web Quality（无障碍）

能够被残障人士使用的网站才能称得上一个易用的（易访问的）网站。

残障人士指的是那些带有残疾或者身体不健康的用户。

使用alt属性：

`<img src="person.jpg"  alt="this is a person"/>`

有时候浏览器会无法显示图像。具体的原因有：

用户关闭了图像显示

浏览器是不支持图形显示的迷你浏览器

浏览器是语音浏览器（供盲人和弱视人群使用）
如果您使用了alt 属性，那么浏览器至少可以显示或读出有关图像的描述。

##### 80. 几个很实用的BOM属性对象方法?

什么是Bom? Bom是浏览器对象。有哪些常用的Bom属性呢？

(1)location对象

location.href-- 返回或设置当前文档的URL
location.search -- 返回URL中的查询字符串部分。例如 http://www.dreamdu.com/dreamdu.php?id=5&name=dreamdu 返回包括(?)后面的内容?id=5&name=dreamdu
location.hash -- 返回URL#后面的内容，如果没有#，返回空
location.host -- 返回URL中的域名部分，例如[www.dreamdu.com](http://www.dreamdu.com/)
location.hostname -- 返回URL中的主域名部分，例如dreamdu.com
location.pathname -- 返回URL的域名后的部分。例如 http://www.dreamdu.com/xhtml/ 返回/xhtml/
location.port -- 返回URL中的端口部分。例如 http://www.dreamdu.com:8080/xhtml/ 返回8080
location.protocol -- 返回URL中的协议部分。例如 http://www.dreamdu.com:8080/xhtml/ 返回(//)前面的内容http:
location.assign -- 设置当前文档的URL
location.replace() -- 设置当前文档的URL，并且在history对象的地址列表中移除这个URL location.replace(url);
location.reload() -- 重载当前页面

(2)history对象

history.go() -- 前进或后退指定的页面数 history.go(num);
history.back() -- 后退一页
history.forward() -- 前进一页

(3)Navigator对象

navigator.userAgent -- 返回用户代理头的字符串表示(就是包括浏览器版本信息等的字符串)
navigator.cookieEnabled -- 返回浏览器是否支持(启用)cookie

##### 81. 说一下HTML5 drag api

```
dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发，。
darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。
dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。
dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。
dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。
drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。
dragend：事件主体是被拖放元素，在整个拖放操作结束时触发
```



##### 82. 说一下http2.0

首先补充一下，http和https的区别，相比于http,https是基于ssl加密的http协议

简要概括：http2.0是基于1999年发布的http1.0之后的首次更新。

提升访问速度（可以对于，请求资源所需时间更少，访问速度更快，相比http1.0）

允许多路复用：多路复用允许同时通过单一的HTTP/2连接发送多重请求-响应信息。改善了：在http1.1中，浏览器客户端在同一时间，针对同一域名下的请求有一定数量限制（连接数量），超过限制会被阻塞。

二进制分帧：HTTP2.0会将所有的传输信息分割为更小的信息或者帧，并对他们进行二进制编码

首部压缩

服务器端推送

##### 83. 补充400和401、403状态码

(1)400状态码：请求无效

产生原因：

前端提交数据的字段名称和字段类型与后台的实体没有保持一致

前端提交到后台的数据应该是json字符串类型，但是前端没有将对象JSON.stringify转化成字符串。

解决方法：

对照字段的名称，保持一致性

将obj对象通过JSON.stringify实现序列化

(2)401状态码：当前请求需要用户验证

(3)403状态码：服务器已经得到请求，但是拒绝执行



##### 84. fetch发送2次请求的原因

fetch发送post请求的时候，总是发送2次，第一次状态码是204，第二次才成功？

原因很简单，因为你用fetch的post请求的时候，导致fetch 第一次发送了一个Options请求，询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求

##### 85. Cookie、sessionStorage、localStorage的区别

共同点：都是保存在浏览器端，并且是同源的

Cookie：cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下,存储的大小很小只有4K左右。 （key：可以在浏览器和服务器端来回传递，存储容量小，只有大约4K左右）

sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持，localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。（key：本身就是一个回话过程，关闭浏览器后消失，session为一个回话，当页面不同即使是同一页面打开两次，也被视为同一次回话）

localStorage：localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。（key：同源窗口都会共享，并且不会失效，不管窗口或者浏览器关闭与否都会始终生效）

补充说明一下cookie的作用：

保存用户登录状态。例如将用户id存储于一个cookie内，这样当用户下次访问该页面时就不需要重新登录了，现在很多论坛和社区都提供这样的功能。 cookie还可以设置过期时间，当超过时间期限后，cookie就会自动消失。因此，系统往往可以提示用户保持登录状态的时间：常见选项有一个月、三个 月、一年等。

跟踪用户行为。例如一个天气预报网站，能够根据用户选择的地区显示当地的天气情况。如果每次都需要选择所在地是烦琐的，当利用了cookie后就会显得很人性化了，系统能够记住上一次访问的地区，当下次再打开该页面时，它就会自动显示上次用户所在地区的天气情况。因为一切都是在后 台完成，所以这样的页面就像为某个用户所定制的一样，使用起来非常方便定制页面。如果网站提供了换肤或更换布局的功能，那么可以使用cookie来记录用户的选项，例如：背景色、分辨率等。当用户下次访问时，仍然可以保存上一次访问的界面风格。

##### 86. 说一下web worker

在HTML页面中，如果在执行脚本时，页面的状态是不可相应的，直到脚本执行完成后，页面才变成可相应。web worker是运行在后台的js，独立于其他脚本，不会影响页面你的性能。并且通过postMessage将结果回传到主线程。这样在进行复杂操作的时候，就不会阻塞主线程了。

如何创建web worker：

检测浏览器对于web worker的支持性

创建web worker文件（js，回传函数等）

创建web worker对象



##### 87. 对HTML语义化标签的理解

HTML5语义化标签是指正确的标签包含了正确的内容，结构良好，便于阅读，比如nav表示导航条，类似的还有article、header、footer等等标签。

##### 88. iframe是什么？有什么缺点？

定义：iframe元素会创建包含另一个文档的内联框架

提示：可以将提示文字放在<iframe></iframe>之间，来提示某些不支持iframe的浏览器

缺点：

会阻塞主页面的onload事件

搜索引擎无法解读这种页面，不利于SEO

iframe和主页面共享连接池，而浏览器对相同区域有限制所以会影响性能。



##### 89. Doctype作用?严格模式与混杂模式如何区分？它们有何意义?

Doctype声明于文档最前面，告诉浏览器以何种方式来渲染页面，这里有两种模式，严格模式和混杂模式。

严格模式的排版和JS 运作模式是 以该浏览器支持的最高标准运行。

混杂模式，向后兼容，模拟老式浏览器，防止浏览器无法兼容页面。



##### 90. Cookie如何防范XSS攻击

XSS（跨站脚本攻击）是指攻击者在返回的HTML中嵌入javascript脚本，为了减轻这些攻击，需要在HTTP头部配上，set-cookie：

httponly-这个属性可以防止XSS,它会禁止javascript脚本来访问cookie。

secure - 这个属性告诉浏览器仅在请求为https的时候发送cookie。

结果应该是这样的：`Set-Cookie=<cookie-value>.....`



##### 91. Cookie和session的区别

HTTP是一个无状态协议，因此Cookie的最大的作用就是存储sessionId用来唯一标识用户



##### 92. 一句话概括RESTFUL

就是用URL定位资源，用HTTP描述操作

##### 93. 讲讲viewport和移动端布局



##### 94. click在ios上有300ms延迟，原因及如何解决？

(1)粗暴型，禁用缩放

<meta name="viewport" content="width=device-width, user-scalable=no">

(2)利用FastClick，其原理是：

检测到touchend事件后，立刻出发模拟click事件，并且把浏览器300毫秒之后真正出发的事件给阻断掉



##### 95. addEventListener参数

addEventListener(event, function, useCapture)

其中，event指定事件名；function指定要事件触发时执行的函数；useCapture指定事件是否在捕获或冒泡阶段执行



##### 96. cookie sessionStorage localStorage区别

cookie数据始终在同源的http请求中携带(即使不需要)，即cookie在浏览器和服务器间来回传递

cookie数据还有路径（path）的概念，可以限制。cookie只属于某个路径下

存储大小限制也不同，cookie数据不能超过4K，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如回话标识。

webStorage虽然也有存储大小的限制，但是比cookie大得多，可以达到5M或更大

数据的有效期不同sessionStorage：仅在当前的浏览器窗口关闭有效；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie：只在设置的cookie过期时间之前一直有效，即使窗口和浏览器关闭

作用域不同sessionStorage：不在不同的浏览器窗口中共享，即使是同一个页面；localStorage：在所有同源窗口都是共享的；cookie：也是在所有同源窗口中共享的



##### 97. cookie session区别

\1.  cookie数据存放在客户的浏览器上，session数据放在服务器上。

\2.  cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗
考虑到安全应当使用session。

\3.  session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
考虑到减轻服务器性能方面，应当使用COOKIE。

\4.  单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。



##### 98 iframe通信，同源和不同源两种情况，多少种方法。同源我说了，根据父页面以及cookie，不同源我说了设置子域的方法。



##### 99. 介绍知道的http返回的状态码

100  Continue  继续。客户端应继续其请求

101  Switching Protocols  切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议

200  OK  请求成功。一般用于GET与POST请求

201  Created  已创建。成功请求并创建了新的资源

202  Accepted  已接受。已经接受请求，但未处理完成

203  Non-Authoritative Information  非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本

204  No Content  无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档

205  Reset Content  重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域

206  Partial Content  部分内容。服务器成功处理了部分GET请求

300  Multiple Choices  多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择

301  Moved Permanently  永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替

302  Found  临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI

303  See Other  查看其它地址。与301类似。使用GET和POST请求查看

304  Not Modified  未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源

305  Use Proxy  使用代理。所请求的资源必须通过代理访问

306  Unused  已经被废弃的HTTP状态码

307  Temporary Redirect  临时重定向。与302类似。使用GET请求重定向

400  Bad Request  客户端请求的语法错误，服务器无法理解

401  Unauthorized  请求要求用户的身份认证

402  Payment Required  保留，将来使用

403  Forbidden  服务器理解请求客户端的请求，但是拒绝执行此请求

404  Not Found  服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面

405  Method Not Allowed  客户端请求中的方法被禁止

406  Not Acceptable  服务器无法根据客户端请求的内容特性完成请求

407  Proxy Authentication Required  请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权

408  Request Time-out  服务器等待客户端发送的请求时间过长，超时

409  Conflict  服务器完成客户端的PUT请求是可能返回此代码，服务器处理请求时发生了冲突

410  Gone  客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置

411  Length Required  服务器无法处理客户端发送的不带Content-Length的请求信息

412  Precondition Failed  客户端请求信息的先决条件错误

413  Request Entity Too Large  由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息

414  Request-URI Too Large  请求的URI过长（URI通常为网址），服务器无法处理

415  Unsupported Media Type  服务器无法处理请求附带的媒体格式

416  Requested range not satisfiable  客户端请求的范围无效

417  Expectation Failed  服务器无法满足Expect的请求头信息

500  Internal Server Error  服务器内部错误，无法完成请求

501  Not Implemented  服务器不支持请求的功能，无法完成请求

502  Bad Gateway  作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应

503  Service Unavailable  由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中

504  Gateway Time-out  充当网关或代理的服务器，未及时从远端服务器获取请求

505  HTTP Version not supported  服务器不支持请求的HTTP协议的版本，无法完成处理



##### 100. http常用请求头

| 协议头              | 说明                                                         |
| ------------------- | ------------------------------------------------------------ |
| Accept              | 可接受的响应内容类型（Content-Types）。                      |
| Accept-Charset      | 可接受的字符集                                               |
| Accept-Encoding     | 可接受的响应内容的编码方式。                                 |
| Accept-Language     | 可接受的响应内容语言列表。                                   |
| Accept-Datetime     | 可接受的按照时间来表示的响应内容版本                         |
| Authorization       | 用于表示HTTP协议中需要认证资源的认证信息                     |
| Cache-Control       | 用来指定当前的请求/回复中的，是否使用缓存机制。              |
| Connection          | 客户端（浏览器）想要优先使用的连接类型                       |
| Cookie              | 由之前服务器通过Set-Cookie（见下文）设置的一个HTTP协议Cookie |
| Content-Length      | 以8进制表示的请求体的长度                                    |
| Content-MD5         | 请求体的内容的二进制 MD5 散列值（数字签名），以 Base64 编码的结果 |
| Content-Type        | 请求体的MIME类型 （用于POST和PUT请求中）                     |
| Date                | 发送该消息的日期和时间（以[RFC 7231](https://www.nowcoder.com/ta/review-frontend/review?page=100#section-7.1.1.1)中定义的"HTTP日期"格式来发送） |
| Expect              | 表示客户端要求服务器做出特定的行为                           |
| From                | 发起此请求的用户的邮件地址                                   |
| Host                | 表示服务器的域名以及服务器所监听的端口号。如果所请求的端口是对应的服务的标准端口（80），则端口号可以省略。 |
| If-Match            | 仅当客户端提供的实体与服务器上对应的实体相匹配时，才进行对应的操作。主要用于像 PUT 这样的方法中，仅当从用户上次更新某个资源后，该资源未被修改的情况下，才更新该资源。 |
| If-Modified-Since   | 允许在对应的资源未被修改的情况下返回304未修改                |
| If-None-Match       | 允许在对应的内容未被修改的情况下返回304未修改（ 304 Not Modified ），参考 超文本传输协议 的实体标记 |
| If-Range            | 如果该实体未被修改过，则向返回所缺少的那一个或多个部分。否则，返回整个新的实体 |
| If-Unmodified-Since | 仅当该实体自某个特定时间以来未被修改的情况下，才发送回应。   |
| Max-Forwards        | 限制该消息可被代理及网关转发的次数。                         |
| Origin              | 发起一个针对[跨域资源共享](http://itbilu.com/javascript/js/VkiXuUcC.html)的请求（该请求要求服务器在响应中加入一个Access-Control-Allow-Origin的消息头，表示访问控制所允许的来源）。 |
| Pragma              | 与具体的实现相关，这些字段可能在请求/回应链中的任何时候产生。 |
| Proxy-Authorization | 用于向代理进行认证的认证信息。                               |
| Range               | 表示请求某个实体的一部分，字节偏移以0开始。                  |
| Referer             | 表示浏览器所访问的前一个页面，可以认为是之前访问页面的链接将浏览器带到了当前页面。Referer其实是Referrer这个单词，但RFC制作标准时给拼错了，后来也就将错就错使用Referer了。 |
| TE                  | 浏览器预期接受的传输时的编码方式：可使用回应协议头Transfer-Encoding中的值（还可以使用"trailers"表示数据传输时的分块方式）用来表示浏览器希望在最后一个大小为0的块之后还接收到一些额外的字段。 |
| User-Agent          | 浏览器的身份标识字符串                                       |
| Upgrade             | 要求服务器升级到一个高版本协议。                             |
| Via                 | 告诉服务器，这个请求是由哪些代理发出的。                     |
| Warning             | 一个一般性的警告，表示在实体内容体中可能存在错误。           |



##### 101. 强，协商缓存

缓存分为两种：强缓存和协商缓存，根据响应的header内容来决定。

|          | 获取资源形式 | 状态码              | 发送请求到服务器                 |
| -------- | ------------ | ------------------- | -------------------------------- |
| 强缓存   | 从缓存取     | 200（from cache）   | 否，直接从缓存取                 |
| 协商缓存 | 从缓存取     | 304（not modified） | 是，通过服务器来告知缓存是否可用 |

强缓存相关字段有expires，cache-control。如果cache-control与expires同时存在的话，cache-control的优先级高于expires。

协商缓存相关字段有Last-Modified/If-Modified-Since，Etag/If-None-Match



##### 102. HTTP状态码说说你知道的



##### 103. 讲讲304

304：如果客户端发送了一个带条件的GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个304状态码。



##### 104. 强缓存、协商缓存什么时候用哪个

因为服务器上的资源不是一直固定不变的，大多数情况下它会更新，这个时候如果我们还访问本地缓存，那么对用户来说，那就相当于资源没有更新，用户看到的还是旧的资源；所以我们希望服务器上的资源更新了浏览器就请求新的资源，没有更新就使用本地的缓存，以最大程度的减少因网络请求而产生的资源浪费。



##### 105. 前端优化

降低请求量：合并资源，减少HTTP 请求数，minify / gzip 压缩，webP，lazyLoad。

加快请求速度：预解析DNS，减少域名数，并行加载，CDN 分发。

缓存：HTTP 协议缓存请求，离线缓存 manifest，离线数据缓存localStorage。

渲染：JS/CSS优化，加载顺序，服务端渲染，pipeline。



##### 106. GET和POST的区别

get参数通过url传递，post放在request body中。

get请求在url中传递的参数是有长度限制的，而post没有。

get比post更不安全，因为参数直接暴露在url中，所以不能用来传递敏感信息。

get请求只能进行url编码，而post支持多种编码方式

get请求会浏览器主动cache，而post支持多种编码方式。

get请求参数会被完整保留在浏览历史记录里，而post中的参数不会被保留。

GET和POST本质上就是TCP链接，并无差别。但是由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同。

GET产生一个TCP数据包；POST产生两个TCP数据包。



#### 107. 301和302的区别

301 Moved Permanently 被请求的资源已永久移动到新位置，并且将来任何对此资源的引用都应该使用本响应返回的若干个URI之一。如果可能，拥有链接编辑功能的客户端应当自动把请求的地址修改为从服务器反馈回来的地址。除非额外指定，否则这个响应也是可缓存的。

302 Found 请求的资源现在临时从不同的URI响应请求。由于这样的重定向是临时的，客户端应当继续向原有地址发送以后的请求。只有在Cache-Control或Expires中进行了指定的情况下，这个响应才是可缓存的。

字面上的区别就是301是永久重定向，而302是临时重定向。

301比较常用的场景是使用域名跳转。302用来做临时跳转 比如未登陆的用户访问用户中心重定向到登录页面。



##### 108. HTTP支持的方法

`GET, POST, HEAD, OPTIONS, PUT, DELETE, TRACE, CONNECT`



#### 109. 如何画一个三角形

```
div {
  width:0px;
  height:0px;
  border-top:10px solid red;
  border-right:10px solid transparent;
  border-bottom:10px solid transparent;
  border-left:10px solid transparent;
}
```

##### 110. 状态码304和 200

状态码200：请求已成功，请求所希望的响应头或数据体将随此响应返回。即返回的数据为全量的数据，如果文件不通过GZIP压缩的话，文件是多大，则要有多大传输量。

状态码304：如果客户端发送了一个带条件的 GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码。即客户端和服务器端只需要传输很少的数据量来做文件的校验，如果文件没有修改过，则不需要返回全量的数据。



##### 111. 说一下浏览器缓存

缓存分为两种：强缓存和协商缓存，根据响应的header内容来决定。

强缓存相关字段有expires，cache-control。如果cache-control与expires同时存在的话，cache-control的优先级高于expires。

协商缓存相关字段有Last-Modified/If-Modified-Since，Etag/If-None-Match



##### 112. HTML5新增的元素

首先html5为了更好的实践web语义化，增加了header，footer，nav,aside,section等语义化标签，在表单方面，为了增强表单，为input增加了color，emial,data ,range等类型，在存储方面，提供了sessionStorage，localStorage,和离线存储，通过这些存储方式方便数据在客户端的存储和获取，在多媒体方面规定了音频和视频元素audio和vedio，另外还有地理定位，canvas画布，拖放，多线程编程的web worker和websocket协议

##### 113 在地址栏里输入一个URL,到这个页面呈现出来，中间会发生什么？

DNS解析

TCP连接

发送HTTP请求

服务器处理请求并返回HTTP报文

浏览器解析渲染页面

连接结束

输入url后，首先需要找到这个url域名的服务器ip,为了寻找这个ip，浏览器首先会寻找缓存，查看缓存中是否有记录，缓存的查找记录为：浏览器缓存-》系统缓存-》路由器缓存，缓存中没有则查找系统的hosts文件中是否有记录，如果没有则查询DNS服务器，得到服务器的ip地址后，浏览器根据这个ip以及相应的端口号，构造一个http请求，这个请求报文会包括这次请求的信息，主要是请求方法，请求说明和请求附带的数据，并将这个http请求封装在一个tcp包中，这个tcp包会依次经过传输层，网络层，数据链路层，物理层到达服务器，服务器解析这个请求来作出响应，返回相应的html给浏览器，因为html是一个树形结构，浏览器根据这个html来构建DOM树，在dom树的构建过程中如果遇到JS脚本和外部JS连接，则会停止构建DOM树来执行和下载相应的代码，这会造成阻塞，这就是为什么推荐JS代码应该放在html代码的后面，之后根据外部央视，内部央视，内联样式构建一个CSS对象模型树CSSOM树，构建完成后和DOM树合并为渲染树，这里主要做的是排除非视觉节点，比如script，meta标签和排除display为none的节点，之后进行布局，布局主要是确定各个元素的位置和尺寸，之后是渲染页面，因为html文件中会含有图片，视频，音频等资源，在解析DOM的过程中，遇到这些都会进行并行下载，浏览器对每个域的并行下载数量有一定的限制，一般是4-6个，当然在这些所有的请求中我们还需要关注的就是缓存，缓存一般通过Cache-Control、Last-Modify、Expires等首部字段控制。 Cache-Control和Expires的区别在于Cache-Control使用相对时间，Expires使用的是基于服务器 端的绝对时间，因为存在时差问题，一般采用Cache-Control，在请求这些有设置了缓存的数据时，会先 查看是否过期，如果没有过期则直接使用本地缓存，过期则请求并在服务器校验文件是否修改，如果上一次 响应设置了ETag值会在这次请求的时候作为If-None-Match的值交给服务器校验，如果一致，继续校验 Last-Modified，没有设置ETag则直接验证Last-Modified，再决定是否返回304



##### 114. cookie和session的区别，localstorage和sessionstorage的区别

Cookie和session都可用来存储用户信息，cookie存放于客户端，session存放于服务器端，因为cookie存放于客户端有可能被窃取，所以cookie一般用来存放不敏感的信息，比如用户设置的网站主题，敏感的信息用session存储，比如用户的登陆信息，session可以存放于文件，数据库，内存中都可以，cookie可以服务器端响应的时候设置，也可以客户端通过JS设置cookie会在请求时在http首部发送给客户端，cookie一般在客户端有大小限制，一般为4K，

下面从几个方向区分一下cookie，localstorage，sessionstorage的区别

1、生命周期：

Cookie：可设置失效时间，否则默认为关闭浏览器后失效

Localstorage:除非被手动清除，否则永久保存

Sessionstorage：仅在当前网页会话下有效，关闭页面或浏览器后就会被清除

2、存放数据：

Cookie：4k左右

Localstorage和sessionstorage：可以保存5M的信息

3、http请求：

Cookie：每次都会携带在http头中，如果使用cookie保存过多数据会带来性能问题

其他两个：仅在客户端即浏览器中保存，不参与和服务器的通信

4、易用性：

Cookie：需要程序员自己封装，原生的cookie接口不友好

其他两个：即可采用原生接口，亦可再次封装

5、应用场景：

从安全性来说，因为每次http请求都回携带cookie信息，这样子浪费了带宽，所以cookie应该尽可能的少用，此外cookie还需要指定作用域，不可以跨域调用，限制很多，但是用户识别用户登陆来说，cookie还是比storage好用，其他情况下可以用storage，localstorage可以用来在页面传递参数，sessionstorage可以用来保存一些临时的数据，防止用户刷新页面后丢失了一些参数，



##### 115. 常见的HTTP的头部

可以将http首部分为通用首部，请求首部，响应首部，实体首部

通用首部表示一些通用信息，比如date表示报文创建时间，

请求首部就是请求报文中独有的，如cookie，和缓存相关的如if-Modified-Since

响应首部就是响应报文中独有的，如set-cookie，和重定向相关的location，

实体首部用来描述实体部分，如allow用来描述可执行的请求方法，content-type描述主题类型，content-Encoding描述主体的编码方式



##### 116. HTTP2.0 的特性

http2.0的特性如下：

1、内容安全，应为http2.0是基于https的，天然具有安全特性，通过http2.0的特性可以避免单纯使用https的性能下降

2、二进制格式，http1.X的解析是基于文本的，http2.0将所有的传输信息分割为更小的消息和帧，并对他们采用二进制格式编码，基于二进制可以让协议有更多的扩展性，比如引入了帧来传输数据和指令

3、多路复用，这个功能相当于是长连接的增强，每个request请求可以随机的混杂在一起，接收方可以根据request的id将request再归属到各自不同的服务端请求里面，另外多路复用中也支持了流的优先级，允许客户端告诉服务器那些内容是更优先级的资源，可以优先传输，

##### 117. cache-control的值有哪些

cache-control是一个通用消息头字段被用于HTTP请求和响应中，通过指定指令来实现缓存机制，这个缓存指令是单向的，常见的取值有private、no-cache、max-age、must-revalidate等，默认为private。

##### 118. 浏览器在生成页面的时候，会生成那两颗树？

构造两棵树，DOM树和CSSOM规则树

当浏览器接收到服务器相应来的HTML文档后，会遍历文档节点，生成DOM树，

CSSOM规则树由浏览器解析CSS文件生成，



##### 119. csrf和xss的网络攻击及防范

CSRF：跨站请求伪造，可以理解为攻击者盗用了用户的身份，以用户的名义发送了恶意请求，比如用户登录了一个网站后，立刻在另一个ｔａｂ页面访问量攻击者用来制造攻击的网站，这个网站要求访问刚刚登陆的网站，并发送了一个恶意请求，这时候CSRF就产生了，比如这个制造攻击的网站使用一张图片，但是这种图片的链接却是可以修改数据库的，这时候攻击者就可以以用户的名义操作这个数据库，防御方式的话：使用验证码，检查https头部的refer，使用token

XSS：跨站脚本攻击，是说攻击者通过注入恶意的脚本，在用户浏览网页的时候进行攻击，比如获取cookie，或者其他用户身份信息，可以分为存储型和反射型，存储型是攻击者输入一些数据并且存储到了数据库中，其他浏览者看到的时候进行攻击，反射型的话不存储在数据库中，往往表现为将攻击代码放在url地址的请求参数中，防御的话为cookie设置httpOnly属性，对用户的输入进行检查，进行特殊字符过滤



##### 120. 怎么看网站的性能如何

检测页面加载时间一般有两种方式，一种是被动去测：就是在被检测的页面置入脚本或探针，当用户访问网页时，探针自动采集数据并传回数据库进行分析，另一种主动监测的方式，即主动的搭建分布式受控环境，模拟用户发起页面访问请求，主动采集性能数据并分析，在检测的精准度上，专业的第三方工具效果更佳，比如说性能极客



##### 121. 介绍HTTP协议(特征)

HTTP是一个基于TCP/IP通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）HTTP是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。它于1990年提出，经过几年的使用与发展，得到不断地完善和扩展。目前在WWW中使用的是HTTP/1.0的第六版，HTTP/1.1的规范化工作正在进行之中，而且HTTP-NG(Next Generation of HTTP)的建议已经提出。HTTP协议工作于客户端-服务端架构为上。浏览器作为HTTP客户端通过URL向HTTP服务端即WEB服务器发送所有请求。Web服务器根据接收到的请求后，向客户端发送响应信息。



##### 122. 输入URL到页面加载显示完成发生了什么?

DNS解析

TCP连接

发送HTTP请求

服务器处理请求并返回HTTP报文

浏览器解析渲染页面

连接结束



##### 123. 说一下对Cookie和Session的认知，Cookie有哪些限制？

\1.  cookie数据存放在客户的浏览器上，session数据放在服务器上。

\2.  cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗
考虑到安全应当使用session。

\3.  session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
考虑到减轻服务器性能方面，应当使用COOKIE。

\4.  单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。



##### 124. 描述一下XSS和CRSF攻击？防御方法？

XSS, 即为（Cross Site Scripting）, 中文名为跨站脚本, 是发生在目标用户的浏览器层面上的，当渲染DOM树的过程成发生了不在预期内执行的JS代码时，就发生了XSS攻击。大多数XSS攻击的主要方式是嵌入一段远程或者第三方域上的JS代码。实际上是在目标网站的作用域下执行了这段js代码。

CSRF（Cross Site Request Forgery，跨站请求伪造），字面理解意思就是在别的站点伪造了一个请求。专业术语来说就是在受害者访问一个网站时，其 Cookie 还没有过期的情况下，攻击者伪造一个链接地址发送受害者并欺骗让其点击，从而形成 CSRF 攻击。

XSS防御的总体思路是：对输入(和URL参数)进行过滤，对输出进行编码。也就是对提交的所有内容进行过滤，对url中的参数进行过滤，过滤掉会导致脚本执行的相关内容；然后对动态输出到页面的内容进行html编码，使脚本无法在浏览器中执行。虽然对输入过滤可以被绕过，但是也还是会拦截很大一部分的XSS攻击。

防御CSRF 攻击主要有三种策略：验证 HTTP Referer 字段；在请求地址中添加 token 并验证；在 HTTP 头中自定义属性并验证。



##### 125. 知道304吗，什么时候用304？

304：如果客户端发送了一个带条件的GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个304状态码。



##### 126. 具体有哪些请求头是跟缓存相关的

缓存分为两种：强缓存和协商缓存，根据响应的header内容来决定。

强缓存相关字段有expires，cache-control。如果cache-control与expires同时存在的话，cache-control的优先级高于expires。

协商缓存相关字段有Last-Modified/If-Modified-Since，Etag/If-None-Match



##### 127. cookie和session的区别

\1.  cookie数据存放在客户的浏览器上，session数据放在服务器上。

\2.  cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗
考虑到安全应当使用session。

\3.  session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
考虑到减轻服务器性能方面，应当使用COOKIE。

\4.  单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。

##### 128. cookie有哪些字段可以设置

name字段为一个cookie的名称。

value字段为一个cookie的值。

domain字段为可以访问此cookie的域名。

非顶级域名，如二级域名或者三级域名，设置的cookie的domain只能为顶级域名或者二级域名或者三级域名本身，不能设置其他二级域名的cookie，否则cookie无法生成。

顶级域名只能设置domain为顶级域名，不能设置为二级域名或者三级域名，否则cookie无法生成。

二级域名能读取设置了domain为顶级域名或者自身的cookie，不能读取其他二级域名domain的cookie。所以要想cookie在多个二级域名中共享，需要设置domain为顶级域名，这样就可以在所有二级域名里面或者到这个cookie的值了。
顶级域名只能获取到domain设置为顶级域名的cookie，其他domain设置为二级域名的无法获取。

path字段为可以访问此cookie的页面路径。 比如domain是abc.com,path是/test，那么只有/test路径下的页面可以读取此cookie。

expires/Max-Age 字段为此cookie超时时间。若设置其值为一个时间，那么当到达此时间后，此cookie失效。不设置的话默认值是Session，意思是cookie会和session一起失效。当浏览器关闭(不是浏览器标签页，而是整个浏览器) 后，此cookie失效。

Size字段 此cookie大小。

http字段  cookie的httponly属性。若此属性为true，则只有在http请求头中会带有此cookie的信息，而不能通过document.cookie来访问此cookie。

secure 字段 设置是否只能通过https来传递此条cookie

##### 129. cookie有哪些编码方式？

`encodeURI（）`

##### 130. 前端优化策略



##### 131. 既然你看过图解http，那你回答下200和304的区别

200  OK  请求成功。一般用于GET与POST请求

304  Not Modified  未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源



##### 132. 除了cookie，还有什么存储方式。说说cookie和localStorage的区别

还有localStorage，sessionStorage，indexdDB等

cookie和localStorage的区别：

cookie数据始终在同源的http请求中携带(即使不需要)，即cookie在浏览器和服务器间来回传递

cookie数据还有路径（path）的概念，可以限制。cookie只属于某个路径下

存储大小限制也不同，cookie数据不能超过4K，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如回话标识。

localStorage虽然也有存储大小的限制，但是比cookie大得多，可以达到5M或更大

localStorage始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口和浏览器关闭。



##### 133. 浏览器输入网址到页面渲染全过程

DNS解析

TCP连接

发送HTTP请求

服务器处理请求并返回HTTP报文

浏览器解析渲染页面

连接结束



##### 134. HTML5和CSS3用的多吗？你了解它们的新属性吗？有在项目中用过吗？

html5：

1）标签增删

8个语义元素 header section footer aside nav main article figure

内容元素mark高亮 progress进度

新的表单控件calander date time email url search

新的input类型 color date datetime datetime-local email

移除过时标签big font frame frameset

2）canvas绘图，支持内联SVG。支持MathML

3）多媒体audio video source embed track

4）本地离线存储，把需要离线存储在本地的文件列在一个manifest配置文件

5）web存储。localStorage、SessionStorage



css3：

CSS3边框如border-radius，box-shadow等；CSS3背景如background-size，background-origin等；CSS3 2D，3D转换如transform等；CSS3动画如animation等。 参考https://www.cnblogs.com/xkweb/p/5862612.html



##### 135. HTTP状态码



##### 136. http常见的请求方法

get、post，这两个用的是最多的，还有很多比如patch、delete、put、options等等



##### 137. get和post的区别

GET - 从指定的资源请求数据。

POST - 向指定的资源提交要被处理的数据。

GET：不同的浏览器和服务器不同，一般限制在2~8K之间，更加常见的是1k以内。

GET和POST的底层也是TCP/IP，GET/POST都是TCP链接。

GET产生一个TCP数据包；POST产生两个TCP数据包。

对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；

而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。

##### 138. 说说302，301，304的状态码

301  Moved Permanently  永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替

302  Found  临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI

304  Not Modified  未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资



##### 139. web性能优化

降低请求量：合并资源，减少HTTP 请求数，minify / gzip 压缩，webP，lazyLoad。

加快请求速度：预解析DNS，减少域名数，并行加载，CDN 分发。

缓存：HTTP 协议缓存请求，离线缓存 manifest，离线数据缓存localStorage。

渲染：JS/CSS优化，加载顺序，服务端渲染，pipeline。



##### 140. 浏览器缓存机制

缓存分为两种：强缓存和协商缓存，根据响应的header内容来决定。

强缓存相关字段有expires，cache-control。如果cache-control与expires同时存在的话，cache-control的优先级高于expires。

协商缓存相关字段有Last-Modified/If-Modified-Since，Etag/If-None-Match



##### 141. post和get区别

GET - 从指定的资源请求数据。

POST - 向指定的资源提交要被处理的数据。

GET：不同的浏览器和服务器不同，一般限制在2~8K之间，更加常见的是1k以内。

GET和POST的底层也是TCP/IP，GET/POST都是TCP链接。

GET产生一个TCP数据包；POST产生两个TCP数据包。

对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；

而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。



##### 142. 说一下css盒模型

简介：就是用来装页面上的元素的矩形区域。CSS中的盒子模型包括IE盒子模型和标准的W3C盒子模型。

内容(content)、填充(padding)、边框(border)、边界(margin)， CSS盒子模式都具备这些属性。

box-sizing(有3个值哦)：border-box,padding-box,content-box.

**IE盒模型:width(宽度）= padding(内边距) + border(边框）+content(内容宽度）**

**W3C盒模型:width(宽度）=content(内容宽度）**



在CSS3中引入了box-sizing属性，

​	`box-sizing: content-box;` 表示标准的盒子模型

​	`box-sizing: border-box; `表示的是IE盒子模型

最后，前面我们还提到了，`box-sizing:padding-box` 这个属性值的宽度包含了左右padding+width

在ie盒模型中，比如我们设置width:200px，border:10px，padding: 10px,那么content就剩下180px了。

**JS如何设置获取盒模型对应的宽高**:

​	**方式一：document.style.width/height**

​	**方式二：document.currentStyle.width/height**

​	**方式三：window.getComputedStyle(dom).width/height**

​	**方式四：dom.getBoundingClientRect()**

​	**方式五、CSS外边距重叠引出BFC(格式化上下文)**



**BFC概念：块级格式上下文**

**如何创建BFC**

（1）float不为none

（2）position不为static或relative

（3）display为inline-block或是table相关

（4）overflow不为visible

**BFC的使用场景**

（1）解决垂直方向的边距重叠

（2）清除浮动

（3）不与浮动元素重叠





##### 143.  画一条0.5px的线

采用meta viewport的方式

<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

采用border-image的方式

采用transform: scale()的方式



##### 144. link标签和import标签的区别

link属于html标签，而@import是css提供的

页面被加载时，link会同时被加载，而@import引用的css会等到页面加载结束后加载。

link是html标签，因此没有兼容性，而@import只有IE5以上才能识别。

link方式样式的权重高于@import的。



##### 145. transition和animation的区别

Animation和transition大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是transition需要触发一个事件才能改变属性，而animation不需要触发任何事件的情况下才会随时间改变属性值，并且transition为2帧，从from .... to，而animation可以一帧一帧的。

##### 146 Flex布局

Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。
布局的传统解决方案，基于盒状模型，依赖display属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

简单的分为容器属性和元素属性
容器的属性：

flex-direction：决定主轴的方向（即子item的排列方法）
.box {
flex-direction: row | row-reverse | column | column-reverse;
}

flex-wrap：决定换行规则
.box{
flex-wrap: nowrap | wrap | wrap-reverse;
}

flex-flow：
.box {
flex-flow: <flex-direction> || <flex-wrap>;
}

justify-content：对其方式，水平主轴对齐方式

align-items：对齐方式，竖直轴线方向

项目的属性（元素的属性）：

order属性：定义项目的排列顺序，顺序越小，排列越靠前，默认为0

flex-grow属性：定义项目的放大比例，即使存在空间，也不会放大

flex-shrink属性：定义了项目的缩小比例，当空间不足的情况下会等比例的缩小，如果定义个item的flow-shrink为0，则为不缩小

flex-basis属性：定义了在分配多余的空间，项目占据的空间。

flex：是flex-grow和flex-shrink、flex-basis的简写，默认值为0 1 auto。

align-self：允许单个项目与其他项目不一样的对齐方式，可以覆盖align-items，默认属性为auto，表示继承父元素的align-items

比如说，用flex实现圣杯布局



##### 147. BFC（块级格式化上下文，用于清楚浮动，防止margin重叠等）

直译成：块级格式化上下文，是一个独立的渲染区域，并且有一定的布局规则。

BFC区域不会与float box重叠

BFC是页面上的一个独立容器，子元素不会影响到外面

计算BFC的高度时，浮动元素也会参与计算

那些元素会生成BFC：

根元素

float不为none的元素

position为fixed和absolute的元素

display为inline-block、table-cell、table-caption，flex，inline-flex的元素

overflow不为visible的元素



##### 148. 垂直居中的方法

1. margin:auto法

   ```
   div{
     width: 400px;
     height: 400px;
     position: relative;
     border: 1px solid #465468;
   }
   img{
     position: absolute;
     margin: auto;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
   }
   html:
   <div>
     <img src="mm.jpg">
   </div>
   ```

   定位为上下左右为0，margin：0可以实现脱离文档流的居中.

2. margin负值法

   ```
   .container{
     width: 500px;
     height: 400px;
     border: 2px solid #379;
     position: relative;
   }
   .inner{
     width: 480px;
     height: 380px;
     background-color: #746;
     position: absolute;
     top: 50%;
     left: 50%;
     margin-top: -190px; /*height的一半*/
     margin-left: -240px; /*width的一半*/
   }
   ```

   

   

   

3. table-cell（未脱离文档流的）

   ```
   div{
   width: 300px;
   height: 300px;
   border: 3px solid #555;
   display: table-cell;
   vertical-align: middle;
   text-align: center;
   }
   img{
   vertical-align: middle;
   }
   ```

4. 利用flex

   将父元素设置为display:flex，并且设置align-items:center;justify-content:center;

   ```
   .container{
     width: 300px;
     height: 200px;
     border: 3px solid #546461;
     display: -webkit-flex;
     display: flex;
     -webkit-align-items: center;
     align-items: center;
     -webkit-justify-content: center;
     justify-content: center;
   }
   .inner{
     border: 3px solid #458761;
     padding: 20px;
   }
   ```



##### 149. 关于js动画和css3动画的差异性

渲染线程分为main thread和compositor thread，如果css动画只改变transform和opacity，这时整个CSS动画得以在compositor trhead完成（而js动画则会在main thread执行，然后出发compositor thread进行下一步操作），特别注意的是如果改变transform和opacity是不会layout或者paint的。

区别：

功能涵盖面，js比css大

实现/重构难度不一，CSS3比js更加简单，性能跳优方向固定

对帧速表现不好的低版本浏览器，css3可以做到自然降级

css动画有天然事件支持

css3有兼容性问题



##### 150. 说一下块元素和行元素

块元素：独占一行，并且有自动填满父元素，可以设置margin和pading以及高度和宽度

行元素：不会独占一行，width和height会失效，并且在垂直方向的padding和margin会失效。



##### 151. 多行元素的文本省略号

```
display: -webkit-box
-webkit-box-orient:vertical
-webkit-line-clamp:3
overflow:hidden
```

##### 152. visibility=hidden, opacity=0，display:none

opacity=0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些事件，如click事件，那么点击该区域，也能触发点击事件的

visibility=hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件

display=none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样。



##### 153. 双边距重叠问题（外边距折叠）

多个相邻（兄弟或者父子关系）普通流的块元素垂直方向marigin会重叠

折叠的结果为：

两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
两个外边距一正一负时，折叠结果是两者的相加的和。



##### 154. position属性 比较

固定定位fixed：

元素的位置相对于浏览器窗口是固定位置，即使窗口是滚动的它也不会移动。Fixed定位使元素的位置与文档流无关，因此不占据空间。 Fixed定位的元素和其他元素重叠。

相对定位relative：

如果对一个元素进行相对定位，它将出现在它所在的位置上。然后，可以通过设置垂直或水平位置，让这个元素“相对于”它的起点进行移动。 在使用相对定位时，无论是否进行移动，元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框。

绝对定位absolute：

绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>。 absolute 定位使元素的位置与文档流无关，因此不占据空间。 absolute 定位的元素和其他元素重叠。

粘性定位sticky：

元素先按照普通文档流定位，然后相对于该元素在流中的flow root（BFC）和 containing block（最近的块级祖先元素）定位。而后，元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。

默认定位Static：

默认值。没有定位，元素出现在正常的流中（忽略top, bottom, left, right 或者 z-index 声明）。

inherit:

规定应该从父元素继承position 属性的值。



##### 155. 浮动清除

方法一：使用带clear属性的空元素

在浮动元素后使用一个空元素如<div class="clear"></div>，并在CSS中赋予.clear{clear:both;}属性即可清理浮动。亦可使用<br class="clear" />或<hr class="clear" />来进行清理。

方法二：使用CSS的overflow属性

给浮动元素的容器添加overflow:hidden;或overflow:auto;可以清除浮动，另外在 IE6 中还需要触发 hasLayout ，例如为父元素设置容器宽高或设置 zoom:1。

在添加overflow属性后，浮动元素又回到了容器层，把容器高度撑起，达到了清理浮动的效果。

方法三：给浮动的元素的容器添加浮动

给浮动元素的容器也添加上浮动属性即可清除内部浮动，但是这样会使其整体浮动，影响布局，不推荐使用。

方法四：使用邻接元素处理

什么都不做，给浮动元素后面的元素添加clear属性。

方法五：使用CSS的:after伪元素

结合:after 伪元素（注意这不是伪类，而是伪元素，代表一个元素之后最近的元素）和 IEhack ，可以完美兼容当前主流的各大浏览器，这里的 IEhack 指的是触发 hasLayout。

给浮动元素的容器添加一个clearfix的class，然后给这个class添加一个:after伪元素实现元素末尾添加一个看不见的块元素（Block element）清理浮动。



##### 156. css3新特性

CSS3边框如border-radius，box-shadow等；CSS3背景如background-size，background-origin等；CSS3 2D，3D转换如transform等；CSS3动画如animation等



##### 157. CSS选择器有哪些，优先级呢

id 选择器，class 选择器，标签选择器，伪元素选择器，伪类选择器等

同一元素引用了多个样式时，排在后面的样式属性的优先级高；

样式选择器的类型不同时，优先级顺序为：id 选择器 > class 选择器 > 标签选择器；

标签之间存在层级包含关系时，后代元素会继承祖先元素的样式。如果后代元素定义了与祖先元素相同的样式，则祖先元素的相同的样式属性会被覆盖。继承的样式的优先级比较低，至少比标签选择器的优先级低；

带有!important 标记的样式属性的优先级最高；

样式表的来源不同时，优先级顺序为：内联样式> 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式

##### 158. 清除浮动的方法，能讲讲吗

方法一：使用带clear属性的空元素

在浮动元素后使用一个空元素如<div class="clear"></div>，并在CSS中赋予.clear{clear:both;}属性即可清理浮动。亦可使用<br class="clear" />或<hr class="clear" />来进行清理。

方法二：使用CSS的overflow属性

给浮动元素的容器添加overflow:hidden;或overflow:auto;可以清除浮动，另外在 IE6 中还需要触发 hasLayout ，例如为父元素设置容器宽高或设置 zoom:1。

在添加overflow属性后，浮动元素又回到了容器层，把容器高度撑起，达到了清理浮动的效果。

方法三：给浮动的元素的容器添加浮动

给浮动元素的容器也添加上浮动属性即可清除内部浮动，但是这样会使其整体浮动，影响布局，不推荐使用。

方法四：使用邻接元素处理

什么都不做，给浮动元素后面的元素添加clear属性。

方法五：使用CSS的:after伪元素

结合:after 伪元素（注意这不是伪类，而是伪元素，代表一个元素之后最近的元素）和 IEhack ，可以完美兼容当前主流的各大浏览器，这里的 IEhack 指的是触发 hasLayout。

给浮动元素的容器添加一个clearfix的class，然后给这个class添加一个:after伪元素实现元素末尾添加一个看不见的块元素（Block element）清理浮动。



##### 159. 怎么样让一个元素消失，讲讲

display:none; visibility:hidden; opacity: 0; 等等



##### 160. 介绍一下盒模型

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。

标准盒模型：一个块的总宽度=width+margin(左右)+padding(左右)+border(左右)

怪异盒模型：一个块的总宽度=width+margin（左右）（既width已经包含了padding和border值）

设置盒模型：box-sizing:border-box



##### 161. position相关属性



##### 162. css动画如何实现

创建动画序列，需要使用animation属性或其子属性，该属性允许配置动画时间、时长以及其他动画细节，但该属性不能配置动画的实际表现，动画的实际表现是由 @keyframes规则实现，具体情况参见使用keyframes定义动画序列小节部分。

transition也可实现动画。transition强调过渡，是元素的一个或多个属性发生变化时产生的过渡效果，同一个元素通过两个不同的途径获取样式，而第二个途径当某种改变发生（例如hover）时才能获取样式，这样就会产生过渡动画。

##### 163. 如何实现图片在某个容器中居中的？

父元素固定宽高，利用定位及设置子元素margin值为自身的一半。

父元素固定宽高，子元素设置position: absolute，margin：auto平均分配margin

css3属性transform。子元素设置position: absolute; left: 50%; top: 50%;transform: translate(-50%,-50%);即可。

将父元素设置成display: table, 子元素设置为单元格 display: table-cell。

弹性布局display: flex。设置align-items: center; justify-content: center



##### 164. 如何实现元素的垂直居中

法一：父元素display:flex,align-items:center;

法二：元素绝对定位，top:50%，margin-top：-（高度/2）

法三：高度不确定用transform：translateY（-50%）

法四：父元素table布局，子元素设置vertical-align:center;



##### 165. CSS3中对溢出的处理

cnkOhu

text-overflow属性，值为clip是修剪文本；ellipsis为显示省略符号来表被修剪的文本；string为使用给定的字符串来代表被修剪的文本。



##### 166. float的元素，display是什么

`display为block`



##### 167. 隐藏页面中某个元素的方法

display:none; visibility:hidden; opacity: 0; position移到外部，z-index涂层遮盖等等



##### 168. 三栏布局的实现方式，尽可能多写，浮动布局时，三个div的生成顺序有没有影响

三列布局又分为两种，两列定宽一列自适应，以及两侧定宽中间自适应

两列定宽一列自适应：

1、使用float+margin：

给div设置float：left，left的div添加属性margin-right：left和center的间隔px,right的div添加属性margin-left：left和center的宽度之和加上间隔

2、使用float+overflow：

给div设置float：left，再给right的div设置overflow:hidden。这样子两个盒子浮动，另一个盒子触发bfc达到自适应

3、使用position：

父级div设置position：relative，三个子级div设置position：absolute，这个要计算好盒子的宽度和间隔去设置位置，兼容性比较好，

4、使用table实现：

父级div设置display：table，设置border-spacing：10px//设置间距，取值随意,子级div设置display:table-cell，这种方法兼容性好，适用于高度宽度未知的情况，但是margin失效，设计间隔比较麻烦，

5、flex实现：

parent的div设置display：flex；left和center的div设置margin-right；然后right 的div设置flex：1；这样子right自适应，但是flex的兼容性不好

6、grid实现：

parent的div设置display：grid，设置grid-template-columns属性，固定第一列第二列宽度，第三列auto，

对于两侧定宽中间自适应的布局，对于这种布局需要把center放在前面，可以采用双飞翼布局：圣杯布局，来实现，也可以使用上述方法中的grid，table，flex，position实现



##### 169. 什么是BFC

BFC也就是常说的块格式化上下文，这是一个独立的渲染区域，规定了内部如何布局，并且这个区域的子元素不会影响到外面的元素，其中比较重要的布局规则有内部box垂直放置，计算BFC的高度的时候，浮动元素也参与计算，触发BFC的规则有根元素，浮动元素，position为absolute或fixed的元素，display为inline-block，table-cell，table-caption，flex，inline-flex，overflow不为visible的元素



##### 170. calc属性

Calc用户动态计算长度值，任何长度值都可以使用calc()函数计算，需要注意的是，运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)；



##### 171. 有一个width300，height300，怎么实现在屏幕上垂直水平居中

对于行内块级元素，

1、父级元素设置text-alig：center，然后设置line-height和vertical-align使其垂直居中，最后设置font-size：0消除近似居中的bug

2、父级元素设置display：table-cell，vertical-align：middle达到水平垂直居中

3、采用绝对定位，原理是子绝父相，父元素设置position：relative，子元素设置position：absolute，然后通过transform或margin组合使用达到垂直居中效果，设置top：50%，left：50%，transform：translate（-50%，-50%）

4、绝对居中，原理是当top,bottom为0时，margin-top&bottom设置auto的话会无限延伸沾满空间并平分，当left，right为0时,margin-left&right设置auto会无限延伸占满空间并平分，

5、采用flex，父元素设置display：flex，子元素设置margin：auto

6、视窗居中，vh为视口单位，50vh即是视口高度的50/100，设置margin：50vh auto 0，transform：translate(-50%)



##### 172. display：table和本身的table有什么区别

Display:table和本身table是相对应的，区别在于，display：table的css声明能够让一个html元素和它的子节点像table元素一样，使用基于表格的css布局，是我们能够轻松定义一个单元格的边界，背景等样式，而不会产生因为使用了table那样的制表标签导致的语义化问题。

之所以现在逐渐淘汰了table系表格元素，是因为用div+css编写出来的文件比用table边写出来的文件小，而且table必须在页面完全加载后才显示，div则是逐行显示，table的嵌套性太多，没有div简洁



##### 173. position属性的值有哪些及其区别

Position属性把元素放置在一个静态的，相对的，绝对的，固定的位置中，

Static：位置设置为static的元素，他始终处于页面流给予的位置，static元素会忽略任何top,buttom,left,right声明

Relative：位置设置为relative的元素，可将其移至相对于其正常位置的地方，因此left：20会将元素移至元素正常位置左边20个像素的位置

Absolute：此元素可定位于相对包含他的元素的指定坐标，此元素可通过left，top等属性规定

Fixed：位置被设为fiexd的元素，可定为与相对浏览器窗口的指定坐标，可以通过left，top，right属性来定位



##### 174. z-index的定位方法

z-index属性设置元素的堆叠顺序，拥有更好堆叠顺序的元素会处于较低顺序元素之前，z-index可以为负，且z-index只能在定位元素上奏效，该属性设置一个定位元素沿z轴的位置，如果为正数，离用户越近，为负数，离用户越远，它的属性值有auto，默认，堆叠顺序与父元素相等，number，inherit，从父元素继承z-index属性的值



##### 175. CSS盒模型

##### 176. 如果想要改变一个DOM元素的字体颜色，不在它本身上进行操作？

可以更改父元素的color

##### 177. 对CSS的新属性有了解过的吗？

CSS3的新特性中，在布局方面新增了flex布局，在选择器方面新增了例如first-of-type,nth-child等选择器，在盒模型方面添加了box-sizing来改变盒模型，在动画方面增加了animation，2d变换，3d变换等，在颜色方面添加透明，rbga等，在字体方面允许嵌入字体和设置字体阴影，最后还有媒体查讯等



##### 178. 用的最多的css属性是啥？

用的目前来说最多的是flex属性，灵活但是兼容性方面不强，



##### 179. line-height和height的区别

line-height一般是指布局里面一段文字上下行之间的高度，是针对字体来设置的，height一般是指容器的整体高度，

##### 180. 设置一个元素的背景颜色，背景颜色会填充哪些区域？

background-color设置的背景颜色会填充元素的content、padding、border区域，



##### 181. 知道属性选择器和伪类选择器的优先级吗

属性选择器和伪类选择器优先级相同

##### 182. inline-block、inline和block的区别；为什么img是inline还可以设置宽高

Block是块级元素，其前后都会有换行符，能设置宽度，高度，margin/padding水平垂直方向都有效。

Inline：设置width和height无效，margin在竖直方向上无效，padding在水平方向垂直方向都有效，前后无换行符

Inline-block：能设置宽度高度，margin/padding水平垂直方向 都有效，前后无换行符

##### 183. 用css实现一个硬币旋转的效果





##### 184. 了解重绘和重排吗，知道怎么去减少重绘和重排吗，让文档脱离文档流有哪些方法

DOM的变化影响到了预算内宿的几何属性比如宽高，浏览器重新计算元素的几何属性，其他元素的几何属性也会受到影响，浏览器需要重新构造渲染书，这个过程称之为重排，浏览器将受到影响的部分重新绘制在屏幕上 的过程称为重绘，引起重排重绘的原因有：

添加或者删除可见的DOM元素，

元素尺寸位置的改变

浏览器页面初始化，

浏览器窗口大小发生改变，重排一定导致重绘，重绘不一定导致重排，

减少重绘重排的方法有：

不在布局信息改变时做DOM查询，

使用csstext,className一次性改变属性

使用fragment

对于多次重排的元素，比如说动画。使用绝对定位脱离文档流，使其不影响其他元素



##### 186. overflow的原理

要讲清楚这个解决方案的原理，首先需要了解块格式化上下文，A block formatting context is a part of a visual CSS rendering of a Web page. It is the region in which the layout of block boxes occurs and in which floats interact with each other.翻译过来就是块格式化上下文是CSS可视化渲染的一部分，它是一块区域，规定了内部块盒 的渲染方式，以及浮动相互之间的影响关系

当元素设置了overflow样式且值部位visible时，该元素就构建了一个BFC，BFC在计算高度时，内部浮动元素的高度也要计算在内，也就是说技术BFC区域内只有一个浮动元素，BFC的高度也不会发生塌缩，所以达到了清除浮动的目的，



##### 187. 清除浮动的方法

给要清除浮动的元素添加样式clear，\

父元素结束标签钱插入清除浮动的块级元素，给该元素添加样式clear

添加伪元素，在父级元素的最后，添加一个伪元素，通过清除伪元素的浮动，注意该伪元素的display为block，

父元素添加样式overflow清除浮动，overflow设置除visible以外的任何位置



##### 188. box-sizing的语法和基本用处

box-sizing规定两个并排的带边框的框，语法为box-sizing：content-box/border-box/inherit

content-box：宽度和高度分别应用到元素的内容框，在宽度和高度之外绘制元素的内边距和边框

border-box：为元素设定的宽度和高度决定了元素的边框盒，

inherit：继承父元素的box-sizing



##### 189. 使元素消失的方法有哪些？

1. opacity：0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些事件，如click事件，那么点击该区域，也能触发点击事件的

2. visibility：hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件

3. display：none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉。



##### 190. 两个嵌套的div，position都是absolute，子div设置top属性，那么这个top是相对于父元素的哪个位置定位的。

`border的内边缘`



##### 191. 说说盒子模型

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。

标准盒模型：一个块的总宽度=width+margin(左右)+padding(左右)+border(左右)

怪异盒模型：一个块的总宽度=width+margin（左右）（既width已经包含了padding和border值）

如何设置：box-sizing:border-box



##### 192. display

主要取值有none,block,inline-block,inline,flex等。



##### 193. 怎么隐藏一个元素

##### 194. display:none和visibilty:hidden的区别

\1. visibility：hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件

\2. display：none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉。



##### 195. 相对布局和绝对布局，position:relative和obsolute。

相对定位relative：

如果对一个元素进行相对定位，它将出现在它所在的位置上。然后，可以通过设置垂直或水平位置，让这个元素“相对于”它的起点进行移动。 在使用相对定位时，无论是否进行移动，元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框。

绝对定位absolute：

绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>。 absolute 定位使元素的位置与文档流无关，因此不占据空间。 absolute 定位的元素和其他元素重叠。



##### 196. flex布局



##### 197. block、inline、inline-block的区别。

block元素会独占一行，多个block元素会各自新起一行。默认情况下，block元素宽度自动填满其父元素宽度。

block元素可以设置width,height属性。块级元素即使设置了宽度,仍然是独占一行。

block元素可以设置margin和padding属性。

inline元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。

inline元素设置width,height属性无效。

inline元素的margin和padding属性，水平方向的padding-left, padding-right, margin-left, margin-right都产生边距效果；但竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果。

inline-block：简单来说就是将对象呈现为inline对象，但是对象的内容作为block对象呈现。之后的内联对象会被排列在同一行内。比如我们可以给一个link（a元素）inline-block属性值，使其既具有block的宽度高度特性又具有inline的同行特性



##### 198. css的常用选择器

id选择器，类选择器，伪类选择器等



##### 199. css布局

六种布局方式总结：圣杯布局、双飞翼布局、Flex布局、绝对定位布局、表格布局、网格布局。

圣杯布局是指布局从上到下分为header、container、footer，然后container部分定为三栏布局。这种布局方式同样分为header、container、footer。圣杯布局的缺陷在于 center 是在 container 的padding中的，因此宽度小的时候会出现混乱。

双飞翼布局给center 部分包裹了一个 main 通过设置margin主动地把页面撑开。

Flex布局是由CSS3提供的一种方便的布局方式。

绝对定位布局是给container 设置position: relative和overflow: hidden，因为绝对定位的元素的参照物为第一个postion不为static的祖先元素。 left 向左浮动，right 向右浮动。center 使用绝对定位，通过设置left和right并把两边撑开。 center 设置top: 0和bottom: 0使其高度撑开。

表格布局的好处是能使三栏的高度统一。

网格布局可能是最强大的布局方式了，使用起来极其方便，但目前而言，兼容性并不好。网格布局，可以将页面分割成多个区域，或者用来定义内部元素的大小，位置，图层关系。



##### 200. css定位

固定定位fixed：

元素的位置相对于浏览器窗口是固定位置，即使窗口是滚动的它也不会移动。Fixed定位使元素的位置与文档流无关，因此不占据空间。 Fixed定位的元素和其他元素重叠。

相对定位relative：

如果对一个元素进行相对定位，它将出现在它所在的位置上。然后，可以通过设置垂直或水平位置，让这个元素“相对于”它的起点进行移动。 在使用相对定位时，无论是否进行移动，元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框。

绝对定位absolute：

绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>。 absolute 定位使元素的位置与文档流无关，因此不占据空间。 absolute 定位的元素和其他元素重叠。

粘性定位sticky：

元素先按照普通文档流定位，然后相对于该元素在流中的flow root（BFC）和 containing block（最近的块级祖先元素）定位。而后，元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。

默认定位Static：

默认值。没有定位，元素出现在正常的流中（忽略top, bottom, left, right 或者 z-index 声明）。

inherit:

规定应该从父元素继承position 属性的值。



##### 201. relative定位规则

如果对一个元素进行相对定位，它将出现在它所在的位置上。然后，可以通过设置垂直或水平位置，让这个元素“相对于”它的起点进行移动。 在使用相对定位时，无论是否进行移动，元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框。



##### 202. 垂直居中

父元素固定宽高，利用定位及设置子元素margin值为自身的一半。

父元素固定宽高，子元素设置position: absolute，margin：auto平均分配margin

css3属性transform。子元素设置position: absolute; left: 50%; top: 50%;transform: translate(-50%,-50%);即可。

将父元素设置成display: table, 子元素设置为单元格 display: table-cell。

弹性布局display: flex。设置align-items: center; justify-content: cen



##### 203. css预处理器有什么

less，sass等



##### 204. get请求传参长度的误区

误区：我们经常说get请求参数的大小存在限制，而post请求的参数大小是无限制的。

实际上HTTP 协议从未规定 GET/POST 的请求长度限制是多少。对get请求参数的限制是来源与浏览器或web服务器，浏览器或web服务器限制了url的长度。为了明确这个概念，我们必须再次强调下面几点:

HTTP 协议 未规定 GET 和POST的长度限制

GET的最大长度显示是因为 浏览器和 web服务器限制了 URI的长度

不同的浏览器和WEB服务器，限制的最大长度不一样

要支持IE，则最大长度为2083byte，若只支持Chrome，则最大长度 8182byte



##### 205 补充get和post请求在缓存方面的区别

post/get的请求区别，具体不再赘述。

补充补充一个get和post在缓存方面的区别：

get请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存。

post不同，post做的一般是修改和删除的工作，所以必须与数据库交互，所以不能使用缓存。因此get请求适合于请求缓存。

##### 206. 说一下闭包

一句话可以概括：闭包就是能够读取其他函数内部变量的函数，或者子函数在外调用，子函数所在的父函数的作用域不会被释放。



##### 207. 说一下类的创建和继承

1. 类的创建（es5）：new一个function，在这个function的prototype里面增加属性和方法。

2. 类的继承——原型链继承

   介绍：在这里我们可以看到new了一个空对象,这个空对象指向Animal并且Cat.prototype指向了这个空对象，这种就是基于原型链的继承。

   特点：基于原型链，既是父类的实例，也是子类的实例

   缺点：无法实现多继承

3. 构造继承：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）

   ​	特点：可以实现多继承

   ​	缺点：只能继承父类实例的属性和方法，不能继承原型上的属性和方法。

4. 实例继承和拷贝继承

   实例继承：为父类实例添加新特性，作为子类实例返回

   拷贝继承：拷贝父类元素上的属性和方法

   上述两个实用性不强，不一一举例。

5. 组合继承：相当于构造继承和原型链继承的组合体。通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用

   特点：可以继承实例属性/方法，也可以继承原型属性/方法

   缺点：调用了两次父类构造函数，生成了两份实例

6. 寄生组合继承：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性



##### 208. 如何解决异步回调地狱

`promise、generator、async/await`



##### 209. 说说前端中的事件流

HTML中与javascript交互是通过事件驱动来实现的，例如鼠标点击事件onclick、页面的滚动事件onscroll等等，可以向文档或者文档中的元素添加事件侦听器来预订事件。想要知道这些事件是在什么时候进行调用的，就需要了解一下“事件流”的概念。

什么是事件流：事件流描述的是从页面中接收事件的顺序,DOM2级事件流包括下面几个阶段。

事件捕获阶段

处于目标阶段

事件冒泡阶段

addEventListener：addEventListener 是DOM2 级事件新增的指定事件处理程序的操作，这个方法接收3个参数：要处理的事件名、作为事件处理程序的函数和一个布尔值。最后这个布尔值参数如果是true，表示在捕获阶段调用事件处理程序；如果是false，表示在冒泡阶段调用事件处理程序。

IE只支持事件冒泡。



##### 210. 如何让事件先冒泡后捕获

在DOM标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果，对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后再执行捕获之间。



##### 211. 说一下事件委托

简介：事件委托指的是，不在事件的发生地（直接dom）上设置监听函数，而是在其父元素上设置监听函数，通过事件冒泡，父元素可以监听到子元素上事件的触发，通过判断事件发生元素DOM的类型，来做出不同的响应。

举例：最经典的就是ul和li标签的事件监听，比如我们在添加事件时候，采用事件委托机制，不会在li标签上直接添加，而是在ul父元素上添加。

好处：比较合适动态元素的绑定，新添加的子元素也会有监听函数，也可以有事件触发机制。



##### 212. 说一下图片的懒加载和预加载

预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。

懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。

两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。
懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。



##### 213. mouseover和mouseenter的区别

mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移除事件是mouseout

mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件，也就是不会冒泡，对应的移除事件是mouseleave



##### 214. js的new操作符做了哪些事情

new 操作符新建了一个空对象，这个对象原型指向构造函数的prototype，执行构造函数后返回这个对象。



###### 215. 改变函数内部this指针的指向函数（bind，apply，call的区别）

通过apply和call改变函数的this指向，他们两个函数的第一个参数都是一样的表示要改变指向的那个对象，第二个参数，apply是数组，而call则是arg1,arg2...这种形式。通过bind改变this作用域会返回一个新的函数，这个函数不会马上执行。



###### 216. js的各种位置，比如clientHeight,scrollHeight,offsetHeight ,以及scrollTop, offsetTop,clientTop的区别？

clientHeight：表示的是可视区域的高度，不包含border和滚动条

offsetHeight：表示可视区域的高度，包含了border和滚动条

scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分。

clientTop：表示边框border的厚度，在未指定的情况下一般为0

scrollTop：滚动后被隐藏的高度，获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)距离顶端的高度。



##### 217. js拖拽功能的实现

首先是三个事件，分别是mousedown，mousemove，mouseup

当鼠标点击按下的时候，需要一个tag标识此时已经按下，可以执行mousemove里面的具体方法。

clientX，clientY标识的是鼠标的坐标，分别标识横坐标和纵坐标，并且我们用offsetX和offsetY来表示元素的元素的初始坐标，移动的举例应该是：

鼠标移动时候的坐标-鼠标按下去时候的坐标。

也就是说定位信息为：

​	鼠标移动时候的坐标-鼠标按下去时候的坐标+元素初始情况下的offetLeft.

还有一点也是原理性的东西，也就是拖拽的同时是绝对定位，我们改变的是绝对定位条件下的left
以及top等等值。

补充：也可以通过html5的拖放（Drag 和 drop）来实现



##### 218. 异步加载js的方法

defer：只支持IE如果您的脚本不会改变文档的内容，可将 defer 属性加入到<script>标签中，以便加快处理文档的速度。因为浏览器知道它将能够安全地读取文档的剩余部分而不用执行脚本，它将推迟对脚本的解释，直到文档已经显示给用户为止。

async，HTML5属性仅适用于外部脚本，并且如果在IE中，同时存在defer和async，那么defer的优先级比较高，脚本将在页面完成时执行。

创建script标签，插入到DOM中



##### 219. Ajax解决浏览器缓存问题

在ajax发送请求前加上 anyAjaxObj.setRequestHeader("If-Modified-Since","0")。

在ajax发送请求前加上 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。

在URL后面加上一个随机数： "fresh=" + Math.random()。

在URL后面加上时间搓："nowtime=" + new Date().getTime()。

如果是使用jQuery，直接这样就可以了 $.ajaxSetup({cache:false})。这样页面的所有ajax都会执行这条语句就是不需要保存缓存记录。



##### 220. js的节流和防抖









##### 221. JS中的垃圾回收机制

必要性：由于字符串、对象和数组没有固定大小，所有当他们的大小已知时，才能对他们进行动态的存储分配。JavaScript程序每次创建字符串、数组或对象时，解释器都必须分配内存来存储那个实体。只要像这样动态地分配了内存，最终都要释放这些内存以便他们能够被再用，否则，JavaScript的解释器将会消耗完系统中所有可用的内存，造成系统崩溃。

这段话解释了为什么需要系统需要垃圾回收，JS不像C/C++，他有自己的一套垃圾回收机制（Garbage Collection）。JavaScript的解释器可以检测到何时程序不再使用一个对象了，当他确定了一个对象是无用的时候，他就知道不再需要这个对象，可以把它所占用的内存释放掉了。例如：

```
var a="hello world";
var b="world";
var a=b;
```

//这时，会释放掉"hello world"，释放内存以便再引用

垃圾回收的方法：标记清除、计数引用。

标记清除

这是最常见的垃圾回收方式，当变量进入环境时，就标记这个变量为”进入环境“,从逻辑上讲，永远不能释放进入环境的变量所占的内存，永远不能释放进入环境变量所占用的内存，只要执行流程进入相应的环境，就可能用到他们。当离开环境时，就标记为离开环境。

垃圾回收器在运行的时候会给存储在内存中的变量都加上标记（所有都加），然后去掉环境变量中的变量，以及被环境变量中的变量所引用的变量（条件性去除标记），删除所有被标记的变量，删除的变量无法在环境变量中被访问所以会被删除，最后垃圾回收器，完成了内存的清除工作，并回收他们所占用的内存。

引用计数法

另一种不太常见的方法就是引用计数法，引用计数法的意思就是每个值没引用的次数，当声明了一个变量，并用一个引用类型的值赋值给改变量，则这个值的引用次数为1,；相反的，如果包含了对这个值引用的变量又取得了另外一个值，则原先的引用值引用次数就减1，当这个值的引用次数为0的时候，说明没有办法再访问这个值了，因此就把所占的内存给回收进来，这样垃圾收集器再次运行的时候，就会释放引用次数为0的这些值。

用引用计数法会存在内存泄露，下面来看原因：

```
function problem() {
var objA = new Object();
var objB = new Object();
objA.someOtherObject = objB;
objB.anotherObject = objA;
}
```

在这个例子里面，objA和objB通过各自的属性相互引用，这样的话，两个对象的引用次数都为2，在采用引用计数的策略中，由于函数执行之后，这两个对象都离开了作用域，函数执行完成之后，因为计数不为0，这样的相互引用如果大量存在就会导致内存泄露。

特别是在DOM对象中，也容易存在这种问题：

```
var element=document.getElementById（’‘）；
var myObj=new Object();
myObj.element=element;
element.someObject=myObj;
```

这样就不会有垃圾回收的过程。

##### 220. js的节流和防抖

防抖（Debouncing）: 防抖技术即是可以把多个顺序地调用合并成一次，也就是在一定时间内，规定事件被触发的次数

节流（Throttling）: 防抖函数确实不错，但是也存在问题，譬如图片的懒加载，我希望在下滑过程中图片不断的被加载出来，而不是只有当我停止下滑时候，图片才被加载出来。又或者下滑时候的数据的 ajax 请求加载也是同理。



##### 222. eval是做什么的

它的功能是将对应的字符串解析成js并执行，应该避免使用js，因为非常消耗性能（2次，一次解析成js，一次执行）



##### 223. 如何理解前端模块化

前端模块化就是复杂的文件编程一个一个独立的模块，比如js文件等等，分成独立的模块有利于重用（复用性）和维护（版本迭代），这样会引来模块之间相互依赖的问题，所以有了commonJS规范，AMD，CMD规范等等，以及用于js打包（编译等处理）的工具webpack



##### 224. 说一下Commonjs、AMD和CMD

一个模块是能实现特定功能的文件，有了模块就可以方便的使用别人的代码，想要什么功能就能加载什么模块。

Commonjs：开始于服务器端的模块化，同步定义的模块化，每个模块都是一个单独的作用域，模块输出，modules.exports，模块加载require()引入模块。

AMD：中文名异步模块定义的意思。

requireJS实现了AMD规范，主要用于解决下述两个问题。

1.多个文件有依赖关系，被依赖的文件需要早于依赖它的文件加载到浏览器

2.加载的时候浏览器会停止页面渲染，加载文件越多，页面失去响应的时间越长。

语法：requireJS定义了一个函数define，它是全局变量，用来定义模块。

```js
define(['dependency'], function(){
  var name = 'Byron';
  function printName(){
    console.log(name);
  }
  return {
    printName: printName
  };
});
```

加载模块

```
require(['myModule'], function (my){
	my.printName();
}
```

requirejs定义了一个函数define,它是全局变量，用来定义模块：

`define(id?dependencies?,factory)`

在页面上使用模块加载函数：

`require([dependencies],factory)；`

总结AMD规范：require（）函数在加载依赖函数的时候是异步加载的，这样浏览器不会失去响应，它指定的回调函数，只有前面的模块加载成功，才会去执行。
因为网页在加载js的时候会停止渲染，因此我们可以通过异步的方式去加载js,而如果需要依赖某些，也是异步去依赖，依赖后再执行某些方法。

##### 225. 对象深度克隆的简单实现

```js
function deepClone(obj){
var newObj= obj instanceof Array ? []:{};
for(var item in obj){
var temple= typeof obj[item] == 'object' ? deepClone(obj[item]):obj[item];
newObj[item] = temple;
}
return newObj;
}
```

##### 226. 实现一个once函数，传入函数参数只执行一次

```
function ones(func){
  var tag=true;
  return function(){
    if(tag==true){
    func.apply(null,arguments);
    tag=false;
  }
  return undefined
  }
}
```



##### 228. js监听对象属性的改变

1. 在ES5中可以通过Object.defineProperty来实现已有属性的监听
2. 在ES6中可以通过Proxy来实现

##### 229. 如何实现一个私有变量，用getName方法可以访问，不能直接访问

1. 通过defineProperty来实现

   ````js
   obj={
   	name:yuxiaoliang,
   	getName:function(){
   		return this.name
   	}
   }
   object.defineProperty(obj,"name",{
   ````

   

2. 通过函数的创建形式

   ```js
   function product(){
     var name='yuxiaoliang';
     this.getName=function(){
     	return name;
   	}
   }
   var obj=new product();
   ```

   

##### 230. ==和===、以及Object.is的区别

(1) ==

主要存在：强制转换成number,null==undefined

" "==0  //true

"0"==0  //true

" " !="0" //true

123=="123" //true

null==undefined //true

(2)Object.js

主要的区别就是+0！=-0 而NaN==NaN
(相对比===和==的改进)



##### 231. setTimeout、setInterval和requestAnimationFrame之间的区别

与setTimeout和setInterval不同，requestAnimationFrame不需要设置时间间隔，
大多数电脑显示器的刷新频率是60Hz，大概相当于每秒钟重绘60次。大多数浏览器都会对重绘操作加以限制，不超过显示器的重绘频率，因为即使超过那个频率用户体验也不会有提升。因此，最平滑动画的最佳循环间隔是1000ms/60，约等于16.6ms。

RAF采用的是系统时间间隔，不会因为前面的任务，不会影响RAF，但是如果前面的任务多的话，
会响应setTimeout和setInterval真正运行时的时间间隔。

特点：
（1）requestAnimationFrame会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率。

（2）在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的CPU、GPU和内存使用量

（3）requestAnimationFrame是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销。



##### 232 实现一个两列等高布局，讲讲思路

为了实现两列等高，可以给每列加上 padding-bottom:9999px;

margin-bottom:-9999px;同时父元素设置overflow:hidden;



##### 233. 自己实现一个bind函数

原理：通过apply或者call方法来实现。

考虑到原型链: 为什么要考虑？因为在new 一个bind过生成的新函数的时候，必须的条件是要继承原函数的原型

````
Function.prototype.bind=function(obj,arg){
var arg=Array.prototype.slice.call(arguments,1);
var context=this;
var bound=function(newArg){
arg=arg.concat(Array.prototype.slice.call(newArg));
return context.apply(obj,arg);
}
var F=function(){}
````



##### 237. 如何实现sleep的效果（es5或者es6）

1. while循环的方式

   ```js
   function sleep(ms){
     var start=Date.now(),expire=start+ms;
     while(Date.now()<expire);
     console.log('1111');
     return;
   }
   ```

   

2. 通过promise来实现

   ```
   function sleep(ms){
   var temple=new Promise(
   (resolve)=>{
   console.log(111);setTimeout(resolve,ms)
   });
   return temple
   }
   sleep(500).then(function(){
   //console.log(222)
   })
   ```

3. 通过async封装

   ```
   function sleep(ms){
   return new Promise((resolve)=>setTimeout(resolve,ms));
   }
   async function test(){
   var temple=await sleep(1000);
   console.log(1111)
   return temple
   }
   test();
   ```

   

4. 通过generate来实现

   ```
   function* sleep(ms){
   yield new Promise(function(resolve,reject){
   console.log(111);
   setTimeout(resolve,ms);
   })
   }
   sleep(500).next().value.then(function(){console.log(2222)})
   ```

   

##### 238. 简单的实现一个promise

[首先明](https://promisesaplus.com/)[确什么是promiseA+规范，参考规范的地址：primise](https://promisesaplus.com/)

A+规范

如何实现一个promise，参考我的文章：

[实现一个完美符合Promise/A+规范的Promise](https://github.com/forthealllight/blog/issues/4)

一般不会问的很详细，只要能写出上述文章中的v1.0版本的简单promise即可。



##### 239. Function._proto_(getPrototypeOf)是什么？

获取一个对象的原型，在chrome中可以通过_proto_的形式，或者在ES6中可以通过Object.getPrototypeOf的形式。

那么Function.proto是什么么？也就是说Function由什么对象继承而来，我们来做如下判别。

Function.__proto__==Object.prototype //false

Function.__proto__==Function.prototype//true

我们发现Function的原型也是Function。

我们用图可以来明确这个关系：

<img width="646" alt="2018-07-10 2 38 27" src="https://user-images.githubusercontent.com/17233651/42493275-f55d0860-844e-11e8-983f-e04189a4f3d8.png">



##### 240 . 实现js中所有对象的深度克隆（包装对象，Date对象，正则对象）

通过递归可以简单实现对象的深度克隆，但是这种方法不管是ES6还是ES5实现，都有同样的缺陷，就是只能实现特定的object的深度复制（比如数组和函数），不能实现包装对象Number，String ， Boolean，以及Date对象，RegExp对象的复制。

##### 241 简单实现Node的Events模块

简介：观察者模式或者说订阅模式，它定义了对象间的一种一对多的关系，让多个观察者对象同时监听某一个主题对象，当一个对象发生改变时，所有依赖于它的对象都将得到通知。

node中的Events模块就是通过观察者模式来实现的：

```js
var events=require('events');
var eventEmitter=new events.EventEmitter();
eventEmitter.on('say',function(name){
	console.log('Hello',name);
})
eventEmitter.emit('say','Jony yu');
```

这样，eventEmitter发出say事件，通过On接收，并且输出结果，这就是一个订阅模式的实现，下面我们来简单的实现一个Events模块的EventEmitter。



实现简单的Event模块的emit和on方法

```
function Events(){
this.on=function(eventName,callBack){
if(!this.handles){
this.handles={};
}
if(!this.handles[eventName]){
this.handles[eventName]=[];
}
this.handles[eventName].push(callBack);
}
this.emit=function(eventName,obj){
if(this.handles[eventName]){
for(var i=0;o<this.handles[eventName].length;i++){
this.handles[eventName][i](obj);
}
}
}
return this;
}
```

这样我们就定义了Events，现在我们可以开始来调用：

```
var events=new Events();
events.on('say',function(name){
console.log('Hello',nama)
});
events.emit('say','Jony yu');
```

每个对象是独立的

​	因为是通过new的方式，每次生成的对象都是不相同的，因此：

```
var event1=new Events();
var event2=new Events();
event1.on('say',function(){
console.log('Jony event1');
});
event2.on('say',function(){
console.log('Jony event2');
})
event1.emit('say');
event2.emit('say');
```



##### 242. 箭头函数中this指向举例

```
var a=11;
function test2(){
this.a=22;
let b=()=>{console.log(this.a)}
b();
}
var x=new test2();
```

##### 243. js判断类型

判断方法：typeof()，instanceof，Object.prototype.toString.call()等



##### 244. 数组常用方法

push()，pop()，shift()，unshift()，splice()，sort()，reverse()，map()等



##### 245. 数组去重

法一：indexOf循环去重

法二：ES6 Set去重；Array.from(new Set(array))

法三：Object 键值对去重；把数组的值存成 Object 的 key 值，比如 Object[value1] = true，在判断另一个值的时候，如果 Object[value2]存在的话，就说明该值是重复的。

##### 246. 闭包 有什么用

（1）什么是闭包：

闭包是指有权访问另外一个函数作用域中的变量的函数。

闭包就是函数的局部变量集合，只是这些局部变量在函数返回后会继续存在。闭包就是就是函数的“堆栈”在函数返回后并不释放，我们也可以理解为这些函数堆栈并不在栈上分配而是在堆上分配。当在一个函数内定义另外一个函数就会产生闭包。

（2）为什么要用：

匿名自执行函数：我们知道所有的变量，如果不加上var关键字，则默认的会添加到全局对象的属性上去，这样的临时变量加入全局对象有很多坏处，比如：别的函数可能误用这些变量；造成全局对象过于庞大，影响访问速度(因为变量的取值是需要从原型链上遍历的)。除了每次使用变量都是用var关键字外，我们在实际情况下经常遇到这样一种情况，即有的函数只需要执行一次，其内部变量无需维护，可以用闭包。

结果缓存：我们开发中会碰到很多情况，设想我们有一个处理过程很耗时的函数对象，每次调用都会花费很长时间，那么我们就需要将计算出来的值存储起来，当调用这个函数的时候，首先在缓存中查找，如果找不到，则进行计算，然后更新缓存并返回值，如果找到了，直接返回查找到的值即可。闭包正是可以做到这一点，因为它不会释放外部的引用，从而函数内部的值可以得以保留。

封装：实现类和继承等。



##### 247. 事件代理在捕获阶段的实际应用

可以在父元素层面阻止事件向子元素传播，也可代替子元素执行某些操作。



##### 248. 去除字符串首尾空格

使用正则(^\s*)|(\s*$)即可



##### 249. 性能优化

减少HTTP请求

使用内容发布网络（CDN）

添加本地缓存

压缩资源文件

将CSS样式表放在顶部，把javascript放在底部（浏览器的运行机制决定）

避免使用CSS表达式

减少DNS查询

使用外部javascript和CSS

避免重定向

图片lazyLoad



##### 250. 来讲讲JS的闭包吧

闭包是指有权访问另外一个函数作用域中的变量的函数。

闭包就是函数的局部变量集合，只是这些局部变量在函数返回后会继续存在。闭包就是就是函数的“堆栈”在函数返回后并不释放，我们也可以理解为这些函数堆栈并不在栈上分配而是在堆上分配。当在一个函数内定义另外一个函数就会产生闭包。

（2）为什么要用：

匿名自执行函数：我们知道所有的变量，如果不加上var关键字，则默认的会添加到全局对象的属性上去，这样的临时变量加入全局对象有很多坏处，比如：别的函数可能误用这些变量；造成全局对象过于庞大，影响访问速度(因为变量的取值是需要从原型链上遍历的)。除了每次使用变量都是用var关键字外，我们在实际情况下经常遇到这样一种情况，即有的函数只需要执行一次，其内部变量无需维护，可以用闭包。

结果缓存：我们开发中会碰到很多情况，设想我们有一个处理过程很耗时的函数对象，每次调用都会花费很长时间，那么我们就需要将计算出来的值存储起来，当调用这个函数的时候，首先在缓存中查找，如果找不到，则进行计算，然后更新缓存并返回值，如果找到了，直接返回查找到的值即可。闭包正是可以做到这一点，因为它不会释放外部的引用，从而函数内部的值可以得以保留。



##### 251. 能来讲讲JS的语言特性吗

运行在客户端浏览器上；

不用预编译，直接解析执行代码；

是弱类型语言，较为灵活；

与操作系统无关，[跨平台](https://www.baidu.com/s?wd=跨平台&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)的语言；

脚本语言、解释性语言



##### 252. 如何判断一个数组(讲到typeof差点掉坑里)

```
Object.prototype.toString.call()
instanceof
```



##### 253. 你说到typeof，能不能加一个限制条件达到判断条件

typeof只能判断是object,可以判断一下是否拥有数组的方法



##### 254. JS实现跨域

JSONP：通过动态创建script，再请求一个带参网址实现跨域通信。document.domain + iframe跨域：两个页面都通过js强制设置document.domain为基础主域，就实现了同域。

location.hash + iframe跨域：a欲与b跨域相互通信，通过中间页c来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。

window.name + iframe跨域：通过iframe的src属性由外域转向本地域，跨域数据即由iframe的window.name从外域传递到本地域。

postMessage跨域：可以跨域操作的window属性之一。

CORS：服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求，前后端都需要设置。

代理跨域：启一个代理服务器，实现数据的转发



##### 255. Js基本数据类型

基本数据类型：undefined、null、number、boolean、string、symbol



##### 256.  js的命名方式



##### 257. js深度拷贝一个元素的具体实现

````
var deepCopy = function(obj) {
if (typeof obj !== 'object') return;
var newObj = obj instanceof Array ? [] : {};
for (var key in obj) {
if (obj.hasOwnProperty(key)) {
newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
}
}
return newObj;
}
````

##### 258. 之前说了ES6set可以数组去重，是否还有数组去重的方法

法一：indexOf循环去重

法二：Object 键值对去重；把数组的值存成 Object 的 key 值，比如 Object[value1] = true，在判断另一个值的时候，如果 Object[value2]存在的话，就说明该值是重复的。

##### 259. 重排和重绘，讲讲看

重绘（repaint或redraw）：当盒子的位置、大小以及其他属性，例如颜色、字体大小等都确定下来之后，浏览器便把这些原色都按照各自的特性绘制一遍，将内容呈现在页面上。重绘是指一个元素外观的改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。

触发重绘的条件：改变元素外观属性。如：color，background-color等。

注意：table及其内部元素可能需要多次计算才能确定好其在渲染树中节点的属性值，比同等元素要多花两倍时间，这就是我们尽量避免使用table布局页面的原因之一。

重排（重构/回流/reflow）：当渲染树中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建, 这就称为回流(reflow)。每个页面至少需要一次回流，就是在页面第一次加载的时候。

重绘和重排的关系：在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程称为重绘。所以，重排必定会引发重绘，但重绘不一定会引发重排。



##### 262. 跨域的原理

跨域，是指浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对JavaScript实施的安全限制，那么只要协议、域名、端口有任何一个不同，都被当作是不同的域。跨域原理，即是通过各种方式，避开浏览器的安全限制。



##### 264. null == undefined为什么

要比较相等性之前，不能将null 和 undefined 转换成其他任何值，但 null == undefined 会返回 true 。ECMAScript规范中是这样定义的。



##### 265. this的指向 哪几种

默认绑定：全局环境中，this默认绑定到window。

隐式绑定：一般地，被直接对象所包含的函数调用时，也称为方法调用，this隐式绑定到该直接对象。

隐式丢失：隐式丢失是指被隐式绑定的函数丢失绑定对象，从而默认绑定到window。显式绑定：通过call()、apply()、bind()方法把对象绑定到this上，叫做显式绑定。

new绑定：如果函数或者方法调用之前带有关键字new，它就构成构造函数调用。对于this绑定来说，称为new绑定。

【1】构造函数通常不使用return关键字，它们通常初始化新对象，当构造函数的函数体执行完毕时，它会显式返回。在这种情况下，构造函数调用表达式的计算结果就是这个新对象的值。

【2】如果构造函数使用return语句但没有指定返回值，或者返回一个原始值，那么这时将忽略返回值，同时使用这个新对象作为调用结果。

【3】如果构造函数显式地使用return语句返回一个对象，那么调用表达式的值就是这个对象。



##### 266. 暂停死区

在代码块内，使用let、const命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”



##### 267. AngularJS双向绑定原理

Angular将双向绑定转换为一堆watch表达式，然后递归这些表达式检查是否发生过变化，如果变了则执行相应的watcher函数（指view上的指令，如ng-bind，ng-show等或是{{}}）。等到model中的值不再发生变化，也就不会再有watcher被触发，一个完整的digest循环就完成了。

Angular中在view上声明的事件指令，如：ng-click、ng-change等，会将浏览器的事件转发给$scope上相应的model的响应函数。等待相应函数改变model，紧接着触发脏检查机制刷新view。

watch表达式：可以是一个函数、可以是$scope上的一个属性名，也可以是一个字符串形式的表达式。$watch函数所监听的对象叫做watch表达式。watcher函数：指在view上的指令（ngBind，ngShow、ngHide等）以及{{}}表达式，他们所注册的函数。每一个watcher对象都包括：监听函数，上次变化的值，获取监听表达式的方法以及监听表达式，最后还包括是否需要使用深度对比（angular.equals()）



##### 269. 简历中提到了requestAnimationFrame，请问是怎么使用的

requestAnimationFrame() 方法告诉浏览器您希望执行动画并请求浏览器在下一次重绘之前调用指定的函数来更新动画。该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。



##### 270. 有一个游戏叫做Flappy Bird，就是一只小鸟在飞，前面是无尽的沙漠，上下不断有钢管生成，你要躲避钢管。然后小明在玩这个游戏时候老是卡顿甚至崩溃，说出原因（3-5个）以及解决办法（3-5个）

原因可能是：

1.内存溢出问题。

2.资源过大问题。

3.资源加载问题。

4.canvas绘制频率问题

解决办法：

1.针对内存溢出问题，我们应该在钢管离开可视区域后，销毁钢管，让垃圾收集器回收钢管，因为不断生成的钢管不及时清理容易导致内存溢出游戏崩溃。

2.针对资源过大问题，我们应该选择图片文件大小更小的图片格式，比如使用webp、png格式的图片，因为绘制图片需要较大计算量。

3.针对资源加载问题，我们应该在可视区域之前就预加载好资源，如果在可视区域生成钢管的话，用户的体验就认为钢管是卡顿后才生成的，不流畅。

4.针对canvas绘制频率问题，我们应该需要知道大部分显示器刷新频率为60次/s,因此游戏的每一帧绘制间隔时间需要小于1000/60=16.7ms，才能让用户觉得不卡顿。

（注意因为这是单机游戏，所以回答与网络无关）



##### 274. 什么是按需加载

当用户触发了动作时才加载对应的功能。触发的动作，是要看具体的业务场景而言，包括但不限于以下几个情况：鼠标点击、输入文字、拉动滚动条，鼠标移动、窗口大小更改等。加载的文件，可以是JS、图片、CSS、HTML等。



##### 275. 说一下什么是virtual dom

用JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异 把所记录的差异应用到所构建的真正的DOM树上，视图就更新了。Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存。



##### 277. ant-design优点和缺点

优点：组件非常全面，样式效果也都比较不错。

缺点：框架自定义程度低，默认UI风格修改困难。



##### 278. JS中继承实现的几种方式，

1、原型链继承，将父类的实例作为子类的原型，他的特点是实例是子类的实例也是父类的实例，父类新增的原型方法/属性，子类都能够访问，并且原型链继承简单易于实现，缺点是来自原型对象的所有属性被所有实例共享，无法实现多继承，无法向父类构造函数传参。

2、构造继承，使用父类的构造函数来增强子类实例，即复制父类的实例属性给子类，

构造继承可以向父类传递参数，可以实现多继承，通过call多个父类对象。但是构造继承只能继承父类的实例属性和方法，不能继承原型属性和方法，无法实现函数服用，每个子类都有父类实例函数的副本，影响性能

3、实例继承，为父类实例添加新特性，作为子类实例返回，实例继承的特点是不限制调用方法，不管是new 子类（）还是子类（）返回的对象具有相同的效果，缺点是实例是父类的实例，不是子类的实例，不支持多继承

4、拷贝继承：特点：支持多继承，缺点：效率较低，内存占用高（因为要拷贝父类的属性）无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）

5、组合继承：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用

6、寄生组合继承：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点



##### 279. 写一个函数，第一秒打印1，第二秒打印2

```
for(let i=0;i<5;i++){
setTimeout(function(){
console.log(i)
},1000*i)
}

for(var i=0;i<5;i++){
(function(i){
setTimeout(function(){
console.log(i)
},1000*i)
})(i)
}
```

##### 280. vue的生命周期

Vue实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、销毁等一系列过程，我们称这是Vue的生命周期。通俗说就是Vue实例从创建到销毁的过程，就是生命周期。

每一个组件或者实例都会经历一个完整的生命周期，总共分为三个阶段：初始化、运行中、销毁。

实例、组件通过new Vue() 创建出来之后会初始化事件和生命周期，然后就会执行beforeCreate钩子函数，这个时候，数据还没有挂载呢，只是一个空壳，无法访问到数据和真实的dom，一般不做操作

挂载数据，绑定事件等等，然后执行created函数，这个时候已经可以使用到数据，也可以更改数据,在这里更改数据不会触发updated函数，在这里可以在渲染前倒数第二次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取

接下来开始找实例或者组件对应的模板，编译模板为虚拟dom放入到render函数中准备渲染，然后执行beforeMount钩子函数，在这个函数中虚拟dom已经创建完成，马上就要渲染,在这里也可以更改数据，不会触发updated，在这里可以在渲染前最后一次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取

接下来开始render，渲染出真实dom，然后执行mounted钩子函数，此时，组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了，可以在这里操作真实dom等事情...

当组件或实例的数据更改之后，会立即执行beforeUpdate，然后vue的虚拟dom机制会重新构建虚拟dom与上一次的虚拟dom树利用diff算法进行对比之后重新渲染，一般不做什么事儿

当更新完成后，执行updated，数据已经更改完成，dom也重新render完成，可以操作更新后的虚拟dom

当经过某种途径调用$destroy方法后，立即执行beforeDestroy，一般在这里做一些善后工作，例如清除计时器、清除非指令绑定的事件等等

组件的数据绑定、监听...去掉后只剩下dom空壳，这个时候，执行destroyed，在这里做善后工作也可以



##### 281. 简单介绍一下symbol

Symbol是ES6 的新增属性，代表用给定名称作为唯一标识，这种类型的值可以这样创建，let id=symbol(“id”)

Symbl确保唯一，即使采用相同的名称，也会产生不同的值，我们创建一个字段，仅为知道对应symbol的人能访问，使用symbol很有用，symbol并不是100%隐藏，有内置方法Object.getOwnPropertySymbols(obj)可以获得所有的symbol。
也有一个方法Reflect.ownKeys(obj)返回对象所有的键，包括symbol。

所以并不是真正隐藏。但大多数库内置方法和语法结构遵循通用约定他们是隐藏的，



##### 282. 什么是事件监听

addEventListener()方法，用于向指定元素添加事件句柄，它可以更简单的控制事件，语法为

element.addEventListener(event, function, useCapture);

第一个参数是事件的类型(如 "click" 或 "mousedown").

第二个参数是事件触发后调用的函数。

第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。

事件传递有两种方式，冒泡和捕获

事件传递定义了元素事件触发的顺序，如果你将P元素插入到div元素中，用户点击P元素，

在冒泡中，内部元素先被触发，然后再触发外部元素，

捕获中，外部元素先被触发，在触发内部元素，



##### 283. 介绍一下promise，及其底层如何实现

Promise是一个对象，保存着未来将要结束的事件，她有两个特征:

1、对象的状态不受外部影响，Promise对象代表一个异步操作，有三种状态，pending进行中，fulfilled已成功，rejected已失败，只有异步操作的结果，才可以决定当前是哪一种状态，任何其他操作都无法改变这个状态，这也就是promise名字的由来

2、一旦状态改变，就不会再变，promise对象状态改变只有两种可能，从pending改到fulfilled或者从pending改到rejected，只要这两种情况发生，状态就凝固了，不会再改变，这个时候就称为定型resolved,

Promise的基本用法，

````
let promise1 = new Promise(function(resolve,reject){
setTimeout(function(){
resolve('ok')
},1000)
})
promise1.then(function success(val){
console.log(val)
})
````



##### 286. js原型链，原型链的顶端是什么？Object的原型是什么？Object的原型的原型是什么？在数组原型链上实现删除数组重复数据的方法

能够把这个讲清楚弄明白是一件很困难的事，

首先明白原型是什么，在ES6之前，JS没有类和继承的概念，JS是通过原型来实现继承的，在JS中一个构造函数默认带有一个prototype属性，这个的属性值是一个对象，同时这个prototype对象自带有一个constructor属性，这个属性指向这个构造函数，同时每一个实例都会有一个_proto_属性指向这个prototype对象，我们可以把这个叫做隐式原型，我们在使用一个实例的方法的时候，会先检查这个实例中是否有这个方法，没有的话就会检查这个prototype对象是否有这个方法，

基于这个规则，如果让原型对象指向另一个类型的实例，即constructor1.protoytpe=instance2，这时候如果试图引用constructor1构造的实例instance1的某个属性p1,

首先会在instance1内部属性中找一遍，

接着会在instance1._proto_（constructor1.prototype）即是instance2中寻找p1

搜寻轨迹：instance1->instance2->constructor2.prototype……->Object.prototype;这即是原型链，原型链顶端是Object.prototype

补充学习：

每个函数都有一个prototype属性，这个属性指向了一个对象，这个对象正是调用该函数而创建的实例的原型，那么什么是原型呢，可以这样理解，每一个JavaScript对象在创建的时候就会预制管理另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型继承属性

https://www.nowcoder.com/ta/review-frontend/review?page=286



##### 287. 什么是js的闭包？有什么作用，用闭包写个单例模式

MDN对闭包的定义是：闭包是指那些能够访问自由变量的函数，自由变量是指在函数中使用的，但既不是函数参数又不是函数的局部变量的变量，由此可以看出，闭包=函数+函数能够访问的自由变量，所以从技术的角度讲，所有JS函数都是闭包，但是这是理论上的闭包，还有一个实践角度上的闭包，从实践角度上来说，只有满足1、即使创建它的上下文已经销毁，它仍然存在，2、在代码中引入了自由变量，才称为闭包

闭包的应用：

模仿块级作用域。2、保存外部函数的变量。3、封装私有变量



##### 288. promise+Generator+Async的使用

https://www.nowcoder.com/ta/review-frontend/review?page=288

Promise

解决的问题:回调地狱

Promise规范:

promise有三种状态，等待（pending）、已完成（fulfilled/resolved）、已拒绝（rejected）.Promise的状态只能从“等待”转到“完成”或者“拒绝”，不能逆向转换，同时“完成”和“拒绝”也不能相互转换.

promise 必须提供一个 then方法以访问其当前值、终值和据因。promise.then(resolve, reject),resolve 和 reject都是可选参数。如果 resolve 或reject 不是函数，其必须被忽略.

then 方法必须返回一个 promise 对象.

使用:

实例化promise对象需要传入函数(包含两个参数),resolve和reject,内部确定状态.resolve和reject函数可以传入参数在回调函数中使用.
resolve和reject都是函数,传入的参数在then的回调函数中接收.





##### 289. 事件委托以及冒泡原理。

事件委托是利用冒泡阶段的运行机制来实现的，就是把一个元素响应事件的函数委托到另一个元素，一般是把一组元素的事件委托到他的父元素上，委托的优点是

减少内存消耗，节约效率

动态绑定事件

事件冒泡，就是元素自身的事件被触发后，如果父元素有相同的事件，如onclick事件，那么元素本身的触发状态就会传递，也就是冒到父元素，父元素的相同事件也会一级一级根据嵌套关系向外触发，直到document/window，冒泡过程结束。



##### 290. 写个函数，可以转化下划线命名到驼峰命名



##### 292. JS中string的startwith和indexof两种方法的区别

JS中startwith函数，其参数有3个，stringObj,要搜索的字符串对象，str，搜索的字符串，position，可选，从哪个位置开始搜索，如果以position开始的字符串以搜索字符串开头，则返回true，否则返回false

Indexof函数，indexof函数可返回某个指定字符串在字符串中首次出现的位置，



##### 293. js字符串转数字的方法

通过函数parseInt（），可解析一个字符串，并返回一个整数，语法为parseInt（string ,radix）

string：被解析的字符串

radix：表示要解析的数字的基数，默认是十进制，如果radix<2或>36,则返回NaN



##### 294. let const var的区别 ，什么是块级作用域，如何用ES5的方法实现块级作用域（立即执行函数），ES6 呢

提起这三个最明显的区别是var声明的变量是全局或者整个函数块的，而let,const声明的变量是块级的变量，var声明的变量存在变量提升，let,const不存在，let声明的变量允许重新赋值，const不允许，



##### 295. ES6箭头函数的特性

ES6 增加了箭头函数，基本语法为

let func = value => value;

相当于

let func = function (value) {

return value;

};

箭头函数与普通函数的区别在于：

1、箭头函数没有this，所以需要通过查找作用域链来确定this的值，这就意味着如果箭头函数被非箭头函数包含，this绑定的就是最近一层非箭头函数的this，

2、箭头函数没有自己的arguments对象，但是可以访问外围函数的arguments对象

3、不能通过new关键字调用，同样也没有new.target值和原型



##### 296. setTimeout和Promise的执行顺序

settimeout这种异步操作的回调，只有主线程中没有执行任何同步代码的前提下，才会执行异步回调，而settimeout（fun,0）表示立刻执行，也就是用来改变任务的执行顺序，要求浏览器尽可能快的进行回调

promise何时执行，由上图可知promise新建后立即执行，所以promise构造函数里代码同步执行的，

then方法指向的回调将在当前脚本所有同步任务执行完成后执行，

那么then为什么比settimeout执行的早呢，因为settimeout（fun,0）不是真的立即执行，

经过测试得出结论：执行顺序为：同步执行的代码-》promise.then->settimeout



##### 297 有了解过事件模型吗，DOM0级和DOM2级有什么区别，DOM的分级是什么

JSDOM事件流存在如下三个阶段：

事件捕获阶段

处于目标阶段

事件冒泡阶段

JSDOM标准事件流的触发的先后顺序为：先捕获再冒泡，点击DOM节点时，事件传播顺序：事件捕获阶段，从上往下传播，然后到达事件目标节点，最后是冒泡阶段，从下往上传播

DOM节点添加事件监听方法addEventListener，中参数capture可以指定该监听是添加在事件捕获阶段还是事件冒泡阶段，为false是事件冒泡，为true是事件捕获，并非所有的事件都支持冒泡，比如focus，blur等等，我们可以通过event.bubbles来判断

事件模型有三个常用方法：

event.stopPropagation:阻止捕获和冒泡阶段中，当前事件的进一步传播，

event.stopImmediatePropagetion，阻止调用相同事件的其他侦听器，

event.preventDefault，取消该事件（假如事件是可取消的）而不停止事件的进一步传播，

event.target：指向触发事件的元素，在事件冒泡过程中这个值不变

event.currentTarget = this，时间帮顶的当前元素，只有被点击时目标元素的target才会等于currentTarget，

最后，对于执行顺序的问题，如果DOM节点同时绑定了两个事件监听函数，一个用于捕获，一个用于冒泡，那么两个事件的执行顺序真的是先捕获在冒泡吗，答案是否定的，绑定在被点击元素的事件是按照代码添加顺序执行的，其他函数是先捕获再冒泡



##### 297. 有了解过事件模型吗，DOM0级和DOM2级有什么区别，DOM的分级是什么

JSDOM事件流存在如下三个阶段：

事件捕获阶段

处于目标阶段

事件冒泡阶段

JSDOM标准事件流的触发的先后顺序为：先捕获再冒泡，点击DOM节点时，事件传播顺序：事件捕获阶段，从上往下传播，然后到达事件目标节点，最后是冒泡阶段，从下往上传播

DOM节点添加事件监听方法addEventListener，中参数capture可以指定该监听是添加在事件捕获阶段还是事件冒泡阶段，为false是事件冒泡，为true是事件捕获，并非所有的事件都支持冒泡，比如focus，blur等等，我们可以通过event.bubbles来判断

事件模型有三个常用方法：

event.stopPropagation:阻止捕获和冒泡阶段中，当前事件的进一步传播，

event.stopImmediatePropagetion，阻止调用相同事件的其他侦听器，

event.preventDefault，取消该事件（假如事件是可取消的）而不停止事件的进一步传播，

event.target：指向触发事件的元素，在事件冒泡过程中这个值不变

event.currentTarget = this，时间帮顶的当前元素，只有被点击时目标元素的target才会等于currentTarget，

最后，对于执行顺序的问题，如果DOM节点同时绑定了两个事件监听函数，一个用于捕获，一个用于冒泡，那么两个事件的执行顺序真的是先捕获在冒泡吗，答案是否定的，绑定在被点击元素的事件是按照代码添加顺序执行的，其他函数是先捕获再冒泡

##### 299. JS的基本数据类型有哪些，基本数据类型和引用数据类型的区别，NaN是什么的缩写，JS的作用域类型，undefined==null返回的结果是什么，undefined与null的区别在哪，写一个函数判断变量类型

JS的基本数据类型有字符串，数字，布尔，对象，Null，Undefined,基本数据类型是按值访问的，也就是说我们可以操作保存在变量中的实际的值，

基本数据类型和引用数据类型的区别如下：

基本数据类型的值是不可变的，任何方法都无法改变一个基本类型的值，当这个变量重新赋值后看起来变量的值是改变了，但是这里变量名只是指向变量的一个指针，所以改变的是指针的指向改变，该变量是不变的，但是引用类型可以改变

基本数据类型不可以添加属性和方法，但是引用类型可以

基本数据类型的赋值是简单赋值，如果从一个变量向另一个变量赋值基本类型的值，会在变量对象上创建一个新值，然后把该值复制到为新变量分配的位置上，引用数据类型的赋值是对象引用，

基本数据类型的比较是值的比较，引用类型的比较是引用的比较，比较对象的内存地址是否相同

基本数据类型是存放在栈区的，引用数据类型同事保存在栈区和堆区

NaN是JS中的特殊值，表示非数字，NaN不是数字，但是他的数据类型是数字，它不等于任何值，包括自身，在布尔运算时被当做false，NaN与任何数运算得到的结果都是NaN，党员算失败或者运算无法返回正确的数值的就会返回NaN，一些数学函数的运算结果也会出现NaN ,

JS的作用域类型：

一般认为的作用域是词法作用域，此外JS还提供了一些动态改变作用域的方法，常见的作用域类型有：

函数作用域，如果在函数内部我们给未定义的一个变量赋值，这个变量会转变成为一个全局变量，

块作用域：块作用域吧标识符限制在{}中，

改变函数作用域的方法：

eval（），这个方法接受一个字符串作为参数，并将其中的内容视为好像在书写时就存在于程序中这个位置的代码，

with关键字：通常被当做重复引用同一个对象的多个属性的快捷方式



undefined与null：目前null和undefined基本是同义的，只有一些细微的差别，null表示没有对象，undefined表示缺少值，就是此处应该有一个值但是还没有定义

undefined == null；//返回值是true

undefined === null; //返回值是false



此外了解== 和===的区别：

在做==比较时。不同类型的数据会先转换成一致后在做比较，===中如果类型不一致就直接返回false，一致的才会比较

类型判断函数，使用typeof即可，首先判断是否为null，之后用typeof哦按段，如果是object的话，再用array.isarray判断是否为数组，如果是数字的话用isNaN判断是否是NaN即可
扩展学习：

JS采用的是词法作用域，也就是静态作用域，所以函数的作用域在函数定义的时候就决定了，



##### 300. setTimeout(fn,100);100毫秒是如何权衡的

setTimeout()函数只是将事件插入了任务列表，必须等到当前代码执行完，主线程才会去执行它指定的回调函数，有可能要等很久，所以没有办法保证回调函数一定会在setTimeout指定的时间内执行，100毫秒是插入队列的时间+等待的时间



##### 301. JS的垃圾回收机制





##### 303. 怎么获得对象上的属性：比如说通过Object.key（）

从ES5开始，有三种方法可以列出对象的属性

for（let I in obj）该方法依次访问一个对象及其原型链中所有可枚举的类型

object.keys:返回一个数组，包括所有可枚举的属性名称

object.getOwnPropertyNames:返回一个数组包含不可枚举的属性



##### 304. 简单讲一讲ES6的一些新特性

ES6在变量的声明和定义方面增加了let、const声明变量，有局部变量的概念，赋值中有比较吸引人的结构赋值，同时ES6对字符串、 数组、正则、对象、函数等拓展了一些方法，如字符串方面的模板字符串、函数方面的默认参数、对象方面属性的简洁表达方式，ES6也 引入了新的数据类型symbol，新的数据结构set和map,symbol可以通过typeof检测出来，为解决异步回调问题，引入了promise和 generator，还有最为吸引人了实现Class和模块，通过Class可以更好的面向对象编程，使用模块加载方便模块化编程，当然考虑到 浏览器兼容性，我们在实际开发中需要使用babel进行编译

重要的特性：

块级作用域：ES5只有全局作用域和函数作用域，块级作用域的好处是不再需要立即执行的函数表达式，循环体中的闭包不再有问题

rest参数：用于获取函数的多余参数，这样就不需要使用arguments对象了，

promise:一种异步编程的解决方案，比传统的解决方案回调函数和事件更合理强大

模块化：其模块功能主要有两个命令构成，export和import，export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能



##### 305. call和apply是用来做什么？

Call和apply的作用是一模一样的，只是传参的形式有区别而已

1、改变this的指向

2、借用别的对象的方法，

3、调用函数，因为apply，call方法会使函数立即执行



##### 306. 了解事件代理吗，这样做有什么好处

事件代理/事件委托：利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的事件，

简而言之：事件代理就是说我们将事件添加到本来要添加的事件的父节点，将事件委托给父节点来触发处理函数，这通常会使用在大量的同级元素需要添加同一类事件的时候，比如一个动态的非常多的列表，需要为每个列表项都添加点击事件，这时就可以使用事件代理，通过判断e.target.nodeName来判断发生的具体元素，这样做的好处是减少事件绑定，同事动态的DOM结构任然可以监听，事件代理发生在冒泡阶段



##### 307. 如何使不同页面之间进行通信



##### 308. 如何写一个继承？

原型链继承

核心： 将父类的实例作为子类的原型

特点：

非常纯粹的继承关系，实例是子类的实例，也是父类的实例

父类新增原型方法/原型属性，子类都能访问到

简单，易于实现

缺点：

要想为子类新增属性和方法，不能放到构造器中

无法实现多继承

来自原型对象的所有属性被所有实例共享

创建子类实例时，无法向父类构造函数传参



构造继承

核心：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）

特点：

解决了子类实例共享父类引用属性的问题

创建子类实例时，可以向父类传递参数

可以实现多继承（call多个父类对象）

缺点：

实例并不是父类的实例，只是子类的实例

只能继承父类的实例属性和方法，不能继承原型属性/方法

无法实现函数复用，每个子类都有父类实例函数的副本，影响性能



实例继承

核心：为父类实例添加新特性，作为子类实例返回

特点：

不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果

缺点：

实例是父类的实例，不是子类的实例

不支持多继承



拷贝继承

特点：

支持多继承

缺点：

效率较低，内存占用高（因为要拷贝父类的属性）



组合继承

核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用

特点：

可以继承实例属性/方法，也可以继承原型属性/方法

既是子类的实例，也是父类的实例

不存在引用属性共享问题

可传参

函数可复用



寄生组合继承

核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用



##### 320. js加载过程阻塞，解决方法。

指定script标签的async属性。

如果async="async"，脚本相对于页面的其余部分异步地执行（当页面继续进行解析时，脚本将被执行）

如果不使用async 且 defer="defer"：脚本将在页面完成解析时执行



##### 322. JavaScript中的轮播实现原理？假如一个页面上有两个轮播，你会怎么实现？

图片轮播的原理就是图片排成一行，然后准备一个只有一张图片大小的容器，对这个容器设置超出部分隐藏，在控制定时器来让这些图片整体左移或右移，这样呈现出来的效果就是图片在轮播了。

如果有两个轮播，可封装一个轮播组件，供两处调用



#### 328. class

ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。



##### 329. 口述数组去重

法一：indexOf循环去重

法二：ES6 Set去重；Array.from(new Set(array))

法三：Object 键值对去重；把数组的值存成 Object 的 key 值，比如 Object[value1] = true，在判断另一个值的时候，如果 Object[value2]存在的话，就说明该值是重复的。



##### 333 箭头函数和function有什么区别

箭头函数根本就没有绑定自己的this，在箭头函数中调用 this 时，仅仅是简单的沿着作用域链向上寻找，找到最近的一个 this 拿来使用



##### 334. new操作符原理

\1. 创建一个类的实例：创建一个空对象obj，然后把这个空对象的__proto__设置为构造函数的prototype。

\2. 初始化实例：构造函数被传入参数并调用，关键字this被设定指向该实例obj。

\3. 返回实例obj。



##### 335. bind,apply,call

apply：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即A对象应用B对象的方法。

call：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, args1,args2);即A对象调用B对象的方法。

bind除了返回是函数以外，它的参数和call一样。



##### 342. 事件委托

把一个元素响应事件（click、keydown......）的函数委托到另一个元素；

优点：减少内存消耗、动态绑定事件。





##### 349. 事件代理

事件代理是利用事件的冒泡原理来实现的，何为事件冒泡呢？就是事件从最深的节点开始，然后逐步向上传播事件，举个例子：页面上有这么一个节点树，div>ul>li>a;比如给最里面的a加一个click点击事件，那么这个事件就会一层一层的往外执行，执行顺序a>li>ul>div，有这样一个机制，那么我们给最外面的div加点击事件，那么里面的ul，li，a做点击事件的时候，都会冒泡到最外层的div上，所以都会触发，这就是事件代理，代理它们父级代为执行事件。



##### 350. Eventloop

任务队列中，在每一次事件循环中，macrotask只会提取一个执行，而microtask会一直提取，直到microsoft队列为空为止。

也就是说如果某个microtask任务被推入到执行中，那么当主线程任务执行完成后，会循环调用该队列任务中的下一个任务来执行，直到该任务队列到最后一个任务为止。而事件循环每次只会入栈一个macrotask,主线程执行完成该任务后又会检查microtasks队列并完成里面的所有任务后再执行macrotask的任务。

macrotasks: setTimeout, setInterval, setImmediate, I/O, UI rendering
microtasks: process.nextTick, Promise, MutationObserver



##### 356. 如何实现跨域

JSONP：通过动态创建script，再请求一个带参网址实现跨域通信。document.domain + iframe跨域：两个页面都通过js强制设置document.domain为基础主域，就实现了同域。

location.hash + iframe跨域：a欲与b跨域相互通信，通过中间页c来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。

window.name + iframe跨域：通过iframe的src属性由外域转向本地域，跨域数据即由iframe的window.name从外域传递到本地域。

postMessage跨域：可以跨域操作的window属性之一。

CORS：服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求，前后端都需要设置。

代理跨域：起一个代理服务器，实现数据的转发



##### 375. webpack和gulp区别（模块化与流的区别）

gulp强调的是前端开发的工作流程，我们可以通过配置一系列的task，定义task处理的事务（例如文件压缩合并、雪碧图、启动server、版本控制等），然后定义执行顺序，来让gulp执行这些task，从而构建项目的整个前端开发流程。

webpack是一个前端模块化方案，更侧重模块打包，我们可以把开发中的所有资源（图片、js文件、css文件等）都看成模块，通过loader（加载器）和plugins（插件）对资源进行处理，打包成符合生产环境部署的前端资源。



##### 376. redux用处

在组件化的应用中，会有着大量的组件层级关系，深嵌套的组件与浅层父组件进行数据交互，变得十分繁琐困难。而redux，站在一个服务级别的角度，可以毫无阻碍地将应用的状态传递到每一个层级的组件中。redux就相当于整个应用的管家。



redux里常用方法

提供 [getState()](https://www.nowcoder.com/ta/review-frontend/review?page=377#getState) 方法获取 state；

提供 [dispatch(action)](https://www.nowcoder.com/ta/review-frontend/review?page=377#dispatch) 方法更新 state；

通过 [subscribe(listener)](https://www.nowcoder.com/ta/review-frontend/review?page=377#subscribe) 注册监听器;

等等



##### 386. 介绍一下react

React 是一个用于构建用户界面的 JAVASCRIPT 库。React主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）

React特点有：

1.声明式设计 −React采用声明范式，可以轻松描述应用。

2.高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。

3.灵活 −React可以与已知的库或框架很好地配合。

4.JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。

5.组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。

6.单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。



##### 387. React单项数据流

在React中，数据是单向流动的，是从上向下的方向，即从父组件到子组件的方向。

state和props是其中重要的概念，如果顶层组件初始化props，那么React会向下遍历整颗组件树，重新渲染相关的子组件。其中state表示的是每个组件中内部的的状态，这些状态只在组件内部改变。
把组件看成是一个函数，那么他接受props作为参数，内部由state作为函数的内部参数，返回一个虚拟dom的实现。



##### 388. react生命周期函数和react组件的生命周期

React的组件在第一次挂在的时候首先获取父组件传递的props，接着获取初始的state值，接着经历挂载阶段的三个生命周期函数，也就是ComponentWillMount，render，ComponentDidMount，这三个函数分别代表组件将会挂载，组件渲染，组件挂载完毕三个阶段，在组件挂载完成后，组件的props和state的任意改变都会导致组建进入更新状态，在组件更新阶段，如果是props改变，则进入ComponentWillReceiveProps函数，接着进入ComponentShouldUpdate进行判断是否需要更新，如果是state改变则直接进入ComponentShouldUpdate判定，这个默认是true，当判定不需要更新的话，组件继续运行，需要更新的话则依次进入ComponentWillMount，render，ComponentDidMount三个函数，当组件卸载时，会首先进入生命周期函数ComponentWillUnmount,之后才进行卸载，如图

![reactLifeCycle](/Users/linghankong/Desktop/MAIN_LinghanKong_Repos/LeetCode-Havermeyer/doc/Assets/reactLifeCycle.png)



React的生命周期函数：

初始化阶段：getDefaultProps获取实例的默认属性，getInitialState获取每个实例的初始化状态，ComponentWillMount：组件将被装载，渲染到页面上，render：组件在这里生成虚拟的DOM节点，ComponentDidMount:组件真正被装载之后

运行中状态： componentWillReceiveProps:组件将要接收到属性的时候调用 shouldComponentUpdate:组件接受到新属性或者新状态的时候（可以返回 false，接收数据后不更新，阻止 render 调用，后面的函数不会被继续执行了）shouldComponentUpdate 这个方法用来判断是否需要调用 render 方法重新描绘 dom。因为 dom 的描绘非常消耗性能，如果我们能在 shouldComponentUpdate 方法中能够写出更优化的 dom diff 算法，可以极大的提高性能。 componentWillUpdate:组件即将更新不能修改属性和状态 render:组件重新描绘 componentDidUpdate:组件已经更新 销毁阶段： componentWillUnmount:组件即将销毁



##### 390. reactJs的组件交流

React组件之间的交流方式可以分为以下三种

1. 父组件向子组件传值:主要是利用props来进行交流

2. 子组件向父组件传值：子组件通过控制自己的state然后告诉父组件的点击状态。然后在父组件中展示出来

3. 没有任何嵌套关系的组件之间传值：如果组件之间没有任何关系，组件嵌套层次比较深（个人认为 2 层以上已经算深了），或者你为了一些组件能够订阅、写入一些信号，不想让组件之间插入一个组件，让两个组件处于独立的关系。对于事件系统，这里有 2 个基本操作步骤：订阅（subscribe）/监听（listen）一个事件通知，并发送（send）/触发（trigger）/发布（publish）/发送（dispatch）一个事件通知那些想要的组件。



##### 391. 有了解过react的虚拟DOM吗，虚拟DOM是怎么对比的呢

当然是使用的diff算法，diff算法有三种优化形式：

tree diff：将新旧两颗DOM树按照层级遍历，只对同级的DOM节点进行比较，即同一父节点下的所有子节点，当发现节点已经不存在，则该节点及其子节点会被完全删除，不会进一步比较

component diff：不同组件之间的对比，如果组件类型相同，暂不更新，否则删除旧的组件，再创建一个新的组件，插入到删除组件的位置

element diff:在类型相同的组件内，再继续对比组件内部的元素，



##### 394. 怎么获取真正的dom

ReactDOM.findDOMNode()或this.refs



##### 397. setState之后的流程

在代码中调用setState函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程（Reconciliation）。 经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个UI界面。 在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。 在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。



##### 398. react高阶组件知道吗？

高阶组件接收React组件作为参数，并且返回一个新的React组件。高阶组件本质上也是一个函数，并不是一个组件。



##### 406. TCP建立连接的三次握手过程

第一次握手：起初两端都处于CLOSED关闭状态，Client将标志位SYN置为1，随机产生一个值seq=x，并将该数据包发送给Server，Client进入SYN-SENT状态，等待Server确认；

第二次握手：Server收到数据包后由标志位SYN=1得知Client请求建立连接，Server将标志位SYN和ACK都置为1，ack=x+1，随机产生一个值seq=y，并将该数据包发送给Client以确认连接请求，Server进入SYN-RCVD状态，此时操作系统为该TCP连接分配TCP缓存和变量；

第三次握手：Client收到确认后，检查ack是否为x+1，ACK是否为1，如果正确则将标志位ACK置为1，ack=y+1，并且此时操作系统为该TCP连接分配TCP缓存和变量，并将该数据包发送给Server，Server检查ack是否为y+1，ACK是否为1，如果正确则连接建立成功，Client和Server进入ESTABLISHED状态，完成三次握手，随后Client和Server就可以开始传输数据。



##### 407. cdn原理

CDN的全称是Content Delivery Network，即内容分发网络。CDN的基本原理是广泛采用各种缓存服务器，将这些缓存服务器分布到用户访问相对集中的地区或网络中，在用户访问网站时，利用全局负载技术将用户的访问指向距离最近的工作正常的缓存服务器上，由缓存服务器直接响

##### 413. OSI七层模型

osi七层模型可以说是面试必考基础了

从上到下分别是：

应用层：文件传输，常用协议HTTP，snmp,FTP ,

表示层：数据格式化，代码转换，数据加密，

会话层：建立，解除会话

传输层：提供端对端的接口，tcp,udp

网络层：为数据包选择路由，IP，icmp

数据链路层：传输有地址的帧

物理层：二进制的数据形式在物理媒体上传输数据



##### 417. TCP/IP的网络模型

TCP/IP模型是一系列网络协议的总称，这些协议的目的是使得计算机之间可以进行信息交换，

TCP/IP模型四层架构从下到上分别是链路层，网络层，传输层，应用层

链路层的作用是负责建立电路连接，是整个网络的物理基础，典型的协议包括以太网，ADSL等，

网络层负责分配地址和传送二进制数据，主要协议是IP协议，

传输层负责传送文本数据，主要协议是TCP

应用层负责传送各种最终形态的数据，是直接与用户信息打交道的层，主要协议是http，ftp等





##### 421. 什么是进程 线程

进程，是并发执行的程序在执行过程中分配和管理资源的基本单位，是一个动态概念，竞争计算机系统资源的基本单位。

线程，是进程的一部分，一个没有线程的进程可以被看作是单线程的。线程有时又被称为轻权进程或轻量级进程，也是 CPU 调度的一个基本单位。

##### 422. 线程的那些资源共享，那些资源不共享

共享的资源有

a. 堆  由于堆是在进程空间中开辟出来的，所以它是理所当然地被共享的；因此new出来的都是共享的（16位平台上分全局堆和局部堆，局部堆是独享的）

b. 全局变量 它是与具体某一函数无关的，所以也与特定线程无关；因此也是共享的

c. 静态变量虽然对于局部变量来说，它在代码中是“放”在某一函数中的，但是其存放位置和全局变量一样，存于堆中开辟的.bss和.data段，是共享的

d. 文件等公用资源  这个是共享的，使用这些公共资源的线程必须同步。Win32 提供了几种同步资源的方式，包括信号、临界区、事件和互斥体。

独享的资源有

a. 栈 栈是独享的

b. 寄存器  这个可能会误解，因为电脑的寄存器是物理的，每个线程去取值难道不一样吗？其实线程里存放的是副本，包括程序计数器PC

##### 427. 进程间的通信方式有哪些

总共有八种，面试中只要能大概答上三四种方式的原理就可以了

1、无名管道：半双工的通信方式，数据只能单向流动且只能在具有亲缘关系的进程间使用

2、高级管道：将另一个程序当作一个新的进程在当前程序进程中启动，则这个进程算是当前程序的子进程，

3、有名管道，：也是半双工的通信方式，但是允许没有亲缘进程之间的通信

4、消息队列：消息队列是有消息的链表，存放在内核中，并由消息队列标识符标识，消息队列克服了信号传递信息少，管道只能承载无格式字节流以及缓冲区大小受限的缺点

5、信号量：信号量是一个计数器，可以用来控制多个进程对共享资源的访问，它常作为一种锁机制，防止某进程正在访问共享资源时，其他进程也访问该资源，

6、信号：用于通知接受进程某个事件已经发生

7、共享内存：共享内存就是映射一段能被其他进程所访问的内存。这段共享内存由一个进程创建，但是多个进程可以访问，共享内存是最快的IPC 方式，往往与其他通信机制配合使用

8、套接字：可用于不同机器之间的进程通信



##### 428. Redis和 mysql

（1）类型上

从类型上来说，mysql是关系型数据库，redis是缓存数据库

（2）作用上

mysql用于持久化的存储数据到硬盘，功能强大，但是速度较慢

redis用于存储使用较为频繁的数据到缓存中，读取速度快

（3）需求上

mysql和redis因为需求的不同，一般都是配合使用。



##### 431 尾递归

如果一个函数中所有递归形式的调用都出现在函数的末尾，我们称这个递归函数是尾递归的。当递归调用是整个函数体中最后执行的语句且它的返回值不属于表达式的一部分时，这个递归调用就是尾递归

##### 444. 设计模式：单例，工厂，发布订阅

单例模式：在它的核心结构中值包含一个被称为单例的特殊类。一个类只有一个实例，即一个类只有一个对象实例。

工厂模式：在创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象。

发布订阅模式：在[软件架构](https://baike.baidu.com/item/软件架构)中，发布订阅是一种[消息](https://baike.baidu.com/item/消息)[范式](https://baike.baidu.com/item/范式)，消息的发送者（称为发布者）不会将消息直接发送给特定的接收者（称为订阅者）。而是将发布的消息分为不同的类别，无需了解哪些订阅者（如果有的话）可能存在。同样的，订阅者可以表达对一个或多个类别的兴趣，只接收感兴趣的消息，无需了解哪些发布者（如果有的话）存在。

JS中常用的设计模式中，我最常用的是装饰者模式，在不改变元对象的基础上，对这个对象进行包装和拓展（包括添加属性和方法），从而使这个对象可以有更复杂的功能。





##### 从promise、process.nextTick、setTimeout出发，谈谈Event Loop中的Job queue

event loop读取任务的先后顺序，取决于任务队列（Job queue）中对于不同任务读取规则的限定

**Job queue中的执行顺序**

在Job queue中的队列分为两种类型：macro-task和microTask。我们举例来看执行顺序的规定，我们设

macro-task队列包含任务: ***a1, a2 , a3***
micro-task队列包含任务: ***b1, b2 , b3***

执行顺序为，首先执行marco-task队列开头的任务，也就是 ***a1*** 任务，执行完毕后，在执行micro-task队列里的所有任务，也就是依次执行***b1, b2 , b3***，执行完后清空micro-task中的任务，接着执行marco-task中的第二个任务，依次循环。

了解完了macro-task和micro-task两种队列的执行顺序之后，我们接着来看，真实场景下这两种类型的队列里真正包含的任务（我们以node V8引擎为例），在node V8中，这两种类型的真实任务顺序如下所示：

macro-task队列真实包含任务：

***\*script(主程序代码),setTimeout, setInterval, setImmediate, I/O, UI rendering\****

micro-task队列真实包含任务：
***process.nextTick, Promises, Object.observe, MutationObserver***

由此我们得到的执行顺序应该为：

***script(主程序代码)—>process.nextTick—>Promises...——>setTimeout——>setInterval——>setImmediate——> I/O——>UI rendering***

在ES6中macro-task队列又称为ScriptJobs，而micro-task又称PromiseJobs

同是微任务的情况下，process优先级更高



















