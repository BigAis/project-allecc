import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  size = 'medium',
  onClick, 
  className = '',
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'left'
}) => {
  const buttonClasses = `btn btn--${variant} btn--${size} ${className} ${icon ? 'btn--with-icon' : ''}`;

  // If it's a link (internal or external)
  if (to || href) {
    if (to) {
      return (
        <Link to={to} className={buttonClasses}>
          {icon && iconPosition === 'left' && <span className="btn__icon">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="btn__icon">{icon}</span>}
        </Link>
      );
    }
    return (
      <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
        {icon && iconPosition === 'left' && <span className="btn__icon">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="btn__icon">{icon}</span>}
      </a>
    );
  }

  // Regular button
  return (
    <button 
      type={type} 
      className={buttonClasses} 
      onClick={onClick} 
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && <span className="btn__icon">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="btn__icon">{icon}</span>}
    </button>
  );
};

export default Button;