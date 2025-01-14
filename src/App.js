import './App.css';
import {useState} from 'react'

const user = {
  name: 'Gwiba Mabandla',
  imageUrl: ' https://c0dingforfun.github.io/portfolioimg/Images/Me/MyPic.jpg',
  imageSize: 200,
}

const products = [
  {title: 'Cabbage',isFruit:true, id: 1},
  {title: 'Garlic',isFruit:false, id: 2},
  {title: 'Apple',isFruit:false, id: 3}
]

const listItems = products.map(product =>
  <li key={product.id} style={{ color: product.isFruit ? 'green' : 'blue'}}>+
    {product.title}
  </li>
);

export default function App() {
  

  return (
    <>
      <div className="App-header">
        <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
        />
        <div>
          <MyButton /> 
          <MyButton />
        </div>
        <h3>Products:</h3>
        <ul>{listItems}</ul>
      </div>
    </>
  );
} 

function MyButton(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
