const fetchTrendingMovies = async () => {

  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDQwYjQ2ZDhhZjE1NGQ4N2ZjNTdhNzk3MjM4YjA0OCIsInN1YiI6IjY1OTkxOTMwN2Q1NTA0MDIwMzBhYjNkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gSZPFGGgFP5Xnu1VmcAFAWYbzOCh_ZkCB-9-LXeiv-Y`,
      },
    };
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchTrendingMovies };
