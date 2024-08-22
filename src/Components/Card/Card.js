import React from 'react';
import { Box, Title, SourceBar, TaskBar, StatusButton, GridButton, Button, OutsideButton } from './Style';
import { SearchOutline } from '@styled-icons/evaicons-outline';
import { Pencil } from '@styled-icons/boxicons-solid/Pencil';


function Card() {
  return (
    <Box>
      <Title>Terça-feira, 24 de julho</Title>
      <div>
        <SourceBar type="text" value="" />
        {/* <SearchOutline size="24" color="black" />  */}
        <SearchOutline size="24" color="white">
        </SearchOutline>
      </div>

      <TaskBar>
        <GridButton>
          <StatusButton />
          <h1 style={{ color: 'black', fontSize: '1rem' }}>Começar a execução do projeto</h1>
        </GridButton>

        <GridButton>
          <Button></Button>
          <Button>
            <Pencil size="24" color="black"/>
          </Button>
        </GridButton>
      </TaskBar>

      <div></div>
    </Box>

  )
}

export default Card;
