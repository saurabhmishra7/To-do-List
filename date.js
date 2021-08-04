//jshint esversion:6

module.exports.getdatee=function getdate(){
    var today=new Date();
        var option={
            weekday:"long",
            month:"long",
            year:"numeric",
        };
        return today.toLocaleDateString("en-US",option);
        
    }




module.exports.getday=function getday(){
    var today=new Date();
        var option={
            weekday:"long",
        
        };
        
        return today.toLocaleDateString("en-US",option);
    }
