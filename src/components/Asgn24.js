import 'bootstrap/dist/css/bootstrap.min.css'
function Asgn24(porps){
    console.log(porps)
    return(
        <div className="container">
            <h1 className="display-6 text-center"> Employees Details</h1>
             <table className="table text-center bg-success text-white mt-5">
            <thead>
                <tr className='text-black fs-5'>
                    <th>Ename</th>
                    <th>Eno</th>
                    <th>City</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody >{
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
export default Asgn24
