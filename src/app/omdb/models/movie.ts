export interface MovieList {
    Search:[Movie];
    totalResults: string;
    Response: string;
};

export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string
  
};

export interface MovieDetails {
    Title: string,
    Year: string
    Rated: string
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: [{Source: string, Value :string}],
    Metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbID: string,
    Typy: string,
    DVD: string,
    BoxOffice: string,
    Production: string,
    Website: string,
    Response: string
};


export interface SimilarMoviesList {
    page: number,
    results: [SimilarMovie],
    total_pages: number,
    total_results: number
}

export interface SimilarMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: string,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date:string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    popularity: number
}








