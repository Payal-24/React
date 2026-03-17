import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
const jobOpenings = [
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZEZ6fa7bPwCI4HE5583rhd3qiFNmf6kiPg&s",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    name: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBMtSGE80NIQn0YxrAR_PL0I-QpVVorPnIBw&s",
    name: "Netflix",
    datePosted: "10 weeks ago",
    post: "Streaming Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandlogo: "https://yt3.googleusercontent.com/iBn9KeDnKNffvLlHQXPjl8VNkhuMp8N7FPxf6n6dwI85cWH6SE4DsuDLchoQNJNb5KB9oIlyzw=s900-c-k-c0x00ffffff-no-rj",
    name: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Gurgaon, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png",
    name: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/960px-Tesla_Motors.svg.png",
    name: "Tesla",
    datePosted: "4 days ago",
    post: "Embedded Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://yt3.googleusercontent.com/btm1_PK-7VRUr9GY2D0UV_2XfbUZPBjghyptjSO1crsfN86HyTYDWPmUbq7JxC3H0Lxe_s067nA=s900-c-k-c0x00ffffff-no-rj",
    name: "NVIDIA",
    datePosted: "2 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$72/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/250px-Intel_logo_%282006-2020%29.svg.png",
    name: "Intel",
    datePosted: "3 weeks ago",
    post: "Hardware Design Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2yFoqTWpMy6zVk4Kgc2yxPv7c0P7JecWHbQ&s",
    name: "Uber",
    datePosted: "8 days ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$58/hr",
    location: "Delhi, India"
  }
];
  return (
    <div className='Card-container'>
      {jobOpenings.map(function(elem){
        return <Card company={elem.name} post={elem.post} date={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandlogo={elem.brandlogo}/>

      })}
  
    </div>
  )
}

export default App
