import React from 'react';
import ReactPlayer from 'react-player/youtube';

export default class ResponsivePlayer extends React.Component {
  render() {
    return (
      <div className="relative pt-[43.75%] ">
        <ReactPlayer
          className="absolute left-0 top-0 h-[448px]"
          url="https://youtu.be/Ni75V0WUavE"
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}
