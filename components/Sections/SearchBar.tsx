import React, { useState } from "react";
import Input from "../Snippets/InputField";
import SearchButton from "../Snippets/SearchButton";

interface FormProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<FormProps> = ({ setCity, setCountry }) => {
  const [inputCity, setInputCity] = useState("");
  const [inputCountry, setInputCountry] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity(inputCity);
    setCountry(inputCountry);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="weather-app__title |  border-2 border-solid rounded-[5px] w-full | flex items-center overflow-hidden"
    >
      <Input
        name={"city"}
        placeholder={"E.g Sydney.."}
        onInput={setInputCity}
      />
      <Input
        name={"country"}
        placeholder={"E.g AU.."}
        onInput={setInputCountry}
      />

      <SearchButton />
    </form>
  );
};

export default SearchBar;
