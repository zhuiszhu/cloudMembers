$(function(){
    var ws = new WebSocket("ws://localhost:8000");
    var sktObj = {
        type : "CONNECT",
        code : 200
    };
    var userBox = $("#friendBox");
    var userItem = $('<li><a href="javascript:;"></a></li>');
    ws.onopen = function(event){
        var sktStr = JSON.stringify(sktObj);
        ws.send(sktStr);
    }

    ws.onmessage = function(event){
        var dataObj = JSON.parse(event.data);

        switch(dataObj.type){
            case "USER_NUMBER":
                $("#userNumber").text(dataObj.content);
                break;
            case "USER_LIST":
                updateUserList(dataObj.content);//更新用户列表
                break;
        }

    }

    function updateUserList(userList){
        userBox.empty();
        for(var i in userList){
        console.log(123);
            var item = userItem.clone(false);

            item.attr("data-id" , userList[i]._id);
            item.find("a").text(userList[i].username);

            userBox.append(item);
        }
    }

});