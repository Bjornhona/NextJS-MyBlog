import MainNavigation from "./main-navigation/MainNavigation";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>
        {props.children}
      </main>
    </>
  );
}

export default Layout;
