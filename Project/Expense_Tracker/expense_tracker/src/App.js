import Expense from "./Components/Expense.js";

function App(){
        let expense = [
                {
                        id : 'e1',
                        title: 'School Fee',
                        amount: 250,
                        date: new Date(2024,3,28)
                },
                {
                        id : 'e2',
                        title: 'Books',
                        amount: 230,
                        date: new Date(2024,2,21)
                },
                {
                        id : 'e3',
                        title: 'House rent',
                        amount: 1300,
                        date: new Date(2024,2,28)
                },
                {
                        id : 'e4',
                        title: 'Food',
                        amount: 50,
                        date: new Date(2024,3,15)
                }
        ]

return (
        <div>
        <h2>Lets get started</h2>
       <Expense item = {expense}/>
        </div>
        );
}

export default App;