import React from 'react'
function Profile(props) {
  return (
    <>
        <table>
            <tr>
                <td rowSpan={7}>
                    <img className="profile" src={require('../assets/img/1.jpg')} alt="Profile" />
                </td>
                <td>ID</td>
            </tr>
        </table>
    </>
  )
}
export default Profile