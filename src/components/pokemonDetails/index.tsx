import { useAppSelector } from "../../data/store";
import { pokemonStatsSelector } from 'data/selectors/pokemon';

import { PokemonTitle, DescriptionContainer, Row, RowItem, DescriptionWrapper } from './styles';

const stats = ['Types', 'Height', 'Weight', 'HP', 'Attack', 'Defense'];
type StatTypes = 'name' | 'types' | 'height' | 'weight' | 'hp' | 'attack' | 'defense';

const PokemonDetails = () => {
  const pokemonStats = useAppSelector(pokemonStatsSelector);
  console.log(pokemonStats)
  return (
    <DescriptionWrapper>
      <PokemonTitle>{pokemonStats.name}</PokemonTitle>
      <DescriptionContainer>
        {stats.map((stat) => {
          const statProp = stat.toLowerCase() as StatTypes;
          let value = pokemonStats[statProp];

          if (Array.isArray(value)) value = value.join(', ');
          return (
            <Row key={stat}>
              <RowItem>{stat}</RowItem>
              <RowItem>{value}</RowItem>
            </Row>
          )
        })}
      </DescriptionContainer>
    </DescriptionWrapper>
  )
}

export default PokemonDetails;
