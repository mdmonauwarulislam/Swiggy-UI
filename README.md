Swiggy UI Clone
This project is a clone of the Swiggy user interface built using React. It uses a local API to fetch and display data.

Features
Responsive design
Dynamic menu and restaurant listings
Fixed header that changes style on scroll
Interactive elements like signup and login buttons

Technologies Used
React
CSS (TailwindCSS or plain CSS)
Local JSON Server for API
Getting Started
Prerequisites
Make sure you have the following installed on your machine:

Node.js (>= 14.x)
npm (>= 6.x)

Installation
1.Clone the repository:

git clone https://github.com/your-username/swiggy-ui-clone.git
cd swiggy-ui-clone

2.Install the dependencies:

npm install

Running the Local API
We are using json-server to create a local API. Follow these steps to set it up:

Install json-server globally if you haven't already:

npm install -g json-server


Start the JSON server:

json-server --watch db.json --port 5000

The API will be available at http://localhost:5000.

Running the React Project
Start the React development server:

npm start

Open your browser and navigate to http://localhost:3000.

Project Structure

public/: Contains the public assets and the HTML file.
src/: Contains the React components and styles.
components/: Contains reusable React components.
assets/: Contains images and other assets.
App.js: Main application component.
index.js: Entry point for the React application.
db.json: Sample data for the local API.
Usage
The header will become fixed and change style when you scroll down.
The menu and restaurant data are fetched from the local API.
You can navigate between different sections using the navigation links.

![Swiggy UI Clone Screenshot](./src/assets/images/swiggy1.JPG)

![](./src/assets/images/swiggy2.JPG)


Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.

License
This project is licensed under the MIT License.

