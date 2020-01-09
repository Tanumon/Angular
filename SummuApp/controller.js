angular
.module('app',[])
.controller('dataCtrl',function($scope){
    $scope.title = "P O C";
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
			var jsonObj = JSON.parse(storage.getItem('objToStore'));
            $scope.ObjToStore = jsonObj;
            $scope.$apply();
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
        console.log(obj);
        if((id === 0 && obj.count > 12) || (id === 1 && obj.count > 4)){
            alert("rched");
            return "rchedLimit";
        }
        return "";
    }
    setData = ()=>{
        var jsonStr = JSON.stringify($scope.ObjToStore);
        var storage = window.localStorage;
        storage.setItem('objToStore', jsonStr);
    }
});
