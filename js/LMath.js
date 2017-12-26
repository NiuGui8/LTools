/**
 *数学操作类
 * @author L
 * @date 2017-12-26
 */

var LMath = ({
	/**
	 * 求以10为底的对数
	 * @param num
	 * @return result
	 * */
	lg : function(num) {
		if(num == null || num == undefined || num == "" || num == 0 || num == "0") {
			return null;
		}
		if(typeof(num)== 'string') {
			try {
				num = parseFloat(num);
			} catch (e) {
				console.error("传入的参数有误，请使用数字或数字字符串");
				return "参数错误";
			}
		}
		var result = Math.log(num) / Math.log(10);
		return result;
	},
	
	/**
	 * 求以x为底的对数
	 * @param x
	 * @param num
	 * @return result
	 * */
	log : function(num,x) {
		if(num == null || num == undefined || num == "" || num == 0 || num == "0") {
			return null;
		}
		if(typeof(num)== 'string') {
			try {
				num = parseFloat(num);
			} catch (e) {
				console.error("传入的参数有误，请使用数字或数字字符串");
				return "参数错误";
			}
		}
		
		if(x == null || x == undefined || x == "" || x == 0 || x == "0") {
			return null;
		}
		if(typeof(x)== 'string') {
			try {
				x = parseFloat(x);
			} catch (e) {
				console.error("传入的参数有误，请使用数字或数字字符串");
				return "参数错误";
			}
		}
		
		try {
			var result = Math.log(num) / Math.log(x);
			return result;
		} catch(e) {
			console.error("请确认传入正确的参数");
			return "参数错误";
		}
	}
})