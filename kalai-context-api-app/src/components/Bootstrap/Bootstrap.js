import React, { useState, useEffect } from "react";
import "./styles/Bootstrap.scss";

import asses from "../../assests/ass.png";
import { getDatasmain } from "./api/Get";
import GoogleMapReact from "google-map-react";
import SimpleMap from "./googlemap/SimpleMap";
import { Rating } from "react-simple-star-rating";
import rock from "../../assests/person-rock.jpeg";
function Bootstrap(props) {
    // const [names, SetNames] = useState({
    //     fname: "",
    //     email: "",
    //     place: "",
    // });
    // const {
    //     register,
    //     handleSubmit,

    //     formState: { errors },
    //     reset,
    // } = useForm();
    // const { fname, email, place } = names;
    // const handlesubmit = (e) => {
    //     SetNames({ ...names, [e.target.name]: e.target.value });
    // };
    // const onSubmit = (e) => {
    //     let forms = [names];
    //     console.log("kalaia", forms, e);
    //     reset();
    // };
    const [scrolls, SetScrolls] = useState(false);
    const [data, SetData] = useState([]);
    const [serach, SetSerach] = useState("");
    const [loadings, setLoading] = useState(false);
    const [rating, setRating] = useState(0);
    let images = "";
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 8700) {
                SetScrolls(true);
            } else {
                SetScrolls(false);
            }
        });

        setTimeout(() => {
            getdatamain();
            setLoading(true);
        }, 4000);
        // setLoading(false);
    }, []);
    useEffect(() => {
        setInterval(() => {
            // setLoading(false);
            clearInterval();
        }, []);
    });
    const getdatamain = () => {
        getDatasmain()
            .then((res) => {
                SetData(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const scrollupbottom = () => {
        window.scrollTo({
            bottom: 0,
            behavior: "smooth",
        });
    };

    const handleRating = (rate, Number) => {
        setRating(rate, Number);
        // other logic
    };
    return (
        <>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="name"
                    name="fname"
                    {...register("fname", { required: true })}
                    onChange={handlesubmit}
                    value={fname}
                />
                {errors.fname && <small>Enter the Correct Name</small>}
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    {...register("email", { required: true })}
                    onChange={handlesubmit}
                    value={email}
                />
                {errors.email && <p>Enter Correct Email Formate</p>}
                <input
                    type="text"
                    placeholder="place"
                    name="place"
                    {...register("place", { required: true })}
                    onChange={handlesubmit}
                    value={place}
                />
                {errors.place && <p>Enter The Correcct place</p>}
                <button className="btn btn-primary">submit</button>
            </form> */}
            {/* {loadings ? <div class="loading_bg">
                        <div class="loadBody">
                            <div class="logoSlot"></div>
                            <div class="loadTxt">LOADING......</div>
                        </div>
                    </div> : <div>No</div>} */}

            <div className="round-main">
                <div class="dropdown">
                    <p
                        class="dropdown-toggles"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img src={rock} className="round" />
                    </p>

                    <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                    >
                        <li>
                            <a class="dropdown-item" href="#">
                                Action
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Another action
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Something else here
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <input
                type="text"
                value={serach}
                placeholder="Serach Name Fields"
                onChange={(e) => SetSerach(e.target.value)}
            />
            {/* <div>
                {data ? (
                    <div>
                        {data
                            .filter((change) =>
                                change.name.toLowerCase().includes(serach)
                            )
                            .map((items, index) => {
                                return <div>{items.name}</div>;
                            })}
                    </div>
                ) : (
                    <div class="loading_bg">
                        <div class="loadBody">
                            <div class="logoSlot"></div>
                            <div class="loadTxt">LOADING......</div>
                        </div>
                    </div>
                )}
            </div> */}
            <h1>Rating Component value:{rating}</h1>
            <div>
                <Rating
                    onClick={handleRating}
                    ratingValue={rating}
                    starCount={10}
                    Required
                />
            </div>
            {!loadings ? (
                <div class="loading_bg">
                    <div class="loadBody">
                        <div class="logoSlot"></div>
                        <div class="loadTxt">LOADING......</div>
                    </div>
                </div>
            ) : (
                <div>
                    {data
                        .filter((change) =>
                            change.name.toLowerCase().includes(serach)
                        )
                        .map((items, index) => {
                            return (
                                <div key={index}>
                                    <p>Name:{items.name}</p>
                                    <span style={{ color: "red" }}>
                                        UserName:{items.username}
                                    </span>
                                </div>
                            );
                        })}
                </div>
            )}
            <div>
                {scrolls && (
                    <div onClick={scrollupbottom} className="mainss">
                        <img
                            src="https://www.moople.in/blog/wp-content/uploads/2018/02/mouse-hd-png1258.png"
                            className="image"
                        />
                        <p className="welcome">
                            welcome Too
                            <br /> Passion Ari Ai?
                        </p>
                    </div>
                )}
            </div>
            <div>
                <img src={asses} />
                <a href={asses} download="kalai" className="btn btn-primary">
                    Download Image
                </a>
            </div>
            <div>
                <SimpleMap />
            </div>

            <div className="what">
                <h1>
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum. Why do we use it? It is a long established fact that
                    a reader will be distracted by the readable content of a
                    page when looking at its layout. The point of using Lorem
                    Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still in their infancy. Various
                    versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like). Where
                    does it come from? Contrary to popular belief, Lorem Ipsum
                    is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000
                    years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the
                    more obscure Latin words, consectetur, from a Lorem Ipsum
                    passage, and going through the cites of the word in
                    classical literature, discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                    by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance. The
                    first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32. The standard chunk of
                    Lorem Ipsum used since the 1500s is reproduced below for
                    those interested. Sections 1.10.32 and 1.10.33 from "de
                    Finibus Bonorum et Malorum" by Cicero are also reproduced in
                    their exact original form, accompanied by English versions
                    from the 1914 translation by H. Rackham. Where can I get
                    some? There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                </h1>
                <h1>
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum. Why do we use it? It is a long established fact that
                    a reader will be distracted by the readable content of a
                    page when looking at its layout. The point of using Lorem
                    Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still in their infancy. Various
                    versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like). Where
                    does it come from? Contrary to popular belief, Lorem Ipsum
                    is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000
                    years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the
                    more obscure Latin words, consectetur, from a Lorem Ipsum
                    passage, and going through the cites of the word in
                    classical literature, discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                    by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance. The
                    first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32. The standard chunk of
                    Lorem Ipsum used since the 1500s is reproduced below for
                    those interested. Sections 1.10.32 and 1.10.33 from "de
                    Finibus Bonorum et Malorum" by Cicero are also reproduced in
                    their exact original form, accompanied by English versions
                    from the 1914 translation by H. Rackham. Where can I get
                    some? There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                </h1>
                <h1>
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum. Why do we use it? It is a long established fact that
                    a reader will be distracted by the readable content of a
                    page when looking at its layout. The point of using Lorem
                    Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still in their infancy. Various
                    versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like). Where
                    does it come from? Contrary to popular belief, Lorem Ipsum
                    is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000
                    years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the
                    more obscure Latin words, consectetur, from a Lorem Ipsum
                    passage, and going through the cites of the word in
                    classical literature, discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                    by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance. The
                    first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32. The standard chunk of
                    Lorem Ipsum used since the 1500s is reproduced below for
                    those interested. Sections 1.10.32 and 1.10.33 from "de
                    Finibus Bonorum et Malorum" by Cicero are also reproduced in
                    their exact original form, accompanied by English versions
                    from the 1914 translation by H. Rackham. Where can I get
                    some? There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                </h1>
                <h1>
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum. Why do we use it? It is a long established fact that
                    a reader will be distracted by the readable content of a
                    page when looking at its layout. The point of using Lorem
                    Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still in their infancy. Various
                    versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like). Where
                    does it come from? Contrary to popular belief, Lorem Ipsum
                    is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000
                    years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the
                    more obscure Latin words, consectetur, from a Lorem Ipsum
                    passage, and going through the cites of the word in
                    classical literature, discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                    by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance. The
                    first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32. The standard chunk of
                    Lorem Ipsum used since the 1500s is reproduced below for
                    those interested. Sections 1.10.32 and 1.10.33 from "de
                    Finibus Bonorum et Malorum" by Cicero are also reproduced in
                    their exact original form, accompanied by English versions
                    from the 1914 translation by H. Rackham. Where can I get
                    some? There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                </h1>
                <h1>
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum. Why do we use it? It is a long established fact that
                    a reader will be distracted by the readable content of a
                    page when looking at its layout. The point of using Lorem
                    Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still in their infancy. Various
                    versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like). Where
                    does it come from? Contrary to popular belief, Lorem Ipsum
                    is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000
                    years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the
                    more obscure Latin words, consectetur, from a Lorem Ipsum
                    passage, and going through the cites of the word in
                    classical literature, discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                    by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance. The
                    first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32. The standard chunk of
                    Lorem Ipsum used since the 1500s is reproduced below for
                    those interested. Sections 1.10.32 and 1.10.33 from "de
                    Finibus Bonorum et Malorum" by Cicero are also reproduced in
                    their exact original form, accompanied by English versions
                    from the 1914 translation by H. Rackham. Where can I get
                    some? There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                </h1>
            </div>
            <div className="footer-bottom"></div>
        </>
    );
}

export default Bootstrap;
