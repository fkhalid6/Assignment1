var express = require('express'); //import express module
var router = express.Router(); // create express instance, assigned to object router

/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('index'); //for the route "/", render the view index (same steps for about, and contact)
});

/* GET about me page */ 
router.get('/about', function(req, res, next) {
  res.render('about'); 
});

/* GET projects page via project-services view */ 
router.get('/projects', function(req, res, next) { 
  res.render('projects-services', { //for the route "/projects", render the project-services view
    //assign unique values to variables that exist in the project-services view (same for services)
    title: 'My Projects',
    introPara: 'Welcome to my services page, where I offer a versatile skill set that combines the expertise of a web developer, software requirements engineer, and general programmer. With a commitment to delivering tailored solutions, I am here to help you transform your ideas into fully functional and efficient software applications. Whether you require custom web development, precise requirements analysis, or comprehensive programming support, I am ready to bring your projects to life.',
    paraheader: 'Project',
    para1: 'In this project, I created a simple web application that generates multiplication tables based on user input. I designed the web page with HTML and CSS, incorporating input fields for specifying the number of rows and columns.',
    para2: 'I recently crafted a sequence diagram for a collaborative project that clearly portrays the chronological flow of events and interactions between system components.It is included here because it reflects my understanding of software systems designs.',
    para3: 'This is my initial website which featured my resume and marked my first attempt at web design. My latest project, the current website you are browsing, is a significant improvement. Thus, I decided to highlight it to showcase my progress as a web developer.',
    img1:'/images/JavaScript-CalculatorProject.png',
    img2:'/images/SequenceDiagramListBook.jpg',
    img3:'/images/WebResume.png'
   });
});

/* GET projects page via project-services view */ 
router.get('/services', function(req, res, next) {
  res.render('projects-services', { 
    title: 'Available Services',
    introPara: 'Welcome to my services page, where I offer a versatile skill set that combines the expertise of a web developer, software requirements engineer, and general programmer. With a commitment to delivering tailored solutions, I am here to help you transform your ideas into fully functional and efficient software applications. Whether you require custom web development, precise requirements analysis, or comprehensive programming support, I am ready to bring your projects to life.',
    paraheader: 'Service',
    para1: 'Web Developer',
    para2: 'Software Requirements Engineer',
    para3: 'General Programmer',
    img1:'/images/webDevPic.jpg',
    img2:'/images/airfocus-v89zhr0iBFY-unsplash.jpg',
    img3:'/images/altumcode-dC6Pb2JdAqs-unsplash.jpg'
   });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});


module.exports = router; //router object exported
