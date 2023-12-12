// npm install pdfjs-dist@3.4.120
// npm install @react-pdf-viewer/core@3.12.0

import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import React from 'react';
import './Resume.css'

function Resume(props) {
  return (
    <div className='resume'>
      <Viewer fileUrl={props.resume}/>
    </div>
  );
}

export default Resume;
