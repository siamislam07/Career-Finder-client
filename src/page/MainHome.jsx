import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Tabss from "../components/HomeCards/Tabss";
import ContentCenter from "../utilites/ContentCenter.jsx/ContentCenter";

const MainHome = () => {
  return (
    <>
      <ContentCenter>

        {/* <Banner /> */}
        <Tabss />
      </ContentCenter>
      <ContactUs></ContactUs>
        <Footer />

    </>

  );
};

export default MainHome;