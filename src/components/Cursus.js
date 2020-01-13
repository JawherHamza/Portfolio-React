import React from "react";
import "../styles/Cursus.css";
import messagesfr from '../messages/fr.json'
import messagesen from '../messages/en.json'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import { FormattedMessage, useIntl } from "react-intl";

export default function Cursus() {
  const intl = useIntl()
  let cursus = (intl.locale == "en")
    ? Object.entries(messagesen.cursus)
    : Object.entries(messagesfr.cursus);
  let scolaire = (intl.locale == "en")
    ? Object.entries(messagesen.scolaire)
    : Object.entries(messagesfr.scolaire);

  return (
    <div className="cursus" id="cursus">
      <h1 class="title" >
        <FormattedMessage id="cursus-title" />
      </h1>
      <VerticalTimeline>
        {
          cursus && cursus.map((cur, i) => {
            return (<VerticalTimelineElement
              className={"vertical-timeline-element--work"}
              contentArrowStyle={{ borderRight: '7px solid  #618699' }}
              date={cur[1].date}
              iconStyle={{ background: '#618699', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <div className={(i === 0) && "current"}>
                <h3 className="vertical-timeline-element-title">{cur[1].title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{cur[1].place}</h4>
                <ul style={{ textAlign: "left" }}>
                  {cur[1].desc.map((des) => { return (<li>{des}</li>) })}
                </ul>
              </div>
            </VerticalTimelineElement>)
          })
        }
        {
          scolaire && scolaire.map((scol, i) => {
            return (<VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={scol[1].date}
              contentArrowStyle={{ borderRight: '7px solid  #C1524C' }}
              iconStyle={{ background: '#C1524C', color: '#fff' }}
              icon={<SchoolIcon />}
            >
              <div className={(i === 0) && "current-scol"}>
                <h3 className="vertical-timeline-element-title">{scol[1].title}</h3><br></br>
                <h4 className="vertical-timeline-element-subtitle">{scol[1].place}</h4>
                {/* <p>
                  {scol[1].desc}
                </p> */}
              </div>
            </VerticalTimelineElement>)
          })
        }
      </VerticalTimeline>

    </div >
  );
}
