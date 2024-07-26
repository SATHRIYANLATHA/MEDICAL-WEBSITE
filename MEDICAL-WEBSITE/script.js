// JAVASCRIPT CODE FOR DISPLAYING MARQUEE //

const marquee= document.getElementById("scrolling-text")

marquee.addEventListener('mouseover',() =>{
    marquee.stop();
})

marquee.addEventListener('mouseout',() =>{
    marquee.start();
})



const notimarquee = document.getElementById("notimarquee")

notimarquee.addEventListener('mouseover',() =>{
    notimarquee.stop();
})

notimarquee.addEventListener('mouseout',() =>{
    notimarquee.start();
})





// JAVASCRIPT CODE FOR COURSES 


// pg courses

const buttpg = document.getElementById("buttpg")
const showpg = document.getElementById("showpg")
const divpg =document.getElementById("divpg")


buttpg.addEventListener('mouseover',()=>{
    showpg.style.display="block";
    showpg.style.animation = "slideUp 0.75s forwards";
})

showpg.addEventListener('mouseover',()=>{
    showpg.style.display="block";
    showpg.style.animation = "slideUp 0.75s forwards";
})

divpg.addEventListener('mouseout',()=>{
    
    showpg.style.display="none";
    

  
    
})

// ug courses
const buttug = document.getElementById("buttug")
const showug = document.getElementById("showug")
const divug =document.getElementById("divug")


buttug.addEventListener('mouseover',()=>{
    showug.style.display="block";
    showug.style.animation = "slideUp 0.75s forwards";
})

showug.addEventListener('mouseover',()=>{
    showug.style.display="block";
    showug.style.animation = "slideUp 0.75s forwards";
})

divug.addEventListener('mouseout',()=>{
    showug.style.display="none";
  
    
})


// pmc courses

const buttpmc = document.getElementById("buttpmc")
const showpmc = document.getElementById("showpmc")
const divpmc =document.getElementById("divpmc")


buttpmc.addEventListener('mouseover',()=>{
    showpmc.style.display="block";
    showpmc.style.animation = "slideUp 0.75s forwards";
})

showpmc.addEventListener('mouseover',()=>{
    showpmc.style.display="block";
    showpmc.style.animation = "slideUp 0.75s forwards";
})

divpmc.addEventListener('mouseout',()=>{
    showpmc.style.display="none";
})



// NEW NOTIFICATION DISPLAY 

const noti = document.querySelector(".noti")
const tabletamil = document.querySelector(".tabletamil")
const newnoti =document.querySelector(".newnoti")

 const newnotidisplaymarquee = document.querySelector(".newnotidisplaymarquee")



/// PG BUTTONS

const pgbutt1 = document.getElementById("pgbutt1")
const pgbutt2 = document.getElementById("pgbutt2")
const pgbutt3 = document.getElementById("pgbutt3")
const pgbutt4 = document.getElementById("pgbutt4")
const pgbutt5 = document.getElementById("pgbutt5")
const pgbutt6 = document.getElementById("pgbutt6")

pgbutt1.addEventListener('click',()=>{
    noti.style.display="none";
    tabletamil.style.display="none";
    newnoti.style.display="block";
    showpg.style.display="none";
    displayButtonName(pgbutt1);
    newnotidisplaymarquee.innerHTML=""
   

})

pgbutt2.addEventListener('click',()=>{
    noti.style.display="none";
    tabletamil.style.display="none";
    newnoti.style.display="block";
    showpg.style.display="none";
    displayButtonName(pgbutt2);
    newnotidisplaymarquee.innerHTML=""

})

