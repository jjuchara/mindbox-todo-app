import { Button, Flex } from "@chakra-ui/react"
import type { FilterType } from "../../types"
import { buttonNameMapper } from "../../constants"

type TodoFilterButtonsType = {
  filterList: FilterType[]
  currentFilter: FilterType
  setFilter: (filter: FilterType) => void
}

export const TodoFilterButtons = ({ filterList, currentFilter, setFilter }: TodoFilterButtonsType) => {

  const onChangeFilter = (filter: FilterType) => setFilter(filter)

  return (
    <Flex gap={2}>
      {filterList.map(filter =>
        <Button
          variant={filter === currentFilter ? 'outline' : 'ghost'}
          key={filter}
          onClick={() => onChangeFilter(filter)}
        >
          {buttonNameMapper[filter]}
        </Button>

      )}
    </Flex>
  )
}
