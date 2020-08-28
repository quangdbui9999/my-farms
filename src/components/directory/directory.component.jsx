import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "crops",
          imageUrl:
            "https://github.com/quangdbui9999/imagesWeb/blob/master/crops.png?raw=true",
          id: 1,
          linkUrl: "crops",
        },
        {
          title: "fruits",
          imageUrl:
            "https://github.com/quangdbui9999/imagesWeb/blob/master/fruits.png?raw=true",
          id: 2,
          linkUrl: "",
        },
        {
          title: "farms",
          imageUrl:
            "https://github.com/quangdbui9999/imagesWeb/blob/master/farms.png?raw=true",
          id: 3,
          linkUrl: "",
        },
        {
          title: "constructions",
          imageUrl:
            "https://github.com/quangdbui9999/imagesWeb/blob/master/constructions.png?raw=true",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "mines",
          imageUrl:
            "https://github.com/quangdbui9999/imagesWeb/blob/master/mine.png?raw=true",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div class="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
