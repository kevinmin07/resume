import config from '../scripts/components/config'
export const style1 = `/**
 *
 * 大家好我是付厂长,你们可以叫我烧鸡侠客
 *
 * 这是我的动画版的个人介绍
 *
 * 你对我感兴趣么.
 */

* {
  transition: all 1s;
}

/**
 * 好像什么都没有
 * 黑白色调有点难受.
 */

html {
  background: #216583;
  font-size: 10px;
  overflow: hidden;
}

/***
 * 稍等...
 */

pre, a {
  color: #ffffff;
}

/**
 * 看起来有点奇怪.
 */

pre:not(:empty) {
  ${config.isMobile?
  `max-height: 46%;
  width: calc(100% - 2rem);`
  :
  `max-height: 92%;
  height:100%;
  width: 49%;`}
  font-size: 1.4rem;
  overflow: auto;
  background: rgb(48, 48, 48);
  border: 1px solid #ccc;
  padding: 1rem 1rem 2rem;
  white-space: pre-wrap;
  outline: 0;
}

#style-editor {
  ${config.isMobile?'':'transform: translateX(95%);'}
  position: absolute;
  left: 1rem;
  top: 1rem;
}

/**
 * 有点东西了,但是还是有点难受啊.
 */

#style-editor  { color: #DEDEDE }
.comment       { color: #857F6B; font-style: italic; }
.selector      { color: #D7BA7D; }
.keyword       { color: #569CD6; }
.property      { color: #569CD6; }
.function      { color: #C366A3; }
.punctuation   { color: #FFCF00; }

/**
 * 嗯嗯,看起来还不错.
 */

body {
  perspective: 100rem;
}

#style-editor {
  ${config.isMobile?'transform: rotateX(-10deg);':'transform: translateX(98.5%) rotateY(-10deg);'}
  transform-origin: right;
}

/**
 * Okey, 是时候开始介绍我自己了.
 */

 #resume-content {
 ${config.isMobile?`position: absolute;
 left: 1rem;
 bottom: 3rem;
 height: 48%;`
  :`position: absolute;
  left: 1rem;
  top: 1rem;
  transform: rotateY(10deg);
  transform-origin: left;`}
}
`

export const style2 = `/**
 * 这个介绍看起来有点丑啊.我们来简单美化一下.
 */

#resume-content{
  padding: 2rem;
  font-size: 1.4rem;
}
#resume-content h1{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 2.5rem 0 1rem;
  font-size: 2.6rem;
}
#resume-content a{
  color: #ffffff;
  text-decoration: none;
}
#resume-content ul> li{
  margin-bottom: .3rem;
}
#resume-content ul> li::before{
  content: '•';
  margin-right: .5rem;
  color: '#ffffff';
}

/**
 * Okey, 自我介绍完了
 *
 * 虽然还是很丑,但是我就这样, 哈哈哈哈
 *
 * 记得关注公众号<侠客烧鸡>免费送鸡翅哦.
 */`
