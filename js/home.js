angular.module("listFones",[] );

angular.module("listFones").controller("listFonesCtrl",  function($scope){


    // show and hide
    $scope.imgShow = true;
    $scope.imgHide = true;
    $scope.imgIf = true;
    $scope.arrayNoRepet = [];
    $scope.operatorModalShow = "none"


   

    $scope.valueInput = "Ederson Mendes";
    $scope.app = " AngularJS 1.3";
    $scope.color =  "rgb(235, 241, 242)";

    $scope.addRecord = function(record){
        console.log("contatos : " + record.name)
     //   $scope.records.push({name: $scope.name, fone: $scope.fone});
     //  $scope.records.push({name:name, fone: fone});
         $scope.records.push(angular.copy(record));
         delete $scope.record;
         $scope.operatorForm.SetPristine();

};

$scope.TestAngular  = function(){
    var divconteudo = document.getElementsByClassName("produtosIntTitulo margin-top-30")[0].TEXT_NODE;
    let a = document.getElementById("orcamentoAssuntoForm");
 
    console.log(" divconteudo : "+divconteudo);
    console.log(" divconteudo  a : "+ a)

};

$scope.showfunction = function(){

    if($scope.imgShow == true){        
        $scope.imgShow = false
    }else{
        $scope.imgShow =true;
    }
    this.TestAngular();
};

$scope.hidefunction = function(){

    if($scope.imgHide == true){
        $scope.imgHide = false;        
    }else{
        $scope.imgHide = true;
    }
};




$scope.iffunctionn = function(){

    console.log($scope.imgIf)
    if($scope.imgIf == true){

        $scope.imgIf = false;
        
    console.log(" entro if  "+$scope.imgIf)
    }else{
        $scope.imgIf = true;
        console.log(" entro else  "+$scope.imgIf)
    }
};


  

    $scope.changeColor = function(SelectedColor){       
    $scope.color = SelectedColor;
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


    $scope.changeOperatorModalShow = function(){

    
        if($scope.operatorModalShow === "none"){           
            $scope.operatorModalShow = "block"
        }else{
            document.getElementById("nameModal").value = '';
            document.getElementById("codeModal").value = '';            
            document.getElementById("selectModal").value = "";
            $scope.operatorModalShow = "none";
        }   
    };

 
    
    $scope.isCategorysNoRepet = function(){
        let array = $scope.operators;  
        let conf = false;
        console.log("tamanho "+ array.length);       
        array.forEach(element => {

            $scope.arrayNoRepet.forEach(e =>{
                if(element.category === e)conf = true
            });

            if(conf == false)
            $scope.arrayNoRepet.push(element.category);

            conf = false;
        });
        console.log("array "+ $scope.arrayNoRepet)      
    };



    $scope.addOperator= function(operator){
        console.log("contatos : " + operator.name)  
        $scope.operators.push(angular.copy(operator));
        delete $scope.operator;
        this.changeOperatorModalShow();
    };


    $scope.deleteOperator = function(operators){
    
        $scope.operators = operators.filter(function(operator){           
            if(!operator.selected)  return operator;              
        });
    };

    $scope.isOperatorSelected = function(operators){       
        return operators.some(function(operator){
            return operator.selected;
        });     
    };
    
    
});    