import React from 'react';


interface SearchBarProps {
  placeholder: string;
} 

function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="textInput"
    />
  );
}

export default SearchBar;
