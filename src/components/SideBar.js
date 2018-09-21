import React, { Component, Fragment } from "react";
import * as contentful from "contentful";
import { Title, Separator, Playlist, LinkEpi } from "./styles/Sidebar";

class Sidebar extends Component {
  state = {
    streamingData: [],
    customLink: ""
  };

  async componentDidMount() {
    this.client = contentful.createClient({
      space: "f2tq0yl5zvsv",
      accessToken:
        "d32418ba2f46592f85a18ea5fa1de96b129aaf785ab50e95a9552c55a4639e83"
    });
    const entries = await this.client.getEntries();
    this.setState({
      streamingData: entries.toPlainObject().items.map(streamingLink => ({
        title: streamingLink.fields.title,
        data: streamingLink.fields.streamingflux
      }))
    });
  }

  handleEpiChange = e => {
    const { link: url, type: transport } = e.target.dataset;
    window.player.loadVideo({
      url,
      transport,
      autoPlay: true
    });
  };

  handleChange = e => {
    this.setState({
      customLink: e.target.value
    });
  };

  useCustomLink = () => {
    window.player.loadVideo({
      url: this.state.customLink,
      autoPlay: true,
      transport: "dash"
    });
  };

  render() {
    return (
      <div
        className={`custom-sidebar-class ${this.props.isOpen ? "isOpen" : ""}`}
      >
        <div className="first-child-sidebar">
          <Title>Menu</Title>
          <div>
            Put your link:
            <input value={this.state.customLink} onChange={this.handleChange} />
            <button onClick={this.useCustomLink}>Submit</button>
          </div>
          <div>
            {this.state.streamingData.map((entry, index) => (
              <Fragment>
                <Separator />
                <Playlist key={index}>
                  <Title>{entry.title}</Title>
                  <div>
                    {entry.data.map((dataStream, index) => (
                      <LinkEpi
                        data-link={dataStream.url}
                        data-type={dataStream.type}
                        key={index}
                        onClick={this.handleEpiChange}
                      >
                        {dataStream.num}.{dataStream.title}
                      </LinkEpi>
                    ))}
                  </div>
                </Playlist>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