pgbutt3.addEventListener('click',()=>{
    noti.style.display="none";
    tabletamil.style.display="none";
    newnoti.style.display="block";
    showpg.style.display="none";
    displayButtonName(pgbutt3);
    newnotidisplaymarquee.style.height='940px'
    newnotidisplaymarquee.innerHTML=`
    <br>
    <img  src="pictures/new.gif" /> <i class="fa fa-file-pdf" style="color:red"></i> <a href="https://tnmedicalselection.net/news/22072024061850.pdf" target="_blank"> List of Candidates allotted for MDS (Government Quota) Course Session :2024 - 2025 on - 22.07.2024</a>
    <br><br><hr>
    <img  src="pictures/new.gif" /> <i class="fa fa-file-pdf" style="color:red"></i><a href="https://tnmedicalselection.net/news/22072024061615.pdf" target="_blank">List of Candidates allotted for MDS (Management Quota) Course Session :2024 - 2025 on - 22.07.2024 </a>
    <br><br><hr>
    <img  src="pictures/new.gif" /><i class="fa fa-file-pdf" style="color:red"></i> <a href="https://tnmedicalselection.net/news/22072024061449.pdf" target="_blank">Grievances for Provisional Result of MDS course in Government Dental Colleges and Government Quota / Management Quota including (NRI) in self financing Dental Colleges for academic year 2024-2025.</a>
    <br><br><hr></hr>
    <i class="fa fa-external-link" style="color:red"></i><a href="https://pgcoun24.tnmedicalonline.co.in/mds" target="_blank">CLICK HERE FOR ONLINE COUNSELLING OF MDS COURSE (GOVERNMENT / MANAGEMENT (including Minority)/ NRI ) 2024 - 2025 SESSION</a>
    <br><br><hr></hr>
    <i class="fa fa-file-pdf" style="color:red"></i><a href="https://tnmedicalselection.net/news/17072024090951.pdf" target="_blank">TENTATIVE VACANCY FOR MDS COURSE IN GOVERNMENT / SELF FINANCING DENTAL COLLEGES 2024-2025 SESSION ON 16-07-2024</a>
    <br><br><hr></hr>
     <i class="fa fa-file-pdf" style="color:red"></i> <a href="https://tnmedicalselection.net/news/16072024055841.pdf" target="_blank">List of Candidates Eligible for CHRISTIAN Minority Category For MDS COURSES (MANAGEMENT QUOTA) COURSE 2024 - 2025 SESSION</a>
     <br><br><hr></hr>
    <i class="fa fa-file-pdf" style="color:red"></i><a href="https://tnmedicalselection.net/news/16072024055719.pdf" target="_blank">List of Candidates Eligible for TELUGU Category For MDS COURSES (MANAGEMENT QUOTA) COURSE 2024 - 2025 SESSION</a>
    <br><br><hr></hr>
    <i class="fa fa-file-pdf" style="color:red"></i><a href="https://tnmedicalselection.net/news/16072024055611.pdf" target="_blank">List of Candidates Eligible for NRI Category For MDS COURSES (MANAGEMENT QUOTA) COURSE 2024 - 2025 SESSION</a>
    <br><br><hr></hr>
    <i class="fa fa-file-pdf" style="color:red"></i><a href="https://tnmedicalselection.net/news/16072024051806.pdf" target="_blank">TENTATIVE ROUND- I COUNSELLING SCHEDULE FOR MDS DEGREE COURSES IN TAMILNADU GOVERNMENT DENTAL COLLEGES, GOVERNMENT & MANAGEMENT (INCL. MINORITY & NRI) QUOTA SEATS IN SELF-FINANCING DENTAL COLLEGES 2024-2025 SESSION</a>
    <br><br><hr></hr>
    <i class="fa fa-file-pdf" style="color:red"></i><a href="https://tnmedicalselection.net/news/16072024051410.pdf" target="_blank">RANK LIST FOR MDS COURSE IN TAMILNADU GOVERNMENT DENTAL COLLEGES & GOVERNMENT QUOTA SEATS IN SELF FINANCING DENTAL COLLEGES 2024 - 2025 SESSION</a>
    <br><br><hr></hr>
    <i class="fa fa-file-pdf" style="color:red"></i><a href="https://tnmedicalselection.net/news/16072024051320.pdf" target="_blank">RANK LIST FOR ADMISSION TO MDS COURSE IN SELF FINANCING DENTAL COLLEGES IN TAMILNADU UNDER MANAGEMENT QUOTA 2024 - 2025 SESSION</a>
    <br><br><hr></hr>
    <i class="fa fa-file-pdf" style="color:red"></i><a href="https://tnmedicalselection.net/news/03072024012149.pdf" target="_blank">Kind Attention to the Candidates applying for MDS courses in Government Dental Colleges and Government quota /Management Quota including (NRI) in self financing Dental Colleges for academic year 2024-2025.</a>
    <br><br><hr></hr>
    <i class="fa fa-external-link" style="color:red"></i><a href="https://reg24.tnmedicalonline.co.in/mds/" target="_blank">CLICK HERE TO APPLY FOR MDS COURSE UNDER GOVERNMENT QUOTA / MANAGEMENT QUOTA INCLUDING NRI OF SELF FINANCING DENTAL COLLEGES IN TAMIL NADU 2024-2025 Session</a>
    <br><br><hr></hr>
    <i class="fa fa-book" style="color:red"></i><a href="https://tnmedicalselection.net/news/01072024233304.pdf" target="_blank">PROSPECTUS FOR ADMISSION TO MDS COURSE IN TAMILNADU GOVERNMENT DENTAL COLLEGES AND GOVERNMENT SEATS IN SELF FINANCING DENTAL COLLEGES AFFILIATED TO THE TAMILNADU Dr. M.G.R MEDICAL UNIVERSITY 2024-2025 SESSION</a>
    <br><br><hr></hr>
    <i class="fa fa-book" style="color:red"></i><a href="https://tnmedicalselection.net/news/01072024233112.pdf" target="_blank">PROSPECTUS FOR ADMISSION TO MDS COURSE UNDER MANAGEMENT QUOTA INCLUDING NRI OF SELF FINANCING DENTAL COLLEGES IN TAMIL NADU 2024-2025 SESSION</a>
    <br><br><hr></hr>
    `
   
})

