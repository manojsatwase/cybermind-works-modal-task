import SelectComponent from './SelectComponent';
import { options } from '../../utils/constant';

const SelectOption = ({ onChange }) => {
  return (
    <div className='selectOption'>
      {options.map((option, index) => (
        <SelectComponent key={index} onChange={onChange} {...option} />
      ))}
    </div>
  );
};

export default SelectOption;
