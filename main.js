
var navbarTogglerIcon = $(".navbar-toggler-icon")[0];

$(".navbar-toggler").click(() => {

    if (navbarTogglerIcon.classList.value === "navbar-toggler-icon") {
        navbarTogglerIcon.classList.value = "fas fa-x";
    } 
   else if( navbarTogglerIcon.classList.value == "fas fa-x")
    {
        navbarTogglerIcon.classList.value = "navbar-toggler-icon"
    }
   
});
$(".navlink").click(function(){
    console.log(this);
})



$(document).ready(function(){
    
   
    $(".navbar").slideDown(1000, function() {
        $(this).fadeIn(1000);

        $("#section1").slideDown(1500, function() {
            $(this).fadeIn(1500);
            $(window).scroll(function () {
                var scrollY = $(window).scrollTop();
                console.log(scrollY);
                if(scrollY>=90){
                    $(".About").slideDown(1000, function() {
                        
                        $(".aboutMe").animate({left:"0"},function(){
                            $(".About .introduction").animate({left:"0"},function(){
                                if(scrollY>=130){
                                    $(".skills").animate({left:"0"},function(){
                                        if(scrollY>=140){
                                            $(".projects").animate({left:"0"},function(){
                                                // CV
                                                if(scrollY>=160){
                                                    $(".CV").animate({left:"0"},function(){
                                                        if(scrollY>=160){
                                                            $("footer").animate({left:"0"})
                                                        }
                                                    })
                                                }
                                                
                                            })
                                        }
                                    })
                                }
                                
                            })
                        })
                    });
                }
               
            });
           
        });
    });
});



