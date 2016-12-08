
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
					caseThumbnail:"cases/first/img/case-1.gif",
					caseDescription:"描述：涉及到的知识点是判断、字符串拼接，以及布局方面的小技巧，比如提交留言后，A用户在左，B用户在右"
					,caseWebsite:"cases/first/1.html"
				},
				{
					caseTitle:"图片切换",
					publishTime:"",
					caseThumbnail:"cases/first/img/case-2.gif",
					caseDescription:"描述：涉及到的是click事件、变量",
					caseWebsite:"cases/first/2.html"
				},
				{
					caseTitle:"生成V字形",
					publishTime:"",
					caseThumbnail:"cases/first/img/case-3.gif",
					caseDescription:"描述：多次点击改变V字方向，for循环，取模%判断方向，拼接字符串",
					caseWebsite:"cases/first/3.html"
				}
			]
		},
		{
			caseName:"this应用，数据类型",
			caseList:[
				{
					caseTitle:"1-带缩略图的图片切换",
					publishTime:"2016-8-2",
					caseThumbnail:"cases/this/img/case-1.gif",
					caseDescription:"描述：鼠标移入li,显示对应图片的缩略图，点击切换图片",
					caseWebsite:"cases/this/1.html"
				},
				{
					caseTitle:"2-简易商品计算器",
					publishTime:"",
					caseThumbnail:"cases/this/img/case-2.png",
					caseDescription:"描述：判断最大值，函数传参，parseInt，parseFloat",
					caseWebsite:"cases/this/2.html"
				},
				{
					caseTitle:"3-选项卡套选项卡",
					publishTime:"",
					caseThumbnail:"cases/this/img/case-3.png",
					caseDescription:"描述：函数传参，this",
					caseWebsite:"cases/this/3.html"
				},
				{
					caseTitle:"4-模仿百度评分",
					publishTime:"",
					caseThumbnail:"cases/this/img/case-4.png",
					caseDescription:"描述：模仿百度文库评分，onmouseover、onmouseout、onclick",
					caseWebsite:"cases/this/4.html"
				},
				{
					caseTitle:"5-反选",
					publishTime:"",
					caseThumbnail:"cases/this/img/case-5.png",
					caseDescription:"描述：mouseover、mouseout对应不同的背景色，选中与未选中对应不同背景色，可全选",
					caseWebsite:"cases/this/5.html"
				},
				{
					caseTitle:"6-模仿京东筛选功能",
					publishTime:"",
					caseThumbnail:"cases/this/img/case-6.png",
					caseDescription:"描述：函数传参",
					caseWebsite:"cases/this/6.html"
				}
			]
		},{
			caseName:"定时器",
			caseList:[
				{
					caseTitle:"1-淘宝广告",
					publishTime:"",
					caseThumbnail:"cases/setInterval/img/case-1.png",
					caseDescription:"正序走左侧图片，倒序走右侧图片；鼠标移入，定时器停止；移出，定时器开启"
					,caseWebsite:"cases/setInterval/1.html"

				},
				{
					caseTitle:"2-掉下去，飘回来",
					publishTime:"",
					caseThumbnail:"cases/setInterval/img/2-掉下去，飘回来.png",
					caseDescription:"描述：考察对定时器的管理；点击document，div向下运动；在最后一个div运动结束前，再次点击无效；结束后点击，反方向运动"
					,caseWebsite:"cases/setInterval/2.html"

				},
				{
					caseTitle:"3-加分",
					publishTime:"",
					caseThumbnail:"cases/setInterval/img/3-加分.gif",
					caseDescription:"描述：考察定时器回调函数的使用"
					,caseWebsite:"cases/setInterval/3.html"

				},
				{
					caseTitle:"4-选项卡嵌套",
					publishTime:"",
					caseThumbnail:"cases/setInterval/img/case-4.png",
					caseDescription:"描述：数据格式，定时器，函数传参"
					,caseWebsite:"cases/setInterval/4.html"

				},
			]
		},
		{
			caseName:"日期对象、时钟倒计时",
			caseList:[
				{
					caseTitle:"1-翻页时钟",
					publishTime:"",
					caseThumbnail:"cases/date/img/case-1.gif",
					caseDescription:"",
					caseWebsite:"cases/date/1.html"

				},
				{
					caseTitle:"2-带文字的无缝切换轮播图",
					publishTime:"",
					caseThumbnail:"cases/date/img1/case-2.gif",
					caseDescription:"",
					caseWebsite:"cases/date/2.html"

				},
				{
					caseTitle:"3-商品抢购",
					publishTime:"",
					caseThumbnail:"cases/date/img1/case-3.gif",
					caseDescription:"new Date(),抖动函数使用，倒计时的计算，字符串的拼接",
					caseWebsite:"cases/date/3.html"

				},
				{
					caseTitle:"4-简易日历",
					publishTime:"",
					caseThumbnail:"cases/date/img1/case-4.png",
					caseDescription:"new Date(),字符串的拼接",
					caseWebsite:"cases/date/4.html"

				}
			]
		},{
			caseName:"字符串、数组",
			caseList:[
				{
					caseTitle:"1-文字搬运工",
					publishTime:"",
					caseThumbnail:"cases/string/img/case-1.png",
					caseDescription:"字符串的substing、slice方法，定时器setInterval，清除定时器clearInterval",
					caseWebsite:"cases/string/1.html"
				},
				{
					caseTitle:"2-查找、替换",
					publishTime:"",
					caseThumbnail:"cases/string/img/case-2.png",
					caseDescription:"字符串的indexOf、split方法，数组的join方法",
					caseWebsite:"cases/string/2.html"
				},
				{
					caseTitle:"3-图片排序",
					publishTime:"",
					caseThumbnail:"cases/string/img/case-3.png",
					caseDescription:"随机数Math.random(),数组sort方法",
					caseWebsite:"cases/string/3.html"

				},
			]
		},
		{
			caseName:"DOM、BOM、事件",
			caseList:[
				{
					caseTitle:"1-详情提示",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/case-1.png",
					caseDescription:"获取元素宽高、设置元素位置",
					caseWebsite:"cases/DOM/1.html"
				},
				{
					caseTitle:"2-表格数据操作",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/case-2.gif",
					caseDescription:"DOM节点的创建、删除、移动",
					caseWebsite:"cases/DOM/2.html"
				},
				{
					caseTitle:"3-招聘信息",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/case-3.png",
					caseDescription:"hash值、onhashchange事件、分页显示",
					caseWebsite:"cases/DOM/list.html"
				},
				{
					caseTitle:"4-淘宝放大镜",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/case-4.png",
					caseDescription:"事件对象、鼠标坐标、比例计算",
					caseWebsite:"cases/DOM/4.html"
				},
				{
					caseTitle:"5-八方拖拽",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/case-5.png",
					caseDescription:"可对div进行上、下、左、右、上左、上右、下左、下右8个方向拖拽改变大小",
					caseWebsite:"cases/DOM/5.html"
				},
				{
					caseTitle:"6-点击生成方块",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/case-6.png",
					caseDescription:"模拟框选，mousedown、mousemove、mouseup事件",
					caseWebsite:"cases/DOM/6.html"
				},
				{
					caseTitle:"7-键盘控制多方向div移动",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/7-键盘控制多方向div移动.png",
					caseDescription:"键盘事件，e.which",
					caseWebsite:"cases/DOM/7.html"
				},
				{
					caseTitle:"8-模拟滚动条",
					publishTime:"",
					caseThumbnail:"cases/DOM/img/8-模拟滚动条.png",
					caseDescription:"鼠标滚轮事件",
					caseWebsite:"cases/DOM/8.html"
				},
				{
					caseTitle:"9-照片墙",
					publishTime:"",
					caseThumbnail:"",
					caseDescription:"碰撞检测，图片可拖动，碰到后于重叠最多的进行位置互换；使用自定义属性记录图片位置；浮动布局转为定位",
					caseWebsite:"cases/DOM/9.html"
				},
				{
					caseTitle:"10-旋转木马",
					publishTime:"",
					caseThumbnail:"",
					caseDescription:"使用js模拟css3的tranform",
					caseWebsite:"cases/DOM/10.html"
				}
			]
		}
]