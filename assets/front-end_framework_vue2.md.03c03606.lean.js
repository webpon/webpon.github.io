import{_ as C,c as A,d as n,e as s,b as a,t,n as y,g as D,f as d,a as l,r as e,o as u}from"./app.fc4ecf40.js";const N=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/framework/vue2.md"}'),g={name:"front-end/framework/vue2.md"},F=l("",114),m=n("table",null,null,-1),h=l("",47),v=l("",29),b=l("",147),f=l("",130),q=n("code",null,"具名插槽可以和匿名插槽混用",-1),E=l("",176),k=l("",102),x=n("p",null,[n("img",{src:"https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220648-1657022362077254.png",alt:"b"})],-1),w=n("p",null,"这时候的push和replace实际就是history的pushState和replaceState方法",-1),_=n("code",null,"<router-view>",-1),V=l("",429);function j(o,z,M,B,$,S){const c=e("Filters"),r=e("demo"),i=e("child2"),p=e("router-view");return u(),A("div",null,[F,n("p",null,[s("Vue.components中的Filters是真正使用的插件名，比如"),a(c),s(",而不是"),m]),h,a(r,{src:"../demo/v-bing_class.vue",desc:"例子",codeStr:"%3Ctemplate%3E%0D%0A%20%20%3Cul%20class%3D%22box%22%20v-bind%3Aclass%3D%22%7B%20textColor%3A%20isColor%2C%20textSize%3A%20isSize%20%7D%22%3E%0D%0A%20%20%20%20%3Cli%3E%E5%AD%A6%E4%B9%A0Vue%3C%2Fli%3E%0D%0A%20%20%20%20%3Cli%3E%E5%AD%A6%E4%B9%A0Node%3C%2Fli%3E%0D%0A%20%20%20%20%3Cli%3E%E5%AD%A6%E4%B9%A0React%3C%2Fli%3E%0D%0A%20%20%3C%2Ful%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%3E%0D%0Aexport%20default%20%7B%0D%0A%20%20data()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20%20isColor%3Atrue%2C%0D%0A%20%20%20%20%20%20%20isSize%3Atrue%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%2C%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%20scoped%3E%0D%0A.box%20%7B%0D%0A%20%20border%3A%201px%20dashed%20%23f0f%3B%0D%0A%7D%0D%0A.textColor%20%7B%0D%0A%20%20color%3A%20%23f00%3B%0D%0A%20%20background-color%3A%20%23eef%3B%0D%0A%7D%0D%0A.textSize%20%7B%0D%0A%20%20font-size%3A%2030px%3B%0D%0A%20%20font-weight%3A%20bold%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E%0D%0A",htmlStr:"%3Cpre%20class%3D%22shiki%22%20style%3D%22background-color%3A%20%23292D3E%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eul%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Ebox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Ev-bind%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3EtextColor%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3EisColor%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3EtextSize%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3EisSize%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eli%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%E5%AD%A6%E4%B9%A0Vue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eli%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eli%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%E5%AD%A6%E4%B9%A0Node%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eli%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eli%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%E5%AD%A6%E4%B9%A0React%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eli%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eul%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3Eexport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3Edefault%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Edata%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3Ereturn%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%20%20%20%20%20isColor%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF9CAC%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%20%20%20%20%20isSize%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF9CAC%22%3Etrue%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Escoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFCB6B%22%3Ebox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Eborder%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E1px%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20dashed%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Ef0f%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFCB6B%22%3EtextColor%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Ecolor%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Ef00%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Ebackground-color%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Eeef%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFCB6B%22%3EtextSize%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Efont-size%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E30px%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Efont-weight%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20bold%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",description:"%E4%BE%8B%E5%AD%90",codePath:"../../front-end/demo/v-bing_class.vue"}),v,n("p",null,"给img标签的src属性赋值时，按照传统的方法"+t(o.url)+"：",1),b,a(i,y(D(o.$attrs)),null,16),s("，这是v-bind唯一可以直接跟等号的特殊写法):"),f,n("p",null,[q,s("，具名插槽有名字，子组件通过 "),d(o.$slots,"up"),s('定义，父组件在使用的时候通过slot="up"使用，并且会放到对应的位置')]),E,n("p",null,"在上例的基础上，我们把 computed 区块中的 totalMarks 函数整体移到 methods 中。同时在模板中将 "+t("totalMarks")+" 替换成 "+t("totalMarks()")+" 你最终看到的结果是一样的，如下所示：",1),k,n("p",null,[s("当然要渲染在哪里，需要一个标签"),a(p)]),n("p",null,[s("还可以用<keep-alive>包裹"),a(p),s("来保持状态，防止被销毁,使用keep-alive的保持的组件都要有name属性")]),x,w,n("p",null,[s("一级路由会在任何的"),a(p),s("中渲染对应的模板，App.vue中的 "),_,s(" 是最顶层的出口，渲染最高级路由匹配到的组件。子路由只会在父路由的"),a(p),s("中的模板的"),a(p),s("渲染")]),V])}const P=C(g,[["render",j]]);export{N as __pageData,P as default};