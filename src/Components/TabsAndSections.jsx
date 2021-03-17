import React from "react";

class TabsAndSections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          tab: {
            title: "Home",
          },
          section: {
            content: "This is home page",
          },
        },
        {
          tab: {
            title: "About",
          },
          section: {
            content: "This is about page",
          },
        },
        {
          tab: {
            title: "Contact Us",
          },
          section: {
            content: "This is contact us page",
          },
        },
        {
          tab: {
            title: "Team",
          },
          section: {
            content: "This is team page",
          },
        },
        {
          tab: {
            title: "Products",
          },
          section: {
            content: "This is products page",
          },
        },
      ],
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
          {this.state.pages.map((page, index) => {
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
                  {page.tab.title}
                </a>
              </li>
            );
          })}
        </ul>
        <main>
          {this.state.pages.map((page, index) => {
            return (
              <section
                key={index}
                className={this.state.activeIndex !== index ? "d-none" : ""}
              >
                <p>{page.section.content}</p>
              </section>
            );
          })}
        </main>
      </div>
    );
  }
}

export default TabsAndSections;
