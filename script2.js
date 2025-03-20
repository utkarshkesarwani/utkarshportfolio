function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "CODER",
    "DEVELOPER",
    "EXPLORER",
    "TECH ENTHUSIAST"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter




// Get the modal
const modal = document.getElementById("project-modal");

// Get the elements inside the modal
const modalTitle = document.getElementById("modal-title");
const modalTechStack = document.getElementById("modal-tech-stack");
const modalGithub = document.getElementById("modal-github");
const modalDescription = document.getElementById("modal-description");

// Get all "View Details" links
const viewDetailsLinks = document.querySelectorAll(".view-details");

// Function to open the modal
function openModal(title, techStack, githubLink, description) {
    modalTitle.textContent = title;
    modalTechStack.textContent = techStack;
    modalGithub.href = githubLink;
    modalDescription.innerHTML = description; // Use innerHTML to render HTML tags
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Add event listeners to "View Details" links
viewDetailsLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const project = e.target.getAttribute("data-project");
        let title, techStack, githubLink, description;

        // Set project details based on the data-project attribute
        switch (project) {
            case "number-plate":
                title = "Vehicle Number Plate Detection and Recognition";
                techStack = "SVM, Python, Scikit-learn, MNIST, OpenCV";
                githubLink = "https://github.com/utkarshkesarwani/Vehicle-Number-Plate-Detection-and-Recognition";
                description = `
                    <p>The Vehicle Number Plate Detection and Recognition system is designed to automatically detect and recognize vehicle number plates from images or video streams. It uses advanced image processing techniques and machine learning algorithms to accurately identify and extract number plate text. This system is particularly useful for applications like traffic monitoring, automated toll collection, and law enforcement.</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Utilizes OpenCV for image preprocessing and contour detection to locate number plates.</li>
                        <li>Employs Support Vector Machines (SVM) for character recognition and classification.</li>
                        <li>Trained on the MNIST dataset for improved accuracy in recognizing alphanumeric characters.</li>
                        <li>Integrated into a Python-based application for real-time processing and easy deployment.</li>
                    </ul>
                `;
                break;
            case "connectify":
                title = "Connectify App";
                techStack = "HTML, CSS, JavaScript, MySQL, PHP, Xampp";
                githubLink = "https://github.com/utkarshkesarwani/Connectify-App";
                description = `
                    <p>Connectify is a real-time chat application designed to facilitate seamless communication between users. It provides a user-friendly interface for instant messaging, making it ideal for both personal and professional use. The application is built using a combination of frontend and backend technologies to ensure smooth functionality and scalability.</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Real-time messaging using PHP and MySQL for backend communication.</li>
                        <li>Responsive and intuitive user interface built with HTML, CSS, and JavaScript.</li>
                        <li>Secure user authentication and data storage in a MySQL database.</li>
                        <li>Easy deployment using XAMPP for local server setup and testing.</li>
                    </ul>
                `;
                break;
            case "healthcare-chatbot":
                title = "AI Driven Healthcare Chatbot";
                techStack = "Reactjs, Nodejs, Expressjs, MongoDB, Gemini API";
                githubLink = "https://github.com/utkarshkesarwani/-AI-Driven-Healthcare-Chatbot-for-Patient-Triage-and-Support.";
                description = `
                    <p>The AI-Driven Healthcare Chatbot is an intelligent conversational agent designed to provide medical assistance and health recommendations. It uses natural language processing (NLP) and machine learning to understand user queries and respond with accurate information. This chatbot is particularly useful for patient triage, symptom checking, and providing general health advice.</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Built with React.js for a dynamic and responsive frontend user interface.</li>
                        <li>Powered by Node.js and Express.js for backend logic and API integration.</li>
                        <li>Uses MongoDB for storing user interactions and medical data securely.</li>
                        <li>Integrates with the Gemini API for advanced NLP capabilities and accurate responses.</li>
                    </ul>
                `;
                break;
            case "mental-health":
                title = "Mental Health Tracker App";
                techStack = "Flutter, Firebase, Dart";
                githubLink = "https://github.com/utkarshkesarwani/Mental-Health-Tracker-App";
                description = `
                    <p>The Mental Health Tracker App is a mobile application designed to help users monitor and improve their emotional well-being. It allows users to log their moods, track their mental health progress, and access resources for self-care. The app is built using Flutter, making it cross-platform and accessible on both Android and iOS devices.</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Developed using Flutter and Dart for a seamless cross-platform experience.</li>
                        <li>Integrated with Firebase for real-time data storage and user authentication.</li>
                        <li>Provides mood tracking and visualization tools to help users understand their emotional patterns.</li>
                        <li>Offers access to mental health resources and self-care tips for improved well-being.</li>
                    </ul>
                `;
                break;
            case "spam-classifier":
                title = "Spam Email Classifier";
                techStack = "Python, Scikit-learn, SVM, NLP";
                githubLink = "https://github.com/utkarshkesarwani/Spam-Detection";
                description = `
                    <p>The Spam Email Classifier is a machine learning-based system designed to automatically classify emails as spam or non-spam. It uses natural language processing (NLP) techniques to analyze email content and make predictions. This system is highly effective in reducing unwanted emails and improving email management efficiency.</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Utilizes Support Vector Machines (SVM) for accurate classification of emails.</li>
                        <li>Employs NLP techniques to preprocess and analyze email text data.</li>
                        <li>Built using Python and Scikit-learn for easy implementation and scalability.</li>
                        <li>Provides a user-friendly interface for uploading and classifying emails.</li>
                    </ul>
                `;
                break;
            case "weather-app":
                title = "Weather Web App";
                techStack = "HTML, CSS, JavaScript, OpenWeatherMap API";
                githubLink = "https://github.com/utkarshkesarwani/Weather-App";
                description = `
                    <p>The Weather Web App is a simple yet powerful application that provides real-time weather updates and forecasts for locations worldwide. It uses the OpenWeatherMap API to fetch weather data and displays it in an easy-to-read format. This app is ideal for users who need quick access to weather information.</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Fetches real-time weather data using the OpenWeatherMap API.</li>
                        <li>Built with HTML, CSS, and JavaScript for a lightweight and responsive design.</li>
                        <li>Displays current weather conditions, temperature, humidity, and wind speed.</li>
                        <li>Allows users to search for weather information by city or location.</li>
                    </ul>
                `;
                break;
            case "hotel-booking":
                title = "Hotel Booking Management System";
                techStack = "HTML, CSS, JavaScript, PHP, MySQL, XAMPP";
                githubLink = "https://github.com/utkarshkesarwani/Hotel-Booking-Management-System";
                description = `
                    <p>The Hotel Booking Management System is a web-based application designed to streamline the process of managing hotel bookings and reservations. It allows hotel staff to manage room availability, customer details, and bookings efficiently. This system is built using a combination of frontend and backend technologies for seamless functionality.</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Provides a user-friendly interface for managing hotel bookings and room availability.</li>
                        <li>Built with HTML, CSS, and JavaScript for the frontend and PHP for backend logic.</li>
                        <li>Uses MySQL for storing and managing customer and booking data securely.</li>
                        <li>Easy to deploy and test using XAMPP for local server setup.</li>
                    </ul>
                `;
                break;
            default:
                title = "Project Details";
                techStack = "N/A";
                githubLink = "#";
                description = "<p>No details available for this project.</p>";
        }

        openModal(title, techStack, githubLink, description);
    });
});
// Close the modal when the close button is clicked
document.querySelector(".close-modal").addEventListener("click", closeModal);

// Close the modal when clicking outside the modal content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});