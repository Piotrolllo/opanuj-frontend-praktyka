import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { useCharacterSearch } from '../hooks/useCharacterSearch';
import { sortedCharacters } from '../utils/sortCharacters';
import NameField from '../components/NameField';
import { GenderSelect } from '../components/GenderSelect';
import { SortSelect } from '../components/SortSelect';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [sortOption, setSortOption] = useState('');

  const characters = useCharacterSearch(name, gender);

  return (
    <>
      <SearchTitle title="Wyszukiwarka postaci Rick and Morty" />
      <SearchForm>
        <NameField name={name} setName={setName} />
        <GenderSelect setGender={setGender} gender={gender} />
        <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
      </SearchForm>
      <CharacterList characters={sortedCharacters(characters, sortOption)} />
    </>
  );
}

export default CharacterSearchContainer;
