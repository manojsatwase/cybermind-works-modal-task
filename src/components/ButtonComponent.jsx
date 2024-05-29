const ButtonComponent = ({Icon,handleClick}) => {
    return (
        <button onClick={handleClick}>
            <Icon />
        </button>
    )
  }
  
  export default ButtonComponent