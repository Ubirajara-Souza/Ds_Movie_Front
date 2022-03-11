import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import axios from "axios";
import {BASE_URL} from "utils/requests";
import {useEffect, useState} from "react";
import {MoviePage} from "types/movie";

function Listing() {

    const [pageNumber, setpageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
            .then(response => {
                const data = response.data as MoviePage;
                setpageNumber(data.number);
            });
    }, []);


    return (
        <>
            <Pagination/>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard/>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard/>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard/>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard/>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard/>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Listing