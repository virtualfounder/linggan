<template><div><h1 id="linux-学习路线-by-灵感虚拟发现现实" tabindex="-1"><a class="header-anchor" href="#linux-学习路线-by-灵感虚拟发现现实"><span>Linux 学习路线 by 灵感虚拟发现现实</span></a></h1>
<blockquote>
<p>本文作者：<a href="https://www.zzxxccvv.xyz" target="_blank" rel="noopener noreferrer">灵感虚拟发现现实<ExternalLinkIcon/></a></p>
<p>本站地址：<a href="https://www.zzxxccvv.xyz" target="_blank" rel="noopener noreferrer">https://www.zzxxccvv.xyz<ExternalLinkIcon/></a></p>
</blockquote>
<p>💂 + 💻 = 👴🏽</p>
<p>建议先观看视频入门：<a href="https://www.bilibili.com/video/BV1ev411G7VE/" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1ev411G7VE/<ExternalLinkIcon/></a></p>
<h2 id="为什么学-linux" tabindex="-1"><a class="header-anchor" href="#为什么学-linux"><span>为什么学 Linux？</span></a></h2>
<p>相比于 Windows，Linux 免费、开源、安全、灵活、稳定、便于开发，所以更受企业青睐，甚至 <strong>90% 以上</strong> 的企业应用都是用 Linux 服务器部署的。</p>
<p>无论是前端、后端、算法、测试、运维等计算机相关岗位的同学，都建议学习下 Linux，大有裨益。</p>
<h2 id="学习境界" tabindex="-1"><a class="header-anchor" href="#学习境界"><span>学习境界</span></a></h2>
<p>首先，Linux 入门很简单，但想学的透彻难上加难！</p>
<p>因此，在学习之前要明确目标。</p>
<p>可以 Linux 的学习分为几种境界：</p>
<ol>
<li>明劲，就是了解 Linux 的基本概念，会敲常用命令来应对工作。对于大多数想从事开发和运维岗位的同学，学到这就足够找到工作了。</li>
<li>暗劲，又分为两种境界，能理解 Linux 尤其是其内核的设计思想，为小圆满；能将其思想应用到系统的架构设计中，为大圆满。暗劲境界的高手，冲击大厂、做架构师、从事底层开发，都不成问题。</li>
<li>化劲，可谓出神入化，不仅熟知 Linux 的使用、思想和细节，更能推陈出新，自主创造新的系统。</li>
</ol>
<p>当然，一般情况下，会用就够了，想进大厂最好也学习一些内核的设计思想。找到工作后，是否要深入学习完全取决于你自己。</p>
<h2 id="大纲" tabindex="-1"><a class="header-anchor" href="#大纲"><span>大纲</span></a></h2>
<figure><img src="https://qiniuhttps://www.zzxxccvv.xyzn.code-nav.cn/img/鱼皮 - Linux 学习路线.png#id=b9adW&amp;originHeight=20254&amp;originWidth=2163&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="路线" tabindex="-1"><a class="header-anchor" href="#路线"><span>路线</span></a></h2>
<h3 id="linux-基础知识" tabindex="-1"><a class="header-anchor" href="#linux-基础知识"><span>Linux 基础知识</span></a></h3>
<ul>
<li>发展历史</li>
<li>⭐ 特点和优势</li>
<li>应用场景</li>
<li>⭐ 常见 Linux 系统版本（推荐 CentOS 7+）
<ul>
<li>⭐ CentOS</li>
<li>⭐ Ubuntu</li>
<li>Debian</li>
<li>Fedora</li>
</ul>
</li>
<li>何为开源？</li>
</ul>
<h3 id="linux-环境" tabindex="-1"><a class="header-anchor" href="#linux-环境"><span>Linux 环境</span></a></h3>
<ul>
<li>搭建方式
<ul>
<li>⭐ 虚拟机</li>
<li>⭐ 云服务器</li>
<li>在线工具</li>
<li>WSL</li>
<li>Docker 容器</li>
</ul>
</li>
<li>远程连接
<ul>
<li>⭐ SSH</li>
<li>连接工具
<ul>
<li>⭐ XShell</li>
<li>⭐ MobaXterm</li>
<li>SecureCRT</li>
<li>Putty</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="linux-常用命令" tabindex="-1"><a class="header-anchor" href="#linux-常用命令"><span>Linux 常用命令</span></a></h3>
<blockquote>
<p>此处只列举命令名称，命令的具体用法可直接在手册中（<a href="https://www.linuxcool.com/%EF%BC%89%E6%9F%A5%E8%AF%A2" target="_blank" rel="noopener noreferrer">https://www.linuxcool.com/）查询<ExternalLinkIcon/></a></p>
</blockquote>
<h4 id="系统信息" tabindex="-1"><a class="header-anchor" href="#系统信息"><span>系统信息</span></a></h4>
<ul>
<li>uname 查看系统信息</li>
<li>hostname 查看主机名</li>
<li>cat /proc/cpuinfo 查看 CPU 信息</li>
<li>lsmod 查看已加载的系统模块</li>
<li>top 查看系统使用情况</li>
<li>df 查看磁盘使用情况</li>
<li>fdisk 查看磁盘分区</li>
<li>du 查看目录使用情况</li>
<li>iostat 查看 I / O 使用情况</li>
<li>free 显示系统内存情况</li>
<li>env 查看环境变量</li>
<li>uptime 查看系统运行时间、用户数、负载</li>
</ul>
<h4 id="系统操作" tabindex="-1"><a class="header-anchor" href="#系统操作"><span>系统操作</span></a></h4>
<ul>
<li>shutdown 关机</li>
<li>reboot 重启</li>
<li>mount 挂载设备</li>
<li>umount 卸载设备</li>
</ul>
<h4 id="用户相关" tabindex="-1"><a class="header-anchor" href="#用户相关"><span>用户相关</span></a></h4>
<ul>
<li>su 切换用户</li>
<li>sudo 以管理员身份执行</li>
<li>who 查看当前用户名</li>
<li>ssh 远程连接</li>
<li>logout 注销</li>
<li>useradd 创建用户</li>
<li>userdel 删除用户</li>
<li>usermod 修改用户</li>
<li>groupadd 创建用户组</li>
<li>groupdel 删除用户组</li>
<li>groupmod 修改用户组</li>
<li>passwd 修改密码</li>
<li>last 显示用户或终端的登录情况</li>
</ul>
<h4 id="文件相关" tabindex="-1"><a class="header-anchor" href="#文件相关"><span>文件相关</span></a></h4>
<ul>
<li>cd 切换目录</li>
<li>ls 查看目录列表</li>
<li>tree 打印目录树</li>
<li>mkdir 创建目录</li>
<li>rm 删除目录</li>
<li>touch 新建文件</li>
<li>cp 复制文件</li>
<li>mv 移动文件</li>
<li>ln 创建文件链接</li>
<li>find 搜索文件</li>
<li>locate 定位文件</li>
<li>whereis 查看可执行文件路径</li>
<li>which 在 PATH 指定的路径中，搜索某系统命令的位置</li>
<li>chmod 设置目录权限</li>
<li>cat / more / less 查看文件</li>
<li>tac 倒序查看文件</li>
<li>head / tail 查看文件开头 / 结尾</li>
<li>paste 合并文件</li>
<li>zip / tar / gzip 压缩文件</li>
<li>unzip / tar / gunzip 解压文件</li>
<li>grep / sed / awk 文本处理</li>
<li>vim 文本编辑</li>
</ul>
<h4 id="程序相关" tabindex="-1"><a class="header-anchor" href="#程序相关"><span>程序相关</span></a></h4>
<ul>
<li>crontab 计划任务</li>
<li>nohup 后台运行程序</li>
<li>jobs 查看系统任务</li>
<li>ps 查看进程</li>
<li>kill 杀死进程</li>
<li>rpm / <a href="https://www.zzxxccvv.xyzm" target="_blank" rel="noopener noreferrer">https://www.zzxxccvv.xyzm<ExternalLinkIcon/></a> / apt / apt-get / dpkg 软件包管理</li>
<li>service / systemctl 服务管理</li>
</ul>
<h4 id="网络相关" tabindex="-1"><a class="header-anchor" href="#网络相关"><span>网络相关</span></a></h4>
<ul>
<li>ifconfig 查看网络属性</li>
<li>netstat 查看网络状态</li>
<li>iptables 查看 iptables 规则</li>
</ul>
<h4 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h4>
<ul>
<li>date 显示系统时间</li>
<li>cal 显示日历</li>
<li>history 显示与操作历史</li>
<li>help 帮助</li>
<li>alias 别名</li>
</ul>
<h3 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理"><span>用户管理</span></a></h3>
<ul>
<li>用户</li>
<li>用户组</li>
<li>ACL 权限管理</li>
<li>用户切换</li>
<li>管理员</li>
</ul>
<h3 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理"><span>文件管理</span></a></h3>
<ul>
<li>文件操作
<ul>
<li>创建</li>
<li>修改</li>
<li>复制</li>
<li>移动</li>
<li>删除</li>
</ul>
</li>
<li>文件浏览</li>
<li>文件搜索</li>
<li>文件权限</li>
<li>软硬链接</li>
<li>压缩 / 解压</li>
</ul>
<h3 id="文本操作" tabindex="-1"><a class="header-anchor" href="#文本操作"><span>文本操作</span></a></h3>
<ul>
<li>正则表达式</li>
<li>grep</li>
<li>sed</li>
<li>awk</li>
</ul>
<h3 id="vim-编辑器" tabindex="-1"><a class="header-anchor" href="#vim-编辑器"><span>VIM 编辑器</span></a></h3>
<ul>
<li>基本操作</li>
<li>模式</li>
<li>快捷键</li>
<li>VIM 定制</li>
<li>插件增强</li>
</ul>
<p>送张 VIM 键盘图：</p>
<figure><img src="https://qiniuhttps://www.zzxxccvv.xyzn.code-nav.cn/img/vi-vim-cheat-sheet-sch.gif#id=uRBZ7&amp;originHeight=724&amp;originWidth=1024&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="磁盘管理" tabindex="-1"><a class="header-anchor" href="#磁盘管理"><span>磁盘管理</span></a></h3>
<ul>
<li>使用情况查询</li>
<li>磁盘分区</li>
<li>挂载</li>
</ul>
<h3 id="驱动管理" tabindex="-1"><a class="header-anchor" href="#驱动管理"><span>驱动管理</span></a></h3>
<ul>
<li>驱动加载</li>
<li>驱动更新</li>
<li>网卡</li>
<li>显卡</li>
</ul>
<h3 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理"><span>进程管理</span></a></h3>
<ul>
<li>启动进程</li>
<li>杀死进程</li>
<li>查看进程</li>
<li>前台 / 后台任务</li>
<li>进程监控</li>
</ul>
<h3 id="计划任务" tabindex="-1"><a class="header-anchor" href="#计划任务"><span>计划任务</span></a></h3>
<ul>
<li>crond 服务</li>
<li>crontab 命令</li>
</ul>
<h3 id="网络管理" tabindex="-1"><a class="header-anchor" href="#网络管理"><span>网络管理</span></a></h3>
<ul>
<li>IP</li>
<li>端口</li>
<li>主机名</li>
<li>hosts</li>
<li>网络配置</li>
<li>网络状态</li>
<li>网络监控</li>
</ul>
<h3 id="系统管理" tabindex="-1"><a class="header-anchor" href="#系统管理"><span>系统管理</span></a></h3>
<ul>
<li>系统设置
<ul>
<li>日期时间</li>
<li>语言</li>
<li>字符集</li>
</ul>
</li>
<li>系统服务</li>
<li>环境变量</li>
<li>日志</li>
<li>系统关机 / 重启</li>
<li>数据备份与恢复</li>
</ul>
<h3 id="服务管理" tabindex="-1"><a class="header-anchor" href="#服务管理"><span>服务管理</span></a></h3>
<ul>
<li>服务查看</li>
<li>启动服务</li>
<li>禁用服务</li>
<li>删除服务</li>
<li>开机自启</li>
</ul>
<h3 id="软件管理" tabindex="-1"><a class="header-anchor" href="#软件管理"><span>软件管理</span></a></h3>
<ul>
<li>软件包管理器
<ul>
<li>⭐ rpm</li>
<li>⭐ <a href="https://www.zzxxccvv.xyzm" target="_blank" rel="noopener noreferrer">https://www.zzxxccvv.xyzm<ExternalLinkIcon/></a></li>
<li>apt</li>
<li>apt-get</li>
<li>dpkg</li>
</ul>
</li>
<li>软件安装</li>
<li>软件更新</li>
<li>软件卸载</li>
<li>源码安装</li>
</ul>
<h3 id="常用软件-服务搭建" tabindex="-1"><a class="header-anchor" href="#常用软件-服务搭建"><span>常用软件 / 服务搭建</span></a></h3>
<ul>
<li>HTTP</li>
<li>Mail</li>
<li>NFS</li>
<li>DNS</li>
<li>FTP</li>
<li>mysql</li>
<li>LVS + Keepalived</li>
<li>Apache</li>
<li>Nginx</li>
<li>Redis</li>
<li>日志服务</li>
</ul>
<h3 id="shell-脚本编程" tabindex="-1"><a class="header-anchor" href="#shell-脚本编程"><span>Shell 脚本编程</span></a></h3>
<ul>
<li>默认变量</li>
<li>运算符</li>
<li>条件</li>
<li>循环</li>
<li>执行</li>
<li>函数
<ul>
<li>系统函数</li>
<li>自定义函数</li>
</ul>
</li>
<li>规范</li>
<li>调试方法</li>
<li>管道</li>
<li>I/O 重定向</li>
</ul>
<h3 id="linux-启动过程" tabindex="-1"><a class="header-anchor" href="#linux-启动过程"><span>Linux 启动过程</span></a></h3>
<ul>
<li>BIOS 启动引导</li>
<li>引导加载程序</li>
<li>内核加载</li>
<li>系统初始化（init）</li>
<li>运行级别</li>
<li>启动内核</li>
<li>执行初始化脚本</li>
<li>用户登录</li>
</ul>
<h3 id="linux-内核" tabindex="-1"><a class="header-anchor" href="#linux-内核"><span>Linux 内核</span></a></h3>
<ul>
<li>内核的组成</li>
<li>目录结构</li>
<li>版本</li>
<li>模块</li>
<li>编译</li>
<li>裁剪</li>
</ul>
<p>具体路线图参考：</p>
<figure><img src="https://qiniuhttps://www.zzxxccvv.xyzn.code-nav.cn/img/内核知识体系.jpg#id=HMWtl&amp;originHeight=2443&amp;originWidth=1869&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="第三方工具" tabindex="-1"><a class="header-anchor" href="#第三方工具"><span>第三方工具</span></a></h3>
<ul>
<li>Ansible</li>
<li>Webmin</li>
<li>宝塔 Linux</li>
</ul>
<h2 id="岗位" tabindex="-1"><a class="header-anchor" href="#岗位"><span>岗位</span></a></h2>
<ul>
<li>后端开发（Java / Go / C++）</li>
<li>底层开发（C / C++）</li>
<li>运维开发</li>
<li>大数据</li>
<li>云计算</li>
<li>自动化运维</li>
<li>嵌入式开发</li>
<li>网络工程师</li>
</ul>
<h2 id="学习建议" tabindex="-1"><a class="header-anchor" href="#学习建议"><span>学习建议</span></a></h2>
<p>多动手实践，建议自己购买一台云服务器，并且在本地搭建 Linux 虚拟机环境。</p>
<p>一定要自己从 0 开始手敲命令安装软件、部署服务，熟悉整个项目的上线流程。</p>
<p>每个命令至少要跟着敲一遍，了解它们的作用，并通过自然地练习，熟悉常用的 Linux 命令。</p>
<p>记不住没关系，用文档查就行了。</p>
<p>先会用，再理解。</p>
<p>时间不多的话，可以通过面试题来了解一些 Linux 设计思想，而不是直接去深入学习内核，虽说学会了的确大有裨益，但性价比不高。</p>
<h2 id="资源" tabindex="-1"><a class="header-anchor" href="#资源"><span>资源</span></a></h2>
<ul>
<li>视频
<ul>
<li>⭐ 2021 韩顺平 一周学会Linux：<a href="https://www.bilibili.com/video/BV1Sv411r7vd%EF%BC%88%E5%9F%BA%E4%BA%8E" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1Sv411r7vd（基于<ExternalLinkIcon/></a> CentOS 7.6 版本较新，视频长度刚刚好，也比较完整）</li>
<li>【千锋】Linux 云计算基础视频教程 650 集入门：<a href="https://www.bilibili.com/video/BV1pz4y1D73n%EF%BC%88%E5%BE%88%E5%85%A8%E9%9D%A2%EF%BC%8C%E9%80%82%E5%90%88%E6%97%B6%E9%97%B4%E8%B6%B3%E5%A4%9F%E3%80%81%E6%83%B3%E8%AE%A4%E7%9C%9F%E5%AD%A6%E7%9A%84%E5%90%8C%E5%AD%A6%EF%BC%89" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1pz4y1D73n（很全面，适合时间足够、想认真学的同学）<ExternalLinkIcon/></a></li>
<li>【狂神说Java】Linux 教程 - 阿里云真实环境学习：<a href="https://www.bilibili.com/video/BV187411y7hF%EF%BC%88%E7%AE%97%E6%98%AF%E4%B8%AA%E5%B0%8F%E7%9A%84%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B%E5%90%A7%EF%BC%8C%E6%97%B6%E9%97%B4%E8%B6%B3%E5%A4%9F%E7%9A%84%E8%AF%9D%E8%BF%98%E6%98%AF%E6%8E%A8%E8%8D%90%E7%9C%8B%E6%9B%B4%E5%AE%8C%E6%95%B4%E7%9A%84%EF%BC%89" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV187411y7hF（算是个小的入门教程吧，时间足够的话还是推荐看更完整的）<ExternalLinkIcon/></a></li>
<li>细说Linux - 从入门到精通：<a href="https://study.163.com/course/courseMain.htm?courseId=983014%EF%BC%88%E6%84%9F%E8%A7%89%E6%9C%89%E7%82%B9%E5%95%B0%E5%97%A6%EF%BC%8C%E4%BD%9C%E4%B8%BA%E5%A4%87%E7%94%A8%E5%90%A7%EF%BC%89" target="_blank" rel="noopener noreferrer">https://study.163.com/course/courseMain.htm?courseId=983014（感觉有点啰嗦，作为备用吧）<ExternalLinkIcon/></a></li>
<li>玩转Vim 从放弃到爱不释手：<a href="https://www.imooc.com/learn/1129%EF%BC%88%E5%A5%BD%E8%AF%84%E5%BE%88%E5%A4%9A%EF%BC%89" target="_blank" rel="noopener noreferrer">https://www.imooc.com/learn/1129（好评很多）<ExternalLinkIcon/></a></li>
<li>阿里云 Linux 运维学习路线：<a href="https://edu.alihttps://www.zzxxccvv.xyzn.com/roadmap/linux" target="_blank" rel="noopener noreferrer">https://edu.alihttps://www.zzxxccvv.xyzn.com/roadmap/linux<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>书籍
<ul>
<li>《鸟哥的 Linux 私房菜 —— 基础篇》：<a href="http://cn.linux.vbird.org/linux_basic/linux_basic.php%EF%BC%88%E7%BB%8F%E5%85%B8%EF%BC%89" target="_blank" rel="noopener noreferrer">http://cn.linux.vbird.org/linux_basic/linux_basic.php（经典）<ExternalLinkIcon/></a></li>
<li>《深入理解 LINUX 内核》：<a href="https://book.douban.com/subject/1767120/" target="_blank" rel="noopener noreferrer">https://book.douban.com/subject/1767120/<ExternalLinkIcon/></a></li>
<li>《深入Linux内核架构》：<a href="https://book.douban.com/subject/4843567/" target="_blank" rel="noopener noreferrer">https://book.douban.com/subject/4843567/<ExternalLinkIcon/></a></li>
<li>《Linux内核完全剖析》：<a href="https://book.douban.com/subject/3229243/" target="_blank" rel="noopener noreferrer">https://book.douban.com/subject/3229243/<ExternalLinkIcon/></a></li>
<li>《Linux内核设计与实现(原书第3版)》：<a href="https://book.douban.com/subject/6097773/" target="_blank" rel="noopener noreferrer">https://book.douban.com/subject/6097773/<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>文档
<ul>
<li>Linux  教程（菜鸟教程）：<a href="https://www.runoob.com/linux/linux-tutorial.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/linux/linux-tutorial.html<ExternalLinkIcon/></a></li>
<li>Linux 教程（W3CSchool）：<a href="https://www.w3cschool.cn/linux/" target="_blank" rel="noopener noreferrer">https://www.w3cschool.cn/linux/<ExternalLinkIcon/></a></li>
<li>Linux 工具快速教程：<a href="https://linuxtools-rst.readthedocs.io" target="_blank" rel="noopener noreferrer">https://linuxtools-rst.readthedocs.io<ExternalLinkIcon/></a>（基础、工具进阶、工具参考）</li>
</ul>
</li>
<li>合集
<ul>
<li>Linux内核学习资料：<a href="https://github.com/0voice/linux_kernel_wiki" target="_blank" rel="noopener noreferrer">https://github.com/0voice/linux_kernel_wiki<ExternalLinkIcon/></a></li>
<li>GitHub Linux 专区：<a href="https://github.com/topics/linux%EF%BC%88%E5%BE%88%E5%A4%9A%E5%A5%BD%E9%A1%B9%E7%9B%AE%EF%BC%89" target="_blank" rel="noopener noreferrer">https://github.com/topics/linux（很多好项目）<ExternalLinkIcon/></a></li>
<li>GitHub Linux 合集：<a href="https://github.com/inputsh/awesome-linux%EF%BC%88Linux" target="_blank" rel="noopener noreferrer">https://github.com/inputsh/awesome-linux（Linux<ExternalLinkIcon/></a> 系列技术）</li>
<li>StackOverflow：<a href="https://stackoverflow.com/questions/tagged/linux%EF%BC%88%E8%A7%A3%E5%86%B3%E9%97%AE%E9%A2%98%E5%BF%85%E5%A4%87%EF%BC%89" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/tagged/linux（解决问题必备）<ExternalLinkIcon/></a></li>
<li>掘金 Linux 专区：<a href="https://juejin.cn/tag/Linux%EF%BC%88%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0%EF%BC%89" target="_blank" rel="noopener noreferrer">https://juejin.cn/tag/Linux（技术文章）<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>实战
<ul>
<li>⭐ 蓝桥云课 Linux 基础入门：<a href="https://www.lanqiao.cn/courses/1%EF%BC%88%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90%EF%BC%89" target="_blank" rel="noopener noreferrer">https://www.lanqiao.cn/courses/1（强烈推荐）<ExternalLinkIcon/></a></li>
<li>腾讯云动手实验室：<a href="https://cloud.tencent.com/developer/labs" target="_blank" rel="noopener noreferrer">https://cloud.tencent.com/developer/labs<ExternalLinkIcon/></a></li>
<li>阿里云体验实验室：<a href="https://developer.alihttps://www.zzxxccvv.xyzn.com/adc/labs/" target="_blank" rel="noopener noreferrer">https://developer.alihttps://www.zzxxccvv.xyzn.com/adc/labs/<ExternalLinkIcon/></a></li>
<li>阿里云知行实验室：<a href="https://start.alihttps://www.zzxxccvv.xyzn.com/" target="_blank" rel="noopener noreferrer">https://start.alihttps://www.zzxxccvv.xyzn.com/<ExternalLinkIcon/></a></li>
<li>华为云沙箱实验室：<a href="https://lab.huaweicloud.com/" target="_blank" rel="noopener noreferrer">https://lab.huaweicloud.com/<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>社区（国内倒的差不多了）
<ul>
<li>Linux 中国：<a href="https://linux.cn/" target="_blank" rel="noopener noreferrer">https://linux.cn/<ExternalLinkIcon/></a></li>
<li>开源中国：<a href="https://www.oschina.net/%EF%BC%88%E7%BB%BC%E5%90%88%E7%9A%84%E5%BC%80%E6%BA%90%E7%A4%BE%E5%8C%BA%EF%BC%89" target="_blank" rel="noopener noreferrer">https://www.oschina.net/（综合的开源社区）<ExternalLinkIcon/></a></li>
<li>红帽官网：<a href="https://www.redhat.com/zh" target="_blank" rel="noopener noreferrer">https://www.redhat.com/zh<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>工具
<ul>
<li>DistroTest 在线操作系统测试：<a href="https://distrotest.net" target="_blank" rel="noopener noreferrer">https://distrotest.net<ExternalLinkIcon/></a></li>
<li>⭐ Linux 命令搜索：<a href="https://wangchujiang.com/linux-command" target="_blank" rel="noopener noreferrer">https://wangchujiang.com/linux-command<ExternalLinkIcon/></a></li>
<li>Linux 命令大全手册：<a href="https://man.linuxde.net/" target="_blank" rel="noopener noreferrer">https://man.linuxde.net/<ExternalLinkIcon/></a></li>
<li>Linux 命令大全手册：<a href="https://www.linuxcool.com/" target="_blank" rel="noopener noreferrer">https://www.linuxcool.com/<ExternalLinkIcon/></a></li>
<li>Linux 命令示例：<a href="http://linux-commands-examples.com/" target="_blank" rel="noopener noreferrer">http://linux-commands-examples.com/<ExternalLinkIcon/></a></li>
<li>宝塔 Linux 面板：<a href="https://www.bt.cn/" target="_blank" rel="noopener noreferrer">https://www.bt.cn/<ExternalLinkIcon/></a></li>
<li>在线 Shell 脚本检查：<a href="https://www.shellcheck.net" target="_blank" rel="noopener noreferrer">https://www.shellcheck.net<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>面试题
<ul>
<li>Linux 常见面试题整理：<a href="https://zhuanlan.zhihu.com/p/376749877" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/376749877<ExternalLinkIcon/></a></li>
<li>Linux 常见面试题整理：<a href="https://github.com/0voice/linux_kernel_wiki#-%E9%9D%A2%E8%AF%95%E9%A2%98" target="_blank" rel="noopener noreferrer">https://github.com/0voice/linux_kernel_wiki#-面试题<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span>[</span></a></h1>
<p>](<a href="https://github.com/0voice/linux_kernel_wiki#-%E9%9D%A2%E8%AF%95%E9%A2%98" target="_blank" rel="noopener noreferrer">https://github.com/0voice/linux_kernel_wiki#-面试题<ExternalLinkIcon/></a>)</p>
</div></template>


