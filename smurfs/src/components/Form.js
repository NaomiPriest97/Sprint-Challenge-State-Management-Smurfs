import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { connect } from 'react-redux';

const SmurfForm = ({ values, touched, errors, status }) => {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    console.log("status has changed!!", status);
    status && setSmurfs(smurfs => [...smurfs, status]);
  }, [status]);

  return (
    <div className="smurfs-form">
      <Form>
        <label htmlFor="name">
          {" "}
          Name
          <Field
            id="name"
            type="text"
            name="name"
            placeholder="Name"
          />
          {touched.name && errors.name && (
            <p className="errors">{errors.name}</p>
          )}
        </label>
        <label htmlFor="age">
          {" "}
          Age
          <Field id="age" type="text" name="age" placeholder="Age" />
          {touched.age && errors.age && (
            <p className="errors">{errors.age}</p>
          )}
        </label>

        <label htmlFor="height">
          Height
          <Field
            
            className="heighy"
            id="height"
            type="text"
            name="height"
            placeholder="Height in cm"
          />
          {touched.height && errors.height && (
              <p className="errors">{errors.height}</p>
          )}
        </label>

        
        {/* <label htmlFor="terms" className="checkbox-container">
          Terms of Service
          <Field
            id="terms"
            type="checkbox"
            name="terms"
            checked={values.terms}
          />
          {touched.terms && errors.password && (
              <p className="errors">{errors.terms}</p>
            )}
          <span className="checkmark" />
        </label> */}

       
       
        <button type="submit">Submit!</button>
      </Form>
      <pre>{JSON.stringify(values, null, 2)}</pre>
      {smurfs.map(smurf=> (
        <ul key={smurf.id}>
          <li>Name: {smurf.name}</li>
          <li>Age: {smurf.age}</li>
          <li>Height: {smurf.height} cm</li>
        
        </ul>
      ))}
    </div>
  );
};


const FormikForm = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || "",
      
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.string().required(),
    height: Yup.string().required(),

  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios.post("http://localhost:3333/smurfs", values).then(response => {
      console.log("success", response);
      setStatus(response.data);
      resetForm();
    });
  }
})(SmurfForm);

export default connect(null, null)(FormikForm);
