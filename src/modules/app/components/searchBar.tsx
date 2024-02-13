// SearchBar.tsx
import { searchMovies } from "@/modules/dashboard/services/searchMovies";
import React, { useState, useEffect } from "react";
import Cards from "@/modules/dashboard/components/cards";
import { fetchTrendingMovies } from "@/modules/dashboard/services/movieService";

interface SearchResult {
  id: number;
  title: string;
  vote_average: string;
  poster_path: string;
}

interface SearchBarProps {
  placeholder: string;
}

function SearchBar({ placeholder }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState<SearchResult[]>([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const trending = await fetchTrendingMovies();
        setTrendingMovies(trending);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrending();
  }, []);

  const handleSearch = async () => {
    try {
      const results = await searchMovies(query);
      setSearchResults(results as SearchResult[]);
      setShowSearchResults(true);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="textInput"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div>
        {showSearchResults ? (
          <Cards movieData={searchResults} />
        ) : (
          <Cards movieData={trendingMovies} />
        )}
      </div>
    </div>
  );
}

export default SearchBar;
