const Button = (
  { label, handleClick, isActivate, color }: 
  { 
    label: string, 
    handleClick: () => void, 
    isActivate: boolean, 
    color: 'red' | 'black' | 'gray',
  }
) => {
  const getStyle = () => {
    if (color === 'red') return 'bg-red-700 text-white';
    else if (color === 'black') return 'bg-black text-white';
    else return 'bg-gray-100 text-gray-400';
  }

  return (
    <button
      className={`w-[100%] rounded-[3px] h-10 text-[14px] 
        ${isActivate ? '' : 'opacity-20 '}
        ${getStyle()}
      `}
      onClick={() => {isActivate && handleClick()}}
    >
      { label }
    </button>
  );
}

export default Button;