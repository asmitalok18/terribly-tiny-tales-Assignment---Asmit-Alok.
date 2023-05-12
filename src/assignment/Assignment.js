import React, { useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Assignment.css';

const Histogram = ({ data }) => {
  
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.word}>
              <td>{entry.word}</td>
              <td>{entry.frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



const Assignment = () => {
  const [histogramData, setHistogramData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://www.terriblytinytales.com/test.txt');
      const content = response.data;
      const words = content.toLowerCase().split(/\s+/);
      const wordMap = {};

      words.forEach((word) => {
        if (wordMap[word]) {
          wordMap[word] += 1;
        } else {
          wordMap[word] = 1;
        }
      });
      console.log(showTable)

      const sortedWords = Object.keys(wordMap).sort((a, b) => {
        if (wordMap[a] === wordMap[b]) {
          return a.localeCompare(b); // Sort alphabetically if frequencies are the same
        }
        return wordMap[b] - wordMap[a];
      });

      const top20 = sortedWords.slice(0, 20);

      const data = top20.map((word) => ({
        word,
        frequency: wordMap[word],
      }));

      setHistogramData(data);
      setShowTable(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };
  

  const exportCSV = () => {
    const csvData = histogramData.map((entry) => `${entry.word},${entry.frequency}`).join('\n');
    const csvBlob = new Blob([csvData], { type: 'text/csv' });
    const csvUrl = URL.createObjectURL(csvBlob);
    const link = document.createElement('a');
    link.href = csvUrl;
    link.download = 'histogram.csv';
    link.click();
  };

  return (
    <div className="container">
      <div >
        {histogramData.length > 0 && <Histogram data={histogramData} />}
      </div>
      <div className="right-pane">
        {isLoading ? (
          <button className="button" disabled>
            Loading...
          </button>
        ) : (
          <button className="button" onClick={fetchData}>
            Submit
          </button>
        )}
        {histogramData.length > 0 && (
          <div className="chart">
            <BarChart width={window.innerWidth - 650} height={500} data={histogramData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="word" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="frequency" fill="green" />
            </BarChart>
            <button className="export-button" onClick={exportCSV}>
              Export
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assignment;





