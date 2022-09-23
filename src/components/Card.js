// const todoTitle = 'My Family is the best';
// const todoDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

// const headingStyle = {
// backgroundColor: 'purple',
// color: 'white',
// textAlign: 'center',
// padding: '15px'
// }

const name = ['dog', 'cat']; //Array destructuring
const [dog, cat] = name;

function Card(props){
  const {titleText, descText} = props;
  return <div className='card'>
  {/* <h3 className='cardTitle'>{props.titleText}</h3>
  <p className='cardDescription'>{props.descText}</p> */}
  <h3 className='cardTitle'>{titleText}</h3>
  <p className='cardDescription'>{descText}</p>
  <p className='cardFooter'>{dateName + "/" + monthName + "/" + currentYear}</p>
  <p>{dog}</p>
  <p>{cat}</p>
  </div>
}

export default Card;