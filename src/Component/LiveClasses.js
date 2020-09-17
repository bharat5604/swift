import React from 'react';
import './LiveClasses.css';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import Classes from './Classes';

const LiveClasses = () => {
    return (
        <div className="liveClasses">
            <div className="container">
                <div className="liveClasses__heading">
                    <h1>Live Classes</h1>
                    <span>Select a number</span>
                </div>
                <div className="liveClasses__tabs">
                    <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                        <Tab label="5">
                            <div className="row">
                                <div className="col-md-4">
                                    <Classes
                                        subject="Maths"
                                        department="Math & Science"
                                        grade="5"
                                        date="Mon, 31st, Aug, 3 PM"
                                        taken="Taken By"
                                        teacher="Nagma Ma'am"
                                        education="M.Sc In Chemistry Deenbandhu Chhotu Ram University Of Science & Technology"
                                        img="https://s3.ap-south-1.amazonaws.com/assets.swiflearn.com/prod/teacher/profile/Nagma+Ma'am.png"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Classes
                                        subject="Maths"
                                        department="Math & Science"
                                        grade="5"
                                        date="Mon, 31st, Aug, 3 PM"
                                        taken="Taken By"
                                        teacher="Nagma Ma'am"
                                        education="M.Sc In Chemistry Deenbandhu Chhotu Ram University Of Science & Technology"
                                        img="https://s3.ap-south-1.amazonaws.com/assets.swiflearn.com/prod/teacher/profile/Nagma+Ma'am.png"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Classes
                                        subject="Maths"
                                        department="Math & Science"
                                        grade="5"
                                        date="Mon, 31st, Aug, 3 PM"
                                        taken="Taken By"
                                        teacher="Nagma Ma'am"
                                        education="M.Sc In Chemistry Deenbandhu Chhotu Ram University Of Science & Technology"
                                        img="https://s3.ap-south-1.amazonaws.com/assets.swiflearn.com/prod/teacher/profile/Nagma+Ma'am.png"
                                    />
                                </div>
                            </div>

                        </Tab>
                        <Tab label="6">
                            <div className="row">
                                <div className="col-md-4">
                                    <Classes
                                        subject="Physics"
                                        department="Math & Science"
                                        grade="3 CBSE"
                                        date="Mon, 31st, Aug, 3 PM"
                                        taken="Taken By"
                                        teacher="Nitu Ma'am"
                                        education="B.Tech Gautam Buddha University Exp. 08 yrs"
                                        img="https://s3.ap-south-1.amazonaws.com/assets.swiflearn.com/prod/teacher/profile/Neetu+Ma'am.png"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Classes
                                        subject="Physics"
                                        department="Math & Science"
                                        grade="3 CBSE"
                                        date="Mon, 31st, Aug, 3 PM"
                                        taken="Taken By"
                                        teacher="Nitu Ma'am"
                                        education="B.Tech Gautam Buddha University Exp. 08 yrs"
                                        img="https://s3.ap-south-1.amazonaws.com/assets.swiflearn.com/prod/teacher/profile/Neetu+Ma'am.png"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Classes
                                        subject="Physics"
                                        department="Math & Science"
                                        grade="3 CBSE"
                                        date="Mon, 31st, Aug, 3 PM"
                                        taken="Taken By"
                                        teacher="Nitu Ma'am"
                                        education="B.Tech Gautam Buddha University Exp. 08 yrs"
                                        img="https://s3.ap-south-1.amazonaws.com/assets.swiflearn.com/prod/teacher/profile/Neetu+Ma'am.png"
                                    />
                                </div>
                            </div>

                        </Tab>
                        <Tab label="7">
                            <div className="row">
                                <div className="col-md-4">
                                    <Classes
                                        subject="Math Olympiad"
                                        department="Knowing Our Number - 5"
                                        grade="6 CBSE"
                                        date="Mon, 31st, Aug, 3 PM"
                                        taken="Taken By"
                                        teacher="Prerna Ma'am"
                                        education="M.Sc In Chemistry Deenbandhu Chhotu Ram University Of Science & Technology"
                                        img="https://s3.ap-south-1.amazonaws.com/assets.swiflearn.com/prod/teacher/profile/Prerna+Ma'am.png"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Classes
                                        subject="English"
                                        department="Reported Speech 3"
                                        grade="6 CBSE"
                                        date="Mon, 31st, Aug, 3 PM"
                                        taken="Taken By"
                                        teacher="Teacher Swiftlearn"
                                        education="M.Sc In Chemistry Deenbandhu Chhotu Ram University Of Science & Technology"
                                        img="https://s3.ap-south-1.amazonaws.com/assets.swiflearn.com/prod/teacher/profile/Teacher+Swiflearn.png"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Classes
                                        subject="Maths"
                                        department="Understanding Elementary shapes - 2"
                                        grade="5"
                                        date="Mon, 31st, Aug, 3 PM"
                                        taken="Taken By"
                                        teacher="Roomi Ma'am"
                                        education="M.Sc In Chemistry Deenbandhu Chhotu Ram University Of Science & Technology"
                                        img="https://s3.ap-south-1.amazonaws.com/assets.swiflearn.com/prod/teacher/profile/Teacher+Swiflearn.png"
                                    />
                                </div>
                            </div>

                        </Tab>
                        <Tab label="8">
                            <div className="row">
                                <div className="col-md-4">
                                    <Classes
                                        subject="Science"
                                        department="Doubt - 1"
                                        grade="7, CBSE"
                                        date="Mon, 31st, Aug, 3 PM"
                                        taken="Taken By"
                                        teacher="Ayushi Singal Ma'am"
                                        education="M.Sc In Chemistry Deenbandhu Chhotu Ram University Of Science & Technology"
                                        img="https://s3.ap-south-1.amazonaws.com/assets.swiflearn.com/prod/teacher/profile/Ayushi+Ma'am.png"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Classes
                                        subject="English"
                                        department="Doubt - 2"
                                        grade="7, CBSE"
                                        date="Mon, 31st, Aug, 3 PM"
                                        taken="Taken By"
                                        teacher="Neha Thakur Ma'am"
                                        education="M.Sc In Chemistry Deenbandhu Chhotu Ram University Of Science & Technology"
                                        img="https://s3.ap-south-1.amazonaws.com/assets.swiflearn.com/prod/teacher/profile/Neha+T.+Ma'am.png"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Classes
                                        subject="Maths"
                                        department="Fractionals and Decimals - 1"
                                        grade="7, CBSE"
                                        date="Mon, 31st, Aug, 3 PM"
                                        taken="Taken By"
                                        teacher="Nanthini Ma'am"
                                        education="M.Sc In Chemistry Deenbandhu Chhotu Ram University Of Science & Technology"
                                        img="https://s3.ap-south-1.amazonaws.com/assets.swiflearn.com/prod/teacher/profile/Nanthini+Ma'am.png"
                                    />
                                </div>
                            </div>

                        </Tab>
                        <Tab label="9">
                            <div className="row">
                                <div className="col-md-4">
                                    <Classes
                                        subject="Science"
                                        department="Physics & Science"
                                        grade="3"
                                        date="Mon, 31st, Aug, 3 PM"
                                        taken="Taken By"
                                        teacher="Nagma Ma'am"
                                        education="M.Sc In Chemistry Deenbandhu Chhotu Ram University Of Science & Technology"
                                        img="https://s3.ap-south-1.amazonaws.com/assets.swiflearn.com/prod/teacher/profile/Nagma+Ma'am.png"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Classes
                                        subject="Maths"
                                        department="Math & Science"
                                        grade="5"
                                        date="Mon, 31st, Aug, 3 PM"
                                        taken="Taken By"
                                        teacher="Nagma Ma'am"
                                        education="M.Sc In Chemistry Deenbandhu Chhotu Ram University Of Science & Technology"
                                        img="https://s3.ap-south-1.amazonaws.com/assets.swiflearn.com/prod/teacher/profile/Nagma+Ma'am.png"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Classes
                                        subject="Maths"
                                        department="Math & Science"
                                        grade="5"
                                        date="Mon, 31st, Aug, 3 PM"
                                        taken="Taken By"
                                        teacher="Nagma Ma'am"
                                        education="M.Sc In Chemistry Deenbandhu Chhotu Ram University Of Science & Technology"
                                        img="https://s3.ap-south-1.amazonaws.com/assets.swiflearn.com/prod/teacher/profile/Nagma+Ma'am.png"
                                    />
                                </div>
                            </div>

                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default LiveClasses
