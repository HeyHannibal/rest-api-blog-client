export default function Error(props) {
    const {failed, errorMessage} = props 
    return (
     failed ?   <p>
        {errorMessage ?  errorMessage : 'an error has occured, please try again'}
        </p> : null
    )
}