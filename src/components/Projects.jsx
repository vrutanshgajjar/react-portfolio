import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project">
        <h3>Employee Management System</h3>
        <p>The Employee Management System is a TypeScript-based web application designed for administrators to manage employee records effectively. It allows CRUD operations (Create, Read, Update, Delete) on employee data with authentication and validation mechanisms to ensure data security and integrity</p>
        <a href="https://github.com/vrutanshgajjar/Employee-Management-System" target="_blank">View</a>
      </div>
      <div className="project">
        <h3>eCommerce Website</h3>
        <p>Developed a responsive web-based e-commerce platform with integrated visitor tracking using the Django framework. The system enables real-time product browsing, online ordering, and home delivery services. Designed for an existing physical store to extend sales online, enhancing customer experience through seamless navigation and order management.</p>
        <a href="https://github.com/vrutanshgajjar/eCommerce-Website-With-Visitor-Tracking-System" target="_blank">View</a>
      </div>
    </section>
  );
}

export default Projects;
