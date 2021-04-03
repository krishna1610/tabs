import React from "react";
import SectionsBody from "./SectionsBody";
import TabHeader from "./TabHeader";

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
    this.linkClicked = this.linkClicked.bind(this);
  }

  linkClicked(index) {
    this.setState({ activeIndex: index });
  }

  render() {
    return (
      <div>
        <TabHeader
          pages={this.state.pages}
          activeIndex={this.state.activeIndex}
          linkClicked={this.linkClicked}
        />
        <SectionsBody
          pages={this.state.pages}
          activeIndex={this.state.activeIndex}
        />
      </div>
    );
  }
}

export default TabsAndSections;
