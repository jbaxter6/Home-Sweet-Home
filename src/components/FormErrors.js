import React from 'react'
import '../containers/Container.css'

const FormErrors = (props) =>
    <div>
        {Object.keys(props.formErrors).map((formErrorField) => {
            return (
                props.formErrors[formErrorField].map((error) => {
            return (
                <div class="ui fluid container">
                    <p>{error}</p>
                </div>
            )
        })
        )
    })}
    </div>

export default FormErrors