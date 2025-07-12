
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Contact from './Contact.jsx'

export default function New() {

  const person = {
    names:"john",
    age:"45",
    position:"developer",
    email:"123@gmail.com",
    phoneno:"1234567890",
    location:"chennai",
    degree:"be Cse",
    pgdegree:"ME CSe",
    tenth:"450",
    twelve:"990",
    dob:"11-11-2001",
    sname:"schoolname",
    cname:"college name",
    slocaotion:"schoollocation",
    clocation:"colegelocation"
  }  

  return (
   <>
    <h1>{person.names}</h1>
    <h1>{person.age}</h1>
    <h1>{person.position}</h1>
    <Contact  {...person} />
   </>

  )
}


