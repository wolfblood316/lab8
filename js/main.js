$(document).ready(function(){
   
    //dynamically load  formcontent.html
    //into .main section
    $('.main').load('content/content.html');
    
    //add event handler to more link
    $('.more').click(load(function(e){
        e.preventDefault();
       $('.dynamic').load('content/content.html');
         $(this).remove();
        
    }));
});