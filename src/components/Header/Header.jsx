import s from './Header.module.scss';
const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <img
          className={s.img}
          href="../../imges/Logo.png"
        
        />

        <div>
          <button type="button">Users</button>
          <button type="button">Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
