/**
 * js 字符串校验类，主要用于常见的字符串校验，手机号，座机号，邮箱等
 * @author L
 * @DATE 2017-12-26
 * */
var LValidate = ({
	
	/**
	 * 校验是否为手机号
	 * @param str
	 * @return bool   true 是  false 否
	 * */
	isCellPhoneNumber : function(str) {
		if(str == null) {
			return false;
		}
		var regph= /^1\d{10}$/;
		var isPhone = str.match(regph);
		if(isPhone == null) {
			return false;
		}
		return true;
	},
	
	/**
	 * 校验是否为座机号
	 * @param str
	 * @return bool   true 是  false 否
	 * */
	isTelephoneNumber : function(str) {
		if(str == null) {
			return false;
		}
		var regx = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;//验证座机号
		var isPhone = str.match(regx);
		if(isPhone == null) {
			return false;
		}
		return true;
	},
	
	/**
	 * 校验用户名是否只包含英文数字下划线
	 * @param str
	 * @return bool   true 是  false 否
	 * */
	isUserName : function(str) {
		if(str == null) {
			return false;
		}
		var regUs = new RegExp(/^\w+$/);//验证用户名
		var rightUsrename = str.match(regUs);
		if(rightUsrename == null) {
			return false;
		}
		return true;
	},
	
	/**
	 * 校验是否正确的邮箱号码
	 * @param str
	 * @return bool   true 是  false 否
	 * */
	isEmail : function(str) {
		if(str == null) {
			return false;
		}
		var regUs = new RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/);//验证用户名
		var rightUsrename = str.match(regUs);
		if(rightUsrename == null) {
			return false;
		}
		return true;
	}
	
});