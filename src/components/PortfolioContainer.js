import React, { useState } from "react";
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
