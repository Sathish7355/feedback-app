  import React, { useEffect, useState } from "react";
import TextControl  from "../Components/TextboxControl";
  import TextAreaControl from "../Components/TextareaControl";
  import ButtonControl from "../Components/ButtonControl";

  const Feedback = () => {

    function currentTime() {
      const formatted =   new Date().toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
  });

  return formatted

  }

  const initialState = {
      name:"",
      description:""
  }
   const [error,setError] = useState({
      name:false,
      description:false
  })

    const [data,setData] = useState(initialState)

      const [feedbackData,setFeedbackData] = useState([])

     const handleTextChange = (e)=>{
      console.log(e.target)
      setError((prev)=>({...prev,[e.target.name]:false}))
      setData((prev)=>({...prev,[e.target.name]:e.target.value}))

  }

  const handleSubmit = ()=>{
      if(data.name==''){
    setError((prev)=>({...prev,'name':true}))

      }
          if(data.description==''){
                setError((prev)=>({...prev,'description':true}))

      }

      if(data.name=='' || data.description==""){
          return;
        }

            setFeedbackData((prev)=>[...prev,{
                name:data.name,
                description:data.description,
                createdOn:currentTime()
            }])
          setData(initialState)
  }

return(      
      <div className="feedback-page">
        <div className="header">
          <h3>Feedback App</h3>
          <p>Share your Feedback Your review helps us improve</p>
        </div>
        <div className="form-data">
          <TextControl
            label={"Name"}
            placeholder={"Enter your name"}
            type={"text"}
            error={error.name}
            Required={true}
            name='name'
            onChange={handleTextChange}
            value={data.name}
          />
          <TextAreaControl
            label={"Feedback"}
            placeholder={"Write your feedback"}
            type={"textarea"}
            name='description'
            Required={true}
            error={error.description}
            onChange={handleTextChange}
                value={data.description}
          />
          <ButtonControl btnName={"Submit feedback"} onClick={handleSubmit} />
        </div>
        <div className="feedback-list">
          <div className="feedback-data-header">
            <h3>Feedback List</h3>
            <p>{feedbackData.length ||0} entries</p>
          </div>
          <ul className="feedback-data">
            {feedbackData && feedbackData?.length>0 ? feedbackData?.map((item, index) => (
              <li key={index}>
                <p className="input-datas">
                  <span className="name">{item.name} </span>
                  <span>{item.description}</span>
                </p>
                <p>{item.createdOn}</p>
              </li>
            ) ) : <li className="no-feedback-data">
              <p>No feedback yet</p>
              </li>}
          </ul>
        </div>
      </div>
    
    );
  };

  export default Feedback;
