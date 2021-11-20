$(function(){
	
	$(".start-button").click(function () {
		$(function () {
		  var timer = setInterval(function () {
			$("#count_num").html(function (i, html) {
			  if (parseInt(html) > 1) {
				$(".racetrack-div").css({
				  "background-color": "black",
				  opacity: 0.5,
				});
				$("#count_num").show();
				return parseInt(html) - 1;
			  } else {
				
				clearTimeout(timer);
				$("#count_num").hide();
				$(".racetrack-div").css({
				  "background-color": "transparent",
				  opacity: "unset",
				});
				$("button").attr("disabled", true);
				function checkIfComplete() {
				  $("button").attr("disabled", false);
				  if (isComplete == false) {
					isComplete = true;
					$(".flag").show();
					$(".racetrack-div").css({
					  "background-color": "black",
					  opacity: 0.5,
					});
				  } else {
					place = "second";
				  }
				}
	  

				let carWidth = $(".car-1").width();
				let carTrackWidth = $(window).width() - carWidth - 10;
	  
				let raceTime1 = Math.floor(Math.random() * 5000 + 1);
				localStorage.setItem("raceTimeCar1", raceTime1);
	  
				let raceTime2 = Math.floor(Math.random() * 5000 + 1);
				localStorage.setItem("raceTimeCar2", raceTime2);
	  
				let isComplete = false;
				let place = "first";
	  

				$(".car-1").animate(
				  {
					left: carTrackWidth,
				  },
				  raceTime1,
				  function () {
					checkIfComplete();
					$("#firstTable").prepend(
					  `<tr><td>Finished in 
					  <span style="color:white; font-weight:bold">${place}</span>
					  place and clocked in at
					  <span style="color:white; font-weight:bold">${raceTime1}</span>
					  miliseconds!</td></tr>`
					);
					localStorage.setItem("placeCar1", place);
				  }
				);
	  

				$(".car-2").animate(
				  {
					left: carTrackWidth,
				  },
				  raceTime2,
				  function () {
					checkIfComplete();
					$("#secondTable").prepend(
					  `<tr><td>Finished in 
					  <span style="color: #ba0000; font-weight:bold">${place}</span>
					  place and clocked in at
					  <span style="color:#ba0000; font-weight:bold">${raceTime2}</span>
					  miliseconds!</td></tr>`
					);
					localStorage.setItem("placeCar2", place);
				  }
				);
				$(".car1-pastResult").text("");
				$(".car2-pastResult").text("");
			  }
			});
		  }, 1000);
		});
	  });
	  

	  $(".resetBtn").click(function () {
		$("#count_num").text(4).hide();
		$(".car").css("left", "0");
		$(".car1-result").text("");
		$(".car2-result").text("");
		$(".flag").hide();
		$(".racetrack-div").css({
		  "background-color": "none",
		  opacity: "unset",
		});
	  });
	  
	  
	  $(window).on("load", function () {
		if (
		  localStorage.getItem("raceTimeCar1") &&
		  localStorage.getItem("raceTimeCar2")
		) {
		  localStorage.getItem("raceTimeCar1");
		  localStorage.getItem("raceTimeCar2");
	  
		  let car1PastResult = localStorage.getItem("raceTimeCar1");
		  let car2PastResult = localStorage.getItem("raceTimeCar2");
		  let car1Position = localStorage.getItem("placeCar1");
		  let car2Position = localStorage.getItem("placeCar2");
		  $(".past-results").show();
		  localStorage.clear();
	  
		  $("#thirdTable").append(
			`<tr><td>
			 <span style ="color:white; font-weight:bold">Car 1</span> finished in<span style="color:white; font-weight:bold"> ${car1Position}</span> place with a time of <span style="color:white; font-weight:bold">${car1PastResult}</span>
			</td></tr>`
		  );
	  
		  $("#fourthTable").append(
			`<tr><td>
			<span style ="color:#ba0000; font-weight:bold"> Car 2</span> finished in<span style="color: #ba0000; font-weight:bold"> ${car2Position}</span> place with a time of  <span style="color: #ba0000; font-weight:bold"> ${car2PastResult}</span>
			  </td></tr>`
		  );
	  
		  $(".Results-heading-past").show();
		} else {
		  $(".Results-heading-past").hide();
		}
	  });

});