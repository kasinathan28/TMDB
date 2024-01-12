
interface SearchResult {
    // Define the properties of your search result here
    id: number;
    title: string;
    // Add other properties as needed
  }
  
  export const searchMovies = async (query: string): Promise<SearchResult[]> => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDQwYjQ2ZDhhZjE1NGQ4N2ZjNTdhNzk3MjM4YjA0OCIsInN1YiI6IjY1OTkxOTMwN2Q1NTA0MDIwMzBhYjNkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gSZPFGGgFP5Xnu1VmcAFAWYbzOCh_ZkCB-9-LXeiv-Y',
      },
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      
      return data.results;
      
    } catch (error) {
      console.error('Error searching for movies:', error);
      throw error;
    }
  };
  