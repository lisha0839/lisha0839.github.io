
/*		前端知识汇总&案例展示
	*   {
	*       caseName: @value String            		*         案例总标题
	*       caseList: @value Array         			*         案例说明信息
	*       	caseTitle: @value String            *         案例标题  
	*      		publishTime: @value String 			*         案例上传时间  格式为：2016.10.09 08:00
	*       	caseThumbnail: @value String        *         缩略图地址
	*       	caseDescription: @value String      *         案例描述 
				caseWebsite: @value String       	*         案例网址
	*       
	*   }
*/




var casees = [
		{
			caseName:"js入门",
			caseList:[
				{
					caseTitle:"模拟手机短信发送",
					publishTime:"",
					caseThumbnail:"cases/入门/img/1-模拟手机短信发送.gif",
					caseDescription:"描述：涉及到的知识点是判断、字符串拼接，以及布局方面的小技巧，比如提交留言后，A用户在左，B用户在右"
					,caseWebsite:"cases/入门/1-模拟短信会话.html"
				},
				{
					caseTitle:"图片切换",
					publishTime:"",
					caseThumbnail:"cases/入门/img/2-图片顺序与循环切换.gif",
					caseDescription:"描述：涉及到的是click事件、变量",
					caseWebsite:"cases/入门/2-图片顺序与循环切换.html"
				},
				{
					caseTitle:"生成V字形",
					publishTime:"",
					caseThumbnail:"cases/入门/img/3-生成V字形.gif",
					caseDescription:"描述：多次点击改变V字方向，for循环，取模%判断方向，拼接字符串",
					caseWebsite:"cases/入门/3-生成V字形.html"
				}
			]
		},
		{
			caseName:"this应用，数据类型",
			caseList:[
				{
					caseTitle:"1-带缩略图的图片切换",
					publishTime:"2016-8-2",
					caseThumbnail:"cases/this应用/img/1-带缩略图的图片切换.gif",
					caseDescription:"描述：鼠标移入li,显示对应图片的缩略图，点击切换图片",
					caseWebsite:"cases/this应用/1-带缩略图的图片切换.html"
				},
				{
					caseTitle:"2-简易商品计算器",
					publishTime:"",
					caseThumbnail:"cases/this应用/img/2-简易商品计算器.png",
					caseDescription:"描述：判断最大值，函数传参，parseInt，parseFloat",
					caseWebsite:"cases/this应用/2-简易商品计算器.html"
				},
				{
					caseTitle:"3-选项卡套选项卡",
					publishTime:"",
					caseThumbnail:"cases/this应用/img/3-选项卡套选项卡.png",
					caseDescription:"描述：函数传参，this",
					caseWebsite:"cases/this应用/3-选项卡套选项卡.html"
				},
				{
					caseTitle:"4-模仿百度评分",
					publishTime:"",
					caseThumbnail:"cases/this应用/img/4-模仿百度评分.png",
					caseDescription:"描述：模仿百度文库评分，onmouseover、onmouseout、onclick",
					caseWebsite:"cases/this应用/4-模仿百度评分.html"
				},
				{
					caseTitle:"5-反选",
					publishTime:"",
					caseThumbnail:"cases/this应用/img/5-反选.png",
					caseDescription:"描述：mouseover、mouseout对应不同的背景色，选中与未选中对应不同背景色，可全选",
					caseWebsite:"cases/this应用/5-反选.html"
				},
				{
					caseTitle:"6-模仿京东筛选功能",
					publishTime:"",
					caseThumbnail:"cases/this应用/img/6-模仿京东筛选功能.png",
					caseDescription:"描述：函数传参",
					caseWebsite:"cases/this应用/6-模仿京东筛选功能.html"
				}
			]
		},{
			caseName:"定时器",
			caseList:[
				{
					caseTitle:"1-淘宝广告",
					publishTime:"",
					caseThumbnail:"cases/定时器/img/1-淘宝广告.png",
					caseDescription:"正序走左侧图片，倒序走右侧图片；鼠标移入，定时器停止；移出，定时器开启"
					,caseWebsite:"cases/定时器/1-淘宝广告.html"

				},
				{
					caseTitle:"2-掉下去，飘回来",
					publishTime:"",
					caseThumbnail:"cases/定时器/img/2-掉下去，飘回来.png",
					caseDescription:"描述：考察对定时器的管理；点击document，div向下运动；在最后一个div运动结束前，再次点击无效；结束后点击，反方向运动"
					,caseWebsite:"cases/定时器/2-掉下去，飘回来.html"

				},
				{
					caseTitle:"3-加分",
					publishTime:"",
					caseThumbnail:"cases/定时器/img/3-加分.gif",
					caseDescription:"描述：考察定时器回调函数的使用"
					,caseWebsite:"cases/定时器/3-加分.html"

				},
				{
					caseTitle:"4-选项卡嵌套",
					publishTime:"",
					caseThumbnail:"cases/定时器/img/4-选项卡嵌套.png",
					caseDescription:"描述：数据格式，定时器，函数传参"
					,caseWebsite:"cases/定时器/4-选项卡嵌套.html"

				},
			]
		},
		{
			caseName:"日期对象、时钟倒计时",
			caseList:[
				{
					caseTitle:"1-翻页时钟",
					publishTime:"",
					caseThumbnail:"cases/日期对象/img/1-翻页时钟.gif",
					caseDescription:"",
					caseWebsite:"cases/日期对象/1-翻页时钟.html"

				},
				{
					caseTitle:"2-带文字的无缝切换轮播图",
					publishTime:"",
					caseThumbnail:"cases/日期对象/img1/2-带文字的无缝切换轮播图.gif",
					caseDescription:"",
					caseWebsite:"cases/日期对象/2-带文字的无缝切换轮播图.html"

				},
				{
					caseTitle:"3-商品抢购",
					publishTime:"",
					caseThumbnail:"cases/日期对象/img1/3-商品抢购.gif",
					caseDescription:"new Date(),抖动函数使用，倒计时的计算，字符串的拼接",
					caseWebsite:"cases/日期对象/3-商品抢购.html"

				},
				{
					caseTitle:"4-简易日历",
					publishTime:"",
					caseThumbnail:"cases/日期对象/img1/4-简易日历.png",
					caseDescription:"new Date(),字符串的拼接",
					caseWebsite:"cases/日期对象/4-简易日历.html"

				}
			]
		},{
			caseName:"字符串、数组",
			caseList:[
				{
					caseTitle:"1-文字搬运工",
					publishTime:"",
					caseThumbnail:"cases/字符串/img/1-文字搬运工.png",
					caseDescription:"字符串的substing、slice方法，定时器setInterval，清除定时器clearInterval",
					caseWebsite:"cases/字符串/1-文字搬运工.html"
				},
				{
					caseTitle:"2-查找、替换",
					publishTime:"",
					caseThumbnail:"cases/字符串/img/2-查找、替换.png",
					caseDescription:"字符串的indexOf、split方法，数组的join方法",
					caseWebsite:"cases/字符串/2-查找、替换.html"
				},
				{
					caseTitle:"3-图片排序",
					publishTime:"",
					caseThumbnail:"cases/字符串/img/3-图片排序.png",
					caseDescription:"随机数Math.random(),数组sort方法",
					caseWebsite:"cases/字符串/3-图片排序.html"

				},
			]
		},
		{
			caseName:"DOM、BOM、事件",
			caseList:[
				{
					caseTitle:"1-详情提示",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/1-详情提示.png",
					caseDescription:"获取元素宽高、设置元素位置",
					caseWebsite:"cases/DOM/1-详情提示.html"
				},
				{
					caseTitle:"2-表格数据操作",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/2-表格数据操作.gif",
					caseDescription:"DOM节点的创建、删除、移动",
					caseWebsite:"cases/DOM/2-表格数据操作.html"
				},
				{
					caseTitle:"3-招聘信息",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/3-招聘信息.png",
					caseDescription:"hash值、onhashchange事件、分页显示",
					caseWebsite:"cases/DOM/list.html"
				},
				{
					caseTitle:"4-淘宝放大镜",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/4-淘宝放大镜.png",
					caseDescription:"事件对象、鼠标坐标、比例计算",
					caseWebsite:"cases/DOM/4-淘宝放大镜.html"
				},
				{
					caseTitle:"5-八方拖拽",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/5-八方拖拽.png",
					caseDescription:"可对div进行上、下、左、右、上左、上右、下左、下右8个方向拖拽改变大小",
					caseWebsite:"cases/DOM/5-八方拖拽.html"
				},
				{
					caseTitle:"6-点击生成方块",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/6-点击生成方块.png",
					caseDescription:"模拟框选，mousedown、mousemove、mouseup事件",
					caseWebsite:"cases/DOM/6-点击生成方块.html"
				},
				{
					caseTitle:"7-键盘控制多方向div移动",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/7-键盘控制多方向div移动.png",
					caseDescription:"键盘事件，e.which",
					caseWebsite:"cases/DOM/7-键盘控制多方向div移动.html"
				},
				{
					caseTitle:"8-模拟滚动条",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/8-模拟滚动条.png",
					caseDescription:"鼠标滚轮事件",
					caseWebsite:"cases/DOM/8-模拟滚动条.html"
				},
				{
					caseTitle:"9-照片墙",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/9-照片墙.png",
					caseDescription:"碰撞检测，图片可拖动，碰到后于重叠最多的进行位置互换；使用自定义属性记录图片位置；浮动布局转为定位",
					caseWebsite:"cases/DOM/9-照片墙.html"
				},
				{
					caseTitle:"10-旋转木马",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/10-旋转木马.png",
					caseDescription:"使用js模拟css3的tranform",
					caseWebsite:"cases/DOM/10-旋转木马.html"
				}
			]
		}
]