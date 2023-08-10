import React from 'react';
import '../pages/styles.css'; 

const ThemeCard = ({ title, subtitle, backgroundColor, textColor, borderColor, isSelected, onClick, index }) => {
  
 
  return (

    <div className="theme-card" style={{ backgroundColor, border: isSelected===index? `7px solid ${borderColor}`: 'none' }} onClick={onClick}>
      <h3 className="theme-title" style={{color: textColor}}>{title}</h3>
      <p className="theme-subtitle" style={{color: textColor}} >{subtitle}</p>
    </div>
  );
  

};

const ThemeMenu = ({selectedTheme, setSelectedTheme}) => {
  const themes = [
    { title: 'Title', subtitle: 'Subtitle', backgroundColor: '#FFF8F0', textColor: '#000000', borderColor: '#AABCB6' },
    { title: 'Title', subtitle: 'Subtitle', backgroundColor: '#FFFFFF', textColor: '#000000', borderColor: '#FFC000' },
    { title: 'Title', subtitle: 'Subtitle', backgroundColor: '#000000', textColor: '#FFFFFF', borderColor: '#FFFFFF' },
  ];


  const handleThemeClick = (theme) => {
    setSelectedTheme(theme);
  };

  return (

    <div className="theme-menu-container">
        
      <div className="theme-menu">
        {themes.map((theme, i) => (
          <ThemeCard
            key={i}
            index={i}
            title={theme.title}
            subtitle={theme.subtitle}
            backgroundColor={theme.backgroundColor}
            textColor={theme.textColor}
            borderColor={theme.borderColor}
            isSelected={selectedTheme}
            onClick={() => handleThemeClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeMenu;
