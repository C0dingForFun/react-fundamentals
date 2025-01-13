import './App.css';

// function MyButton(){
//   return (
//     <button>
//       I'm a button
//     </button>
//   )
// }

const user = {
  name: 'Gwiba Mabandla',
  imageUrl: ' https://c0dingforfun.github.io/portfolioimg/Images/Me/MyPic.jpg',
  imageSize: 190,
}

export default function App() {
  return (
    <>
      <div className="App-header">
        {/* <div>
          <h1>Welcome to my app</h1>
          <MyButton/>
        </div> */}
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
      </div>
    </>
  );
} 
