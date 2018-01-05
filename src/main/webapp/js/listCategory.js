$(function() {
    $('#select').click(function() {
	var data = $("#getCategory").serialize();
	$.ajax({
	    url : 'getCategory',
	    type : 'post',
	    dataType : 'json',
	    data : data,
	    success : function(data) {
		var trStr = "<tr><td>id</td><td>name</td><td>delete</td><td>edit</td></tr>";
		for ( var category in data) {
		    trStr += "<tr id='tr_"
			+ (parseInt(category) + 1)
			+ "'><td>"
			+ data[category].id
			+ "</td><td id='td_"
			+ data[category].id
			+ "'>"
			+ data[category].name
			+ "</td><td><a onclick='deleteCategory(\""
			+ (parseInt(category) + 1)
			+ "\", \""
			+ data[category].id
			+ "\")'>删除</a></td><td><a onclick='edit(\""
			+ data[category].id
			+ "\", \"edit\", \""
			+ data[category].name
			+ "\")' id='edit_"
			+ data[category].id
			+ "'>编辑</a></td></tr>"
		}
		$('#tableData').html(trStr);
	    }
	});
    })
});
function deleteCategory(index, id) {
    $('#tr_' + index).remove();
    $.ajax({
	url : 'deleteCategory',
	type : 'post',
	data : {
	    "id" : id
	}
    });
};
function edit(id, type, originalName) {
    if (type == "edit") {
	$('#td_' + id).html("<input  type='text' value='" + $('#td_' + id).text() + "' onkeyup='this.value=this.value.replace(/\\s+/g,\"\")'>");
	$('#edit_' + id).text('确认');
	$('#edit_' + id).attr('onclick', 'edit("' + id + '", "update", "' + originalName + '")');
	originalName = $('#td_' + id).text();
    } else if (type == "update") {
	if (originalName == $('#td_' + id).children().val()) {
	    $('#td_' + id).html(originalName);
	    $('#edit_' + id).text('编辑');
	    $('#edit_' + id).attr('onclick', 'edit("' + id + '", "edit", "' + $('#td_' + id).text() + '")');
	} else if (originalName != $('#td_' + id).children().val()) {
	    $.ajax({
		url : 'updateCategory',
		type : 'post',
		data : {
		    "id" : id,
		    "name" : $('#td_' + id).children().val()
		},
		success : function(data) {
		    if (data == 1) {
			$('#td_' + id).html($('#td_' + id).children().val());
		    } else {
			$('#td_' + id).html(originalName);
		    }
		    $('#edit_' + id).text('编辑');
		    $('#edit_' + id).attr('onclick', 'edit("' + id + '", "edit", "' + $('#td_' + id).text() + '")');
		}
	    });
	}
    }
};
function check() {
    var addId = $('#addId').val();
    var flag = true;
    if (addId == "") {
	alert("id不能置空");
	flag = false;
    } else {
	var request = new XMLHttpRequest();
	request.open("POST", "checkCategory", false);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function() {
	    if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
		if (request.responseText == 1) {
		    flag = false;
		    alert("id已存在");
		}
	    } else {
		flag = false;
		alert("请求失败");
	    }
	}
	request.send("id=" + addId);

	/*$.ajax({
	    async : false,
	    cache : false,
	    url : 'checkCategory',
	    type : 'post',
	    data : {
		"id" : addId
	    },
	    success : function(data) {
		if (data == 1) {
		    flag = false;
		}
	    }
	});*/
	
    }
    return flag;
};