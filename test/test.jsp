<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html style="width: 100%;height: 100%;">
  <head>
    <base href="<%=basePath%>">
 	<meta charset="utf-8">
 	<link href="filesystem/filesystem.css" rel="stylesheet">
	<script src="LTools/js/LMath.js"></script>
	<script src="filesystem/angular.min.js"></script>
	<script src="LTools/test/test.js"></script>
    <title>仪器文件系统</title>
  </head>
  
  <body style="width: 100%;height: 100%;" ng-app="myApp" ng-controller="myCtrl">
   	<div>
		<input type="text" ng-model="date">
		<input type="text" ng-model="format">
   	</div>
   	<div style="height:60px;">{{fDate}}</div>
   	<button ng-click="formatDate()">点我</button>
  </body>
</html>
