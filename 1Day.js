//Check Off Specific Todos By Clicking
$("ul").on('click','li',function()
{
    
$(this).toggleClass("completed");
});

$("ul").on('click','span',function(event){
   //$(this).parent().fadeOut("slow");
   $(this).parent().fadeOut(function(){
       $(this).remove();
   });
   //$(this).parent().remove();
   
});
$("input").keypress(function(event)
{
   if (event.which===13)
   {
       //grabbing new todo text form input 
       var Todo_text=$(this).val();
       
       //create a new li and add to ul
       $("ul").append(" <li><span>Delete</span> " + Todo_text +"</li>");
       $(this).val('');
    }

});