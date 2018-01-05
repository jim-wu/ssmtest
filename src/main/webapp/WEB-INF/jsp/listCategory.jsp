<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.*" isELIgnored="false"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<title>SSMTEST</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery-3.2.1.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/listCategory.js"></script>
<style type="text/css">
td {
	width: 50px;
	height: 30px;
}

td input {
	width: 46px;
	height: 24px;
}

a {
	cursor: pointer;
}
</style>
</head>
<body>
	<div align="center">
	    <br />
		<form id="getCategory" action="getCategory" method="post">
			<label>编号：</label>
			<input type="text" name="id" value="" onkeyup="this.value=this.value.replace(/\s+/g,'')"><br />
			<br />
			<label>名称：</label>
			<input type="text" name="name" value="" onkeyup="this.value=this.value.replace(/\s+/g,'')"><br />
			<br />
			<!-- <input type="submit" value="查询"> -->
		</form>
		<input id="select" type="button" value="查询"><br />
		<br />
		<table id="tableData" style="text-align: left;cellspacing=0" border='1'>
			<tr>
				<td>id</td>
				<td>name</td>
				<td>delete</td>
				<td>edit</td>
			</tr>
			<c:forEach items="${cs}" var="c" varStatus="st">
				<tr id="tr_${st.index + 1}">
					<td>${c.id}</td>
					<td id="td_${c.id}">${c.name}</td>
					<td><a onclick="deleteCategory('${st.index + 1}', '${c.id}')">删除</a></td>
					<td><a onclick="edit('${c.id}', 'edit', '${c.name}')" id="edit_${c.id}">编辑</a></td>
				</tr>
			</c:forEach>
		</table>
		<br />
		<form action="addCategory" method="post" onsubmit="return check()" accept-charset="UTF-8">
			<label>编号：</label>
			<input type="text" name="id" id="addId" value="" onkeyup="this.value=this.value.replace(/\s+/g,'')"><br />
			<br />
			<label>名称：</label>
			<input type="text" name="name" value="" onkeyup="this.value=this.value.replace(/\s+/g,'')"><br />
			<br />
			<input type="submit" value="增加类型">
		</form>
	</div>
</body>
</html>