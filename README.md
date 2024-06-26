# Swiggy UI Clone

This project is a clone of the Swiggy user interface built using React. It uses a local API to fetch and display data.

## Features

Responsive design

Dynamic menu and restaurant listings

Fixed header that changes style on scroll

Interactive elements like signup and login buttons

## Technologies Used

React

CSS (TailwindCSS or plain CSS)

Local JSON Server for API


## Prerequisites

Make sure you have the following installed on your machine:
```bash
Node.js (>= 14.x)
npm (>= 6.x)
```

## Installation
### 1.Clone the repository:
```bash
git clone https://github.com/your-username/swiggy-ui-clone.git
cd swiggy-ui-clone
```

### 2.Install the dependencies:
```bash
npm install
```

### Running the Local API
We are using json-server to create a local API. Follow these steps to set it up:

Install json-server globally if you haven't already:

```bash
npm install -g json-server
```

## Start the JSON server:
```bash
json-server --watch db.json --port 5000
```
The API will be available at http://localhost:5000.

## Running the React Project
Start the React development server:
```bash
npm start
```
Open your browser and navigate to http://localhost:3000.

## Project Structure
```python
public/: Contains the public assets and the HTML file.

src/: Contains the React components and styles.

components/: Contains reusable React components.

assets/: Contains images and other assets.

App.js: Main application component.

index.js: Entry point for the React application.

db.json: Sample data for the local API.
```
## Usage :
The header will become fixed and change style when you scroll down.
The menu and restaurant data are fetched from the local API.
You can navigate between different sections using the navigation links.

1.
![Swiggy UI Clone Screenshot](./src/assets/images/swiggy1.JPG)
2.
![](./src/assets/images/swiggy2.JPG)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
