import { Footer } from '../src/Components/Footer';
import { Header } from '../src/Components/Header';
import { Title } from '../src/Components/Title';
import { jobs } from '../data/about';

import { Container } from '../src/Styles/Container';
import { PersonalResume, Career } from '../src/Styles/About';

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <Title label="About. Sobre." from="#5b7fff" to="#33ccfc" />
        <PersonalResume>
          <div className="resume__image">
            <img src="/images/avatar.jpeg" alt="Avatar" />
          </div>
          <div className="resume">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, dolore et! Commodi
            obcaecati ab eius possimus. Veritatis, itaque assumenda repudiandae sint placeat beatae
            commodi veniam iure inventore autem, labore quaerat?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ab, dolore et! Commodi obcaecati ab eius possimus.
            Veritatis, itaque assumenda repudiandae sint placeat beatae commodi veniam iure
            inventore autem, labore quaerat?
          </div>
        </PersonalResume>
        <Career>
          <h3 className="second__title">Career</h3>
          <ul className="jobs-list">
            {jobs.map((job, index) => (
              <>
                <li key={index}>
                  <p className="jobs-list__title">{job.jobTitle}</p>
                  <a
                    href={job.companyUrl}
                    className="jobs-list__link"
                    target="_blank"
                    rel="noreferrer">
                    {job.company}
                  </a>
                  <span className="jobs-list__location"> • {job.location}</span>
                  <p className="jobs-list__duration">
                    {new Date(job.startDate).toLocaleDateString('en-US', {
                      month: 'short',
                      timeZone: 'utc'
                    })}{' '}
                    {new Date(job.startDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      timeZone: 'utc'
                    })}{' '}
                    –{' '}
                    {job.endDate
                      ? new Date(job.endDate).toLocaleDateString('en-US', {
                          month: 'short',
                          timeZone: 'utc'
                        }) +
                        ' ' +
                        new Date(job.endDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          timeZone: 'utc'
                        })
                      : 'Present'}
                  </p>
                </li>
              </>
            ))}
          </ul>
        </Career>
      </Container>
      <Footer />
    </>
  );
};

export default About;
