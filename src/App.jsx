import "./App.css";
import React, { useState } from "react";
import MasterPage from "./comps/MasterPage/MasterPage"; 

function App() {
    const [currentPage, setCurrentPage] = useState("page1");

    const renderPage = () => {
        if (currentPage === "page1") {
            return (
                <MasterPage 
                  backgroundColor="aqua"
                  title="Programming Languages" 
                  firstContent={
                      <ul>
                          <li>Python</li>
                          <li>Java</li>
                          <li>JavaScript</li>
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>React</li>
                          <li>C</li>
                          <li>HTMX</li>
                      </ul>
                  }
                  secondContent={
                      <img src="/ProgrammingLanguages.png" alt="Image of programming languages" />
                  }
                  setCurrentPage={setCurrentPage} // Pass down the function
                />
            );
        }
        if (currentPage === "page2") {
          
          return( 
            <MasterPage 
              backgroundColor={'lightgreen'}
              title="Pyhton"
              firstContent={
              <p>
                Python is a versatile programming language, valued for its simplicity and readability.<br />
                \Designed by Guido van Rossum in 1991, it has grown to become a cornerstone of modern development.<br />
                From web applications and data science to automation scripts and artificial intelligence,<br />
                Python’s use cases are almost endless. <br />
                Its philosophy, “readability counts,” ensures that code remains maintainable and accessible.<br />
                With dynamic typing, Python empowers developers to write clean and flexible code. <br />
                Popular libraries like NumPy, pandas, and TensorFlow provide tools to tackle complex challenges effortlessly.<br />
                The beauty of Python lies in its community; <br />
                vast documentation and open-source contributions make it a beginner-friendly yet robust language.<br />
                Whether you're defining functions with def or iterating through data using for,<br />
                Python is your partner in solving problems creatively and efficiently.
              </p>}
              secondContent={
                <div id="ref-links" style={{float:"right"}}>
                  <a className="referLink" href="https://www.python.org/about/gettingstarted/" target="_blank">Get Started</a>
                  <br/>
                  <br />
                  <br />
                  <a className="referLink" href="https://www.python.org/downloads/" target="_blank">Download Python</a>
                </div>
              }
              setCurrentPage={setCurrentPage} // Pass down the function
            />
          );
        }
        return null; // Fallback
    };

    return (
        <>
            <div>
                {renderPage()}
            </div>
        </>
    );
}

export default App;
