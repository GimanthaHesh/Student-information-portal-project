import { useState } from 'react';
import '../assets/css/compo.css';
import { students } from '../data/StudentsDb';
import Profile from './Profile';
export default function StudentTable(props) {
    
const[stu,setStu]=useState(props.students[0]);

    return(
        <div className="outerDiv">
            <div className="leftDiv" > 
                <table border="1">
                    <thead>

                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Course</td>
                        <td>Country</td>
                        <td>Profile</td>
                    </tr>
                                            
                    </thead>
                    <tbody>
                        {
                            props.students.map((student) => 

                                    <tr>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.course}</td>
                                        <td>{student.address.country}</td>
                                        <td><img src={student.profilePic} alt="profile" width="50px" height="50px"/></td>

                                        <td><button id={student.studentId}  onClick={()=>{setStu(student)}}>View</button></td>

                                    </tr>
                                )
                            }
                        
                    </tbody>
                </table> 
                </div>     
                <div className='rightDiv'>
                        <Profile stu={stu}/>
                </div>    
        </div>
    );
}