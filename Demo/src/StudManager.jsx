import React, { useEffect, useState } from 'react'

const StudManager = () => {

    const[Students , setStudents] = useState([])
    const[Name, setName] = useState("")
    const[Age, setAge] = useState("")
    const[Email,setEmail]= useState("")
    const[RollNo ,setRollNo]= useState("")


    function handleSubmit(e)
    {
        e.preventDefault();
        if(Name === ""  || Email ==="" ||  Age ==="" || RollNo ==="" )
            return
    

    const newStudent=(
         Name,
         Email,
         Age,
         RollNo
    );

        setStudents([...Students , Name])
        setName("")
        setEmail("")
        setAge("")
        setRollNo("")
    }
    
    function deleteStudent(indexToDelete)
    {
        const updatedStudents = Students.filter(
            ( _ , index) => index !== indexToDelete
        )
        setStudents(updatedStudents);
    }


    useEffect(()=> {
        console.log("Student Added")
    },[Students])


  return (
    <div>

            <h1> Student Manager System </h1>

            <form onSubmit={handleSubmit}>

                <input 
                type="text" 
                placeholder='Enter Student name'
                value={Name}
                onChange={(e) => setName(e.target.value)}
                />


                <input 
                type="email" 
                placeholder='Enter Email id'
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                />


                <input 
                type="number" 
                placeholder=' Entert Age'
                value={Age}
                onChange={(e) => setAge(e.target.value)}
                />

        

                <input 
                type="number" 
                placeholder='Enter RollNo'
                value={RollNo}
                onChange={(e) => setRollNo(e.target.value)}
                />

                <button type="submit">Add Student</button>
            </form>


            <h3> Student List</h3>

            {Students.length === 0 && <p>No Students Added yet </p>}

            <ul>

                {Students.map((s , index)=>(
                
                    <li key={index}>

                       <div>Name{s.Name}</div> 
                       <div>Email{s.Email}</div>
                       <div>Age{s.Age}</div>
                       <div>RollNo{s.RollNo}</div>

                        <button onClick={ ()=> deleteStudent(index)}>Delete Student</button>

                    </li>    

             )   )}

            </ul> 



    </div>
  )
}

export default StudManager



// UseState => controls data
// UseEffect => react tp the data changes