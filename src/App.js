import './App.css';
import { useState } from 'react';

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

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

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
        <h3>Products:</h3>
        <ul>{listItems}</ul>
        </div>
      <div>
        <h1>Counters that update together</h1>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>
    </div>
    </>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}