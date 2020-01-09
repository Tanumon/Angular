angular
.module('app',[])
.controller('dataCtrl',function($scope){
    $scope.title = "P O C";
    $scope.IsEdit = false;
    $scope.userInput= "";
    $scope.ObjToStore=[{
        title:"Hd-Reg",
        total:0,
        entry:0,
        count:0,
        history:[]
    },{
        title:"Ax-Flip",
        total:0,
        entry:0,
        count:0,
        history:[]
    },{
        title:"Ic-Amz",
        total:0,
        entry:0,
        history:[]
    }];

    document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
		var storage = window.localStorage;
		if(storage.getItem('objToStore')) {
			updateData(storage.getItem('objToStore'),true);
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
    };

    $scope.send = ()=>{
        let sender = "tbej@rocketmail.com";
        let subject = "From Summu App on" + new Date().toLocaleDateString();
        let body = JSON.stringify($scope.ObjToStore);
        window.open('mailto:'+ sender+'?subject=' + subject + '&body='+ body);
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
        if((id === 0 && obj.total > 300000) || (id === 1 && obj.total > 200000)){
            return "rchedLimit";
        }
        return "";
    };
    $scope.returnCountClass = (obj)=>{
        let id = $scope.ObjToStore.findIndex(element=>element===obj); 
        if((id === 0 && obj.count > 12) || (id === 1 && obj.count > 4)){
            return "rchedLimit";
        }
        return "";
    }
    updateData=(data,isToDigest)=>{
        var jsonObj = JSON.parse(data);
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
