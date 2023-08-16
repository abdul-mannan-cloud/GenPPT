import React from 'react';
import '../pages/styles.css'; 

const ThemeCard = ({ imgSrc, borderColor, isSelected, onClick, index }) => {
  
 
  return (

    <div className="theme-card" style={{ border: isSelected===index? `7px solid ${borderColor}`: 'none' }} onClick={onClick}>

      <img className='theme-image' src={imgSrc} alt="">
      </img>
    </div>
  );
  

};

const ThemeMenu = ({selectedTheme, setSelectedTheme}) => {
  const themes = [
    { imgSrc: '/Images/T1.png', borderColor: '#b2cfdb' },
    { imgSrc: '/Images/T2.png', borderColor: '#FFC000' },
    { imgSrc: '/Images/T3.png', borderColor: '#000000' },
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
            
            imgSrc={theme.imgSrc}
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
