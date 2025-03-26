import React, { useState } from 'react';
import GmailLogin from '../components/loginsimulations/GmailLogin';
import FacebookLogin from '../components/loginsimulations/FacebookLogin';
import InstagramLogin from '../components/loginsimulations/InstagramLogin';

const LoginForm: React.FC = () => {
  const [loginType, setLoginType] = useState<'gmail' | 'facebook' | 'instagram'>('gmail');

  const renderLoginForm = () => {
    switch (loginType) {
      case 'gmail':
        return <GmailLogin />;
      case 'facebook':
        return <FacebookLogin />;
      case 'instagram':
        return <InstagramLogin />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-around mb-4">
        <button onClick={() => setLoginType('gmail')} className="text-blue-500">Gmail Login</button>
        <button onClick={() => setLoginType('facebook')} className="text-blue-500">Facebook Login</button>
        <button onClick={() => setLoginType('instagram')} className="text-blue-500">Instagram Login</button>
      </div>
      {renderLoginForm()}
    </div>
  );
};

export default LoginForm;