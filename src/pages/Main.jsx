import React, {useEffect, useState }from "react";
import axios from 'axios'
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";

//const UNFILTERED='https://api.themoviedb.org/3/discover/movie?api_key=782eba85d57e9695c16f404c4415730a'

//const FILTERED = 'https://api.themoviedb.org/3/search/movie?api_key=782eba85d57e9695c16f404c4415730a&query='

const UNFILTERED=`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`

const FILTERED=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`

export default function Main() {

    let content;
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false)
    const[notFound, setNotFound]= useState(false)

    const getMovies = (API) => {
        setLoading(true)
        axios.get(API)
            //.then((res) => console.log(res.data.results))
            .then((res) => {
                setMovies(res.data.results)
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
                if (res.data.results.length == 0) {
                    setNotFound(true);
                }
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getMovies(FILTERED + searchTerm)
        setSearchTerm('')
    }
    if (loading) {
        content=<Loading/>
    } else if (notFound) {
        content=<NotFound/>
    }
    else {
            content=<div className="movie-container">
                {
                    //movies.map((movie)=>console.log(movie.title))
                    //Aşağıdaki map de süslü parantez  yazıp return yazmazsak çalışmaz. Süslü parantez yerine normal parantez yazarsak return yazmamıza gerek yok, o zaman çalışır.
                    /*
                    movies.map((movie) => {
                        //return <p key={movie.id}>{movie.title}</p>
                        //Aşağıda component buraya bağlanmış oldu.
                        return <MovieCard/>
                    })
                    */
                    movies.map((movie) => (
                        //return <p key={movie.id}>{movie.title}</p>
                        //Aşağıda component buraya bağlanmış oldu.
                        <MovieCard
                            key={movie.id}
                            title={movie.title}
                            poster_path={movie.poster_path}
                            overview={movie.overview}
                            vote_average={movie.vote_average}


                        />
                    ))
                }

            </div>
    }

    useEffect(() => {
        getMovies(UNFILTERED)
        console.log(process.env.REACT_APP_API_KEY)
    }, []);

    return (
        <React.Fragment>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    type='search'
                    placeholder="Search a movie...."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <input
                    type='submit'
                    value='Search'
                    className="btn btn-primary mx-1"
                />
                {/* <button type='submit'>
                    Search
                </button> */}
            </form>
            {content}        
        </React.Fragment>
    )
} 