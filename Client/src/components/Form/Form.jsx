import { useState } from "react";
import validation from"../validation"
import style from "./Form.module.css"

const Form = ({login}) => {
    
const [userData, setuserData] = useState({email:'', password:''})
const [errors,setErrors] = useState({})


    const handlerChange = (event) => {
        
         setErrors(validation({...userData,[event.target.name]: event.target.value}))
         setuserData(({...userData ,[event.target.name]: event.target.value }))
         console.log(event.target)
            
    };



    const handlerSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };

    return (
       
        <div className={style.formulario}> 
        
       
           <form onSubmit={handlerSubmit}> 
          
            <div className={style.email}>
                
                <input name='email' value={userData.email} type="email" placeholder=" Email" onChange={handlerChange}/>
            </div>
            
            
            {errors.e1 ? (<p>{errors.e1}</p>) : errors.e2 ?(<p>{errors.e2}</p>) :(<p>{errors.e3}</p>)}

        
            <div className={style.password}> 
           
            <input name='password' value={userData.password} type="password" placeholder=" Password" onChange={handlerChange} />
            </div>
            
            {errors.e4 ? (<p>{errors.e4}</p>): (<p>{errors.e5}</p>)}

           <button onClick={handlerSubmit} type="submit">Submit</button>
            

           </form> 
        </div>
    )

}

export default Form;