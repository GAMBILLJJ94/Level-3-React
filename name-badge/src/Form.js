import React from "react"
import Badge from "./Badge"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            birth: "", 
            phone: "",
            favFood: "",
            comments: ""
        }
    )
    const [badgeArr, setBadgeArr] = React.useState([])
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
            
        })
        
    }
    
    function handleSubmit(event){
        event.preventDefault() 
        setBadgeArr(prevBadgeArr => {
          return([
                  ...prevBadgeArr, formData,
              ])
              
        }) 
        setFormData({
            firstName: "", 
            lastName: "", 
            email: "", 
            birth: "", 
            phone: "",
            favFood: "",
            comments: ""
        })
      } 
      
      const badges = badgeArr.map(badge => {
          return <Badge {...badge} />
      })
    
    return (
        <>
        <form className="form" onSubmit={handleSubmit}>
            <div className="firstLine">
                <input
                    className="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                    minLength={3}
                    required
                />
                <input
                    className="lastName"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                    minLength={3}
                    required
                />
            </div>
            
            <div className="secondLine">
                <input
                    className="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    minLength={3}
                    required
                />
            
                <input
                    className="birth"
                    type="text"
                    placeholder="Place of Birth"
                    onChange={handleChange}
                    name="birth"
                    value={formData.birth}
                    minLength={3}
                    required
                />
            </div>

            <div className="thirdLine">
                <input
                    className="phone"
                    type="number"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    name="phone"
                    value={formData.phone}
                    minLength={3}
                    maxLength={10}
                    required
                />
                <input
                    className="food"
                    type="text"
                    placeholder="Favorite Food"
                    onChange={handleChange}
                    name="favFood"
                    value={formData.favFood}
                    minLength={3}
                    required
                />
            </div>
                <textarea 
                    className="textBox"
                    value={formData.comments}
                    placeholder="Tell Us About Yourself"
                    onChange={handleChange}
                    name="comments"
                    maxLength={1000}
                    required
                />
            
            <button className="button" >Submit</button>
            
        </form>
        {badges}
        </>
    )
}
