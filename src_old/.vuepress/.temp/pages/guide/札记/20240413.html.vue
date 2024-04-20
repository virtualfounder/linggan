<template><div><h1 id="今天完成的代码" tabindex="-1"><a class="header-anchor" href="#今天完成的代码"><span>今天完成的代码</span></a></h1>
<h2 id="_1-readme-md" tabindex="-1"><a class="header-anchor" href="#_1-readme-md"><span>1. <code v-pre>README.md</code></span></a></h2>
<h3 id="wjx-auto-fill" tabindex="-1"><a class="header-anchor" href="#wjx-auto-fill"><span>wjx-auto-fill</span></a></h3>
<h4 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h4>
<p>该项目使用selenium实现问卷自动填写。支持IP切换、题项比例设定以及问卷填写方式(通过微信、QQ还是链接填写)</p>
<h4 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路"><span>实现思路</span></a></h4>
<figure><img src="https://aigc456-1322485937.cos.ap-chengdu.myqcloud.com/load/202404132203181.png" alt="alt" tabindex="0" loading="lazy"><figcaption>alt</figcaption></figure>
<h5 id="_1-爬取问卷" tabindex="-1"><a class="header-anchor" href="#_1-爬取问卷"><span>1.爬取问卷</span></a></h5>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre class="language-python"><code>driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Edge<span class="token punctuation">(</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-获取题目类型" tabindex="-1"><a class="header-anchor" href="#_2-获取题目类型"><span>2.获取题目类型</span></a></h5>
<p>通过xpath获取每个题目，并通过get_attribute获取题目类型，根据不同的题目类型采取的填写方式不同，可以通过浏览器的开发者模式查看题目类型，现在可以可以实现单选、多选、单量表、矩阵量表、简答、选择、打分</p>
<figure><img src="https://aigc456-1322485937.cos.ap-chengdu.myqcloud.com/load/202404132205044.png" alt="alt" tabindex="0" loading="lazy"><figcaption>alt</figcaption></figure>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre class="language-python"><code>xpath <span class="token operator">=</span> <span class="token string">'//*[@id="div{}"]'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
question <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span>
<span class="token comment"># 获取题目类型</span>
flag <span class="token operator">=</span> question<span class="token punctuation">.</span>get_attribute<span class="token punctuation">(</span><span class="token string">"type"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-智能验证" tabindex="-1"><a class="header-anchor" href="#_3-智能验证"><span>3.智能验证</span></a></h5>
<p>你使用selenium进行问卷填写在提交的时候一定会触发智能验证。</p>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="token comment"># 请点击智能验证码进行验证！ </span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    comfirm <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> <span class="token string">'//*[@id="layui-layer1"]/div[3]/a'</span><span class="token punctuation">)</span>
    comfirm<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token comment"># 点击按钮开始智能验证</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    button <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> <span class="token string">'//*[@id="SM_BTN_WRAPPER_1"]'</span><span class="token punctuation">)</span>
    button<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token comment"># 滑块验证</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    slider <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> <span class="token string">'//*[@id="nc_1__scale_text"]/span'</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.3</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token builtin">str</span><span class="token punctuation">(</span>slider<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">"请按住滑块，拖动到最右边"</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        width <span class="token operator">=</span> slider<span class="token punctuation">.</span>size<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'width'</span><span class="token punctuation">)</span>
        ActionChains<span class="token punctuation">(</span>driver<span class="token punctuation">)</span><span class="token punctuation">.</span>drag_and_drop_by_offset<span class="token punctuation">(</span>slider<span class="token punctuation">,</span> width<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>perform<span class="token punctuation">(</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-提交" tabindex="-1"><a class="header-anchor" href="#_4-提交"><span>4.提交</span></a></h5>
<p>完成智能验证就可以提交问卷</p>
<h4 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h4>
<p>只需要修改config.py文件中的配置就可以执行<br>
其中的IP API提取链接需要自己去IP代理网站生成，如果你选择爬取网上免费的IP代理，你需要自己修改代码爬取，并生成自己的IP代理池</p>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="token comment"># 问卷链接</span>
url <span class="token operator">=</span> <span class="token string">""</span>
<span class="token comment"># 填写分数</span>
epochs <span class="token operator">=</span> <span class="token number">400</span>
<span class="token comment"># 题项比例</span>
prob <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token number">1</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token number">2</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token number">3</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token number">4</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token number">5</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment"># 简答题题库</span>
answerList <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token number">6</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"123"</span><span class="token punctuation">,</span> <span class="token string">"12"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment"># IP API提取链接 如果不是通过API提取，请根据自己的情况修改相应建立IP代理池的代码</span>
api <span class="token operator">=</span> <span class="token string">""</span>
<span class="token comment"># User-Agent库 第一个为浏览器、第二个为微信、第三个为QQ</span>
UA <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0"</span><span class="token punctuation">,</span>
      <span class="token string">"Mozilla/5.0 (Linux; Android 10; SEA-AL10 Build/HUAWEISEA-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4313 MMWEBSDK/20220805 Mobile Safari/537.36 MMWEBID/9538 MicroMessenger/8.0.27.2220(0x28001B53) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64"</span><span class="token punctuation">,</span>
      <span class="token string">"Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/045913 Mobile Safari/537.36 V1_AND_SQ_8.8.68_2538_YYB_D A_8086800 QQ/8.8.68.7265 NetType/WIFI WebP/0.3.0 Pixel/1080 StatusBarHeight/76 SimpleUISwitch/1 QQTheme/2971 InMagicWin/0 StudyMode/0 CurrentMode/1 CurrentFontScale/1.0 GlobalDensityScale/0.9818182 AppId/537112567 Edg/98.0.4758.102"</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意题目顺序，矩阵量表中的每一项都属于一个题目<br>
<img src="https://aigc456-1322485937.cos.ap-chengdu.myqcloud.com/load/202404132205152.png" alt="alt" loading="lazy"></p>
<h2 id="_2-main-py" tabindex="-1"><a class="header-anchor" href="#_2-main-py"><span>2.  <code v-pre>main.py</code></span></a></h2>
<div class="language-Python line-numbers-mode" data-ext="Python" data-title="Python"><pre v-pre class="language-Python"><code># main.py
import random
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver import ActionChains
import time
import requests
import utils
import config
import sys
import prob
# 问卷链接
url = config.url
# 每题选项的比例
prob = prob.new_prob()
# 填空题答案
answerList = config.answerList
# 填写份数
epochs = config.epochs
# IP API代提取链接
api = config.api
# UA库
UA = config.UA
# 设置重试次数
retry_count = 10000
option = webdriver.EdgeOptions()
option.add_experimental_option('excludeSwitches', ['enable-automation'])
option.add_experimental_option('useAutomationExtension', False)
if __name__ == &quot;__main__&quot;:

    for epoch in range(epochs):
        retry_count = 10000
        try:
            # # 通过API链接爬取IP，这里根据自己的情况进行修改
            # ip = requests.get(api).text
            # # 修改IP
            # option.add_argument('--proxy-server={}'.format(ip))

            driver = webdriver.Edge(options=option)
            # option = webdriver.ChromeOptions()
            # # option.add_argument('headless')  # 设置option
            # driver = webdriver.Chrome(options=option)  # 调用带参数的谷歌浏览器

            # chrome_options = webdriver.ChromeOptions()
            # chrome_options.add_argument(&quot;--disable-application-cache&quot;)
            # chrome_options.add_argument(&quot;--disable-cache&quot;)
            #
            # driver = webdriver.Chrome(options=chrome_options)
            # 修改User-Agent
            num = random.randint(0, 2)
            driver.execute_cdp_cmd(&quot;Network.setUserAgentOverride&quot;, {&quot;userAgent&quot;: UA[num]})
            # 将webdriver属性置为undefined
            driver.execute_cdp_cmd('Page.addScriptToEvaluateOnNewDocument',
                                   {'source': 'Object.defineProperty(navigator, &quot;webdriver&quot;, {get: () =&gt; undefined})'})

            driver.get(url)

            # 题号
            index = 1
            # 获取题目数量
            questions = driver.find_elements(By.CLASS_NAME, &quot;field.ui-field-contain&quot;)
            for i in range(1, len(questions) + 1):

                xpath = '//*[@id=&quot;div{}&quot;]'.format(i)
                question = driver.find_element(By.XPATH, xpath)
                # 获取题目类型
                flag = question.get_attribute(&quot;type&quot;)
                if flag == '2':
                    index = utils.fill_blank(driver, i, answerList, index)
                    time.sleep(1)
                elif flag == '3':
                    index = utils.single_choice(driver, i, prob, index)
                    time.sleep(1)
                elif flag == '4':
                    index = utils.multi_choice(driver, i, prob, index)
                    time.sleep(1)
                elif flag == '5':
                    index = utils.single_scale(driver, i, prob, index)
                    time.sleep(1)
                elif flag == '6':
                    xpath = '//*[@id=&quot;div{}&quot;]/div[1]/div[2]/span'.format(i)
                    if driver.find_element(By.XPATH, xpath).text.find(&quot;【&quot;) != -1:
                        index = utils.multi_matrix_scale(driver, i, prob, index, num)
                        time.sleep(1)
                    else:
                        index = utils.single_matrix_scale(driver, i, prob, index, num)
                        time.sleep(1)
                elif flag == '7':
                    index = utils.select(driver, i, prob, index)
                    time.sleep(3)
                elif flag == '8':
                    index = utils.single_slide(driver, i, prob, index)
                    time.sleep(3)
                elif flag == '11':
                    index = utils.sort(driver, i, prob, index)
                    time.sleep(3)
                elif flag == '12':
                    index = utils.multi_slide(driver, i, prob, index)
                    time.sleep(3)
                else:
                    print(&quot;没有该题型&quot;)
                    sys.exit(0)

            time.sleep(2)
            submit_button = driver.find_element(By.XPATH, '//*[@id=&quot;ctlNext&quot;]')
            submit_button.click()
            time.sleep(2)

            # 请点击智能验证码进行验证！
            try:
                comfirm = driver.find_element(By.XPATH, '//*[@id=&quot;layui-layer1&quot;]/div[3]/a')
                comfirm.click()
                time.sleep(0.3)
            except Exception as e:
                print(e)

            # 点击按钮开始智能验证
            try:
                button = driver.find_element(By.XPATH, '//*[@id=&quot;SM_BTN_WRAPPER_1&quot;]')
                button.click()
                time.sleep(5)
            except Exception as e:
                print(e)

            # 滑块验证
            try:
                slider = driver.find_element(By.XPATH, '//*[@id=&quot;nc_1__scale_text&quot;]/span')
                time.sleep(0.5)
                if str(slider.text).startswith(&quot;请按住滑块，拖动到最右边&quot;):
                    width = slider.size.get('width')
                    ActionChains(driver).drag_and_drop_by_offset(slider, width, 0).perform()
                    time.sleep(1)
            except Exception as e:

                print(f&quot;发生异常: {e}&quot;)
        except Exception as e:

            print(f&quot;发生异常: {e}&quot;)

            # 在这里执行清理工作

            try:

                driver.execute_script(&quot;localStorage.clear();&quot;)  # 清除localStorage

            except Exception as clean_ex:

                print(f&quot;清理过程中发生异常: {clean_ex}&quot;)

            finally:
                # 清除localStorage
                driver.quit()  # 关闭WebDriver

                # 如果需要，可以在这里添加重试逻辑

                if retry_count &gt; 0:

                    print(f&quot;剩余重试次数: {retry_count - 1}&quot;)

                    retry_count -= 1
                    epoch = epoch - 1
                    time.sleep(3)
                    continue  # 重试当前epoch

                else:

                    print(&quot;重试次数已用尽，退出程序。&quot;)

                    sys.exit(1)


        else:

            # 如果没有异常，正常清理并继续下一个epoch
            time.sleep(3)
            driver.delete_all_cookies()  # 清除cookies

            driver.execute_script(&quot;localStorage.clear();&quot;)  # 清除localStorage

            driver.quit()  # 关闭WebDriver

            print(f&quot;已完成{epoch + 1}份&quot;)
            time.sleep(3)  # 等待5秒后继续下一个epoch

print(&quot;全部完成{}份填写&quot;.format(epochs))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-prob-py" tabindex="-1"><a class="header-anchor" href="#_3-prob-py"><span>3. <code v-pre>prob.py</code></span></a></h2>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="token comment">#prob.py</span>
<span class="token keyword">import</span> random

<span class="token keyword">def</span> <span class="token function">generate_list_for_key</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> rules<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">for</span> key_range<span class="token punctuation">,</span> list_params <span class="token keyword">in</span> rules<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> key <span class="token keyword">in</span> key_range<span class="token punctuation">:</span>
            list_length<span class="token punctuation">,</span> min_value<span class="token punctuation">,</span> max_value <span class="token operator">=</span> list_params
            generated_list <span class="token operator">=</span> <span class="token punctuation">[</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span>min_value<span class="token punctuation">,</span> max_value<span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>list_length<span class="token punctuation">)</span><span class="token punctuation">]</span>
            <span class="token keyword">if</span> list_length <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">:</span>
                generated_list<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>  <span class="token comment"># 设置倒数第二个和最后一个元素为3</span>
            <span class="token keyword">return</span> generated_list
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token comment"># 如果没有匹配的规则，返回一个空列表</span>
  


<span class="token comment"># 定义规则，其中每个键的范围映射到(列表长度, 最小值, 最大值)</span>
rules <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment"># range(1, 2): (2, 1, 1),  # 键1, 2, 3将生成长度为2的列表，元素值在1到2之间</span>
    <span class="token comment"># range(2, 3): (7, 1, 2),  # 键4, 5, 6将生成长度为5的列表，元素值在1到3之间</span>
    <span class="token comment"># range(3, 4): (2,1, 1) , # 键7, 8, 9将生成长度为3的列表，元素值在2到4之间</span>
    <span class="token comment"># range(4,5):(5,1,2),</span>
    <span class="token comment"># range(5,6):(5,1,2),</span>
    <span class="token comment"># range(6,7):(2,1,1),</span>
    <span class="token comment"># range(7,8):(2,1,1),</span>
    <span class="token comment"># range(8,100):(5,1,2),</span>
    <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment"># 键1, 2, 3将生成长度为2的列表，元素值在1到2之间</span>
    <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment"># 键4, 5, 6将生成长度为5的列表，元素值在1到3之间</span>
    <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">,</span> <span class="token comment"># 键7, 8, 9将生成长度为3的列表，元素值在2到4之间</span>
    <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">def</span> <span class="token function">new_prob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 生成prob字典</span>
    prob <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> key <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 假设键的范围是1到9</span>
        prob<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> generate_list_for_key<span class="token punctuation">(</span>key<span class="token punctuation">,</span> rules<span class="token punctuation">)</span>

    <span class="token keyword">return</span> prob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-utils-py" tabindex="-1"><a class="header-anchor" href="#_4-utils-py"><span>4. <code v-pre>utils.py</code></span></a></h2>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> random
<span class="token keyword">import</span> time
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>by <span class="token keyword">import</span> By
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver <span class="token keyword">import</span> ActionChains
<span class="token keyword">import</span> numpy

<span class="token comment"># 选取答案</span>
<span class="token keyword">def</span> <span class="token function">select_answer</span><span class="token punctuation">(</span>answerList<span class="token punctuation">)</span><span class="token punctuation">:</span>
    length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answerList<span class="token punctuation">)</span>
    index <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> answerList<span class="token punctuation">[</span>index<span class="token punctuation">]</span>

<span class="token comment"># 简答题题 type=2</span>
<span class="token keyword">def</span> <span class="token function">fill_blank</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">,</span> answerList<span class="token punctuation">,</span> idx<span class="token punctuation">)</span><span class="token punctuation">:</span>
    xpath <span class="token operator">=</span> <span class="token string">'//*[@id="div{}"]/div[2]/textarea'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span>
    <span class="token comment"># text = select_answer(answerList)</span>
    num <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answerList<span class="token punctuation">.</span>get<span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    text <span class="token operator">=</span> answerList<span class="token punctuation">.</span>get<span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">[</span>num<span class="token punctuation">]</span>
    driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span>text<span class="token punctuation">)</span>
    idx <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> idx

<span class="token comment"># 归一化比例</span>
<span class="token keyword">def</span> <span class="token function">preprocess_prob</span><span class="token punctuation">(</span>prob<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>prob<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>
        prob <span class="token operator">=</span> numpy<span class="token punctuation">.</span>ones<span class="token punctuation">(</span>length<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token operator">/</span><span class="token builtin">sum</span><span class="token punctuation">(</span>prob<span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> prob<span class="token punctuation">]</span>

<span class="token comment"># 单选 type=3</span>
<span class="token keyword">def</span> <span class="token function">single_choice</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">,</span> prob<span class="token punctuation">,</span> idx<span class="token punctuation">)</span><span class="token punctuation">:</span>
    xpath <span class="token operator">=</span> <span class="token string">'//*[@id="div{}"]/div[2]/div'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span>
    answers <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span>
    <span class="token comment"># 如果没有传入比例，默认为等比例</span>
    p <span class="token operator">=</span> preprocess_prob<span class="token punctuation">(</span>prob<span class="token punctuation">.</span>get<span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token punctuation">)</span>
    choice <span class="token operator">=</span> numpy<span class="token punctuation">.</span>random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>a<span class="token operator">=</span>numpy<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> p<span class="token operator">=</span>p<span class="token punctuation">)</span>
    xpath <span class="token operator">=</span> <span class="token string">'//*[@id="div{}"]/div[2]/div[{}]'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">,</span> choice<span class="token punctuation">)</span>
    <span class="token comment"># driver.find_element(By.XPATH, xpath).click()</span>
    ActionChains<span class="token punctuation">(</span>driver<span class="token punctuation">)</span><span class="token punctuation">.</span>move_to_element<span class="token punctuation">(</span>driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>perform<span class="token punctuation">(</span><span class="token punctuation">)</span>
    idx <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> idx

<span class="token comment"># 多选 type=4</span>
<span class="token keyword">def</span> <span class="token function">multi_choice</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">,</span> prob<span class="token punctuation">,</span> idx<span class="token punctuation">)</span><span class="token punctuation">:</span>
    xpath <span class="token operator">=</span> <span class="token string">'//*[@id="div{}"]/div[2]/div'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span>
    answers <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span>
    p <span class="token operator">=</span> preprocess_prob<span class="token punctuation">(</span>prob<span class="token punctuation">.</span>get<span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 多选的数量</span>
    <span class="token comment"># 概率为0的选项个数</span>
    count <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> p <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
    n <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token operator">-</span>count<span class="token punctuation">)</span>
    q_selects <span class="token operator">=</span> numpy<span class="token punctuation">.</span>random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>a<span class="token operator">=</span>numpy<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> size<span class="token operator">=</span>n<span class="token punctuation">,</span> replace<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> p<span class="token operator">=</span>p<span class="token punctuation">)</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> q_selects<span class="token punctuation">:</span>
        driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> <span class="token string">'//*[@id="div{}"]/div[2]/div[{}]'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
    idx <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> idx

<span class="token comment"># 单量表题 type=5</span>
<span class="token keyword">def</span> <span class="token function">single_scale</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">,</span> prob<span class="token punctuation">,</span> idx<span class="token punctuation">)</span><span class="token punctuation">:</span>
    xpath <span class="token operator">=</span> <span class="token string">'//*[@id="div{}"]/div[2]/div/ul/li'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span>
    answers <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span>
    p <span class="token operator">=</span> preprocess_prob<span class="token punctuation">(</span>prob<span class="token punctuation">.</span>get<span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token punctuation">)</span>
    choice <span class="token operator">=</span> numpy<span class="token punctuation">.</span>random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>a<span class="token operator">=</span>numpy<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> p<span class="token operator">=</span>p<span class="token punctuation">)</span>
    xpath <span class="token operator">=</span> <span class="token string">'//*[@id="div{}"]/div[2]/div/ul/li[{}]'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">,</span> choice<span class="token punctuation">)</span>
    driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
    idx <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> idx

<span class="token comment"># 矩阵量表 type=6</span>
<span class="token comment"># 单选</span>
<span class="token keyword">def</span> <span class="token function">single_matrix_scale</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">,</span> prob<span class="token punctuation">,</span> idx<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">:</span>

    xpath <span class="token operator">=</span> <span class="token string">'//*[@id="divRefTab{}"]/tbody/tr'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span>
    q_len <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>driver<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span>q_len<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        xpath <span class="token operator">=</span> <span class="token string">'//*[@id="drv{}_{}"]/td'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        answers <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span>
        <span class="token comment"># 判断是浏览器还是QQ、微信</span>
        <span class="token keyword">if</span> num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            p <span class="token operator">=</span> preprocess_prob<span class="token punctuation">(</span>prob<span class="token punctuation">.</span>get<span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
            choice <span class="token operator">=</span> numpy<span class="token punctuation">.</span>random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>a<span class="token operator">=</span>numpy<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> p<span class="token operator">=</span>p<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            p <span class="token operator">=</span> preprocess_prob<span class="token punctuation">(</span>prob<span class="token punctuation">.</span>get<span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token punctuation">)</span>
            choice <span class="token operator">=</span> numpy<span class="token punctuation">.</span>random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>a<span class="token operator">=</span>numpy<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> p<span class="token operator">=</span>p<span class="token punctuation">)</span>
        xpath <span class="token operator">=</span> <span class="token string">'//*[@id="drv{}_{}"]/td[{}]'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> choice <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
        idx <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> idx

<span class="token comment"># 多选</span>
<span class="token keyword">def</span> <span class="token function">multi_matrix_scale</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">,</span> prob<span class="token punctuation">,</span> idx<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    xpath <span class="token operator">=</span> <span class="token string">'//*[@id="divRefTab{}"]/tbody/tr'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span>
    q_len <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>driver<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span>q_len<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        xpath <span class="token operator">=</span> <span class="token string">'//*[@id="drv{}_{}"]/td'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        answers <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span>
        <span class="token comment"># 判断是浏览器还是QQ、微信</span>
        <span class="token keyword">if</span> num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            p <span class="token operator">=</span> preprocess_prob<span class="token punctuation">(</span>prob<span class="token punctuation">.</span>get<span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token comment"># 多选的数量</span>
            <span class="token comment"># 概率为0的选项个数</span>
            count <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> p <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            n <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> count<span class="token punctuation">)</span>
            q_selects <span class="token operator">=</span> numpy<span class="token punctuation">.</span>random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>a<span class="token operator">=</span>numpy<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> size<span class="token operator">=</span>n<span class="token punctuation">,</span> replace<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> p<span class="token operator">=</span>p<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            p <span class="token operator">=</span> preprocess_prob<span class="token punctuation">(</span>prob<span class="token punctuation">.</span>get<span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment"># 多选的数量</span>
            <span class="token comment"># 概率为0的选项个数</span>
            count <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> p <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            n <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span> <span class="token operator">-</span> count<span class="token punctuation">)</span>
            q_selects <span class="token operator">=</span> numpy<span class="token punctuation">.</span>random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>a<span class="token operator">=</span>numpy<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> size<span class="token operator">=</span>n<span class="token punctuation">,</span> replace<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> p<span class="token operator">=</span>p<span class="token punctuation">)</span>

        <span class="token keyword">for</span> q_select <span class="token keyword">in</span> q_selects<span class="token punctuation">:</span>
            xpath <span class="token operator">=</span> <span class="token string">'//*[@id="drv{}_{}"]/td[{}]'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> q_select<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
            driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
        idx <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> idx

<span class="token comment"># 下拉框 type=7</span>
<span class="token keyword">def</span> <span class="token function">select</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">,</span> prob<span class="token punctuation">,</span> idx<span class="token punctuation">)</span><span class="token punctuation">:</span>
    xpath <span class="token operator">=</span> <span class="token string">'//*[@id="div{}"]/div[2]'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span>
    driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
    xpath <span class="token operator">=</span> <span class="token string">"//*[@id='select2-q{}-results']/li"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span>
    answers <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span>
    <span class="token comment"># 有一个“请选择”,所以len-1</span>
    p <span class="token operator">=</span> preprocess_prob<span class="token punctuation">(</span>prob<span class="token punctuation">.</span>get<span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    choice <span class="token operator">=</span> numpy<span class="token punctuation">.</span>random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>a<span class="token operator">=</span>numpy<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> p<span class="token operator">=</span>p<span class="token punctuation">)</span>
    xpath <span class="token operator">=</span> <span class="token string">"//*[@id='select2-q{}-results']/li[{}]"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">,</span> choice<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
    idx <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> idx

<span class="token comment"># 滑动条 type=8</span>
<span class="token keyword">def</span> <span class="token function">single_slide</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">,</span> prob<span class="token punctuation">,</span> idx<span class="token punctuation">)</span><span class="token punctuation">:</span>
    xpath <span class="token operator">=</span> <span class="token string">'//*[@id="jsrs_q{}"]/div[3]/div'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span>
    answers <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span>
    p <span class="token operator">=</span> preprocess_prob<span class="token punctuation">(</span>prob<span class="token punctuation">.</span>get<span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    choice <span class="token operator">=</span> numpy<span class="token punctuation">.</span>random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>a<span class="token operator">=</span>numpy<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> p<span class="token operator">=</span>p<span class="token punctuation">)</span>
    score <span class="token operator">=</span> choice <span class="token operator">*</span> <span class="token number">100</span><span class="token operator">/</span><span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span> <span class="token operator">+</span> random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token operator">/</span><span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token punctuation">)</span>
    text <span class="token operator">=</span> score <span class="token operator">*</span> <span class="token number">614</span><span class="token operator">/</span><span class="token number">100</span> <span class="token operator">+</span> <span class="token number">10</span>
    xpath <span class="token operator">=</span> <span class="token string">'//*[@id="jsrs_q{}"]/div[1]'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span>
    element <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span>
    ActionChains<span class="token punctuation">(</span>driver<span class="token punctuation">)</span><span class="token punctuation">.</span>move_to_element_with_offset<span class="token punctuation">(</span>element<span class="token punctuation">,</span> text<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>perform<span class="token punctuation">(</span><span class="token punctuation">)</span>
    idx <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> idx

<span class="token comment"># 多滑条 type=9</span>
<span class="token keyword">def</span> <span class="token function">multi_slide</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">,</span> prob<span class="token punctuation">,</span> idx<span class="token punctuation">)</span><span class="token punctuation">:</span>
    xpath <span class="token operator">=</span> <span class="token string">'//*[@id="divRefTab{}"]/tbody/tr'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span>
    q_len <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>driver<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span>q_len<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        xpath <span class="token operator">=</span> <span class="token string">'//*[@id="jsrs_q{}_{}"]/div[3]/div'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        answers <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span>
        p <span class="token operator">=</span> preprocess_prob<span class="token punctuation">(</span>prob<span class="token punctuation">.</span>get<span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        choice <span class="token operator">=</span> numpy<span class="token punctuation">.</span>random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>a<span class="token operator">=</span>numpy<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> p<span class="token operator">=</span>p<span class="token punctuation">)</span>
        score <span class="token operator">=</span> choice <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">/</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span> <span class="token operator">+</span> random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">/</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token punctuation">)</span>
        text <span class="token operator">=</span> score <span class="token operator">*</span> <span class="token number">614</span> <span class="token operator">/</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">10</span>
        xpath <span class="token operator">=</span> <span class="token string">'//*[@id="jsrs_q{}_{}"]/div[1]'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        element <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span>
        ActionChains<span class="token punctuation">(</span>driver<span class="token punctuation">)</span><span class="token punctuation">.</span>move_to_element_with_offset<span class="token punctuation">(</span>element<span class="token punctuation">,</span> text<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>perform<span class="token punctuation">(</span><span class="token punctuation">)</span>
        idx <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> idx

<span class="token keyword">def</span> <span class="token function">add_one</span><span class="token punctuation">(</span>lists<span class="token punctuation">,</span> num<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>lists<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> lists<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> num<span class="token punctuation">:</span>
            lists<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> lists

<span class="token comment"># 排序题 type=11</span>
<span class="token keyword">def</span> <span class="token function">sort</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">,</span> prob<span class="token punctuation">,</span> idx<span class="token punctuation">)</span><span class="token punctuation">:</span>
    xpath <span class="token operator">=</span> <span class="token string">'//*[@id="div{}"]/ul/li'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span>
    answers <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span>
    order <span class="token operator">=</span> prob<span class="token punctuation">.</span>get<span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        index <span class="token operator">=</span> order<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        xpath <span class="token operator">=</span> <span class="token string">'//*[@id="div{}"]/ul/li[{}]'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span>
        driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>
        order <span class="token operator">=</span> add_one<span class="token punctuation">(</span>order<span class="token punctuation">,</span> index<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    idx <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> idx

<span class="token comment"># 分配题 type=12  暂时还没有完成</span>
<span class="token keyword">def</span> <span class="token function">distribute</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">,</span> prob<span class="token punctuation">,</span> idx<span class="token punctuation">)</span><span class="token punctuation">:</span>
    xpath <span class="token operator">=</span> <span class="token string">'//*[@id="divRefTab{}"]/tbody/tr'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span>
    q_len <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>driver<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span>q_len<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        xpath <span class="token operator">=</span> <span class="token string">'//*[@id="jsrs_q{}_{}"]/div[3]/div'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        answers <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span>
        p <span class="token operator">=</span> preprocess_prob<span class="token punctuation">(</span>prob<span class="token punctuation">.</span>get<span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        choice <span class="token operator">=</span> numpy<span class="token punctuation">.</span>random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>a<span class="token operator">=</span>numpy<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> p<span class="token operator">=</span>p<span class="token punctuation">)</span>
        score <span class="token operator">=</span> choice <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">/</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span> <span class="token operator">+</span> random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">/</span> <span class="token builtin">len</span><span class="token punctuation">(</span>answers<span class="token punctuation">)</span><span class="token punctuation">)</span>
        text <span class="token operator">=</span> score <span class="token operator">*</span> <span class="token number">614</span> <span class="token operator">/</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">10</span>
        xpath <span class="token operator">=</span> <span class="token string">'//*[@id="jsrs_q{}_{}"]/div[1]'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        element <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> xpath<span class="token punctuation">)</span>
        ActionChains<span class="token punctuation">(</span>driver<span class="token punctuation">)</span><span class="token punctuation">.</span>move_to_element_with_offset<span class="token punctuation">(</span>element<span class="token punctuation">,</span> text<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>perform<span class="token punctuation">(</span><span class="token punctuation">)</span>
        idx <span class="token operator">+=</span><span class="token number">1</span>
    <span class="token keyword">return</span> idx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-config-py" tabindex="-1"><a class="header-anchor" href="#_5-config-py"><span>5. <code v-pre>config.py</code></span></a></h2>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre class="language-python"><code>url1 <span class="token operator">=</span> <span class="token string">"https://www.wjx.cn/vm/QDmCDYI.aspx#"</span>
url2<span class="token operator">=</span> <span class="token string">"https://www.wjx.cn/vm/e11EvAE.aspx"</span>
url <span class="token operator">=</span> <span class="token string">"https://www.wjx.cn/vm/ev1Uf94.aspx"</span>
epochs <span class="token operator">=</span> <span class="token number">10000</span>
<span class="token comment"># 题项比例，确保选项数量和数组长度一致</span>
<span class="token comment"># prob = {</span>
<span class="token comment">#     1: [1, 1],</span>
<span class="token comment">#     2: [1, 1, 1, 2, 2, 2, 2],</span>
<span class="token comment">#     3: [1, 1],</span>
<span class="token comment">#</span>
<span class="token comment">#     4: [1, 1, 1, 2, 2],</span>
<span class="token comment">#</span>
<span class="token comment">#     5: [1, 1, 1, 2, 2],</span>
<span class="token comment">#     6: [1, 1, 1, 2, 2],</span>
<span class="token comment">#     7: [1, 1, 1, 2, 2],</span>
<span class="token comment">#     8: [1, 1, 1, 2, 2],</span>
<span class="token comment">#     9: [1, 1, 1, 2, 2],</span>
<span class="token comment">#     4: [1, 1, 1, 2, 2],</span>
<span class="token comment">#     5: [1, 1, 1, 2, 2],</span>
<span class="token comment">#     4: [1, 1, 1, 2, 2],</span>
<span class="token comment">#     5: [1, 1, 1, 2, 2],</span>
<span class="token comment">#     4: [1, 1, 1, 2, 2],</span>
<span class="token comment">#     5: [1, 1, 1, 2, 2],</span>
<span class="token comment">#     4: [1, 1, 1, 2, 2],</span>
<span class="token comment">#     5: [1, 1, 1, 2, 2],</span>
<span class="token comment">#     4: [1, 1, 1, 2, 2],</span>
<span class="token comment">#     5: [1, 1, 1, 2, 2],</span>
<span class="token comment">#     4: [1, 1, 1, 2, 2],</span>
<span class="token comment">#     5: [1, 1, 1, 2, 2],</span>
<span class="token comment"># }</span>
<span class="token comment"># 简答题题库</span>
answerList <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">#6: ["123", "12"]</span>
<span class="token punctuation">}</span>
<span class="token comment"># IP API提取链接 https://xip.ipzan.com/ 这个每周都有几百个免费的IP代理领取</span>
api <span class="token operator">=</span> <span class="token string">""</span>
<span class="token comment"># User-Agent库</span>
UA <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0"</span><span class="token punctuation">,</span>
      <span class="token string">"Mozilla/5.0 (Linux; Android 10; SEA-AL10 Build/HUAWEISEA-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4313 MMWEBSDK/20220805 Mobile Safari/537.36 MMWEBID/9538 MicroMessenger/8.0.27.2220(0x28001B53) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64"</span><span class="token punctuation">,</span>
      <span class="token string">"Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/045913 Mobile Safari/537.36 V1_AND_SQ_8.8.68_2538_YYB_D A_8086800 QQ/8.8.68.7265 NetType/WIFI WebP/0.3.0 Pixel/1080 StatusBarHeight/76 SimpleUISwitch/1 QQTheme/2971 InMagicWin/0 StudyMode/0 CurrentMode/1 CurrentFontScale/1.0 GlobalDensityScale/0.9818182 AppId/537112567 Edg/98.0.4758.102"</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-感受" tabindex="-1"><a class="header-anchor" href="#_2-感受"><span>2.  <code v-pre>感受</code></span></a></h1>
<h2 id="_2024年4月13日22-09-16" tabindex="-1"><a class="header-anchor" href="#_2024年4月13日22-09-16"><span>2024年4月13日22:09:16</span></a></h2>
<p>通过这一个项目，让我感受到了，编写一个问卷填写工具需要考虑的东西。<br>
编写一个问卷填写工具需要考虑一下问题：</p>
<ol>
<li>需要考虑到问卷的问题的类型</li>
<li>问卷中一个矩阵的题目都是一个</li>
<li>问题需要考虑不同选项的权重</li>
<li>选择需要有随机性和规律性</li>
</ol>
<p>问卷填写需要以较慢的爬取速度，保证问卷网址可以打开。<br>
由于问卷星的网站，打开的问卷会有不完整的一种情况，需要使用错误处理，让程序跳过这个错误，继续重新执行。<br>
这可能是由于缓存导致，网页打开呈现出不同的格式，使得爬取的元素格式或者位置不正确，导致点击的错误。</p>
<h3 id="问卷显示" tabindex="-1"><a class="header-anchor" href="#问卷显示"><span>问卷显示</span></a></h3>
<h4 id="这是问卷显示不正常的图片" tabindex="-1"><a class="header-anchor" href="#这是问卷显示不正常的图片"><span>这是问卷显示不正常的图片：</span></a></h4>
<figure><img src="https://aigc456-1322485937.cos.ap-chengdu.myqcloud.com/load/202404132221994.png" alt="alt" tabindex="0" loading="lazy"><figcaption>alt</figcaption></figure>
<h4 id="这是问卷显示正常的图片" tabindex="-1"><a class="header-anchor" href="#这是问卷显示正常的图片"><span>这是问卷显示正常的图片：</span></a></h4>
<figure><img src="https://aigc456-1322485937.cos.ap-chengdu.myqcloud.com/load/202404132224682.png" alt="alt" tabindex="0" loading="lazy"><figcaption>alt</figcaption></figure>
<h2 id="一些经验" tabindex="-1"><a class="header-anchor" href="#一些经验"><span>一些经验</span></a></h2>
<p>问卷设计尽量要简洁，矩阵要简洁，便于填写</p>
<h1 id="_3-一些月季花和朱顶红的图片" tabindex="-1"><a class="header-anchor" href="#_3-一些月季花和朱顶红的图片"><span>3.  一些月季花和朱顶红的图片</span></a></h1>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="https://aigc456-1322485937.cos.ap-chengdu.myqcloud.com/load/202404132303149.jpg" alt="朱顶红" loading="lazy"></span></a></h2>
<h2 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span><img src="https://aigc456-1322485937.cos.ap-chengdu.myqcloud.com/load/202404132303182.jpg" alt="月季花" loading="lazy"></span></a></h2>
<h2 id="-2" tabindex="-1"><a class="header-anchor" href="#-2"><span><img src="https://aigc456-1322485937.cos.ap-chengdu.myqcloud.com/load/202404132303218.jpg" alt="月季花" loading="lazy"></span></a></h2>
<h2 id="-3" tabindex="-1"><a class="header-anchor" href="#-3"><span><img src="https://aigc456-1322485937.cos.ap-chengdu.myqcloud.com/load/202404132303253.jpg" alt="月季花" loading="lazy"></span></a></h2>
<h2 id="-4" tabindex="-1"><a class="header-anchor" href="#-4"><span><img src="https://aigc456-1322485937.cos.ap-chengdu.myqcloud.com/load/202404132303293.jpg" alt="月季花" loading="lazy"></span></a></h2>
</div></template>


