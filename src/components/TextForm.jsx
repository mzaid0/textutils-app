import { useState } from 'react'
import PropTypes from 'prop-types'

function TextForm(props) {
    const [text, setText] = useState("");

    const convertUptext = () => {
        const newtext = text.toUpperCase();
        setText(newtext);
    }
    const convertLotext = () => {
        const newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleUpValue = (event) => {
        setText(event.target.value);
    }
    const clearText = () => {
        // setText(event.target.value = "");
        //another way
        const newText = "";
        setText(newText);
    }

    return (
        <>
            <h1 className='text-3xl font-semibold mt-5'>{props.heading}</h1>
            <div className="flex flex-col w-full justify-center items-center mt-6">
                <textarea className=" w-[85%] border mb-5 p-2 rounded-md" rows="7" value={text} onChange={handleUpValue}></textarea>
                <div className='flex '>
                    <button disabled={text.length===0} className="bg-[#1f2937] hover:bg-[#414954] text-white font-bold mr-2 py-2 px-4 rounded" onClick={convertUptext}>
                        Convert text to Upper Case
                    </button>
                    <button disabled={text.length===0} className="bg-[#1f2937] hover:bg-[#414954] text-white mr-2 font-bold py-2 px-4 rounded" onClick={convertLotext}>
                        Convert text to Lower Case
                    </button>
                    <button disabled={text.length===0} className="bg-[#1f2937] hover:bg-[#414954] text-white font-bold py-2 px-4 rounded" onClick={clearText}>
                        Clear text
                    </button>
                </div>
            </div>
            <h1 className='text-3xl font-semibold mt-5'>Text Summary</h1>
            <p className='mt-5'>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes read</p>
            <h1 className='text-3xl font-semibold mt-2'>Preview</h1>
            <p>{text.length>0 ? text:"Enter your text above to preview it here "}</p>
        </>
    )
}
TextForm.propTypes = {
    heading: PropTypes.string
};
export default TextForm