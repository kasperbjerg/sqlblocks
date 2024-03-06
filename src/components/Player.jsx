import React from 'react';
import ReactPlayer from 'react-player/youtube';

export default class ResponsivePlayer extends React.Component {
  render() {
    return (
      <div className="relative h-full w-full pt-[43.75%]">
        <ReactPlayer
          className="absolute left-0 top-0"
          url="https://youtu.be/Ni75V0WUavE"
          width='1024px'
          height='448px'
        />
      </div>
    );
  }
}
