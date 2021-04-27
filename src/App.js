import React,{useState,useEffect} from 'react';
import {Row} from 'antd';
import {loadPokemon} from 'helper/pokemonHelpers';
import styled from 'styled-components';
import PokeCard from 'components/PokeCard';
import PokeModal from 'components/PokeModal'; 


const StyledContainer = styled.div`
margin:auto;
width:65%;
padding:2.3%;
`;



const App = () => {

  //pokemon will be empty array initially
  const [pokemon,setPokemon]=useState([]);
  const [selectedPokemon,setSelectedPokemon]=useState(null);

  //every single time this is runned after the page is refreshed
  useEffect(()=>{
      const fetchPokemon=async()=>{
        try{
        const pokemonResults=await loadPokemon();
        setPokemon(pokemonResults.results);
        }
        catch(err)
         {
           console.log(err);
         } 
      };

      fetchPokemon();
  },[])
  //console.log(selectedPokemon);
//<PokeModal pokemonDetail={selectedPokemon}></PokeModal>
  return(
   
    <StyledContainer>
      {selectedPokemon!==null? <PokeModal pokemonDetail={selectedPokemon}/>: null}
       <Row>
         {pokemon.map(selectedPokemon=>(
         <PokeCard
            key={selectedPokemon.name}
            name={selectedPokemon.name}
            url={selectedPokemon.url}
            changeSelected={setSelectedPokemon} >     
         </PokeCard>
        ))}
      </Row> 
    </StyledContainer>
    
  );
};

export default App;
