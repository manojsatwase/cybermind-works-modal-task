import { CiStickyNote } from 'react-icons/ci';

const NoteComponent = ({ phoneNumber, website }) => {
  return (
    <div className='note'>
      <CiStickyNote />
      <span>Note :</span>
      <address>
        <h4>{phoneNumber}</h4>
        <h4>{website}</h4>
     </address>
    </div>
  );
};

export default NoteComponent;
