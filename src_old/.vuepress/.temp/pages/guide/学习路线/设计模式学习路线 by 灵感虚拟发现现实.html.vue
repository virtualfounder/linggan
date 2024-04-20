<template><div><h1 id="设计模式学习路线-by-灵感虚拟发现现实" tabindex="-1"><a class="header-anchor" href="#设计模式学习路线-by-灵感虚拟发现现实"><span>设计模式学习路线 by 灵感虚拟发现现实</span></a></h1>
<blockquote>
<p>本文作者：<a href="https://www.zzxxccvv.xyz" target="_blank" rel="noopener noreferrer">灵感虚拟发现现实<ExternalLinkIcon/></a></p>
<p>本站地址：<a href="https://www.zzxxccvv.xyz" target="_blank" rel="noopener noreferrer">https://www.zzxxccvv.xyz<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>大家有没有思考过如下几个问题？</p>
<ul>
<li>同样都是写代码，为什么有些同学的思路清晰、代码整洁；而我的代码却充满了重复和混乱，每次要修改时都无从下手、Bug 一堆？</li>
<li>如何写代码，才能使得项目易于扩展和维护？</li>
<li>我每天都在写重复的代码，如何提升水平？</li>
<li>为什么我读不懂大佬写的源码？是不是缺少了什么知识？</li>
</ul>
<p>如果存在上述问题，那么我们一定要学习软件开发中的重要技能 —— 设计模式。</p>
<p>设计模式是软件开发人员在软件开发过程中面临的一般问题的 <strong>通用</strong> 解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。</p>
<p>通俗地说就是前辈们在写代码时摸索出了一些不错的方法，可以用于解决一类问题、更好地开发和维护项目。于是其他软件开发者纷纷效仿，久而久之，就得出了一套优秀的软件开发方法总结。</p>
<p>目前最为经典的设计模式有 23 种，学习之后，不仅能帮助我们开拓思路、写出更优质的代码、提高项目的开发和维护效率；还能够帮助我们更好地阅读和理解源码，甚至可以根据文件名称直接推断出源码的架构设计（有点行话的感觉）！因此，在准备阅读框架源码前，强烈建议先学习设计模式。</p>
<p>此外，设计模式也是软件开发相关岗位面试的重点（尤其是大厂、后端开发岗位），建议大家有时间的话都要学习。</p>
<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2>
<p>Q：前端要不要学设计模式？</p>
<p>A：先学习基础的界面开发、组件库和框架的使用，之后可以将设计模式作为进阶知识来学习，想进大厂建议学习。毕竟设计模式是软件开发的通用思想 / 技能，独立于编程语言。</p>
<h2 id="学习条件" tabindex="-1"><a class="header-anchor" href="#学习条件"><span>学习条件</span></a></h2>
<ol>
<li>至少学过一门编程语言（学设计模式时需要多写代码实践）</li>
<li>使用过至少一门开发框架（这样在学习设计模式的时候能够和框架的设计结合起来，更好理解）</li>
</ol>
<h2 id="大纲" tabindex="-1"><a class="header-anchor" href="#大纲"><span>大纲</span></a></h2>
<figure><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1/设计模式学习路线 by 程序员鱼皮.png#id=ygV2a&amp;originHeight=1303&amp;originWidth=2290&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="知识" tabindex="-1"><a class="header-anchor" href="#知识"><span>知识</span></a></h2>
<ul>
<li>软件开发原则
<ul>
<li>单一职责原则（SRP）</li>
<li>开闭原则（OCP）</li>
<li>里氏替换原则（LSP）</li>
<li>依赖倒置原则（DIP）</li>
<li>接口隔离原则（ISP）</li>
<li>迪米特法则（最少知道原则）</li>
<li>合成 / 聚合复用原则（CARP）</li>
</ul>
</li>
<li>设计模式分类
<ul>
<li>根据作用范围：类 / 对象模式</li>
<li>根据目的分类：创建型 / 结构型 / 行为型模式</li>
</ul>
</li>
<li>创建型模式：如何创建对象
<ul>
<li>单例模式（懒汉式、饿汉式、双检锁、线程唯一单例）</li>
<li>工厂方法模式（类）</li>
<li>抽象工厂模式</li>
<li>建造者模式</li>
<li>原型模式</li>
</ul>
</li>
<li>结构型模式：如何将类或对象结合在一起形成一个更强大的结构
<ul>
<li>适配器模式（类 / 对象）</li>
<li>组合模式</li>
<li>装饰器模式</li>
<li>代理模式</li>
<li>享元模式</li>
<li>外观模式</li>
<li>桥接模式</li>
</ul>
</li>
<li>行为型模式：类或对象间如何交互、如何划分职责，从而更好地完成任务
<ul>
<li>迭代器模式</li>
<li>模板方法模式（类）</li>
<li>策略模式</li>
<li>命令模式</li>
<li>状态模式</li>
<li>责任链模式</li>
<li>备忘录模式</li>
<li>观察者模式</li>
<li>访问者模式</li>
<li>中介者模式</li>
<li>解释器模式（类）</li>
</ul>
</li>
</ul>
<h3 id="知识表" tabindex="-1"><a class="header-anchor" href="#知识表"><span>知识表</span></a></h3>
<blockquote>
<p>表格来源： <a href="https://home.cnblogs.com/u/schips/" target="_blank" rel="noopener noreferrer">schips<ExternalLinkIcon/></a></p>
</blockquote>
<table>
<thead>
<tr>
<th>设计模式</th>
<th>适用层次</th>
<th>引入时机</th>
<th>复杂度</th>
<th>变化</th>
<th>实现</th>
<th>体现的原则</th>
</tr>
</thead>
<tbody>
<tr>
<td>工厂方法</td>
<td>代码级</td>
<td>编码时</td>
<td>简单</td>
<td>子类的实例化</td>
<td>对象的创建工作延迟到子类</td>
<td>开闭原则</td>
</tr>
<tr>
<td>单例</td>
<td>代码级、应用级</td>
<td>设计时、编码时</td>
<td>简单</td>
<td>唯一实例</td>
<td>封装对象产生的个数</td>
<td></td>
</tr>
<tr>
<td>门面</td>
<td>应用级、构架级</td>
<td>设计时、编码时</td>
<td>简单</td>
<td>子系统的高层接口</td>
<td>封装子系统</td>
<td>开闭原则</td>
</tr>
<tr>
<td>模板方法</td>
<td>代码级</td>
<td>编码时、重构时</td>
<td>简单</td>
<td>算法子步骤的变化</td>
<td>封装算法结构</td>
<td>依赖倒置原则</td>
</tr>
<tr>
<td>抽象工厂</td>
<td>应用级</td>
<td>设计时</td>
<td>较复杂</td>
<td>产品家族的扩展</td>
<td>封装产品族系列内容的创建</td>
<td>开闭原则</td>
</tr>
<tr>
<td>组合</td>
<td>代码级</td>
<td>编码时、重构时</td>
<td>较复杂</td>
<td>复杂对象接口的统一</td>
<td>统一复杂对象的接口</td>
<td>里氏代换原则</td>
</tr>
<tr>
<td>代理</td>
<td>应用级、构架级</td>
<td>设计时、编码时</td>
<td>简单</td>
<td>对象访问的变化</td>
<td>封装对象的访问过程</td>
<td>里氏代换原则</td>
</tr>
<tr>
<td>命令</td>
<td>应用级</td>
<td>设计时、编码时</td>
<td>较简单</td>
<td>请求的变化</td>
<td>封装行为对对象</td>
<td>开闭原则</td>
</tr>
<tr>
<td>观察者</td>
<td>应用级、构架级</td>
<td>设计时、编码时</td>
<td>较简单</td>
<td>通讯对象的变化</td>
<td>封装对象通知</td>
<td>开闭原则</td>
</tr>
<tr>
<td>策略</td>
<td>应用级</td>
<td>设计时</td>
<td>一般</td>
<td>算法的变化</td>
<td>封装算法</td>
<td>里氏代换原则</td>
</tr>
<tr>
<td>建造者</td>
<td>代码级</td>
<td>编码时</td>
<td>一般</td>
<td>对象组建的变化</td>
<td>封装对象的组建过程</td>
<td>开闭原则</td>
</tr>
<tr>
<td>Adapter</td>
<td>代码级</td>
<td>重构时</td>
<td>一般</td>
<td>对象接口的变化</td>
<td>接口的转换</td>
<td></td>
</tr>
<tr>
<td>桥接</td>
<td>代码级</td>
<td>设计时、编码时</td>
<td>一般</td>
<td>对象的多维度变化</td>
<td>分离接口以及实现</td>
<td>开闭原则</td>
</tr>
<tr>
<td>装饰器</td>
<td>代码级</td>
<td>重构时</td>
<td>较复杂</td>
<td>对象的组合职责</td>
<td>在稳定接口上扩展</td>
<td>开闭原则</td>
</tr>
<tr>
<td>迭代器</td>
<td>代码级、应用级</td>
<td>编码时、重构时</td>
<td>较简单</td>
<td>对象内部集合的变化</td>
<td>封装对象内部集合的使用</td>
<td>单一职责原则</td>
</tr>
<tr>
<td>中介者</td>
<td>应用级、构架级</td>
<td>编码时、重构时</td>
<td>一般</td>
<td>对象交互的变化</td>
<td>封装对象间的交互</td>
<td>开闭原则</td>
</tr>
<tr>
<td>备忘录</td>
<td>代码级</td>
<td>编码时</td>
<td>较简单</td>
<td>状态的辅助保存</td>
<td>封装对象状态的变化</td>
<td>接口隔离原则</td>
</tr>
<tr>
<td>状态</td>
<td>应用级</td>
<td>设计时、编码时</td>
<td>一般</td>
<td>对象状态的变化</td>
<td>封装与状态相关的行为</td>
<td>单一职责原则</td>
</tr>
<tr>
<td>访问者</td>
<td>应用级</td>
<td>设计时</td>
<td>较复杂</td>
<td>对象操作变化</td>
<td>封装对象操作变化</td>
<td>开闭原则</td>
</tr>
<tr>
<td>原型</td>
<td>应用级</td>
<td>编码时、重构时</td>
<td>较简单</td>
<td>实例化的类</td>
<td>封装对原型的拷贝</td>
<td>依赖倒置原则</td>
</tr>
<tr>
<td>享元</td>
<td>代码级、应用级</td>
<td>设计时</td>
<td>一般</td>
<td>系统开销的优化</td>
<td>封装对象的获取</td>
<td></td>
</tr>
<tr>
<td>责任链</td>
<td>应用级、构架级</td>
<td>设计时、编码时</td>
<td>较复杂</td>
<td>对象的请求过程</td>
<td>封装对象的责任范围</td>
<td></td>
</tr>
<tr>
<td>解释器</td>
<td>应用级</td>
<td>设计时</td>
<td>较复杂</td>
<td>领域问题的变化</td>
<td>封装特定领域的变化</td>
<td></td>
</tr>
</tbody>
</table>
<p>除了这 23 种主流设计模式外，还有一些其他设计模式，比如 Immutable 不可变模式等，了解即可。</p>
<h2 id="学习建议" tabindex="-1"><a class="header-anchor" href="#学习建议"><span>学习建议</span></a></h2>
<ol>
<li>对设计模式的学习和其他知识一样，先了解每种设计模式是什么？作用是什么？能够解决什么问题？适用于什么场景？有什么特点？类和对象的关系是什么（建议结合 UML 类图来理解）？再去考虑编码实现和进一步在项目中应用。</li>
<li>一定要多写代码实践，最好每个设计模式都实现一遍，不要去背代码，用的多了自然就能写出代码了。</li>
<li>每个设计模式都可以 <strong>独立学习</strong> ，互相之间联系不大，因此可以根据自己的时间来选择性学习（比如先学重点的单例模式）。</li>
<li>在学会基础的设计模式后，可以分析之前学过的框架源码（比如 Spring、MyBatis 等），参考别人是如何应用设计模式的。</li>
<li><strong>不要过度依赖设计模式！！！！！！</strong> 它并不是银弹，过分使用设计模式可能只会增加系统的复杂度。</li>
</ol>
<h2 id="学习路线" tabindex="-1"><a class="header-anchor" href="#学习路线"><span>学习路线</span></a></h2>
<p>主流的设计模式共有 23 种，建议大家按照以下四个阶段来学习：</p>
<ol>
<li>基础学习</li>
<li>编码实现</li>
<li>项目实战</li>
<li>备战面试</li>
</ol>
<p>其中第一个阶段和第二个阶段 <strong>可以同时进行</strong> ，即对于每个设计模式的学习都是：先了解、再编码实现。</p>
<h3 id="一、基础学习" tabindex="-1"><a class="header-anchor" href="#一、基础学习"><span>一、基础学习</span></a></h3>
<p>本阶段的目标：依次了解每一种设计模式的应用场景、特点、UML 类图，能够对设计模式有个基础的印象。</p>
<h4 id="学习顺序" tabindex="-1"><a class="header-anchor" href="#学习顺序"><span>学习顺序</span></a></h4>
<p>根据使用频率、难易度、面试考察率等综合排序，仅供参考，并不绝对！</p>
<p>优先：</p>
<ol>
<li>单例模式</li>
<li>工厂方法模式</li>
<li>迭代器模式</li>
<li>策略模式</li>
<li>建造者模式</li>
<li>模板方法模式</li>
<li>代理模式</li>
<li>责任链模式</li>
<li>抽象工厂模式</li>
<li>适配器模式</li>
<li>观察者模式</li>
<li>外观模式</li>
</ol>
<p>一般：</p>
<ol>
<li>桥接模式</li>
<li>组合模式</li>
<li>装饰器模式</li>
<li>状态模式</li>
<li>访问者模式</li>
<li>中介者模式</li>
<li>命令模式</li>
<li>备忘录模式</li>
</ol>
<p>低优先：</p>
<ol>
<li>原型模式</li>
<li>享元模式</li>
<li>解释器模式</li>
</ol>
<h4 id="推荐资源" tabindex="-1"><a class="header-anchor" href="#推荐资源"><span>推荐资源</span></a></h4>
<blockquote>
<p>以下资源看 1 - 2 个就足够入门了</p>
</blockquote>
<ul>
<li>书籍
<ul>
<li>《图解设计模式》：<a href="https://www.alihttps://www.zzxxccvv.xyzndrive.com/s/jcQugLGNs1V" target="_blank" rel="noopener noreferrer">https://www.alihttps://www.zzxxccvv.xyzndrive.com/s/jcQugLGNs1V<ExternalLinkIcon/></a> 提取码: 5i9c（强烈推荐，用 Java 语言实现，图多、有示例代码、有习题和答案，很不错）</li>
<li>《大话设计模式》：<a href="https://www.alihttps://www.zzxxccvv.xyzndrive.com/s/73jZWnfAtaA" target="_blank" rel="noopener noreferrer">https://www.alihttps://www.zzxxccvv.xyzndrive.com/s/73jZWnfAtaA<ExternalLinkIcon/></a> 提取码: 9gc7（比较有趣）</li>
<li>《Head First 设计模式》：<a href="https://www.alihttps://www.zzxxccvv.xyzndrive.com/s/GnuQcruh7Us" target="_blank" rel="noopener noreferrer">https://www.alihttps://www.zzxxccvv.xyzndrive.com/s/GnuQcruh7Us<ExternalLinkIcon/></a> 提取码: 9gc7</li>
<li>《设计模式：可复用面向对象软件的基础》：<a href="https://www.alihttps://www.zzxxccvv.xyzndrive.com/s/T9ECaPtxzg4" target="_blank" rel="noopener noreferrer">https://www.alihttps://www.zzxxccvv.xyzndrive.com/s/T9ECaPtxzg4<ExternalLinkIcon/></a> 提取码: 9gc7（大黑书，难度较大，有能力和时间才去读）</li>
<li>《JavaScript 设计模式与开发实践》：<a href="https://www.alihttps://www.zzxxccvv.xyzndrive.com/s/tzcZCU8bqnR" target="_blank" rel="noopener noreferrer">https://www.alihttps://www.zzxxccvv.xyzndrive.com/s/tzcZCU8bqnR<ExternalLinkIcon/></a> 提取码: 9gc7（适合前端同学阅读）</li>
<li>《Python 设计模式》：<a href="https://www.alihttps://www.zzxxccvv.xyzndrive.com/s/3RNoX31XqUy" target="_blank" rel="noopener noreferrer">https://www.alihttps://www.zzxxccvv.xyzndrive.com/s/3RNoX31XqUy<ExternalLinkIcon/></a> 提取码: 9gc7</li>
</ul>
</li>
<li>视频
<ul>
<li>尚硅谷图解 Java 设计模式：<a href="https://www.bilibili.com/video/BV1G4411c7N4" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1G4411c7N4<ExternalLinkIcon/></a> （讲的很棒也很全面，也和一些主流框架相结合，系统学习 Java 的同学可以看）</li>
<li>五分钟学设计模式：<a href="https://www.bilibili.com/video/BV1af4y1y7sS" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1af4y1y7sS<ExternalLinkIcon/></a> （小短快科普，比较轻松）</li>
<li>黑马程序员Java设计模式详解：<a href="https://www.bilibili.com/video/BV1Np4y1z7BU" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1Np4y1z7BU<ExternalLinkIcon/></a> （很完整，最后讲解了 Spring 框架的部分设计）</li>
<li>用一个项目讲解 23 种设计模式：<a href="https://www.bilibili.com/video/BV19g411N7yx" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV19g411N7yx<ExternalLinkIcon/></a> （和项目结合，思路不错，但其中有一些直播翻车，可部分跳过）</li>
</ul>
</li>
<li>文档
<ul>
<li>菜鸟教程：<a href="https://www.runoob.com/design-pattern/design-pattern-tutorial.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/design-pattern/design-pattern-tutorial.html<ExternalLinkIcon/></a> （还是比较推荐的，学过设计模式后如果忘记了，可以查看这个文档快速补回来）</li>
<li>C++ 图说设计模式：<a href="https://design-patterns.readthedocs.io/zh_CN/latest/" target="_blank" rel="noopener noreferrer">https://design-patterns.readthedocs.io/zh_CN/latest/<ExternalLinkIcon/></a></li>
<li>Go 语言设计模式系列博客：<a href="https://lailin.xyz/post/singleton.html" target="_blank" rel="noopener noreferrer">https://lailin.xyz/post/singleton.html<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="二、编码实现" tabindex="-1"><a class="header-anchor" href="#二、编码实现"><span>二、编码实现</span></a></h3>
<p>本阶段的目标：依次编码实现每个设计模式，用任何支持面向对象的编程语言都可以，最好能够独立（不借助任何资料）从 0 写出每个设计模式的代码。</p>
<h4 id="资源" tabindex="-1"><a class="header-anchor" href="#资源"><span>资源</span></a></h4>
<p>一些源码示例，仅供参考，更多的内容可以直接在 GitHub 搜索关键词 <code v-pre>Design Pattern</code> 或 <code v-pre>设计模式</code> ：</p>
<ul>
<li>各语言设计模式示例代码：<a href="https://github.com/wx-chevalier/design-pattern-examples" target="_blank" rel="noopener noreferrer">https://github.com/wx-chevalier/design-pattern-examples<ExternalLinkIcon/></a></li>
<li>Java 23 种设计模式全归纳：<a href="https://github.com/youlookwhat/DesignPattern" target="_blank" rel="noopener noreferrer">https://github.com/youlookwhat/DesignPattern<ExternalLinkIcon/></a> （教程 + 源码）</li>
<li>C++ 设计模式源码：<a href="https://github.com/liu-jianhao/Cpp-Design-Patterns" target="_blank" rel="noopener noreferrer">https://github.com/liu-jianhao/Cpp-Design-Patterns<ExternalLinkIcon/></a> （设计模式介绍 + 源码）</li>
<li>JavaScript 示例代码：
<ul>
<li><a href="https://github.com/wchaowu/javascript" target="_blank" rel="noopener noreferrer">https://github.com/wchaowu/javascript<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/zy445566/design-pattern-in-javascript" target="_blank" rel="noopener noreferrer">https://github.com/zy445566/design-pattern-in-javascript<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>Python 示例代码：
<ul>
<li><a href="https://github.com/wklken/py-patterns" target="_blank" rel="noopener noreferrer">https://github.com/wklken/py-patterns<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>Go 示例代码
<ul>
<li><a href="https://github.com/mohuishou/go-design-pattern" target="_blank" rel="noopener noreferrer">https://github.com/mohuishou/go-design-pattern<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="三、项目实战" tabindex="-1"><a class="header-anchor" href="#三、项目实战"><span>三、项目实战</span></a></h3>
<p>本阶段的目标：通过做项目或阅读项目源码来进一步强化每个设计模式的实际应用。做到能根据某个场景主动选出合适的设计模式来优化代码、灵活运用，并且能够通过文件命名、项目目录结构等途径来快速判断出某个框架是否使用了设计模式。</p>
<p>可以先通过一个视频了解设计模式的实际应用：</p>
<ul>
<li>实际工作中，如何运用 Java 设计模式：<a href="https://www.bilibili.com/video/BV1tK4y1s7Uo" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1tK4y1s7Uo<ExternalLinkIcon/></a></li>
</ul>
<p>列举一些设计模式在框架源码中的应用：</p>
<blockquote>
<p>部分内容源于网络</p>
</blockquote>
<ul>
<li>Spring
<ul>
<li>工厂模式：通过 BeanFactory 和 ApplicationContext 来创建对象</li>
<li>单例模式：Spring Bean 默认为单例模式</li>
<li>策略模式：例如 Resource 的实现类，针对不同的资源文件，实现了不同方式的资源获取策略</li>
<li>代理模式：Spring 的 AOP 功能用到了 JDK 的动态代理和 CGLIB 字节码生成技术</li>
<li>模板方法：可以将相同部分的代码放在父类中，而将不同的代码放入不同的子类中，用来解决代码重复的问题。比如RestTemplate、JmsTemplate、JpaTemplate</li>
<li>适配器模式：Spring AOP 的增强或通知（Advice）使用到了适配器模式</li>
<li>观察者模式：Spring 事件驱动模型</li>
<li>桥接模式：可以根据客户的需求能够动态切换不同的数据源。比如我们的项目需要连接多个数据库，客户在每次访问中根据需要会去访问不同的数据库</li>
</ul>
</li>
<li>Spring MVC
<ul>
<li>组合模式：WebMvcConfigurerComposite，树枝和树叶都实现了相同的抽象类或接口 WebMvcConfigurer</li>
<li>责任链模式：DispatcherServlet 依次拦截和处理请求</li>
<li>适配器模式：HandlerAdapter 处理器适配</li>
</ul>
</li>
<li>MyBatis（参考：<a href="https://blog.csdn.net/aha_jasper/article/details/108701785" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/aha_jasper/article/details/108701785<ExternalLinkIcon/></a> ）
<ul>
<li>Builder + Factory 模式：创建 SqlSession 工厂和 SqlSession</li>
<li>模板方法模式：BaseExecutor 定义执行器基本流程</li>
<li>解释器模式：SqlNode 动态解析 SQL</li>
<li>单例模式：ErrorContext 线程唯一</li>
<li>装饰器模式：Cache 的实现用组合而非继承实现更灵活地缓存方式结合</li>
<li>迭代器模式：PropertyTokenizer 利用迭代器模式实现属性解析器</li>
<li>适配器模式：Log 适配不同的日志框架</li>
</ul>
</li>
<li>Google Guava（参考：<a href="https://blog.csdn.net/aha_jasper/article/details/108695561" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/aha_jasper/article/details/108695561<ExternalLinkIcon/></a> ）
<ul>
<li>Builder 模式：更方便地构建内存缓存</li>
<li>Wrapper 模式（代理模式、装饰器、适配器模式）：轻松实现对类的扩展</li>
<li>Immutable 模式：不可变集合实现，如 ImmutableList、ImmutableSet、ImmutableMap 等</li>
</ul>
</li>
<li>更多可以自行学习：
<ul>
<li>Netty</li>
<li>SpringBoot</li>
<li>Tomcat</li>
<li>Dubbo</li>
<li>Spring Cloud</li>
</ul>
</li>
</ul>
<h3 id="资源-1" tabindex="-1"><a class="header-anchor" href="#资源-1"><span>资源</span></a></h3>
<ul>
<li>《设计模式之美》专栏：<a href="https://blog.csdn.net/aha_jasper/article/details/105695163" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/aha_jasper/article/details/105695163<ExternalLinkIcon/></a> （原作者 Google 王争设计模式之美：<a href="https://time.geekbang.org/column/intro/250" target="_blank" rel="noopener noreferrer">https://time.geekbang.org/column/intro/250<ExternalLinkIcon/></a> ，是极客时间的付费课，里面的内容，尤其是开源实战和项目实战的部分讲的很好！有收获的朋友还是请支持正版哦）</li>
<li>Spring 相关框架源码分析视频：<a href="https://www.bilibili.com/video/BV1kF411e7WR" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1kF411e7WR<ExternalLinkIcon/></a> （结合设计模式，包括 Spring、SpringMVC、SpringBoot、Tomcat 等）</li>
</ul>
<h3 id="四、备战面试" tabindex="-1"><a class="header-anchor" href="#四、备战面试"><span>四、备战面试</span></a></h3>
<p>面试时对设计模式的考察主要有 4 种形式：</p>
<ol>
<li>直接问你某个设计模式的作用和大致的原理，考察你对设计模式的了解程度</li>
<li>让你手写某个设计模式的代码，考察你对设计模式的熟悉程度和编码能力</li>
<li>给你一个实际的业务场景，让你去设计系统，考察你对设计模式的理解应用能力和逻辑思维</li>
<li>问你某个框架（轮子）的核心设计和源码细节，考察你对设计模式的理解应用能力</li>
</ol>
<h4 id="经典面试题" tabindex="-1"><a class="header-anchor" href="#经典面试题"><span>经典面试题</span></a></h4>
<ol>
<li>理论：简单介绍一下软件开发原则？</li>
<li>理论：设计模式如何分类？</li>
<li>你用过哪些设计模式？举例说明设计模式在你的项目或是某个框架源码中的应用。</li>
<li>说出某个设计模式的优缺点？什么时候使用它？</li>
<li>单例模式有哪些实现方式？分别有哪些优缺点？请手写其中一种</li>
<li>原型模式和单例模式的区别是什么？</li>
<li>简单工厂、工厂方法和抽象工厂三者有什么区别？</li>
<li>介绍一下代理模式，说一下静态代理和动态代理（比如 Spring AOP 就用到了）的区别？</li>
</ol>
<h4 id="资源-2" tabindex="-1"><a class="header-anchor" href="#资源-2"><span>资源</span></a></h4>
<ul>
<li>设计模式面试题汇总：<a href="https://pan.baidu.com/s/1tjIGc7pnHjgiFPo0fhcKXw" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1tjIGc7pnHjgiFPo0fhcKXw<ExternalLinkIcon/></a> 提取码: wuan（朋友 JavaGuide 整理，很全面 👍🏻）</li>
<li>面试官最爱问的13道&quot;设计模式&quot;题（视频）：<a href="https://www.bilibili.com/video/BV1fR4y1N74H" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1fR4y1N74H<ExternalLinkIcon/></a></li>
</ul>
<p>加油小伙伴们！</p>
</div></template>


