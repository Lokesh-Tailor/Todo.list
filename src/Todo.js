import { useState } from 'react';
import './Todo.css'
import Deleteform from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CheckBoxIcon from '@mui/icons-material/CheckBox';



function Todo() {
    const [Value, setValue] = useState('')
    const [Values, setValues] = useState([])
    const [updating, setUpdating] = useState(false)
    const [completed, setCompleted] = useState([])



    function changeli(e) {
        setValue(e.target.value)
    }


    function submitButton(e) {
        e.preventDefault();
        if (updating !== false) {
            Values[updating] = Value
            setUpdating(false)
        } else {
            setValues([...Values, Value])
            setValue('');
        }
    }
    //   console.log(liValues)

    function handledelete(e, index) {
        e.preventDefault()
        setValues(Values.filter((data, id) => {
            return id !== index
        }))
    }


    function handleEdit(e, index) {
        e.preventDefault()
        setValue(Values[index]);
        setUpdating(index)
    }


    function handleCheck(e, index) {
        e.preventDefault()
        setCompleted([...completed, index])
    }


    return (
        <>
            <div >
                <input type='text' placeholder="enter your name" value={Value} onChange={changeli}></input>

                <button onClick={submitButton}>submit</button>

            </div>

            <div>
                {
                    Values.map((data, index) => {

                        return <li className={completed.includes(index) ? 'complete' : ""} key={index}>
                            {data}  <a href='' onClick={(e) => handledelete(e, index)}>
                                <Deleteform />  </a>
                            <a href='' onClick={(e) => handleEdit(e, index)}>
                                <ModeEditIcon />  </a>
                            <a href='' onClick={(e) => handleCheck(e, index)}>
                                <CheckBoxIcon />  </a>
                        </li>

                    })
                } </div>
        </>
    )
}


export default Todo