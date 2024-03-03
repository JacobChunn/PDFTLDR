import { SetStateAction } from "react";
import { StateType, UserFormData } from "../lib/definitions";

export default function InputWrapper({
	type="text",
	id,
	styles,
	formSetter,
}: {
	type?: string,
	id: string,
	styles: string,
	formSetter: React.Dispatch<SetStateAction<UserFormData>>
}) {
	return (
		<div>
			<input
				type={type}
				id={id}
				name={id}
				className={styles}
				onChange={(e) => formSetter(prevState => ({
					...prevState,
					[id]: e.target.value
				}))}
				
				required
			/>
			{/* <div id={`${id}-error`} aria-live="polite" aria-atomic="true">
                {state?.errors?.[id] &&
                    state.errors[id]?.map((error: string | number) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                        </p>
                    ))}
            </div> */}
		</div>
	);
}