import React from "react";

function Alert({type = 'danger', message = []}) {
    return (
        <div className={`alert alert-${type}`} role='alert'>
            {message.map(error => (
                <p className='mb-0 small' key={error}>
                    {error}
                </p>
            ))}
        </div>
    )
}

export default Alert
