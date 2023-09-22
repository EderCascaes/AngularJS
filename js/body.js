angular.module("listFones",[] );

angular.module("listFones").controller("listFonesCtrl",  function($scope){

    $scope.show = true;
    $scope.valueInput = "Ederson Mendes";
    $scope.app = "listFones -  AngularJS 1.3";
    $scope.color =  "rgb(235, 241, 242)";

    $scope.addRecord = function(record){
        console.log("contatos : " + record.name)
     //   $scope.records.push({name: $scope.name, fone: $scope.fone});
     //  $scope.records.push({name:name, fone: fone});
         $scope.records.push(angular.copy(record));
         delete $scope.record;
};

    $scope.changeColor = function(SelectedColor){
        console.log("antes color $scope : " + $scope.color)
       
    console.log("cor entrada : " + SelectedColor)
    $scope.color = SelectedColor;
    console.log("color $scope : " + $scope.color)
};

    $scope.deleteRecord = function(records){
    $scope.records = records.filter(function(record){           
        if(!record.selected)  return record;              
    });
};

    $scope.isRecordSelected = function(records){       
    return records.some(function(record){
        return record.selected;
    });     
};

    
    $scope.colors = [
        {color:'rgb(136, 146, 146)'},
        {color:'rgb(128, 120, 240)'},
        {color:'rgb(191, 236, 211)'},
        {color:'rgb(248, 197, 153)'},
        {color:'rgb(235, 241, 242)'}
    ];

    $scope.records = [
        {name:"Lukas" , fone: "98846-5612"},
        {name:"Luiza" , fone: "99988-1234"},
        {name:"Ederson" , fone: "99658-8547"},
        {name:"Julia" , fone: "98457-9854"}
    ];

    $scope.operators = [
        {name:"Claro", codigo:"13", category:"cellfone"},
        {name:"Oi", codigo:"14" , category:"cellfone"},
        {name:"Tim", codigo:"41", category:"cellfone"},
        {name:"Vivo", codigo:"15", category:"cellfone"},
        {name:"GVT", codigo:"31", category:"landline"},
        {name:"Embratel", codigo:"35", category:"landline"},
        {name:"NET", codigo:"45", category:"landline"}
    ];

   
});    