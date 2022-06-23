import 'bootstrap/dist/css/bootstrap.min.css'
function child1(porps){
    console.log(porps)
    return(
        <div className="container">
            <h1 className="display-6 text-center">Table of Employees</h1>
             <table className="table text-center bg-light mt-5">
            <thead>
                <tr>
                    <th>Ename</th>
                    <th>Eno</th>
                    <th>City</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>{
                 porps.emp.map((e)=><tr>
                 <td>{e.ename}</td>
                 <td>{e.eno}</td>
                 <td>{e.city}</td>
                 <td>{e.salary}</td>
             </tr>)
            }
            </tbody>
            </table>
        </div>
    )
}
export default child1

