import { useState } from 'react'

export default function About() {

    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btnText, setBtnText] = useState("Enable dark mode")
    
    const toggleStyle = () => {

        if (myStyle.color == 'black') {
            setmyStyle({
                color: "white",
                backgroundColor: 'black'
            })
            setBtnText("Enable light mode")
        }
        else {
            setmyStyle({
                color: "black",
                backgroundColor: 'white'
            })
            setBtnText("Enable dark mode")
        }
    }
    return (
        <div className="bg-gray-300 p-8 h-[90vh] " style={myStyle}>
            <h1 className="text-2xl font-bold mb-4">About Us</h1>
            <p className="text-lg mb-4">
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eius ex? Numquam, obcaecati suscipit earum praesentium tempora libero corrupti. Autem excepturi ratione et suscipit molestiae, ab omnis, facilis nam at iste reprehenderit perferendis tenetur rerum ullam deserunt corrupti consequatur cum? ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum mattis mi, ut pharetra turpis porta vel. Fusce id consectetur lorem.
            </p>
            <button onClick={toggleStyle} className="bg-[#1f2937] hover:bg-[#414954] text-white font-bold py-2 px-4 rounded">
                {btnText}
            </button>
        </div>
    )
}
