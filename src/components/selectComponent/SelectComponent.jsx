const SelectComponent = ({ name, imageUrl, onChange }) => {
  return (
    <div className="dropdown__wrapper dropdown__wrapper--fade-in" onClick={() => onChange(name)}>
        <div className='avatar-wrapper'>
           <img src={imageUrl} alt={name} className="option-image" />
        </div> 
      <span className="option-name">{name}</span>
    </div>
  );
};

export default SelectComponent;
