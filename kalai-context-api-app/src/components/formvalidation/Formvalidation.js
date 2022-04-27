import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./styles/Formvalidation.scss";
import { useParams } from "react-router-dom";
import ProgressPassword from "./ProgressPassword";
import NameTetxt from "./NameTetxt";
import LastName from "./LastName";
import Addresstext from "./Addresstext";
import EmailText from "./EmailText";
function Formvalidation(props) {
    const [scrollsed, SetScrollsed] = useState(false);
    const [darks, SetDarks] = useState(false);
    const { name } = useParams();
    const [datas, SetDatas] = useState({
        firstname: "",
        lastname: "",
        address: "",
        email: "",
        password: "",
    });
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1200) {
                SetScrollsed(true);
            } else {
                SetScrollsed(false);
            }
        });
    });
    const scrollupbottom = () => {
        window.scrollTo({
            bottom: 0,
            behavior: "smooth",
        });
    };

    const [number, setNumbers] = useState(0);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const { firstname, lastname, address, email, password } = datas;
    const handlechnage = (e) => {
        SetDatas({ ...datas, [e.target.name]: e.target.value });
        reset();
    };
    const onSubmit = (e) => {
        // e.preventDefault();
        console.log("welcome too data", datas, e);
        datas("");
    };

    return (
        <div>
            <h1>welcome {name}</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>FirstName:</label>
                        <input
                            type="text"
                            name="firstname"
                            value={firstname}
                            {...register("firstname", {
                                required: "FirstName Filed Is Empty",
                            })}
                            onChange={handlechnage}
                            placeholder="Entre the Name"
                        />
                        <NameTetxt Name={firstname} />
                        {errors.firstname && (
                            <span style={{ color: "red" }}>
                                {errors.firstname.message}
                            </span>
                        )}
                    </div>
                    <div>
                        <label>LastName:</label>
                        <input
                            type="text"
                            placeholder="Entre the Name"
                            name="lastname"
                            value={lastname}
                            {...register("lastname", {
                                required: "LastName Filed Is Empty",
                            })}
                            onChange={handlechnage}
                        />
                        <LastName LastName={lastname} />
                        {errors.lastname && (
                            <span style={{ color: "red" }}>
                                {errors.lastname.message}
                            </span>
                        )}
                    </div>
                    <div>
                        <label>Address:</label>
                        <input
                            type="text"
                            placeholder="Entre the Name"
                            name="address"
                            value={address}
                            {...register("address", {
                                required: "Address Filed Is Empty",
                            })}
                            onChange={handlechnage}
                        />
                        <Addresstext Address={address} />
                        {errors.address && (
                            <span style={{ color: "red" }}>
                                {errors.address.message}
                            </span>
                        )}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Entre the Name"
                            value={email}
                            {...register("email", {
                                required: "Email Filed Is Empty",
                            })}
                            onChange={handlechnage}
                        />
                        <EmailText EmailText={email} />
                        {errors.email && (
                            <span style={{ color: "red" }}>
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Entre the Name"
                            value={password}
                            {...register("password", {
                                required: "Password Filed Is Empty",
                            })}
                            onChange={handlechnage}
                        />
                        <ProgressPassword password={password} />
                        {errors.password && (
                            <span style={{ color: "red" }}>
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className="main-table-content-kalai">
                <div className="tabs-kalai">
                    <div
                        className={`tab-list ${
                            number === 0 ? "active" : "null"
                        }`}
                        onClick={() => {
                            setNumbers(0);
                        }}
                    >
                        kalaia1
                    </div>
                    <div
                        className={`tab-list ${
                            number === 1 ? "active" : "null"
                        }`}
                        onClick={() => {
                            setNumbers(1);
                        }}
                    >
                        kalaia2
                    </div>
                    <div
                        className={`tab-list ${
                            number === 2 ? "active" : "null"
                        }`}
                        onClick={() => {
                            setNumbers(2);
                        }}
                    >
                        kalaia3
                    </div>
                </div>
                <div className="content-kalai-check" hidden={number != 0}>
                    kalai1
                    <img src="https://cdn1.vectorstock.com/i/1000x1000/87/85/cartoon-funny-bear-vector-16998785.jpg" />
                </div>
                <div className="content-kalai-check" hidden={number != 1}>
                    kalai2
                    <img src="https://wallpapercave.com/wp/wp9280851.jpg" />
                </div>
                <div className="content-kalai-check" hidden={number != 2}>
                    kalai3
                    <img
                        src="https://hi-static.z-dn.net/files/d4e/97d4706f6c5f3ea5e9f87a623b6a7372.jpg"
                        width="700"
                    />
                </div>
            </div>

            <div className={` empty-box ${darks ? "dark" : "light"}`}>
                <div className="top-btn-dark">
                    <button className="btns" onClick={() => SetDarks(!darks)}>
                        {darks ? "white" : "dark"}
                    </button>
                </div>
                <div>
                    {scrollsed && (
                        <div onClick={scrollupbottom} className="texts-bars">
                            <img
                                src="https://www.moople.in/blog/wp-content/uploads/2018/02/mouse-hd-png1258.png"
                                className="image"
                            />
                            <p className="welcomes">
                                welcome Too
                                <br /> Passion Ari Ai?
                            </p>
                        </div>
                    )}
                </div>
                <h1>welcome</h1>
                <p className="ps">thanks</p>

                <p className="loream">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna. Morbi a bibendum metus. Donec scelerisque
                    sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                    in pretium orci vestibulum eget. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Duis pharetra luctus lacus ut vestibulum.
                    Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar
                    vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id
                    vel leo. Integer feugiat faucibus libero, at maximus nisl
                    suscipit posuere. Morbi nec enim nunc. Phasellus bibendum
                    turpis ut ipsum egestas, sed sollicitudin elit convallis.
                    Cras pharetra mi tristique sapien vestibulum lobortis. Nam
                    eget bibendum metus, non dictum mauris. Nulla at tellus
                    sagittis, viverra est a, bibendum metus.
                </p>

                <p className="loreams">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna. Morbi a bibendum metus. Donec scelerisque
                    sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                    in pretium orci vestibulum eget. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Duis pharetra luctus lacus ut vestibulum.
                    Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar
                    vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id
                    vel leo. Integer feugiat faucibus libero, at maximus nisl
                    suscipit posuere. Morbi nec enim nunc. Phasellus bibendum
                    turpis ut ipsum egestas, sed sollicitudin elit convallis.
                    Cras pharetra mi tristique sapien vestibulum lobortis. Nam
                    eget bibendum metus, non dictum mauris. Nulla at tellus
                    sagittis, viverra est a, bibendum metus.
                </p>

                {/* <button className="orangs">reds</button><br/><br/> */}
            </div>
        </div>
    );
}

export default Formvalidation;
