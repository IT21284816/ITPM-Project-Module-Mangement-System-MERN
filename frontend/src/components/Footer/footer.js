import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; 2024 Project Management System</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '40px 0',
    marginTop: '80px', // Adjust as needed
    textAlign: 'center',
    
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
};

export default Footer;
