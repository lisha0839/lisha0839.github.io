
/*		技能展示
	*   {
	*       temp: @value String         				*         模板
	*       skillsClassify: @value Array                *         掌握的技能综合
	*       	{
					skillLanguage: @value String        *         技能名称
	*       		percent: @value String              *         技能百分比
	*       		skillTooltip: @value Array          *         对技能的描述
				}
	*   }

	temp 有两个值可选：
		"circle"：饼形
		"columns":圆柱
*/

var skills = {
		temp:"circle",
		skillsClassify:[
		{
			skillLanguage:"javascript",
			percent:"86%",
			skillTooltip:[
				"了解数据类型、作用域闭包等语言特性",
				"掌握定时器、数组及字符串等",
				"深入使用DOM\BOM\EVENT，能完成各类组件开发",
				"掌握JS的数据调用、ajax实现机制、jsonp跨域各类接口调用",
				"掌握面向对象编程，对封装、继承、多态等均有了解",
				"了解正则表达式，熟悉JS兼容性、JS性能提升"
			]
		},
		{
			skillLanguage:"jQuery",
			percent:"70%",
			skillTooltip:[
				"有使用jQuery的开发经验"
			]
		},
		{
			skillLanguage:"html5",
			percent:"70%",
			skillTooltip:[
				"熟练掌握各类语义化标签",
				"熟悉H5文件、拖拽、存储相关内容，有使用音频开发经验"
			]
		},
		{
			skillLanguage:"CSS3",
			percent:"70%",
			skillTooltip:[
				"掌握浮动及文档流特性，注重浏览器兼容性",
				"CSS3圆角、transition、transform等",
				"熟悉移动端开发"
			]
		},
		{
			skillLanguage:"canvas",
			percent:"60%",
			skillTooltip:[
				"能熟练使用相关接口绘制各类图形",
				"能运用canvas开发小游戏",
				"可封装小型图表等数据可视化技术解决方案"
			]
		}
		
	]
}