/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append(["Michael"]);
 /*
 var awesomeThoughts = "I am Bivens and I am AWESOME!";
 console.log(awesomeThoughts);
 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 $("#main").append([funThoughts]);
 */
 var name = "Michael Rhea";
 var role = "Power Train Mechanic";
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 var bio = {
 	"name" : "Michael",
 	"role": "Power Train Mechanic",
 	"contact": {
 		"mobile": "623466983",
 		"email": "av8r.08@gmail.com",
 		"location": "Tupelo, MS"
 	},
 	"welcomeMessage": "Blah Blah",
 	"skills": [
 	"Magnetic Particle", "Electromagnetic Testing", "Ultrasonic Testing", "Liquid Penetrent"
 	],
 	"bioPic": "images/punisher_skull.jpg"
 	};
 $("#main").append("Mobile: " + bio.contact.mobile + "\n" + bio.contact.email, bio.contact.location, bio.skills)