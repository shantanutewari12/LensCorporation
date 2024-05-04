import React from 'react';

const ServiceCard = (props) => {
  const { title, description } = props.project;

  return (
    <div className="col-lg-5 col-md-5 col-sm-8 card m-2 p-4 bg-gray-800 text-white rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="card-body border-4 border-transparent hover:border-blue-500 h-full">
        <h6 className='font-bold text-xl mb-4 text-center bg-blue-gradient text-bg-blue-100 rounded-full py-2'>{title}</h6>
        <p className='text-sm mb-4 text-justify'>{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const projects = [
    { 
      title: "Biometrics",
      description: "Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.",
    },
    { 
      title: "Image Analysis",
      description: "Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.",
    },
    {
      title: "Cross Media Transactions",
      description: "Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.",
    },
    {
      title: "3-D Modelling & Design",
      description: "We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.",
    }
  ];
  
  return (
    <div id="Projects" className="container-fluid project bg-gray-900 text-white rounded-lg">
      <div className="container py-8">
        <h3 className='text-4xl font-bold mb-6 text-center underline transition duration-500 ease-in-out transform hover:scale-110'>Services</h3>
        <h1 className='text-6xl text-center mb-12'>We provide Artificial Intelligence Services</h1> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {projects.map((proj, index) => (
            <ServiceCard key={index} project={proj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
