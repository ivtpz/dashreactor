import React, { Component } from 'react';
import LessonTitle from './LessonTitle';
import { Col } from 'react-bootstrap';
import LessonDummyData from './LessonDummyData';
import { getLessons, getLessonById } from '../services/LessonServices.js';

class LessonTitleList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { LessonTitleListStyle, fontAwesomeStyle } = styles;

    return (
      <Col sm={3} style={LessonTitleListStyle}>
       <span style={fontAwesomeStyle} onClick={this.props.handleAddLessonClick}><i className="fa fa-plus-circle" aria-hidden="true" style={{fontSize: 40}}></i>Add a lesson</span>
        {
          this.props.userLessons.map(lesson => {
            let isSelectedLesson = lesson.lessonInfo.title === this.props.selectedLessonTitle
            return (
              <LessonTitle
                isSelectedLesson={isSelectedLesson}
                handleLessonClick={this.props.handleLessonClick.bind(this)}
                handleEditLessonClick={this.props.handleEditLessonClick.bind(this)}
                handlePublishLessonClick={this.props.handlePublishLessonClick.bind(this)}
                title={lesson.lessonInfo.title}
                lessonInfo={lesson.lessonInfo}
                lessonContent={lesson.lessonContent}
                lessonId={lesson.lessonInfo._id}
              />
            )
          })
        }
      </Col>
    )
  }
}

const styles = {
  LessonTitleListStyle: {
    height: '100%',
    fontSize: 20,
    backgroundColor: 'white',
    position: 'fixed',
    paddingTop: 60,
    paddingRight: 0,
    paddingLeft:0,
    marginLeft: 100,
    fontFamily: 'Lato',
    zIndex: 0,
    boxShadow: '0px 0px 5px -1px rgba(0,0,0,0.2)',
    overflow:'scroll'
  },
  fontAwesomeStyle: {
    color: '#DADCDD',
    display: 'inline',
    marginLeft: 10,
    fontSize: 20,
    cursor: 'pointer'
  },
}

export default LessonTitleList