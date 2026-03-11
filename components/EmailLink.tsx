import React from 'react';

interface EmailLinkProps {
  email?: string;
  className?: string;
}

export const EmailLink: React.FC<EmailLinkProps> = ({ 
  email = 'support@feedbackcert.com', 
  className = 'text-primary hover:underline' 
}) => {
  return (
    <span 
      dangerouslySetInnerHTML={{ 
        __html: `<!--email_off--><a href="mailto:${email}" class="${className}">${email}</a><!--/email_off-->` 
      }} 
    />
  );
};
