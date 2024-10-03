angular
.module('app',[])
.controller('dataCtrl',function($scope){
    $scope.title ="Tracker";
    $scope.IsEdit = false;
    $scope.userInput= "";
    $scope.ObjToStore=[{
        title:"Ax-Flip",
        anualYear:"15th Nov",
        ExCap:350000,
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
    },{
        title:"KT-LG",
        total:0,
        entry:0,
        history:[]
    },
    {
        title:"IDFC-Wlth",
        allowedAccess:8,
        total:0,
        entry:0,
        count:0,
        history:[]
    },
    {
        title:"DBS-5x",
        anualYear:"17th Mar",
        allowedAccess:4,
        ExCap:75000,
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
        let content = JSON.stringify( $scope.ObjToStore, function( key, value ) {
            if( key === "$$hashKey" ) {
                return undefined;
            }
            return value;
        });
        console.log(content);//angular.toJson($scope.ObjToStore));
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
        if(( obj.total > obj.ExCap)){
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
