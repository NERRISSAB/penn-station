$(document).ready(function() {

   $('#submitChoice').click(function () {
       
       var checkPix =
       $('.selectPix option:selected').val();
       
        switch(checkPix) {
            
            case "0":
                
                $('#pixStart1').removeClass('hidePixDivs');
                $('#mainEntrance1').addClass('hidePixDivs');
                $('#aerialView1').addClass('hidePixDivs');
                $('#waitingRoom1').addClass('hidePixDivs');
                
        break;
            
            case "1":
                
                $('#pixStart1').addClass('hidePixDivs');
                $('#mainEntrance1').removeClass('hidePixDivs');
                $('#aerialView1').addClass('hidePixDivs');
                $('#waitingRoom1').addClass('hidePixDivs');
                
        break;
                        
            case "2":
                
                $('#pixStart1').addClass('hidePixDivs');
                $('#aerialView1').removeClass('hidePixDivs');
                $('#mainEntrance1').addClass('hidePixDivs');
                $('#waitingRoom1').addClass('hidePixDivs');
                
        break;
                       
            case "3":
                        
                $('#pixStart1').addClass('hidePixDivs');
                $('#waitingRoom1').removeClass('hidePixDivs');
                $('#mainEntrance1').addClass('hidePixDivs');
                $('#aerialView1').addClass('hidePixDivs');
                
        break;
                        
            
            default:
            
           $('.pixStart').text('THERE IS AN ERROR-FIX IT!');
            
            
        }
   });
});
        