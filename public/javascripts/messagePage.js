$(function(){
    var ws = new WebSocket("ws://localhost:8000");
    var sktObj = {
        type : "CONNECT",
        code : 200
    };
    var userBox = $("#friendBox");
    var messageFun = $("#messageFunction");
    var sendObj = null;
    var userItem = $('<li><a href="javascript:;"></a></li>');
    var userId = $("#userBox").attr("data-user");
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

    //好友列表点击事件委托
    userBox.on("click","li" , function(e){
        var liItem = $(this);
        sendObj = {
            id : liItem.attr("data-id"),
            username : liItem.find("a").text()
        }
        messageFun.find("h2").text(sendObj.username);
    })

    function updateUserList(userList){
        userBox.empty();
        for(var i in userList){

            if(userList[i]._id != userId){
                var item = userItem.clone(false);

                item.attr("data-id" , userList[i]._id);
                item.find("a").text(userList[i].username);

                userBox.append(item);
            }
        }
    }

});