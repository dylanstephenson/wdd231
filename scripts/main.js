// Adding updated date and current year

const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = today.getFullYear();
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

// Menu navigation button
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav')

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show')
    hamButton.classList.toggle('show')
})

// Course Array

async function getCourses() {
    const response = await fetch("data/courses.json")
    if (response.ok) {
        const data = await response.json();
        displayCourses(data);

        return data
    } else {
        throw Error(await response.txt)
    }
}

const courseBox = document.getElementById("courses")
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const initialCredits = 0
const totalCredits = courses.reduce(function (acc, obj) {return acc + obj.credits; }, initialCredits);

const wddCourses = courses.filter((course) => course.subject == 'WDD')
const cseCourses = courses.filter((course) => course.subject == 'CSE')

document.querySelector("#all").addEventListener('click', () => {
    courseBox.innerHTML = ''
    displayCourses(courses)
})
document.querySelector("#CSE").addEventListener('click', () => {
    courseBox.innerHTML = ''
    displayCourses(cseCourses)
})
document.querySelector("#WDD").addEventListener('click', () => {
    courseBox.innerHTML = ''
    displayCourses(wddCourses)
})

// Adding weather to course page for OpenWeatherAPI assignment

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const imageDesc = document.querySelector("#weather-caption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.66732498766148&lon=-111.89049055892718&appid=b7025480ecf693f3a6d458eefed62277&units=imperial"

async function getApiData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayWeatherData(data);
    } else {
        console.log(response.text());
    }
}

function displayWeatherData(data) {
    currentTemp.innerHTML = `${data.main.temp}&#8457;`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const iconDesc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', iconDesc);
    imageDesc.innerHTML = iconDesc;
}

getApiData();

// Add Modal


const displayCourseDetails = (course) => {
    const modal = document.getElementById("course-details");
    modal.innerHTML = `
    <button id="close-modal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    modal.showModal();
    const closeModal = document.querySelector("#close-modal");
    closeModal.addEventListener('click', () => {
        modal.close();
    });
}

function displayCourses(courseList) {
    courseList.forEach(course => {
        const courseButton = document.createElement("button");
        courseButton.innerHTML = `${course.subject}${course.number}`;
        if (course.completed) {
            courseButton.classList.add("completed")
            // console.log(courses[i].completed)
        }
        else {
            courseButton.classList.add("not-completed")
            // console.log(courses[i].completed)
        }
        courseButton.addEventListener("click", () => {displayCourseDetails(course)});
        courseBox.appendChild(courseButton);
    })
    const creditAmount = `<span>Credits Needed to Complete Certificate: ${totalCredits}</span>`
    courseBox.appendChild(creditAmount);
    // courseBox.innerHTML += `<span>Credits Needed to Complete Certificate: ${totalCredits}</span>`
}

getCourses();
