import { useEffect, useState } from "react";

import * as C from "./App.styles";
import { items } from "./data/items";
import { categories } from "./data/categories";
import { Item } from "./types/Item";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";

import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";

function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setExpense(expenseCount);
    setIncome(incomeCount);

  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema financeiro</C.HeaderText>
      </C.Header>
      <C.Main>

        <InfoArea 
          currentMonth={currentMonth} 
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <TableArea list={filteredList} />

      </C.Main>
    </C.Container>
  );
}

export default App;
