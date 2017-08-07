var net  = require("net");
var  chatServer = net.createServer(),
		clientList = [];

chatServer.on("connection",function(client){
	client.name = client.remoteName + ":" + clientPort;

	client.write("Hi,welcome" + client.name);
	clinetList.push(client);

	client.on("data",function(data){
		bordercast(data,client);
	})

	client.on("exit",function(client){
		clientList.splice(clientList.indexof(client),1);
	})

	client.on("error",function(e){
		console.log(e);
	})

})



function bordercast(data,client){
	var clearupList = [];
	for(var i=0;i<clientList.length;i++){
		if(client !== clientList[i]){

			if(clientList[i].writable){
				clientList[i].write(client.name + " says  : " data);
			}else{
				clearupList.push(clientList[i]);
				clientList[i].destroy();
			}
		}
	}


	for(var j=0;j<clearupList.length;j++){
		clientList.splice(clientList.indexof(clearupList[i]),1);
	}
}

chatServer.listen(9000);


