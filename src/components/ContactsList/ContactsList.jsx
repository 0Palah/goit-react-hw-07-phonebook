import React from 'react';
import css from './ContactsList.module.css';
// import { deleteContactAction } from 'redux/constants/slice.contacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';

// Видаляємо зі Стейту по ID

const ContactsList = () => {
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteUser = userId => dispatch(deleteContact(userId));

  // Фільтруємо за наявністю підрядка з Фільтру в іменах Контактів
  // const applyFilters = () => {
  //   return items.filter(({ name }) => {
  //     if (filter && !name.toLowerCase().includes(filter.toLowerCase()))
  //       return false;
  //     return true;
  //   });
  // };

  return (
    <ul className={css.contListWrapper}>
      {isLoading && !error && <b>Request in progress...</b>}
      {items?.length > 0 &&
        items.map(el => (
          <li key={el.id}>
            {el.name}: {el.phone}
            <button
              type="button"
              className={css.button}
              onClick={() => handleDeleteUser(el.id)}
            >
              Delete
            </button>
          </li>
        ))}
      {/* {applyFilters().map(el => (
        <li key={el.id}>
          {el.name}: {el.number}
          <button
            type="button"
            className={css.button}
            // onClick={() => handleDeleteUser(el.id)}
          >
            Delete
          </button>
        </li>
      ))} */}
    </ul>
  );
};

export default ContactsList;
