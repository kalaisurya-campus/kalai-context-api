import React, { useState, useEffect } from "react";
import { getTableData } from "./api/Get";
import "./styles/TableContent.scss";
function TableContent(props) {
    const [firstdata, setFirstData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getStoreData();
    });
    const getStoreData = () => {
        setTimeout(() => {
            getTableData()
                .then((res) => {
                    console.log(res.data);
                    setFirstData(res.data);
                    setLoading(true);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, 3000);
    };
    return (
        <div>
            {!loading ? (
                <div className="split">
                    <div class="container">
                        <div class="spinception"></div>
                    </div>
                </div>
            ) : (
                <div>
                    {firstdata ? (
                        <div>
                            {firstdata.map((items, index) => {
                                return (
                                    <div>
                                        <p>{items.name}</p>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div>Loadinngggggg......</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default TableContent;
