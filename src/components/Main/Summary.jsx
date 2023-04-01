import React, {useState, useEffect, useContext} from 'react';
import { Box, Typography } from '@material-ui/core'
import {ExpenseTrackerContext} from '../../context/context';


const Summary = () =>{
    const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);
    const [expenses, setExpenses] = useState(0);
    const [income, setIncome] = useState(0);
    useEffect(()=> {
        let dt = new Date();
        let ex = 0;
        const exp = transactions.filter((tr) => tr.type === 'Expense' && tr.date.split('-')[1]==dt.getMonth()+1)
        exp.forEach((e) => {ex = ex + e.amount});
        setExpenses(ex);

        let inn = 0;
        const inc = transactions.filter((tr) => tr.type === 'Income' && tr.date.split('-')[1]==dt.getMonth()+1)
        inc.forEach((i) => {inn = inn + i.amount});
        setIncome(inn);
    }, [transactions])

    return(<>
        <Box sx={{backgroundColor:'#fffff', color:'#ffff'}} rounded={'lg'}>
            <Typography>Summary</Typography>
            <Typography>Total Income this month: {income}</Typography>
            <Typography>Total Expenses this month: {expenses}</Typography>
            <Typography>Total Net Income this month: {income - expenses}</Typography>
        </Box>
    </>);
}

export default Summary;