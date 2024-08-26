import React, {Component} from 'react'
import ReactGA from "react-ga4";

import CemCV from "./components/cv";

ReactGA.initialize("G-EZCEW7M2Y8");

class App extends Component {
  render() {
    return (
      <CemCV
        personalData={{
          name: 'Ethem Cem Özkan',
          title: 'Senior DevOps Engineer',
          image: './ethemcemozkan.jpg',
          contacts: [
            {type: 'email', value: 'me@ethemcemozkan.com'},
            {type: 'location', value: 'Nijkerk, Netherlands'},
            {type: 'website', value: 'ethemcemozkan.com'},
            {type: 'linkedin', value: 'linkedin.com/in/ethemcemozkan'},
            {type: 'github', value: 'github.com/ethemcemozkan'}
          ]
        }}
        sections={
          [

            {
              type: 'text',
              title: 'Introduction',
              icon: 'usertie',
              breakAfter: true,
              content: `With over a decade of experience in the software development industry, 
                            my career started as an Infrastructure Developer working on developing software libraries as well as managing CI pipelines,
                            taking releases, making production deployments. Later on, this job role evolved into Software Configuration Management, 
                            empowering me to orchestrate seamless project workflows while upholding CMMI processes.
                            Moreover, I have been an integral part of many DevOps projects, including containerizing legacy applications, 
                            orchestrating public cloud migrations, and architecting and implementing cloud-based solutions. 
                            These experiences have been instrumental in shaping my career and 
                            have contributed to my growth as a professional, resulting in my current position as a Senior DevOps Engineer.
                            <br/>
                            <br/>
                            On a personal note, I am informal, cheerful, hands-on, enthusiastic and eager to learn. 
                            I prefer working in an environment that focused on generating results. 
                            I enjoy working in a team with clear communication.
                            <br/>
                            <br/>
                            In my free time, I find joy in tinkering with my smart home setup and exploring culinary delights in the kitchen. 
                            I am happily married to İdil, who has been my companion throughout our relocation to the Netherlands.`,
            },
            {
              type: 'skills',
              title: 'Skills',
              icon: 'rocket',
              items: [
                {skill: 'ECS', level: 5},
                {skill: 'EC2', level: 5},
                {skill: 'IAM', level: 5},
                {skill: 'RDS', level: 5},
                {skill: 'Aurora', level: 5},
                {skill: 'Docker', level: 5},
                {skill: 'Ansible', level: 5},
                {skill: 'Cloudformation', level: 5},
                {skill: 'Jenkins', level: 4},
                {skill: 'EKS', level: 3},
                {skill: 'Kubernetes', level: 3},
                {skill: 'PostgreSQL', level: 3},
                {skill: 'RabbitMQ', level: 3},
                {skill: 'Python', level: 3},
                {skill: 'Java', level: 3},
                {skill: 'JavaScript', level: 2},
                {skill: 'MySQL', level: 2},
                {skill: 'Powershell', level: 2},
                {skill: 'AWS CDK', level: 2},
                {skill: 'Bash', level: 2},
                {skill: 'AWS', level: 5},
                {skill: 'Azure', level: 1},
                {skill: 'Teraform', level: 1},
              ]
            },
            {
              type: 'skills',
              title: 'Languages',
              icon: 'language',
              breakAfter: true,
              items: [
                {skill: 'English', level: 5},
                {skill: 'Turkish', level: 5},
                {skill: 'Dutch', level: 1},
              ]
            },
            {
              type: 'experiences',
              title: 'Experiences',
              icon: 'archive',
              breakAfter: true,
              items: [
                {
                  title: 'Senior DevOps Engineer',
                  company: 'Coolblue Energie/ServiceHouse',
                  description: 'During my time at ServiceHouse, which later merged with Coolblue, ' +
                    'I played a pivotal role in migrating their infrastructure to AWS from its inception. ' +
                    'As a member of the DevOps team, I led the seamless transition of existing CI/CD pipelines and ' +
                    'service workloads onto the AWS platform. Subsequently, I designed and implemented new opportunities ' +
                    'provided by AWS to modernize their environments, ensuring scalability, reliability, and efficiency. ' +
                    'In collaboration with the development teams, I designed and implemented tailored solutions to simplify ' +
                    'their interaction with AWS, streamlining the development process and mitigating the complexities ' +
                    'associated with cloud infrastructure. Notable achievements include database, RabbitMQ cluster, ' +
                    'and SSO cloud migrations along with the access request system resulting in seamless developer experience. ' +
                    'These initiatives not only streamlined development processes but also contributed to ' +
                    'significant improvements in system performance, reliability, and security, ultimately driving business ' +
                    'success.',
                  companyWebSite: 'https://www.coolblue.nl/energie',
                  datesBetween: '2019.09 - Present',
                  descriptionTags: [
                    'AWS',
                    'ECS',
                    'EKS',
                    'SNS',
                    'IAM',
                    'Glue',
                    'Redshift',
                    'AWS SSO',
                    'Fargate',
                    'RDS',
                    'ECR',
                    'PostgreSQL',
                    'MySQL',
                    'Cloudwatch',
                    'Lambda',
                    'Cloudformation',
                    'Ansible',
                    'AWX',
                    'Datadog',
                    'Python',
                    'RabbitMQ'
                  ]
                },
                {
                  title: 'DevOps Engineer',
                  company: 'ICterra',
                  description: 'During my time as a DevOps Engineer, my primary responsibility revolved ' +
                    'around creating robust CI/CD pipelines and establishing DTAP environments for various projects. ' +
                    'Additionally, I gained experience with Windows containers and played a pivotal role in integrating ' +
                    'containers, leveraging my expertise to ensure seamless deployment processes and optimize system performance.',
                  companyWebSite: 'https://www.icterra.com',
                  companyMeta: '',
                  datesBetween: '2018.11 - 2019.09',
                  descriptionTags: ['Docker', 'Swarm', 'Windows Containers', 'RabbitMQ', 'GitLab']
                },
                {
                  title: 'DevOps Engineer',
                  company: 'Notary Union of Turkey',
                  description: 'I took on the crucial responsibility of managing the infrastructure for their ' +
                    'self-developed software, which is essential to notaries across Turkey ' +
                    'and operates at a high volume. My role involved assisting the team in containerizing ' +
                    'their software solutions, leveraging my expertise to streamline processes and enhance system efficiency.',
                  companyWebSite: 'https://portal.tnb.org.tr',
                  datesBetween: '2018.06 - 2018.11',
                  descriptionTags: ['Docker', 'Swarm', 'Bitbucket']
                },
                {
                  title: 'Software Configuration Manager',
                  company: 'TUBITAK',
                  description: 'I started on a journey of continuous learning and growth that shaped my expertise in CMMI processes and laid the foundations for my proficiency in AWS. As my tenure progressed, I assumed pivotal roles, notably being entrusted with the management of crucial project infrastructures and development/production environments.\n' +
                    '\n' +
                    'My responsibilities include managing configuration across all development environments, orchestrating CI pipelines, and facilitating the seamless deployment of releases while automating developer environment setups. Adherence to CMMI level 5 Configuration and Development processes was critical in all my projects. Notably, I had the privilege of working on Turkey-wide high-volume projects, such as the track and trace system for all medical devices, where my contributions played a pivotal role in ensuring project success.\n' +
                    '\n' +
                    'In addition to my configuration management duties, early in my career, I contributed to simplifying development workflows by developing Java-based libraries. ',
                  companyWebSite: 'https://tubitak.gov.tr',
                  companyMeta: 'The Scientific and Technological Research Council Of Turkey',
                  datesBetween: '2012.05 - 2018.06',
                  descriptionTags: [
                    'Java',
                    'EC2',
                    'Cloudformation',
                    'VM',
                    'Linux',
                    'Teamcity',
                    'Hudson',
                    'Oracle',
                    'Bash',
                    'Git',
                    'Powershell',
                    'EJB',
                    'Spring',
                    'JSF'
                  ]
                }
              ]
            },
            {
              type: 'generic',
              title: 'Education',
              icon: 'graduation',
              items: [
                {
                  title: 'Computer Engineering (Phd)',
                  authority: 'Hacettepe University',
                  description: 'I completed all my courses for my Ph.D. However, I had to discontinue my studies due to my relocation to the Netherlands.',
                  authorityWebSite: 'https://www.hacettepe.edu.tr/english',
                  rightSide: '2015 - discontinued'
                },
                {
                  title: 'Computer Engineering (Msc)',
                  authority: 'TOBB University of Economics and Technology',
                  authorityWebSite: 'https://www.etu.edu.tr/en',
                  rightSide: '2012 - 2014'
                },
                {
                  title: 'Computer Engineering (BS)',
                  authority: 'TOBB University of Economics and Technology',
                  authorityWebSite: 'https://www.etu.edu.tr/en',
                  rightSide: '2007 - 2012'
                }

              ]
            },
          ]
        }
      />
    )
  }
}

export default App
