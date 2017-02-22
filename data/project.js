
/*		项目池
	*   {
	*       projectName: @value String            *         项目名称
	*       projectWebsite: @value String         *         项目网址
	*       startTime: @value String              *         项目开始时间  格式为：2016.10.09
	*       endTime: @value String 			      *         项目结束时间  格式为：2016.10.09
	*       projectExplain: @value String         *         项目说明
	*       projectLabel: @value Array            *         项目技术标签 
			projectThumbnail: @value String       *         缩略图地址
	*       
	*   }
*/

var projects = [
		{
			projectName:"网易邮箱6.0-fullpage.js",
			projectWebsite:"cases/wangyi/网易邮箱6.0.html",
		    startTime:"",
			endTime:"",
			projectExplain:"采用fullpage.js全屏滚动插件完成的网易邮箱6.0，项目难点在于动画时间的调试，通过该项目熟悉了该插件的使用方法及css3动画相关知识。",
			projectLabel:["html","css","jQuery","fullpage.js"],
			projectThumbnail:"images/icon/wangyi.png"
		},
		{
			projectName:"购物车商品选送-Vue",
			projectWebsite:"cases/shopcar/cart.html",
		    startTime:"",
			endTime:"",
			projectExplain:"本项目结合商品加入购物车，选择配送地址的流程，采用Vue2.0完成，并使用Vue-resource插件获取模拟数据。通过该项目熟悉了Vue2.0的各种指令、事件及过滤器的使用，了解了ES6的相关知识。",
			projectLabel:["html","css","javaScript","Vue"],
			projectThumbnail:"images/icon/shopcar.png"
		},
		{
			projectName:"ToDoList-Vue",
			projectWebsite:"cases/todolist/todolist.html",
		    startTime:"",
			endTime:"",
			projectExplain:"本项目采用Vue完成，可以完成新建、删除、编辑任务及确认任务状态，使用localStorage存储任务，利用hashChange根据任务状态切换显示列表。通过该项目熟悉了Vue的相关指令、事件及过滤器和计算属性的使用，对Vue有了更进一步的了解。",
			projectLabel:["html","css","javaScript","Vue"],
			projectThumbnail:"images/icon/todolist.png"
		},
		{
			projectName:"音乐播放器",
			projectWebsite:"cases/musicPlayer/music.html",
		    startTime:"",
			endTime:"",
			projectExplain:"播放页面的整体布局借鉴了QQ音乐播放页面，通过html5中的Audio标签，使用JQuery模拟了音乐播放器的几个主要功能，如上下曲切换，播放暂停切换，播放列表，音量调节，歌曲进度调节，并获取音乐真实频谱，使用canvas进行可视化的呈现。",
			projectLabel:["html","css","javaScript","JQuery"],
			projectThumbnail:"images/icon/music.png"
		},
		{
			projectName:"百度网盘",
			projectWebsite:"cases/baiduyun/百度云.html",
		    startTime:"",
			endTime:"",
			projectExplain:"本项目为仿“百度网盘”页面的作品，全部使用原生js完成，主要实现百度网盘对文件夹的相关操作，包括新建、重命名、删除等，双击文件夹可打开该文件夹，拖动文件夹可完成文件夹的移动，实现文件夹的框选功能。通过此项目进一步熟悉了原生js的编码，对BOM和DOM操作有了进一步的了解。",
			projectLabel:["html","css","javaScript"],
			projectThumbnail:"images/icon/project-3.png"
		},
		{
			projectName:"新浪开放平台首页",
			projectWebsite:"cases/page/sina/sina.html",
		    startTime:"",
			endTime:"",
			projectExplain:"使用html、css完成新浪平台首页静态页面，兼容各浏览器，ie兼容至ie6",
			projectLabel:["html","css"],
			projectThumbnail:"images/icon/project-1.png"
		},
		{
			projectName:"电商网站静态页面",
			projectWebsite:"cases/page/business/bussines.html",
		    startTime:"",
			endTime:"",
			projectExplain:"使用html、css完成电商网站静态页面的编写，并兼容各浏览器",
			projectLabel:["html","css"],
			projectThumbnail:"images/icon/project-2.png"
		}	
]
