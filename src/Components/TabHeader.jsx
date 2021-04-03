import React from "react";

class TabHeader extends React.Component {
  render() {
    return (
      <header>
        <ul className="nav nav-tabs">
          {this.props.pages.map((page, index) => {
            return (
              <li className="nav-item" key={index}>
                <a
                  className={
                    "nav-link " +
                    (this.props.activeIndex === index ? "active" : "")
                  }
                  href="#"
                  onClick={() => {
                    this.props.linkClicked(index);
                  }}
                  area-current={this.props.activeIndex === index ? "page" : ""}
                >
                  {page.tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </header>
    );
  }
}

export default TabHeader;
