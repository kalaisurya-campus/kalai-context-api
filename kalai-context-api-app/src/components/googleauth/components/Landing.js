import React, { useEffect, useState } from "react";
import { GetDatasFunction } from "./api/get";

function Landing(props) {
    const [backdatas, setBackDatas] = useState([]);
    useEffect(() => {
        datas();
    }, []);
    const datas = () => {
        GetDatasFunction()
            .then((res) => {
                console.log(res);
                // setBackDatas(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            welcome Lnading
            {backdatas ? (
                <div>
                    {backdatas.map((items, index) => {
                        // return <div>{items.name}</div>;
                    })}
                </div>
            ) : (
                <div>No Dtass</div>
            )}
        </div>
    );
}

export default Landing;
