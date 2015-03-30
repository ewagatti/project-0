var bio = {
    "name": "Ewa Gatti",
    "role": "Web Developer",
    "contacts": {
    	"mobile": "650-555-5555",
    	"email": "ewa@tiscali.it",
    	"github": "ewagatti",
    	"twitter": "@ewagatti",
    	"location": "Giussano"
     },
     "welcomeMessage": "Welcome to the wonderful world JavaScript",
     "skills": [
     "awesomeness", "programming", "teaching", "JS"
     ],
     "bioPic": "images/me.jpg"
   };
//
var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);
var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);
var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);
var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);
var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);
var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);
var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);
var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);


if (bio.skills.length>0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills [0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills [1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills [2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills [3]);
  $ ("#skills").append(formattedSkill);

}

 var work = {
  "jobs": [
    {
      "employer": "Ralco",
      "title": "Technical Assistance",
      "location": "Milan, Italy",
      "dates": "Jan 2007 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "PorjectOne",
      "title": "Customer Service",
      "location": "Biassono, Italy",
      "dates": "May 2005 - Dic 2006",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Newspaper WYBORCZA",
      "title": "Database entry",
      "location": "Cracow, Poland",
      "dates": "Jul 2004 - May 205",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
  ]
};
//Start work experience

function displayWork(){
for (job in work.jobs) {
$("#workExperience").append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
$(".work-entry:last").append(formattedEmployerTitle);
var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);
var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedLocation);
var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);
}
}
displayWork();

function locationizer(work_obj) {
    var locationArray = [];
    for(job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
}
return locationArray;
}

//Start of Education section
var education = {
 "schools":[    //changed from school
 {
  "name":"Cracow High School",
  "location":"Cracow, Poland",  
  "degree" : "High School",
  "majors" : ["High School Education", "Languages"],
  "dates" : 1997,
  "url" : "https://www.v-lo.krakow.pl/"
 },
 {
  "name":"Jagiellonian University",
  "location":"Cracow, Poland", 
  "degree" : "Master of Science ",
  "majors" : ["Geography", "GPS"],
  "dates" : 2000,
  "url" : "http://www.uj.edu.pl/en_GB/"
 }
 ],
 "onLineCourses":[
 {
  "title": "Intro to HTML and CSS",
  "school": "Udacity",
  "dates": 2014,
  "url": "https://www.udacity.com/course/ud304"
 },
 {
  "title": "How to Use Git and GitHub",
  "school": "Udacity",
  "dates": 2014,
  "url": "https://www.udacity.com/course/ud775"
 },
 {
  "title": "JavaScript Basics",
  "school": "Udacity",
  "dates": 2014,
  "url": "http://www.udacity.com/course/ud804"
 },
 {
  "title": "Intro to jQuery",
  "school": "Udacity",
  "dates": 2014,
  "url": "https://www.udacity.com/course/ud245"
 }
 ]
}

education.display = function() {
 for (school in education.schools) {
  $("#education").append(HTMLschoolStart);
  var SchName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedSchName = SchName.replace("#", education.schools[school].url);
  $(".education-entry:last").append(formattedSchName);
  var formattedSchLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(formattedSchLoc);
  var formattedSchDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedSchDates);
  var formattedSchDeg = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  $(".education-entry:last").append(formattedSchDeg);
  var formattedSchMaj = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
  $(".education-entry:last").append(formattedSchMaj);
 }
 $(".education-entry:last").append(HTMLonlineClasses);
 for (OnLine in education.onLineCourses) {
  var OLTitle = HTMLonlineTitle.replace("%data%", education.onLineCourses[OnLine].title);
  var formattedOLTitle = OLTitle.replace("#", education.onLineCourses[OnLine].url);
  $(".education-entry:last").append(formattedOLTitle);
  var formattedOLSchool = HTMLonlineSchool.replace("%data%", education.onLineCourses[OnLine].school);
  $(".education-entry:last").append(formattedOLSchool);
  var formattedOLDates = HTMLonlineDates.replace("%data%", education.onLineCourses[OnLine].dates);
  $(".education-entry:last").append(formattedOLDates);
 }
}
education.display();

//Start of Projects Section
var projects = {
 "projects": [
 {
 "title": "Project 1",
 "dates": "2014",
 "description": "Portfolio Mock Up to HTML",
 "images":[
 "images/197x148.gif", "images/197x148.gif"],
 "url": "https://www.udacity.com/course/viewer/#!/c-nd001/l-2736698543/m-3190969644"
},
{
 "title": "project 2",
 "dates": "2014-now",
 "description": "Create an online interactive resume",
 "images":[
 "images/197x148.gif", "images/197x148.gif"]
}
 ]
}

projects.display = function() {
 for (project in projects.projects) {
 $("#projects").append(HTMLprojectStart);
 var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
 var formattedProject = formattedTitle.replace("#",projects.projects[project].url); //here is my issue
 $(".project-entry:last").append(formattedTitle);
 var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
 $(".project-entry:last").append(formattedDates);
 var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
 $(".project-entry:last").append(formattedDescription);
 if(projects.projects[project].images.length > 0) {
 for (image in projects.projects[project].images) {
 var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
 $(".project-entry:last").append(formattedImage)
 }
 }
 }
}


//Contacts Footer

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#footerContacts").append(formattedMobile);
var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#footerContacts").append(formattedEmail);
var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#footerContacts").append(formattedGithub);
var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#footerContacts").append(formattedTwitter);
var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#footerContacts").append(formattedLocation);


projects.display();


// The click() function makes it possible for console.log() to output grid coordinates for wherever the screen is clicked. //

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

// Google Maps is appended to the correct div in index.html, using a JQuery selector. //

$("#mapDiv").append(googleMap);