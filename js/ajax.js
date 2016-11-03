$(function() {
    
   var url = "php/ajax.php";
    
     //Write in input and through ajax get infos 
   $("input[name='searchBar']").keyup(function(){
         
       var info = $("input[name='searchBar']").val();
       ajax(url,info);
       
       
   });
    
    // Prevent Form submit
    // Evite de submit form et que ses données soit envoyées via get 
    $("form").submit(function(e){
        e.preventDefault();
        $("div#searchBarResponse").css("display","none"); 
       // console.log("DB");

    });
    
    //Mouse click in autocomplete list
    $(document).on('click','.datas',function(){

        $("input[name='searchBar']").val(this.innerHTML);
        $("div#searchBarResponse").css("display","none"); 
        $("div#finish").html("So that's it the next steps are for you: File: ajax.js line 28.<br/>Make your own code");
            
    });
    
    //Scroll system
     $("input[name='searchBar']").focus(function(){
         scroll();
     });
    
 
    //Form Submit On Click Submit Button
    $(' button[name="searchBarButton"]').click(function(){
       //console.log("Test: Click Form Button to submit :"+$("form#ajaxSearchBar input[name='searchBar']").val());
        $("div#finish").html("So that's it the next steps are for you: File: ajax.js line 41.<br/>Make your own code");
    });
    
    //Form submit On press Enter 
   $("input[name='searchBar']").on('keypress', function (e) {
         if(e.which === 13){
             e.preventDefault();
             $("div#finish").html("So that's it the next steps are for you: File: ajax.js line 48.<br/>Make your own code");
            //console.log("Test : Press Enter :"+$("form#ajaxSearchBar input[name='searchBar']").val()); //send data to db 
         }
         
   });  
    
   
 
});

function scroll(){
    var i=-1;
     $(document).keydown(function(e){
             
             var num = $(".datas").length -1
             if(i > num )
                 i = num;
             
             if (e.which == 40){
                 i++;
                 if(i< 0)
                    i=0;
                    e.preventDefault();
                   $("button[role='"+i+"']").focus();
                          
             }
             else if(e.which == 38){
                    i--;
                    if(i< 0)
                        i=0;
                    e.preventDefault();
                   $("button[role='"+i+"']").focus();
                          
             }
             
              
         });
}


function ajax(url,info){
    
    if(info != ""){

        $.ajax({
            url: url,
            type: "POST",
            data: {
                info: info
                },
            cache: false,
            success: function(code_recu) {
                //console.log(code_recu);
                //  success message
               
                if(!code_recu)
                    $("div#searchBarResponse").css("display","none");
                else{
                    if($("div#searchBarResponse").is(':hidden'))
                       { $("div#searchBarResponse").css("display","block");}
                    $("div#searchBarResponse").html(code_recu);
                }
                
            },
            error: function() {
                // Fail message
               console.log("Error: access to "+url+" isn't possible.");
               
            },
        });
    }
    else{
        if($("div#searchBarResponse").is(':visible'))
            { $("div#searchBarResponse").css("display","none");}
        $("div#searchBarResponse").html("");
    }
           
} 

