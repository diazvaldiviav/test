import "./css/bootstrap.min.css";

export default function Student(props){
    const fullName = "Victor Diaz";
    const programingExp = 2;
    return(
    <div className='container p-4'>
       <div className='row'>Student Enrolled</div>
       <div className='row border'>
         <div className='col-2'>
          <img src= {`https://ui-avatars.com/api/?name=${props.name}`} className='w-100'/>
         </div>
         <div>
          {props.name}
          <br/>
          Programing Experience {props.experience}
         </div>
       </div>
    </div>
  
    )
  }