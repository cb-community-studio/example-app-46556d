
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Image } from 'primereact/image';
import { Badge } from 'primereact/badge';


const ShoppinglistDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const checkboxTemplate0 = (rowData, { rowIndex }) => <Checkbox checked={rowData.isDone}  ></Checkbox>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.product}</p>
    const imageTemplate2 = (rowData, { rowIndex }) => <Image src={rowData.image}  alt="Image" height="60px" />
    const badgeTemplate3 = (rowData, { rowIndex }) => <Badge value={rowData.quantity}  ></Badge>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.description}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.remark}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="isDone" header="isDone" body={checkboxTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="product" header="product" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="image" header="image" body={imageTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="quantity" header="quantity" body={badgeTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="description" header="description" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="remark" header="remark" body={pTemplate5} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ShoppinglistDataTable;