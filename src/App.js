import React, { useState } from 'react';


function NavigationBar(){
  const [activeTab, setActiveTab] = useState('About Me');
  const [inputValue, setInputValue] = useState('');
  const [tableData, setTableData] = useState([]);

const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <nav>
        <ul>
          <li
            className={activeTab === 'About Me' ? 'active' : ''}
            onClick={() => handleTabClick('About Me')}
          >
            About Me
          </li>
          <li
            className={activeTab === 'Form' ? 'active' : ''}
            onClick={() => handleTabClick('Form')}
          >
            Form
          </li>
          <li
            className={activeTab === 'Table' ? 'active' : ''}
            onClick={() => handleTabClick('Table')}
          >
            Table
          </li>
        </ul>
      </nav>
      <div className="content">
        {activeTab === 'About Me' && <p>Hello. This is Aatreyi Bhatia. I am a first year ug in the MEMS Department. I enjoy reading books and listening to music. I have great interest in design and love to spend my time making stuff on Canva. I would love to explore more about Computer Languages using this opportunity called SOC</p>}
        {activeTab === 'Form' && (
          <div class = "inputForm">
            <h2>Form</h2>
            <form>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter a value"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
        {activeTab === 'Table' && (
          <div class = "hello">
            <h2>Table</h2>
            <table>
              <thead>
                <tr>
                  <th>S. NO.</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  Hi
                </tr>
                <tr>
                  hello
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;

