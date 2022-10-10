import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../redux/usersOperations';
import { userList, totalPage } from '../../redux/usersSelector';
import s from './UsersList.module.scss';

const UsersList = () => {

  const dispatch = useDispatch();

  const users = useSelector(userList);
  const totalPages = useSelector(totalPage);

  const [page, setPage] = useState(1);



  const updatePage = () => {
    setPage(prev => page + 1);
  };

  useEffect(() => {
    dispatch(getUsers(page));
    // eslint-disable-next-line
  }, [page]);

  return (
    <section className={s.cntact}>
      <h2 className={s.title}>Working with GET request</h2>
      <ul className={s.list}>
        {!users
          ? ''
          : users.map(({ id, email, name, phone, photo, position }) => (
              <li key={id} className={s.item}>
                <img
                  className={s.photo}
                  src={photo}
                  alt={`${name}`}
                  width="70"
                  height="70"
                />
                <h3 className={s.name}>{name}</h3>
                <p className={s.position}>{position}</p>
                <p className={s.email}>{email}</p>
                <p className={s.phone}>{phone}</p>
              </li>
            ))}
      </ul>

      {totalPages > page && (
        <button className={s.btn} type="button" onClick={updatePage}>
          Show more
        </button>
      )}
    </section>
  );
};

export default UsersList;
