import React, { useState } from 'react';
import Modal from "./Modal";
import Dropdown from "./dropDown"
import TableData from "./Table"

const data = [
    ['рег. номер МКС в СЭД', 'Дата поступления в МКС', 'Название документа', 'В дополнение к или взамен (предыстория документа)', 'ФОИВ', 'Куратор АПРФ', 'Направление', 'Фед. Проект / ГИС', 'Тип документа', 'Решение по документу', 'Текущий статус', 'Финансовая оценка, тыс. руб.', 'Экспертная оценка, тыс. руб.', 'Реквизиты ответа в ведомство', 'Дата ответа в ведомство',],
    ['рег. номер МКС в СЭД', 'Дата поступления в МКС', 'Название документа', 'В дополнение к или взамен (предыстория документа)', 'ФОИВ', 'Куратор АПРФ', 'Направление', 'Фед. Проект / ГИС', 'Тип документа', 'Решение по документу', 'Текущий статус', 'Финансовая оценка, тыс. руб.', 'Экспертная оценка, тыс. руб.', 'Реквизиты ответа в ведомство', 'Дата ответа в ведомство',],
    ['рег. номер МКС в СЭД', 'Дата поступления в МКС', 'Название документа', 'В дополнение к или взамен (предыстория документа)', 'ФОИВ', 'Куратор АПРФ', 'Направление', 'Фед. Проект / ГИС', 'Тип документа', 'Решение по документу', 'Текущий статус', 'Финансовая оценка, тыс. руб.', 'Экспертная оценка, тыс. руб.', 'Реквизиты ответа в ведомство', 'Дата ответа в ведомство',]
]


const TablePage = () => {
    const [content, setContent] = useState(data)
    const [modal, setModal] = useState(false);
    const [modalRow, setModalRow] = useState([]);
    const [modalRowIndex, setModalRowIndex] = useState(0);
    const title = content[0];

    return (
        <div className="App">
            <div>
                {modal && (
                    <Modal onClose={() => setModal(false)} title="Форма карточки">
                        {title.map((nameColumn, key) => {
                                return (<Dropdown title={nameColumn} data={modalRow[key]} index_column={key} index_row={modalRowIndex} key={key} content={content} setContent={setContent}/>)
                            }
                        )}
                    </Modal>
                )}
            </div>
            <TableData title={content[0]} data = {content.slice(1)} setModal = {setModal} setModalRow = {setModalRow} setModalRowIndex = {setModalRowIndex}/>
        </div>
    );
};

export default TablePage;