import { useForm, ValidationError } from "@formspree/react"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "components/Input";
import { Label } from "components/Label";
import { Textarea } from "components/Textarea";

export const FormspreeForm = ({formId}) => {

    console.log("FORM ID: ", formId);

    const [state, handleSubmit] = useForm(formId || "xwkzvbpd");

    if(state.succeeded) {
        return (
            <div className="max-w-5xl mx-auto my-5 bg-green-100 text-green-600 p-4 rounded-md flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} />
                <span className="ml-4">Formulario enviado correctamente.</span>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto my-5">
            <div className="mb-4">
                <Label htmlFor="email">
                    Email Address
                </Label>
                <Input
                    id="email"
                    type="email" 
                    name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="mb-4">
                <Label htmlFor="message">
                    Message
                </Label>
                <Textarea
                    id="message"
                    name="message"
                    rows="5"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </div>
            
            <div>
                <button type="submit" className="btn" disabled={state.submitting}>
                    Submit
                </button>
            </div>
        </form>
    )
}