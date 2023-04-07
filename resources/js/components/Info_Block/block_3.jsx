import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
// import { ISignupForm } from './type_info_block';

export default function Block_3() {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: "all",
    });

    const [Name, setUserName] = useState("");
    const [Phone, setUserPhone] = useState("");
    const [ErrorMessage, setErrorMessage] = useState(true);
    // const [show, setShow] = useState(true);

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     // setState(Name);
    // }
    const onSubmit = (data) => {
        // alert(JSON.stringify(data));
        reset();
    };

    // function writeUserName(event){
    //     setUserName(event.target.value)
    // };
    // function writeUserPhone(event){
    //     setUserPhone(event.target.value)
    // };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("Name", {
                        required: "Все поля должны быть обязательно заполнены!",
                        minLength: {
                            value: 3,
                            message: "Поле должно содержать минимум 2 символа",
                        },
                    })}
                    className={"custom_form-input"}
                    placeholder={"Name"}
                />

                <input
                    {...register("Phone", {
                        required: "Все поля должны быть обязательно заполнены!",
                    })}
                    className={"custom_form-input"}
                    placeholder={"Phone"}
                />

                <button
                    type="submit"
                    disabled={!isValid}
                    className={"custom_form-btn"}
                >
                    Get a selection
                </button>

                {/*<input type="text" onInput={writeUserName} placeholder={'Name'} className={'custom_form-input'}/>*/}
                {/*<input type="text" onInput={writeUserPhone} placeholder={'Phone'} className={'custom_form-input'}/>*/}
            </form>

            <div className="error_message">
                {errors?.Name && <p>{errors?.Name?.message || "Error"}</p>}
            </div>
            <div className="error_message">
                {errors?.Phone && <p>{errors?.Phone?.message || "Error"}</p>}
            </div>
        </div>
    );
}