pgbutt4.addEventListener('click',()=>{
    noti.style.display="none";
    tabletamil.style.display="none";
    newnoti.style.display="block";
    showpg.style.display="none";
    displayButtonName(pgbutt4);
    newnotidisplaymarquee.innerHTML=""

})

pgbutt5.addEventListener('click',()=>{
    noti.style.display="none";
    tabletamil.style.display="none";
    newnoti.style.display="block";
    showpg.style.display="none";
    displayButtonName(pgbutt5);
    newnotidisplaymarquee.innerHTML=""

})

pgbutt6.addEventListener('click',()=>{
    noti.style.display="none";
    tabletamil.style.display="none";
    newnoti.style.display="block";
    showpg.style.display="none";
    displayButtonName(pgbutt6);
    newnotidisplaymarquee.innerHTML=""

})

// UG BUTTONS

const ugbutt1 = document.getElementById("ugbutt1")

ugbutt1.addEventListener('click',()=>{
    noti.style.display="none";
    tabletamil.style.display="none";
    newnoti.style.display="block";
    showug.style.display="none";
    displayButtonName(ugbutt1);
    newnotidisplaymarquee.innerHTML=""

})

// PMC COURSES 

const pmcbutt1 = document.getElementById("pmcbutt1")
const pmcutt2 = document.getElementById("pmcbutt2")
const pmcbutt3 = document.getElementById("pmcbutt3")
const pmcbutt4 = document.getElementById("pmcbutt4")
const pmcbutt5 = document.getElementById("pmcbutt5")
const pmcbutt6 = document.getElementById("pmcbutt6")



