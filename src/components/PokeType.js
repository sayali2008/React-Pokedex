import React from'react';
import {Button} from 'antd';
import styled from 'styled-components';
import {getType} from 'helper/pokemonHelpers';
import {uppercaseWord} from 'helper/shared';

const StyledButton = styled(Button)`
  background-color: ${props => props.typeName};
  color: white;
  border: none;
  width: ${props => props.width}%;
  margin-right: 5px;
  margin-top: 5px;
`;  
const PokeType=props=>{
    return (
        <div>
            {props?.types?.map(typing=> (
                <StyledButton 
                typeName={getType(typing.type.name)} 
                width={props.width} 
                shape='round' 
                size='small'>
                {uppercaseWord(typing.type.name)}
            </StyledButton>        
            ))}
        
        </div>
    );
};

export default PokeType;