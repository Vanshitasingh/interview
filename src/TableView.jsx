import React, { useState} from "react";
import Search from './Search';
import Navbar from './Navbar';
import './Tableview.css'
import employee from './employee.js';

const DataTable = () => {
    const[search,setSearch] = useState('');

    const key=employee.firstName+ employee.lastName;
    
    const labell=[];
    for(let i=0;i<5000;i++){
       employee.map(emp=>labell.push(emp.location.toString()) )
    }
    console.log(labell);

    var holder = {};
    //emp.location => props
    employee.forEach(function(emp) {
      if (holder.hasOwnProperty(emp.location)) {
        holder[emp.location] = parseFloat(holder[emp.location]) + parseFloat(emp.currSalary);
      } else {
        holder[emp.location] = parseFloat(emp.currSalary);
      }
    });
     var obj = [];
    
    for (var prop in holder) {
      obj.push({ location: prop, currSalary: holder[prop] });
    }
    
    console.log(obj);

if (search) {
    obj = obj.filter(
        comment =>
            comment.location.toLowerCase().includes(search.toLowerCase())
            
    );
}

const salaryTotal =obj.reduce((totalSalary, o) => totalSalary  + parseFloat(o.currSalary),0)

    return (
        <>
        <div className="container">
            <Navbar />


            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div className="row">
                        
                        <div className="col-md-6 d-flex flex-row-reverse justify-content-end search">
                            <Search
                                onSearch={value => {
                                    setSearch(value);
                                }}
                            />
                        </div>
                    </div>

                    <table className="table table-hover t">
                        <thead className="head">
                            <tr>
                                <th>Location</th>
                                <th>Salary(in $)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {obj.map(comment => (
                                <tr scope="row" key={key}>
                                    
                                    <td>{comment.location}</td>
                               
                                    <td>{comment.currSalary.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                            <td>
                                <strong>Total</strong>
                            </td>
                            <td>
                                {salaryTotal.toFixed(2)}
                            </td>
                            </tr>

                        </tfoot>
                        
                    
                    </table>
                </div>
            </div>
            </div>
        </>
    );
};

export default DataTable;
