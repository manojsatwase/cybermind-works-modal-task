import userAvatar from '../assets/userpic.png';

// options coming from backend User API

export const options = [
    {
      name: 'John Smith',
      imageUrl: 'https://manojsatwase.github.io/images/mylogo.jpeg',
    },
    {
      name: 'Manoj Satwase',
      imageUrl: userAvatar,
    },
    {
      name: 'Raj Mahata',
      imageUrl: 'https://manojsatwase.github.io/images/mylogo.jpeg',
    },
    {
      name: 'Rani Patel',
      imageUrl: userAvatar,
    },
  ];

  export const comments =  [
    {
      id: '1',
      user_pic: 'https://manojsatwase.github.io/images/mylogo.jpeg',
      name: 'jane smith',
      comment: "Thanks for assigning me the task. We'll get the details ironed out.",
      owner: false,
      isComplete:false,
    },
    {
      id: '2',
      user_pic: userAvatar,
      name: 'jane smith',
      comment: "Thanks for assigning me the task. We'll get the details ironed out.",
      owner: true,
      isComplete:false
    },
  ]

export {
    userAvatar
}