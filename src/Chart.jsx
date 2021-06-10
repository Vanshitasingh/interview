import React,{useState} from 'react';
import Search from './Search';
import { Bar } from 'react-chartjs-2';
import Navbar from './Navbar';
import employee from './employee.js'; 


function Chart() {


  const [search,setSearch] = useState('');
  

 
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
    if (search) {
      obj = obj.filter(
          comment =>
              comment.location.toLowerCase().includes(search.toLowerCase())
              
      );
    }
  const labels=[];
  obj.map(emp=>labels.push(emp.location.toString()));
  console.log(labels);
    console.log(obj);
  
    const dataSet =[];
    obj.map(emp=>dataSet.push(emp.currSalary))
    console.log(dataSet);
  

    const data={
      labels: [...labels],
  datasets: [
    {
      label: '# Salary in $',
      data: [...dataSet],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
  ],
    }
  
  const options= {
      responsive: true,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  
  return( <>
  <div className='container'>
  <Navbar />
  <div className="row">
                        
  <div className="col-md-6 d-flex flex-row-reverse justify-content-end search">
    <Search
      onSearch={value => {
        setSearch(value);
       }}
    />
    </div>
    </div>
    <Bar data={data} options={options} />
    </div>
  </>)
};

export default Chart;