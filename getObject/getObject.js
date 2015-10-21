/*
		函数名:getObject,
		作用:查看js对象内部属性,
		参数:所要查看的对象,
		返回值:
			{	
				类型：string,
				内容：对象内容,
				使用方法:加载如html文档,
				颜色:
				{
					红色:属性名称,
					蓝色:字符串,
					黑色:数字,
					绿色:函数
				}
			}
	*/
	function getObject(obj)
	{
		return (function get(obj,spaceNum)
		{
			if(typeof obj !="object")
			{
				switch(typeof obj)
				{
					case 'number':
						return '<b>' + obj + '</b>';	
					case 'string':
						return '<b><font color="blue">"' + obj + '"</font></b>';
					case 'function':
						return '<b><font color="green">' + obj + '</font></b>';
					default : return obj;
				}
			}		
			var space = '';
			var spaceMore = '';
			for(var j = 0;j < spaceNum;j++)
			{
				space += '&nbsp;&nbsp;';
			}
			spaceMore = space + '&nbsp;&nbsp;';
			var con = '<br>' + space + '{<br/>';
			j = -1;
			for(var o in obj)
			{
				con += spaceMore + '<font color="red">' + o + '</font> : ' + get(obj[o],spaceNum+1) + '&nbsp;,<br/>';
			}
			var index = con.lastIndexOf(',');
			return con.substr(0,index === -1 ? index.length : index) + '<br/>' + space + '}';
		})(obj,0);
	}