import React,{useContext, useEffect} from 'react'
import { List as MultiList, ListItem, ListItemAvatar, Avatar, Slide, IconButton, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './styles'

import {ExpenseTrackerContext} from '../../../context/context';

const List = () => {
    const classes = useStyles();
    const { transactions,deleteTransaction } = useContext(ExpenseTrackerContext);

    useEffect(() => {
      console.log(transactions);
    })

    return (
      <MultiList dense={false} className={classes.list}>
        {transactions.map((transaction) => (
          <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={transaction.category} secondary={`₹${transaction.amount} - ${transaction.date}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={()=>deleteTransaction(transaction.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      </MultiList>
    );
  };


export default List