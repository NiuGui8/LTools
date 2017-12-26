/**
 * 日期操作类
 * @author L
 * @date 2017-12-25
 */

var LDate = ({
	currentTime: new Date(),//当前日期

	/**
	 * 判断年份是否为闰年 
	 * @param year 年份
	 * @return bool
	 * */
	isLeapYear : function(year) {
		if(year > 172800) {
			if(year % 172800 == 0 && year % 3200 == 0) {
				return true;
			}
			return false;
		}else {
			if(year % 4 == 0) {
				if(year % 100 == 0) {
					if(year % 400 == 0) {
						return true;
					}
					return false;
				}
				return true;
			}else {
				return false;
			}
		}
	},
	
	/**
	 * 获取某月的天数
	 * @param year 年份
	 * @param month 月份
	 * @return num 天数
	 * */
	getDaysOfMonth : function(year,month) {
		var isLY = this.isLeapYear(year);
		if(month == 4 || month == 6 || month == 9 || month == 11 || month == "4" || month == "6" || month == "9" || month == "11") {
			return 30;
		}if (month == 2 || month == "2") {
			return isLY ? 29 : 28;
		}else {
			return 31;
		}
	},
	
	/**
	 * 添加指定的月数
	 * @param date 初始日期
	 * @param num  月数
	 * @return dateString 截止日期字符串:xxxx-xx-xx
	 * */
	appendMonth : function(date,num) {
		if(typeof(num)== 'string') {
			num = parseInt(num);
		}
		var year = date.getFullYear();
		var m = date.getMonth() + 1;
		var d = date.getDate();
		var appenMonth = m + num;
		if(appenMonth > 12) {
			var appendYear = Math.floor(appenMonth / 12);
			var mm = appenMonth % 12;
			appendYear = mm == 0 ? appendYear -1 : appendYear;
			year = appendYear + year;
			m = mm==0 ? m : mm;
			var dayOfM = this.getDaysOfMonth(year, m);
			if(d > dayOfM) {
				d = dayOfM;
			}
		}
		m = m<10 ? "0"+m : m;
		d = d<10 ? "0"+d :d
		return year + "-" + m + "-" + d;
	},
	
	/**
	 * 添加指定的天数
	 * @param date 初始日期
	 * @param num 天数
	 * @return date 添加后的日期
	 * */
	appenDay : function(date,num) {
		var t = date.getTime();
		t = t + (num * 24 * 3600 * 1000);
		var result = this.format( new Date(t), "yyyy-MM-dd HH:mm:ss");
		return result;
	},
	
	/**
	 * 格式化日期
	 * @param date 日期
	 * @format format 格式字符串 如：yyyy-MM-dd HH:mm:ss  
	 * @return dateString 指定格式的时间字符串 如：2017-12-25
	 * */
	format : function(date,format) {
		if(typeof(date)== 'string' && date.constructor == String){
			date = date.replace(/-/g,"/");
			date = date.replace(/T/g," ");
			return date;
		}
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var mString = month < 10 ? "0"+ month : month;
		var day = date.getDate();
		var dString = day < 10 ? "0"+ day : day;
		var hour = date.getHours();
		var hString = hour < 10 ? "0"+ hour : hour;
		var minute = date.getMinutes();
		var minuteString =  minute < 10 ? "0"+ minute : minute;
		var second = date.getSeconds();
		var SeString = second < 10 ? "0"+ second : second;
		if(format == "" || format == undefined || format == null) {
			var result = year + "-" + mString + "-" + dString + " " + hString + ":" + minuteString + ":" + SeString; 
		}else {
			var result = format.replace("yyyy", year);
			result = result.replace("MM", mString);
			result = result.replace("dd", dString);
			result = result.replace("HH", hString);
			result = result.replace("mm", minuteString);
			result = result.replace("ss", SeString);
		}
		return result;
	},
	
	/**
	 * 求两个日期间的天数差
	 * @param date1
	 * @param date2
	 * @return num
	 * */
	getDValueOfDate: function(date1,date2) {
		if(typeof(date1)== 'string') {
			date1 = new Date(date1);
		}
		if(typeof(date2)== 'string') {
			date2 = new Date(date2);
		}
		var d = date2.getTime() - date1.getTime();
		var result = d/(24*3600*1000);
		result = Math.floor(result);
		return result;
	},
	
	/**
	 * 倒计时
	 * @param startTime 初始时间  传null时，默认初始时间为当前时间
	 * @param engTime 结束时间   传null时，默认结束时间为当前时间
	 * @param countString 倒计时字符串（传接收倒计时结果的对象）
	 * 注意：startDate 和 endTime 都为null时，countString 为"00:00:00"
	 * */
	countTimeDesc : function(startTime,endTime,countString) {
		if((startTime == null && endTime ==null) || (startTime == undefined && endTime == undefined) || (startTime == "" && endTime == "")) {
			countString = "00:00:00";
			return countString;
		}
		
		if(startTime == null || startTime == undefined || startTime == "") {
			startTime == new Date();
		}else if(typeof(startTime)== 'string') {
			startTime = new Date(startTime);
		}
		
		if(endTime == null || endTime == undefined || endTime == "") {
			endTime == new Date();
		}else if(typeof(endTime)== 'string') {
			endTime = new Date(endTime);
		}
		
		var d = (endTime.getTime() - startTime.getTime())/1000;
		d = Math.floor(d);
		this.countDesc(d,countString);
	},
	
	/**
	 * 倒计时
	 * @param d 秒数
	 * @param countString 倒计时字符串
	 * */
	countDesc : function(d,countString) {
		if(d < 0) {
			countString = "00:00:00";
			return countString;
		}
		var that = this;
		var hh = "00";
		var mm = "00";
		var ss = "00";
		if(d >= 0 && d < 60) {
			ss = d < 10 ? "0"+d : d;
		}else if(d <= 60 && d < 3600) {
			var m = Math.floor(d/60);
			var s = d % 60;
			mm = m < 10 ? "0"+m : m;
			ss = s < 10 ? "0"+s : s;
		}else {
			var h = Math.floor(d/3600);
			var m = Math.floor((d % 3600)/60);
			var s = (d % 3600) % 60 ;
			hh = h < 10 ? "0"+h : h;
			mm = m < 10 ? "0"+m : m;
			ss = s < 10 ? "0"+s : s;
		} 
		countString = hh + ":" + mm + ":" + ss;
		d --;
		setTimeout(function() {
			that.countDesc(d,countString);
		},1000);
	}
})