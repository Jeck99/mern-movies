import React from "react";
import MUIDataTable from "mui-datatables";
import { removeMovie } from "../service/movies-service";
export default function CostumeTable(props) {
    const { data, title, columns } = props;
    function deleteMovie(RowsDeleted, data) {
        const ids = RowsDeleted.data.map(d => d.dataIndex);
        console.log(data,ids);
        // removeMovie(params._id).then(res => alert(res))
    }
    const options = {
        filterType: "checkbox",
        onRowsDelete: deleteMovie
    }

    return (
        <MUIDataTable
            title={title}
            options={options}
            data={data}
            columns={columns}
        />
    )
}
