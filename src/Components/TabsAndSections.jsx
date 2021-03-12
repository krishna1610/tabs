import React from "react";

class TabsAndSections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ["Home", "About", "Contact Us", "Team", "Products"],
      activeIndex: 0,
    };
  }

  linkClicked(index) {
    this.setState({ activeIndex: index });
  }
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          {this.state.tabs.map((tab, index) => {
            return (
              <li className="nav-item" key={index}>
                <a
                  className={
                    "nav-link " +
                    (this.state.activeIndex === index ? "active" : "")
                  }
                  href="#"
                  onClick={() => {
                    this.linkClicked(index);
                  }}
                  area-current={this.state.activeIndex === index ? "page" : ""}
                >
                  {tab}
                </a>
              </li>
            );
          })}
        </ul>
        <main>
          <section>
            <p>This is {this.state.tabs[this.state.activeIndex]} page.</p>
          </section>
        </main>
      </div>
    );
  }
}

export default TabsAndSections;
