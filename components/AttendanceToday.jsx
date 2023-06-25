import React from 'react'

const Data = [
    {name: "Ilham Barusadar",
    nik: "22434322",
    att: "07.00",
    onTime: true,
    },
    
]
fetch
const AttendanceToday = () => {
  return (
    <div>
        <h1>Attendance Today</h1>
          <table>
              <tbody>
                  {Data.map(d => (
                    <tr>
                        <td>{d.name}</td>
                        <td>{d.nik}</td>
                        <td>{d.att}</td>
                    </tr>
                ))}
              </tbody>
        </table>
    </div>
  )
}

export default AttendanceToday