pmcbutt1.addEventListener('click',()=>{
    noti.style.display="none";
    tabletamil.style.display="none";
    newnoti.style.display="block";
    showpmc.style.display="none";
    displayButtonName(pmcbutt1);
    newnotidisplaymarquee.innerHTML= `
    <br>
    <i class="fa fa-file-pdf" style="color:red"></i> <a href="https://tnmedicalselection.net/news/18072024055852.pdf" target="_blank">KIND ATTENTION TO THE CANDIDATES WHO HAVE APPLIED FOR PARAMEDICAL DEGREE COURSES 2024-2025 SESSION UNDER PWD CATEGORY</a>
    <br><br><hr>
    <i class="fa fa-file-pdf" style="color:red"></i><a href="https://tnmedicalselection.net/news/20062024063755.pdf" target="_blank">KIND ATTENTION TO THE CANDIDATES WHO WISH TO APPLY FOR PARAMEDICAL DEGREE COURSES FOR THE ACCADEMIC YEAR 2024-2025 SESSION</a> 
    <br><br><hr>
    <i class="fa fa-external-link" style="color:red"></i><a href="https://reg24.tnmedicalonline.co.in/pmc/" target="_blank">CLICK HERE TO APPLY FOR PARAMEDICALDEGREE COURSES UNDER GOVERNMENT QUOTA 2024-2025 SESSION</a>
    <br><br><hr>
    <i class="fa fa-book" style="color:red"></i><a href="https://tnmedicalselection.net/news/18062024044712.pdf" target="_blank">PROSPECTUS FOR ADMISSION TO PARAMEDICALDEGREE COURSES UNDER GOVERNMENT QUOTA 2024-2025 SESSION</a>
    <br><br><hr>
    `

})

pmcbutt2.addEventListener('click',()=>{
    noti.style.display="none";
    tabletamil.style.display="none";
    newnoti.style.display="block";
    showpmc.style.display="none";
    displayButtonName(pmcbutt2);
    newnotidisplaymarquee.innerHTML=""

})

pmcbutt3.addEventListener('click',()=>{
    noti.style.display="none";
    tabletamil.style.display="none";
    newnoti.style.display="block";
    showpmc.style.display="none";
    displayButtonName(pmcbutt3);
    newnotidisplaymarquee.innerHTML=""

})

pmcbutt4.addEventListener('click',()=>{
    noti.style.display="none";
    tabletamil.style.display="none";
    newnoti.style.display="block";
    showpmc.style.display="none";
    displayButtonName(pmcbutt4);
    newnotidisplaymarquee.innerHTML=""

})

pmcbutt5.addEventListener('click',()=>{
    noti.style.display="none";
    tabletamil.style.display="none";
    newnoti.style.display="block";
    showpmc.style.display="none";
    displayButtonName(pmcbutt5);
    newnotidisplaymarquee.innerHTML=""

})

pmcbutt6.addEventListener('click',()=>{
    noti.style.display="none";
    tabletamil.style.display="none";
    newnoti.style.display="block";
    showpmc.style.display="none";
    displayButtonName(pmcbutt6);
    newnotidisplaymarquee.innerHTML= `
    <br>
    <i class="fa fa-file-pdf" style="color:red"></i> <a href="https://tnmedicalselection.net/news/20062024064012.pdf" target="_blank">KIND ATTENTION TO THE CANDIDATES WHO WISH TO APPLY FOR PHARM–D COURSES FOR THE ACCADEMIC YEAR 2024-2025 SESSION</a>
    <br><br><hr>
    <i class="fa fa-external-link" style="color:red"></i><a href="https://reg24.tnmedicalonline.co.in/pmc/" target="_blank">CLICK HERE TO APPLY FOR PHARM.D DEGREE COURSE 2024-2025 SESSION</a> 
    <br><br><hr>
    <i class="fa fa-book" style="color:red"></i><a href="https://tnmedicalselection.net/news/18062024044803.pdf" target="_blank">PROSPECTUS FOR ADMISSION TO PHARM.D DEGREE COURSE 2024-2025 SESSION</a>
    <br><br><hr>`
    

})


// DISPLAYING BUTTON NAME ON THE HEADING 
    
function displayButtonName(button) {
    const headdisplay = document.querySelector('.headdisplay');
    headdisplay.innerHTML = ` ${button.innerHTML}`;
}




//// courses display ***********************************

const container =document.querySelector(".container")
const coursedisplay = document.getElementById("coursedisplay")



$(document).ready(function() {
   
    $(coursedisplay).click(function(event) {
        event.stopPropagation(); 
        $(container).toggle();
        $(this).css({
            'background-color': '#e7e7e7',
            'padding': '15px'})

        
    });

   
    $(document).click(function(event) {
        if (!$(event.target).closest(coursedisplay, container).length) {
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


coursedisplay.addEventListener('click',()=>{
    coursedisplay.style.backgroundColor='';
    coursedisplay.style.padding=''
})










