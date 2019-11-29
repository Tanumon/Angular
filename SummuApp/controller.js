angular
.module('app',[])
.controller('dataCtrl',function($scope){
    $scope.title = "P O C";
    $scope.ObjToStore=[{
        title:"Hd-Reg",
        total:0,
        entry:0,
        history:[]
    },{
        title:"Ax-Flip",
        total:0,
        entry:0,
        history:[]
    },{
        title:"Ic-Amz",
        total:0,
        entry:0,
        history:[]
    }];
    $scope.add = ()=>{
        angular.forEach($scope.ObjToStore,(value)=>{
            if(value.entry > 0){
                value.total+=+value.entry;
                let mon = new Date().toLocaleDateString('default',{ month: 'short'})
                value.history.push({val: value.entry, month: mon});
                value.entry = 0;
            }
        });
    };
    $scope.returnClass = (obj)=>{
        let id = $scope.ObjToStore.findIndex(element=>element===obj); 
        if((id === 0 && obj.total > 300000) || (id === 1 && obj.total > 200000)){
            return "rchedLimit";
        }
        return "";
    };
});
