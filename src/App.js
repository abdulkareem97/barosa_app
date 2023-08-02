import { useState } from "react";

function App() {
  const msg = new SpeechSynthesisUtterance()

  const [name, setName] = useState('')
  const [per, setPer] = useState(0)
  const [text, setText] = useState('')
  const [obj, setObj] = useState({})
  const [lastValue,setLastValue] = useState(0)

  const bol = () => {

    let x = Math.floor((Math.random() * 3) + 1);
    while(x==lastValue){
      console.log(x)
      x = Math.floor((Math.random() * 3) + 1);
    }
    setLastValue(x)
    let str;

    setPer(x)
    // if(obj[name])
    // console.log(obj.name)
    if (obj[name]) {
      setText(obj[name])
      setName('')

    }

    if (x == 1) {
      str = name + ' ' + 'pe barosa nhi karna ka '

    }
    else if (x == 2) {
      str = name + ' ' + 'pa teri marzi barosa karta to kar'

    }
    else {
      str = name + ' ' + 'pa barosa karna ka'

    }
    setObj({ ...obj, [name]: str })
    setText(str)
    setName('')

    // var utterance = new window.SpeechSynthesisUtterance();
    msg.lang = 'hi-IN'; //translates on the fly - soooo awesome (japanese is the funniest)
    msg.text = str
    // utterance.volume = 1.0;
    // utterance.rate = 1.0;
    // utterance.pitch = 1.0;
    window.speechSynthesis.speak(msg);

  }





  return (
    <div className="h-[100vh] bg-indigo-700 p-5 flex items-center justify-center">
      <div className="bg-indigo-700 shadow-2xl rounded-md text-white p-10">
        <div className="flex justify-center text-3xl underline p-4 uppercase" >
          <h1> Barosa App </h1>
        </div>
        <div className="flex justify-center text-lg ">
          <span>
            nam dalo . computer bolta kitta barosa karna
          </span>
        </div>

        <div className="flex  items-center justify-center p-4 space-x-5">
          <input type="text" placeholder="nam dal miya" value={name} onChange={(e) => {
            setName(e.target.value)
            setPer(0)

          }}

            className="bg-indigo-700 border-white border p-3 w-fit rounded-sm " />
          <button
            onClick={bol}
            className="bg-gray-900 hover:bg-gray-600 p-3 rounded-md">Click To guess</button>
        </div>

        <div className="flex justify-center p-10">
          {
            per !== 0 &&
            <span>
              {text}
            </span>
          }

        </div>

      </div>
    </div>
  );
}

export default App;
