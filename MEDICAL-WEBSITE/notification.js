
    const container = document.querySelector(".container");
    const coursedisplay = document.getElementById("coursedisplay");
    
    $(document).ready(function() {
       
        $(coursedisplay).click(function(event) {
            event.stopPropagation();
            $(container).toggle();
            $(this).css({
                'background-color': '#e7e7e7',
                'padding': '15px'
            });
        });
    
        // Hide container when clicking outside
        $(document).click(function(event) {
            if (!$(event.target).closest(coursedisplay).length && !$(event.target).closest(container).length) {
                $(container).hide();
                $(coursedisplay).css({
                    'background-color': '',
                    'padding': ''
                });
            }
        });
    
       
        $(container).click(function(event) {
            event.stopPropagation(); 
        });
    });
    
    coursedisplay.addEventListener('click', () => {
        coursedisplay.style.backgroundColor = '';
        coursedisplay.style.padding = '';
    });
    
    
    
      
    
        const marquee= document.getElementById("scrolling-text")
    
    marquee.addEventListener('mouseover',() =>{
        marquee.stop();
    })
    
    marquee.addEventListener('mouseout',() =>{
        marquee.start();
    })
    
    
    
   
