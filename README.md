
# Word Frequency Analyzer

This is a React application that fetches data from an API, performs word frequency analysis, and visualizes the results in a histogram chart. The application allows users to submit a request to fetch data, and once the analysis is complete, it displays the top 20 most frequent words in a histogram chart and a table. The table can be exported as a CSV file.

- functional component called `Histogram` that receives data as a `prop`.
- It renders a table to display the word-frequency data passed to it.
- The data `prop` is mapped over to generate table rows for each entry in the data array.

## Note :-

If the number of occurence of word is same then it was showing in alphabatically order in the histogram.
       
        example :- 'at' and 'do' are two words whose frequency is same (10) in that case  'at' is showing before the 'do' in the histogram. 

## Table of Contents

- Features
- Installation
- Usage
- Components
- Libraries and Plugins
- netlify hosting link


## Features

- Fetches data from an API endpoint to analyze word frequency.
- Displays the top 20 most frequent words in a histogram chart and a table.
- Provides an option to export the analyzed data as a CSV file.

## Installation

1. Clone the repository or download the code as a ZIP file.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:
   ```shell
   npm install
## Usage
- Start the development server by running the following command:

- ```npm start``` This will launch the application in your browser at http://localhost:3000.

- Click the "Submit" button to fetch the data from the API and perform word frequency analysis.

- Once the analysis is complete, the top 20 most frequent words will be displayed in a histogram chart and a table.

- To export the analyzed data as a CSV file, click the "Export" button.
## Components
- The application consists of the following components:

- Assignment: The main component that fetches data, performs word frequency analysis, and displays the histogram chart and table.

- Histogram: A reusable component that renders the word frequency data in a table format.

 ## Libraries and Plugins
- The application utilizes the following libraries and plugins:

- React: A JavaScript library for building user interfaces.

- axios: A popular library for making HTTP requests.

- Recharts: A composable charting library built with React and D3 for creating data visualization components.

- To install these dependencies using the provided package.json file before running the application.

Note: This application is developed as part of an assignment for the "Terribly Tiny Tales" coding challenge. The purpose of this project is to showcase my programming skills and understanding of web technologies.

## Netlify Hosting link
[https://645ea69d5d7902402e98b1e7--magenta-snickerdoodle-46f86d.netlify.app/]
