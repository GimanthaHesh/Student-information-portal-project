import '../assets/css/compo.css';
export default function StudentTable(props) {
    
    return(
        <div className="outerDiv">
            <div className="leftDiv" > </div>
                <table>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Course</td>
                        <td>Country</td>
                        <td>Profile</td>
                    </tr>
                </table>          
        </div>
    );
}