import React from 'react';

const DeploymentTest: React.FC = () => {
  const deploymentTime = new Date().toLocaleString();
  
  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: '#10B981',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      zIndex: 9999,
      fontSize: '14px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      ✅ CI/CD Test<br/>
      Deployed: {deploymentTime}
    </div>
  );
};

export default DeploymentTest;
