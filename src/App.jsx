import { useState } from 'react'
import './App.css'

function App() {
  const [usfm1, setUsfm1] = useState('');
  const [usfm2, setUsfm2] = useState('');
  const [usfm3, setUsfm3] = useState('');
  const [usfm4, setUsfm4] = useState('');
  const [mergedUsfm, setMergedUsfm] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-800 p-4 flex justify-between">
        <h1 className="text-2xl text-white">USFM Merger</h1>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Merge
        </button>
      </div>
      <div className="flex-1 p-4">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
          <div className="p-4 h-full flex flex-col">
            <div className="flex justify-between">
              <span className="text-xl">USFM 1</span>
              <div className="flex">
                <input
                  type="file"
                  accept=".usfm"
                  style={{ display: 'none' }}
                  id="usfm1-upload"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      setUsfm1(e.target.result);
                    };
                    reader.readAsText(file);
                  }}
                />
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => document.getElementById('usfm1-upload').click()}
                >
                  Upload
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                  onClick={() => {
                    setUsfm1('');
                    document.getElementById('usfm1-upload').value = '';
                  }}>
                  Remove
                </button>
              </div>
            </div>
            <div className="mt-2 flex-1"> 
              <textarea className="w-full h-full p-2 border border-gray-300 rounded resize-none" placeholder="Upload USFM 1 file" value={usfm1} style={{ height: '100%' }}></textarea>
            </div>
          </div>
          <div className="p-4 h-full flex flex-col">
            <div className="flex justify-between">
              <span className="text-xl">USFM 2</span>
              <div className="flex">
                <input
                  type="file"
                  accept=".usfm"
                  style={{ display: 'none' }}
                  id="usfm2-upload"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      setUsfm2(e.target.result);
                    };
                    reader.readAsText(file);
                  }}
                />
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => document.getElementById('usfm2-upload').click()}
                >
                  Upload
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                 onClick={() => {
                    setUsfm2('');
                    document.getElementById('usfm2-upload').value = '';
                  }}>
                  Remove
                </button>
              </div>
            </div>
            <div className="mt-2 flex-1"> 
              <textarea className="w-full h-full p-2 border border-gray-300 rounded resize-none" placeholder="Upload USFM 2 file" value={usfm2} style={{ height: '100%' }}></textarea>
            </div>
          </div>
          <div className="p-4 h-full flex flex-col">
            <div className="flex justify-between">
              <span className="text-xl">USFM 3</span>
              <div className="flex">
                <input
                  type="file"
                  accept=".usfm"
                  style={{ display: 'none' }}
                  id="usfm3-upload"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      setUsfm3(e.target.result);
                    };
                    reader.readAsText(file);
                  }}
                />
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => document.getElementById('usfm3-upload').click()}
                >
                  Upload
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                 onClick={() => {
                    setUsfm3('');
                    document.getElementById('usfm3-upload').value = '';
                  }}>
                  Remove
                </button>
              </div>
            </div>
            <div className="mt-2 flex-1"> 
              <textarea className="w-full h-full p-2 border border-gray-300 rounded resize-none" placeholder="Upload USFM 3 file" value={usfm3} style={{ height: '100%' }}></textarea>
            </div>
          </div>
          <div className="p-4 h-full flex flex-col">
            <div className="flex justify-between">
              <span className="text-xl">USFM 3</span>
              <div className="flex">
                <input
                  type="file"
                  accept=".usfm"
                  style={{ display: 'none' }}
                  id="usfm4-upload"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      setUsfm4(e.target.result);
                    };
                    reader.readAsText(file);
                  }}
                />
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => document.getElementById('usfm4-upload').click()}
                >
                  Upload
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                 onClick={() => {
                    setUsfm4('');
                    document.getElementById('usfm4-upload').value = '';
                  }}>
                  Remove
                </button>
              </div>
            </div>
            <div className="mt-2 flex-1"> 
              <textarea className="w-full h-full p-2 border border-gray-300 rounded resize-none" placeholder="Upload USFM 4 file" value={usfm4} style={{ height: '100%' }}></textarea>
            </div>
          </div>
          
      </div>
    </div>
    </div>
  )
}

export default App
