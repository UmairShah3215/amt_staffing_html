
$(document).ready(function () {
    $(".all1").owlCarousel({
      loop: true,
      navigation: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      items: 3,
      margin:100,
      mousewheel: false,
      dots: true,
      slideBy: 1,
      
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        200: {
          items: 1,
          nav: false,
        },
        300: {
          items: 1,
          nav: false,
        },
        400: {
          items: 1,
          nav: false,
        },
        700: {
          items: 1,
          nav: false,
        },
        900: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
          loop: true,
        },
      },
    });
  });



  
jQuery(document).ready(function($) {
  $("#menu").mmenu({
      "extensions": ["effect-menu-zoom", "effect-panels-zoom", "pagedim-black", "theme-dark"],
      "offCanvas": {
          "position": "left"
      },
      "counters": true,
      "iconPanels": true,
      "navbars": [{
          "position": "top"
      }]
  });
});


$(".gototop").on("click", function () {
  scroll({
    top: 0,
  });
});
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll >= 1000) {
    $(".gototop").addClass("back_to_top");
  } else {
    $(".gototop").removeClass("back_to_top");
  }
});


// Send Form

$("#prospects_form").submit(function(e){
  e.preventDefault();

// function sendMail(e) {
  // e.preventDefault();
  var params = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    phoneNumber: document.getElementById("Phone").value,
    addresss: document.getElementById("Address").value,
    file: document.getElementById("AttachFile").value,
  };
  emailjs.send("service_y2fsrwe", "template_7vzxgsm", params,"d1mhYeZrc1tAl9GYS").then(
    function (response) {
      alert("SUCCESS!", response.status, response.text);
      // params.innerHTML = ""
      window.onload()
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
})


// $('#state').editableSelect({
//     filter:true,
//     effects:'default',
//     duration:'fast',
//     appendTo:'body',
//     trigger:'focus',
//     onCreate:function () {},
//     onShow:function () {},
//     onHide:function () {},
//     onSelect:function (element) {}
//   });


function readmore (){
      var pera = document.getElementById('pera');
      var readmore = document.getElementById('readmore');
    var text = " AMT Medical Staffing, Inc. is seeking energetic,qualified Certified Nursing Assistants (CNA) to fill flexible facility assignments in the Birmingham,AL area.Responsibilities of the Certified Nursing Assistant (CNA)• Assist with activities of daily living • Ensure the health, comfort, and safety of patients according to facility guidelines.• Rely on experience and judgement to accomplish established goals. • Comply with all state requirements and facility policies and procedures. • Perform all other CNA duties as needed. Requirements of the Certified Nursing Assistant (CNA) • Certification with the State of Alabama in good standing • Strong verbal communication and interpersonal skills • Ability to stay focused, professional, and calm under pressure • Valid CPR card and current TB skin test • Flexible with reliable transportation • Pass a drug screen and background check Competitive Pay! If you are interested in this opportunity";
    pera.innerHTML = text;
    readmore.innerHTML = ""
    
}


// function deleteItems(e) {
//   e.parentNode.remove()
// }


function gotojobs_btn (){
  window.location.href("findajob.html")
}


// Word Text





// $('#nav-bar').on('click', '.nav-item', function(e) {
//   $('.nav-item.active', e.currentTarget).removeClass('active');
//   $(this).addClass('active');
// })



// $(document).ready(function () {
//   $(".nav-links li:has(ul) ").addClass("actives");
// });



// $('.nav-link').addClass('active'); 


// var loc = window.location.pathname;

// $('#nav-item').find('a').each(function() {
//   $(this).toggleClass('active', $(this).attr('href') == loc);
// });







// $.ajax({
//   url: "https://formsubmit.co/codetechsofts@gmail.com",
//   method: "POST",
//   data: {
//     name: "FormSubmit",
//     message: "I'm from Code Tech Soft",
//   },
//   dataType: "json",
// });

// function gotoAp(){
//   window.location.href('https://amtstaffing.stafferlink.com/application/applicationlogin.aspx')
// }





// function gotoAp(){
//   window.location.href('https://amtstaffing.stafferlink.com/application/applicationlogin.aspx')
// }