import React, {useEffect, useState} from 'react';
import Modal from "./Modal";
import Dropdown from "./dropDown"
import TableData from "./Table"

const data = [
    [1,2,3,4,5],
    ['a','b','c','d','e'],
    ['a1', 'b1', 'c1', 'd1', 'e1']
]


const TablePage = () => {
    const [content, setContent] = useState(data)
    // const getContent = async (url) => {
    //     const response = await fetch(url);
    //     return await response.json();
    // };


    const [modal, setModal] = useState(false);
    const [modalRow, setModalRow] = useState([]);
    const title = content[0];

    // useEffect(() => {
    //     getContent('/api/get').then((data) => setContent(data));
    // }, []);

    return (
        <div className="App">
            <div>
                {modal && (
                    <Modal onClose={() => setModal(false)} title="Форма карточки">
                        {title.map((nameColumn, key) => {
                                return (<Dropdown title={nameColumn} data={modalRow[key]} key={key}/>)
                            }
                        )}
                    </Modal>
                )}
            </div>
            <TableData title={content[0]} data = {content.slice(1)} setModal = {setModal} setModalRow = {setModalRow}/>
        </div>
    );
};

export default TablePage;