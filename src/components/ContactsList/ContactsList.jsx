import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contacts/contactsThunks';
import { selectContactsState, selectFiltersStateValue } from 'redux/selectors';
import css from './ContactsList.module.css';

const ContactsList = () => {
  const { items, isLoading, error } = useSelector(selectContactsState);
  const filter = useSelector(selectFiltersStateValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteUser = userId => dispatch(deleteContact(userId));

  const applyFilters = () => {
    return items.filter(({ name }) => {
      if (filter && !name.toLowerCase().includes(filter.toLowerCase()))
        return false;
      return true;
    });
  };

  return (
    <ul className={css.contListWrapper}>
      {isLoading && !error && <b>Request in progress...</b>}
      {items?.length > 0 &&
        applyFilters().map(el => (
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
    </ul>
  );
};

export default ContactsList;
