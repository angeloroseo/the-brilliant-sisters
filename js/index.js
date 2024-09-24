$(document).ready(function () {
  $("#checkin").dateDropper();
  $("#checkout").dateDropper();

  $(".preview1").click(function () {
    $(".modal-image").attr("src", "img/hotel7.jpg");
  });
  $(".preview2").click(function () {
    $(".modal-image").attr("src", "img/hotel11.jpg");
  });
  $(".preview3").click(function () {
    $(".modal-image").attr("src", "img/hotel12.jpg");
  });
  $(".preview4").click(function () {
    $(".modal-image").attr("src", "img/hotel13.jpg");
  });
  $(".preview5").click(function () {
    $(".modal-image").attr("src", "img/hotel14.jpg");
  });
  $(".preview6").click(function () {
    $(".modal-image").attr("src", "img/hotel8.jpg");
  });
  $(".preview7").click(function () {
    $(".modal-image").attr("src", "img/hotel9.jpg");
  });
  $(".preview8").click(function () {
    $(".modal-image").attr("src", "../img/hotel10.jpg");
  });
  $(".preview9").click(function () {
    $(".modal-image").attr("src", "img/hotel15.jpg");
  });

  $(".remove").click(function () {
    var a = parseInt($(this).parent().find("input").val());
    if (a > 0)
      $(this)
        .parent()
        .find("input")
        .val(a - 1);
  });

  $(".add").click(function () {
    var a = parseInt($(this).parent().find("input").val());
    if (a < 10)
      $(this)
        .parent()
        .find("input")
        .val(a + 1);
  });

  var flag = false;
  var d = new Date();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var cur =
    (month < 10 ? "0" : "") +
    month +
    "/" +
    (day < 10 ? "0" : "") +
    day +
    "/" +
    d.getFullYear();
  var x = $("#checkin");
  var y = $("#checkout");
  var w = $("#adults");

  $(".btn-primary").click(function () {
    if (x.val() >= cur && x.val().length > 0) {
      if (y.val() > x.val() && y.length > 0) {
        if (w.val() > 0) {
          flag = true;
        } else {
          alert("there should be atleat 1 adult");
        }
      } else if (y.val() == 0) alert("checkout field cannot be empty");
      else alert("check out date cannot be same as or less than check in date");
    } else if (x.val() == 0) alert("checkin field cannot be empty");
    else alert("check in date cannot be before current date");
  });

  $(".btn-info").click(function () {
    var emailRegEx = /^[a-z0-9]{3,15}@[a-z]{3,10}\.[a-z]{2,3}$/;
    var a = $("#mail");
    if (emailRegEx.test(a.val())) alert("email registered");
    else alert("invalid email");
  });

  $("#form").submit(function () {
    return flag;
  });

  function scrollBanner() {
	  $(document).on('scroll', function(){
		var scrollPos = $(this).scrollTop();
		$('.parallax-fade-top').css({
		  'top' : (scrollPos/2.8)+'px',
		  'opacity' : 1-(scrollPos/600)
		});
	  });    
	}
	scrollBanner();	
    
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
		
	$(document).ready(function(){"use strict";
	
		//Scroll indicator
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);
		
		
  });
});

	
	