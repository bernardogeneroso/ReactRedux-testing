import React from "react";

import { useSelector } from "react-redux";

const Video = () => {
  const moduleTitle = useSelector((state) => state.course.activeModule.title);
  const lessonTitle = useSelector((state) => state.course.activeLesson.title);

  return (
    <div>
      <p>
        <span>Módulo </span>
        <strong>{moduleTitle}</strong>
      </p>
      <p>
        <span>Aula </span>
        <strong>{lessonTitle}</strong>
      </p>
    </div>
  );
};

export default Video;
