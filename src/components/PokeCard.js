import React,{useState,useEffect} from 'react';
import {getBackgroundType,getPokemonImage,loadSelectedPokemon} from 'helper/pokemonHelpers';
import {Card,Col,Space} from 'antd';
import styled from 'styled-components';
import PokeType from 'components/PokeType';
import {uppercaseWord} from 'helper/shared';


const StyledCard = styled(Card)`
  background-color: ${props => props.typeName};
  margin: 30px;
  height: 180px;
  border-radius: 27px;
  color: white;

  :hover {
    cursor: pointer;
    float: top;
  }

  .ant-card-body {
    padding: 20px;
  }
`;

const StyledImage = styled.img`
width:80%;
height:100%;
`;

const StyledTitle= styled.h2`
color:white;
`;
 
const PokeCard=props=>{
    //var,function
    const [pokemonDetail,setPokemonDetail]=useState(null);

    useEffect(()=>{
        
        const selectPokemon=async()=>{
           // console.log("hello")
          try{
            console.log(props.url);
            const apiResponse=await loadSelectedPokemon(props.url);
            //console.log(apiResponse);
            setPokemonDetail(apiResponse);
          }
          catch(error)
          {
              console.log(error);          
          }
          
        }

        selectPokemon();
    },[props.url]) 
    //console.log(pokemonDetail);
    return (
        <Col span={8}>
      <StyledCard 
        typeName={getBackgroundType(pokemonDetail?.types[0].type.name)}
        onClick={()=>props.changeSelected(pokemonDetail)}
        >
        <Space align='start'>
          <div>
            <StyledTitle>{uppercaseWord(props.name)}</StyledTitle>
            <PokeType types={pokemonDetail?.types} width={'100'} />
          </div>
          <StyledImage alt=" " src={getPokemonImage(pokemonDetail?.id)}/> 
        </Space>
      </StyledCard>
      </Col>
    );
}

export default PokeCard;