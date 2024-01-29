import React, { useState } from 'react';
import axios from 'axios';
import ImageSlider from '../componunts/ImageSlider';

const Home = () => {
  const images = [
    '/src/img/1.png',
    '/src/img/2.png',
    '/src/img/3.png',
    '/src/img/5.png',
    // Add more image URLs as needed
  ];

  const [file, setFile] = useState(null);


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:4000/upload', formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleDownload = () => {
    window.location.href = 'http://localhost:4000/download';
  };
 
  return (

    <>
    
      {/* Jumbotron/hero section */}
      <div className=" jumbotron  centered ">
      <div className="overlay"></div>
        <div className="con">
          <h1 className="display-2">Welcome to Our Line Balansing Software Website</h1>
          <p className="lead">Providing innovative solutions for industrial challenges.</p>
          <button className="btn btn-primary m-2" >
          <a href="#download">  Download Software</a>
            
            </button>
          
        </div>
      </div>
  
      
      <section id="download">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 ">
            
            <h2>Download Our Software</h2>
            <p>Experience the power of our cutting-edge software solutions.</p>
            <div>
          
            </div>
            <button className="btn btn-primary m-2" onClick={handleDownload}>
              Download 
            </button>
          </div>
          <div className="col-lg-6">
            {/* Content for the right side */}
            <ImageSlider images={images} />
          </div>
        </div>
      </div>
    </section>
     
  
    </>
  )
}

export default Home