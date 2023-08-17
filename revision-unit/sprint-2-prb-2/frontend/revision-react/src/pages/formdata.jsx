import React,{useState} from 'react';

const PostData= ({onSubmit})=>{
    const [formdata,setformdata] = useState({
        name:"",
        email:"",
        destination:"",
        travelNumber:0,
        budget:0
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(formdata);
        setformdata({
            name: "",
            email: "",
            destination: "",
            travelNumber: 0,
            budget: 0
        })
    }
    return(
        <div>
            <h2>Post Data</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter name' value={formdata.name} onChange={(e)=>setformdata({...formdata,name:e.target.value})} />
                <input type="text" placeholder='Enter email' value={formdata.email} onChange={(e) => setformdata({ ...formdata, email: e.target.value })} />
                <input type="number" placeholder='Enter no of persons' value={formdata.travelNumber} onChange={(e) => setformdata({ ...formdata, travelNumber: e.target.value })} />
                <input type="number" placeholder='Enter budget' value={formdata.budget} onChange={(e) => setformdata({ ...formdata, budget: e.target.value })} />
                <select name="destination" value={formdata.destination} onChange={(e) => setformdata({ ...formdata, destination: e.target.value })}>
                    <option value="India">India</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Europe">Europe</option>
                </select>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default PostData