import React from 'react';

const Resume = () => {
  return (
    <div>
      <h2>My Resume</h2>
      <iframe 
        src={`${process.env.PUBLIC_URL}/resume.pdf`} 
        width="100%" 
        height="600px" 
        title="Resume"
      ></iframe>
    </div>
  );
};

export default Resume;
