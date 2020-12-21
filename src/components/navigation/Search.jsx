import React from 'react';
import { Field, Form, Formik } from 'formik';

const initialValues = {
    serach : ""
}
    
    

    


class Search extends React.Component {
    render(){
        
        return(
            <div>
                <Formik
                initialValues = { initialValues }
                >
                
                {() =>(
                    <div>
                    <Form>
                        <label htmlFor="search" className="mr-2">Search:</label>
                        <Field 
                        type="Text" 
                        name="search"
                        placeholder="Chercher un film."
                        />                       
                    </Form> 
                    </div>
                )}

                  
                </Formik>
            </div>
        )
    }
}

export default Search;