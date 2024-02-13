import './App.css';

function App() {
  const handleFocus = (event) => {
    event.target.value = '';
  };

  const love = () => {
    var name1 = document.getElementById('NameOne').value;
    var name2 = document.getElementById('NameTwo').value;
    if (name1 === "" || name2 === "") {
      alert("⚠️ Fill the gap");
    } else if (name1.length <= 2 || name2.length <= 2) {
      alert("⚠️ The names need to be more than 3 characters");
    } else {
      var random = Math.floor(Math.random() * 100);
      document.getElementById("print").innerHTML = `${name1} and ${name2} = ${random}% of love`;
      if (random == 100) {
        document.getElementById("statement").innerHTML = "🤗 Good Relationship ❤️ 💐";
      } else {
        document.getElementById("statement").innerHTML = "🥰 Lovely Relationship 💖";
      } if (random <= 40) {
        document.getElementById("statement").innerHTML = "😪 Not compatibility 💔";
      } else {
        document.getElementById("statement").innerHTML = "🥰 Lovely Relationship 💖";
      }
    }
  };

  return (
    <div className="container">
      <div className='content'>
        <h1 className='h1'>Love Calculator</h1>
        <div className='inputarea'>
          <input type="text" placeholder='Your Name:' id="NameOne" onFocus={handleFocus} />
          <input type="text" placeholder='Your Love' id="NameTwo" onFocus={handleFocus} />
        </div>
        <a href="#" onClick={love} className="block text-center">Calculate</a>
        <p id='print' className="block text-center">Your relationship result here:</p>
       <p id='statement' className="block text-center"></p>
       <h6 className='footer'>Copyright © 2024 Joaquim Timoteo. All rights reserved.</h6>
      </div>
    </div>
  );
}

export default App;
