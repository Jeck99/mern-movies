import React, { useState, useEffect } from 'react';
import CostumeTable from "../components/table.component";
import {getAllMovies} from "../service/movies-service";

export default function MoviesList(props) {
    const [movies, setMovies] = useState([]);
    useEffect(getMovies, [])

    function getMovies() {
        getAllMovies().then((res) => { setMovies(res) })
    }

    const tableColumns = [
        {
            name: "_id",
            label: "Id",
            options: {
                filter: true,
                sort: false
            },
        },
        {
            name: "movieName",
            label: "Movie Name",
            options: {
                filter: true,
                sort: true
            },
        },
        {
            name: "image",
            label: "Image",
            options: {
                filter: true,
                sort: true
            },
        },
        {
            name: "synopsis",
            label: "Synopsis",
            options: {
                filter: true,
                sort: true
            },
        },
        {
            name: "movieToLink",
            label: "Link",
            options: {
                filter: true,
                sort: true
            },
        },
        {
            name: "rating",
            label: "Rating",
            options: {
                filter: true,
                sort: true
            },
        },
        {
            name: "date",
            label: "Created At",
            options: {
                filter: true,
                sort: true
            },
        },

    ]
    return (
        <div>
            home
            <CostumeTable data={movies} columns={tableColumns} title={"Movies Data"} />
        </div>
    )
}
