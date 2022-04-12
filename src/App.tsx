import { useEffect, useState } from "react";

import * as C from "./App.styles";
import { items } from "./data/items";
import { categories } from "./data/categories";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";

import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";

function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema financeiro</C.HeaderText>
      </C.Header>
      <C.Main>
        <InfoArea currentMonth={currentMonth} />
        <TableArea list={filteredList} />
      </C.Main>
    </C.Container>
  );
}

export default App;
