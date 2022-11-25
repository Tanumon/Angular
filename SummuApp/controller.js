angular
.module('app',[])
.controller('dataCtrl',function($scope){
    $scope.title ="Tracker";
    $scope.IsEdit = false;
    $scope.userInput= "";
    $scope.ObjToStore=[{
        title:"Hd-Reg",
        anualYear:"12th Nov",
        ExCap:100000,
        allowedAccess:8,
        total:0,
        entry:0,
        count:0,
        history:[]
    },{
        title:"Ax-Flip",
        anualYear:"15th Nov",
        ExCap:200000,
        allowedAccess:4,
        total:0,
        entry:0,
        count:0,
        history:[]
    },{
        title:"Ic-Amz",
        total:0,
        entry:0,
        history:[]
    },{
        title:"Ax-ACE",
        anualYear:"15th Apr",
        ExCap:200000,
        allowedAccess:4,
        total:0,
        entry:0,
        count:0,
        history:[]
    }
];

    document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
		var storage = window.localStorage;
		if(storage.getItem('objToStore')) {
			updateData(storage.getItem('objToStore'),true);
		}
    }
    $scope.init = function () {
        var storage = window.localStorage;
		if(storage.getItem('objToStore')) {
			updateData(storage.getItem('objToStore'),false);
		}
    }
    $scope.add = ()=>{
        angular.forEach($scope.ObjToStore,(value)=>{
            if(value.entry > 0){
                value.total+=+value.entry;
                let mon = new Date().toLocaleDateString('default',{ month: 'short'})
                value.history.push({val: value.entry, month: mon});
                value.entry = 0;
            }
        });
        setData();
        //updateData(storage.getItem('objToStore'),false);
    };

    $scope.send = ()=>{
        setData();
        let sender = "tbej@rocketmail.com";
        let reciver = "tbej@rocketmail.com"
        let subject = "From Summu App on" + new Date().toLocaleDateString();
        let email = 'mailto:'+ sender+'?subject=' + subject + '&body='+ ''+JSON.stringify({});
        //$scope.ObjToStore
        console.log(JSON.stringify($scope.ObjToStore));
        console.log(email);
        window.open(email);
    };

    $scope.load=()=>{
        $scope.IsEdit = true;
    };
    $scope.save=()=>{
        $scope.IsEdit = false;
        if($scope.userInput!==""){
            let temp = $scope.userInput;
            $scope.userInput = "";
            updateData(temp,false);
        }
    };
    $scope.incr = (val)=>{
        $scope.ObjToStore.find(element=> element==val).count++;
        setData();
    }
    $scope.decr = (val)=>{
        $scope.ObjToStore.find(element=> element==val).count--;
        setData();
    }
    $scope.returnValueClass = (obj)=>{
        let id = $scope.ObjToStore.findIndex(element=>element===obj); 
        if((id !== 2 && obj.total > obj.ExCap)){
            return "rchedLimit";
        }
        return "";
    };
    $scope.returnCountClass = (obj)=>{
        let id = $scope.ObjToStore.findIndex(element=>element===obj); 
        if((id === 0 && obj.count > obj.allowedAccess) || (id === 1 && obj.count > obj.allowedAccess)){
            return "rchedLimit";
        }
        return "";
    }
    updateData=(data,isToDigest)=>{
        var jsonObj = JSON.parse(data);
        console.log("from update");
        console.log(jsonObj);
        $scope.ObjToStore = jsonObj;
        if(isToDigest){
            $scope.$apply();
        }
    }
    setData = ()=>{
        var jsonStr = JSON.stringify($scope.ObjToStore);
        var storage = window.localStorage;
        storage.setItem('objToStore', jsonStr);
    }
});
