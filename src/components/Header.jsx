import { useState } from "react";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  // koyu mod mu olucak? state'i
  //const [isDarkMode, setIsDarkMode] = useState(true);

  //console.log(isDarkMode);

  //const [isOpen, setIsOpen] = useState(false);

  console.log(window.innerWidth);

  const [isOpen, setIsOpen] = useState(window.innerWidth > 600);

  return (
    <section>
      {/* üst kısım */}
      <header
        //style={{ background: "black" }}
        //style={{ background: isDarkMode === true ? "black" : "white" }}
        className="d-flex justify-content-between align-items-center border px-4 py-2 rounded-1"
      >
        <h1>STATE</h1>

        <div className="d-flex gap-5">
          <div className="d-flex gap-3">
            <label>Koyu Mod</label>
            <input
              //onChange={(event) => console.log(event)}
              //onChange={(event) => console.dir(event.target)}
              //onChange={(event) => console.dir(event.target.checked)}
              onChange={(event) => setIsDarkMode(event.target.checked)}
              checked={isDarkMode}
              className="form-check-input"
              type="checkbox"
            />
          </div>

          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                rotate: isOpen ? "270deg" : "0deg",
                transition: "all 0.3s",
              }}
              className="btn btn-secondary"
            >
              |||
            </button>
          </div>
        </div>
      </header>

      {/* alt kısım */}

      {isOpen && (
        <nav className="bg-white p-3 text-black d-flex justify-content-between rounded">
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Twitter</span>
          <span>Reddit</span>
          <span>Slack</span>
        </nav>
      )}
    </section>
  );
};

export default Header;
