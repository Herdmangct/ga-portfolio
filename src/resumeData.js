import React from "react";

let resumeData = {
  imagebaseurl: "https://herdmangct.github.io/ga-portfolio/",
  name: "Graham Herdman",
  profileImage: "images/profile-image.jpg",
  role: "Software Engineer and Data Scientist",
  // #1 TODO:
  roleDescription: `with a passion for all things science and technology! 
  I love learning about new technologies and solving challenging problems. 
  My goal is to use my love for science and technology to help solve some of the world's most challenging problems!`, // "I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/graham-ct-herdman/",
      className: "fa fa-linkedin"
    },
    {
      name: "github",
      url: "http://github.com/Herdmangct",
      className: "fa fa-github"
    },
    {
      name: "twitter",
      url: "https://twitter.com/grahamctherdman",
      className: "fa fa-twitter"
    }
  ],
  // #2 TODO
  aboutme: [
    `I am a technically minded software engineer with a strong foundation in computer science 
  theory and practical skills in multiple programming languages (Python, JavaScript, Ruby, Java, CSS, HTML). 
  This allows me to think of programming problems in a sophisticated manner and implement practical solutions to them.`,
    `I also have skills in many modern-day frameworks including React and Ruby on Rails.
  My curious nature and passion for all things science and technology can also be seen in my hobbies as I 
  frequently read non-fiction books. Notable books that I have read are “How to create a mind” by Ray Kurzweil, 
  “The Innovators” by Walter Isaacson and “Possible Minds: 25 ways of looking at AI” by John Brockman.`
  ], // "I am currently a pre-final year student at The LNM Institute of Information Technology and pursuing my B.Tech from here. I am a self taught Full Stack Web Developer, currently diving deeper into Machine Learning. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",
  address: "Sydney, Australia",
  phone: "0438 568 446",
  email: "herdmanctg@outlook.com",
  website: "https://www.linkedin.com/in/graham-ct-herdman/",
  education: [
    {
      UniversityName: "General Assembly",
      specialization: "Software Engineering Immersive Course",
      MonthOfPassing: "September",
      YearOfPassing: "2019",
      // TODO: Change to array and map it into different paragraphs
      Achievements: [
        `General Assembly’s 12 Week Software Engineering Immersive 
        Course is an intensive programming bootcamp that prepares you for the everyday 
        challenges faced by software engineers on the job. During my time in the course I gained skills 
        in HTML, CSS, Javascript, jQuery, React, Node.js, Express, Ruby, Ruby on Rails and much more!`
      ]
    },
    {
      UniversityName: "The University of Sydney",
      specialization:
        "Bachelor of Commerce and Bachelor of Science - Computer Science, Mathematics, Finance, Accounting",
      MonthOfPassing: "November",
      YearOfPassing: "2018",
      Achievements: [
        `At university, I started studying a Commerce degree with majors 
        in accounting and finance because I was interested in how businesses and the economy worked. 
        However, half-way through my Commerce degree, I felt that there was something missing because 
        I had always been passionate about science and technology and so I changed to a double degree in 
        Commerce and Science to satisfy my curiosity in those areas. `,
        <br />,
        `I chose Computer Science and Mathematics 
        as my science majors because I believe they are the two best tools humans have created for figuring out 
        the world. The more I learned about these two areas of science the more I was sure I’d want to work in a 
        scientific/technological field.`,
        <br />,
        `Through my university degree, I gained strong foundations in computer science theory (algorithms and data structures), 
        machine learning fundamentals and 
        exposure to technologies such as Python, Java and AWS EC2.`
      ]
    },
    {
      UniversityName: "General Assembly",
      specialization: "Part-time Data Science Course",
      MonthOfPassing: "June",
      YearOfPassing: "2018",
      Achievements: [
        `During General Assembly's, 10 Week Part-time Data Science Course I gained strong skills in 
      Python, Pandas, Scikit-learn, data analysis, and machine learning. This course inspired me to under take further study into 
      machine learning through my university subjects. Ever since then I have been very interested in and passionate about 
      machine learning and artificial intelligence.`
      ]
    }
  ],
  // work: [
  //   {
  //     CompanyName: "Some Company",
  //     specialization: "Some specialization",
  //     MonthOfLeaving: "Jan",
  //     YearOfLeaving: "2018",
  //     Achievements: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  //     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
  //     natoque penatibus et magnis dis parturient montes, nascetur
  //     ridiculus mus. Donec quam felis, ultricies nec, pellentesque
  //     eu, pretium quis, sem. Nulla consequat massa quis enim.
  //     Donec pede justo, fringilla vel, aliquet nec, vulputate
  //     eget, arcu. Nullam dictum felis eu pede mollis pretium.`
  //   },
  //   {
  //     CompanyName: "Some Company",
  //     specialization: "Some specialization",
  //     MonthOfLeaving: "Jan",
  //     YearOfLeaving: "2018",
  //     Achievements: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  //     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
  //     natoque penatibus et magnis dis parturient montes, nascetur
  //     ridiculus mus. Donec quam felis, ultricies nec, pellentesque
  //     eu, pretium quis, sem. Nulla consequat massa quis enim.
  //     Donec pede justo, fringilla vel, aliquet nec, vulputate
  //     eget, arcu. Nullam dictum felis eu pede mollis pretium.`
  //   }
  // ],
  skillsDescription: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
  natoque penatibus et magnis dis parturient montes, nascetur
  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
  eu, pretium quis, sem. Nulla consequat massa quis enim.
  Donec pede justo, fringilla vel, aliquet nec, vulputate
  eget, arcu. Nullam dictum felis eu pede mollis pretium.`,
  skills: [
    {
      skillname: "HTML5"
    },
    {
      skillname: "CSS"
    },
    {
      skillname: "Reactjs"
    }
  ],
  portfolio: [
    {
      name: "Why Wait?",
      smallDescription: "Order-ahead Bar App",
      description: `Built the frontend for an order-ahead bar application. I was inspired to undertake 
        this project because I have always been interested in understanding how mobile apps work. My favourite 
        part of the project was getting to know React Native really well and implementing Redux for global state 
        management (helped a lot for the favourite bar feature!).`,
      imgurl: "images/portfolio/why-wait-home.png",
      link: "https://github.com/Herdmangct/Project3",
      modal: "modal-01",
      tags: "Expo, React Native, Redux"
    },
    {
      name: "Dripples",
      smallDescription: "Idea Management Website",
      description: `In a group of 3, we built and deployed an idea management 
      tool on Heroku and Github Pages using a Ruby on Rails API for the backend 
      and React for the frontend. My favourite part of this project was learning 
      about React and Material UI.`,
      imgurl: "images/portfolio/dripple.png",
      link: "https://github.com/victorzw895/dripple-client",
      modal: "modal-02",
      tags: "React, Material UI, Ruby on Rails"
    },
    {
      name: "The Pantry",
      smallDescription: "Inventory Management System for Small Restaurants",
      description: `Built and deployed an inventory management system for small restaurants with Ruby on Rails 
        for the backend and jQuery for the frontend. My favourite part of this project was learning to 
        work with Ruby on Rails and gaining experience with backend web development.`,
      imgurl: "images/portfolio/the-pantry.png",
      link: "https://github.com/Herdmangct/project1",
      modal: "modal-03",
      tags: "Ruby on Rails, jQuery, Heroku"
    },
    {
      name: "Tic Tac Toe",
      smallDescription: "Web Game",
      description: `Built and deployed a simple Tic Tac Toe game to Github Pages. 
      Some extra features I added to make the game more engaging were animations with animate.css, 
      tech entrepreneur mode, and AI mode. The feature that I most enjoyed working on was AI mode where I 
      implemented the Minimax Algorithm in order to make the AI unbeatable (the algorithm used by the famous 
        Deep Blue AI that beat Garry Kasparov at chess in 1996).`,
      imgurl: "images/portfolio/tictactoe.png",
      link: "https://github.com/Herdmangct/0_ticktacktoe",
      modal: "modal-04",
      tags: "jQuery, HTML, CSS"
    }
  ]
  // testimonials: [
  //   {
  //     quote: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  //     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
  //     natoque penatibus et magnis dis parturient montes, nascetur
  //     ridiculus mus. Donec quam felis, ultricies nec, pellentesque
  //     eu, pretium quis, sem. Nulla consequat massa quis enim.`,
  //     name: "Some technical guy"
  //   },
  //   {
  //     quote: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  //     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
  //     natoque penatibus et magnis dis parturient montes, nascetur
  //     ridiculus mus. Donec quam felis, ultricies nec, pellentesque
  //     eu, pretium quis, sem. Nulla consequat massa quis enim.`,
  //     name: "Some technical guy"
  //   },
  //   {
  //     quote: `My Graham is a really good programmer. I haven't seen any of his work yet, but he drew
  //     a picture when he was six years old of a penguin drinking beer in a chinese restaurant and it was clear the
  //     potential for slight wisdom and misguided creativity were there... i'm not sure what all that has to do with
  //     websites but I hope it helped!`,
  //     name: "Graham's Mother"
  //   }
  // ],
  // contact: {
  //   leadHeader: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  // accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
  // quae ab illo inventore veritatis et quasi architecto beatae
  // vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
  // voluptas sit aspernatur aut odit aut fugit.`,
  //   recentTweets: [
  //     {
  //       content: `This is Photoshop's version of Lorem Ipsum. Proin gravida
  //       nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
  //       quis bibendum auctor, nisi elit consequat ipsum`,
  //       link: `http://t.co/CGIrdxIlI3`,
  //       numberOfDaysAgo: `2 Days Ago`
  //     },
  //     {
  //       content: `This is Photoshop's version of Lorem Ipsum. Proin gravida
  //       nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
  //       quis bibendum auctor, nisi elit consequat ipsum`,
  //       link: `http://t.co/CGIrdxIlI3`,
  //       numberOfDaysAgo: `3 Days Ago`
  //     },
  //     {
  //       content: `This is Photoshop's version of Lorem Ipsum. Proin gravida
  //       nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
  //       quis bibendum auctor, nisi elit consequat ipsum`,
  //       link: `http://t.co/CGIrdxIlI3`,
  //       numberOfDaysAgo: `3 Days Ago`
  //     }
  //   ]
  // }
};

export default resumeData;
