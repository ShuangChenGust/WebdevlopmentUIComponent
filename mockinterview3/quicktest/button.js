import React from 'react'

function App() {
    cosnt [text, setText] = useState("");
    const [inputText, setInput] = useState("");

    const handleText = (value) =>{
        console.log(value);
        setText(inputText);
    }

    const updateInput = (value) =>{
        setInput(value);
    }

    return (
        <div>
            <button onClick={handleText}>click me</button>
            <input id = "input" onChange = {updateInput}/>
            <textarea id="textarea">{text}</textarea>
        </div>
    )
}

export default button

const styles = StyleSheet.create({})
