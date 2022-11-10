import './FirstPage.css'
import React, { useState} from 'react';
const FirstPage=()=>{

    const [inpval, setInpval] = useState({aptchannel:"",
        apttitle:"",
        time:"",
        date:"",
        bp:"",
        temp:"",
        height:"",
        weight:"",
        pr:""
    })
    const[data,setData]=useState([])
    //console.log(inpval);

    const getdata = (e) => {
        //console.log(e.target.value);
        const { value, name } = e.target;
        console.log(value,name);

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();
        //const {aptchannel, apttitle,time,date,}
        localStorage.setItem("user",JSON.stringify([...data,inpval]));
//   setInpval({
    
// })
// setData(inpval)
// console.log(setInpval);

//         fetch("http://localhost:3000/user",{
//       method:'POST',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(data)
//     }).then((result)=>{
//       console.log("result",result)
//       result.json().then((resp)=>{
//         //console.log("resp",resp)
//         console.log(data);
//       })
//     })

//     fetch("http://localhost:3000/user").then((result)=>{
//         result.json().then((resp)=>{
//           console.log("result",resp)
//                   })
//         })

     }    

    return(
        <>
            <h2>Clinic Booking Form</h2>
            <div><br></br><br></br>
            
            <label> Details</label><br></br>
            <input type='text'/>  <br></br>
            <input type='text' name='aptchannel' onChange={getdata} placeholder='select appointment channel' /><br></br>  
            <input type='text' name='apttitle' onChange={getdata} placeholder='appointment title' />  <br></br><br></br>

            <label>Time</label>
            <input type='time' name='time' onChange={getdata}/><label>Date</label>
            <input type='date' name='date' onChange={getdata}/><br></br><br></br>

            <label>Vital Information</label><br></br><br></br>
            <input type='number' name='bp' onChange={getdata} placeholder='BP'/>
            <input type='number' name='temp' onChange={getdata} placeholder='Temperature'/>
            <input type='number' name='height' onChange={getdata} placeholder='Height'/>
            <input type='number' name='weight' onChange={getdata} placeholder='Weight'/>
            <input type='number' name='pr' onChange={getdata} placeholder='Pulse Rate'/><br></br><br></br>

            <button type='submit' onClick={addData}>Submit</button>             
            </div>
        </>
    )
}

export default FirstPage;