import React from "react";

class SectionsBody extends React.Component {
  render() {
    return (
      <main>
        {this.props.pages.map((page, index) => {
          return (
            <section
              key={index}
              className={this.props.activeIndex !== index ? "d-none" : ""}
            >
              <p>{page.section.content}</p>
            </section>
          );
        })}
      </main>
    );
  }
}

export default SectionsBody;
