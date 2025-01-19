import React from 'react';

interface EmailBtnProps {
    email: string;
    subject?: string;
    body?: string;
}

const EmailBtn: React.FC<EmailBtnProps> = ({ email, subject = '', body = '' }) => {
    const handleClick = () => {
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <button onClick={handleClick}>
            Send Email
        </button>
    );
};

export default EmailBtn;