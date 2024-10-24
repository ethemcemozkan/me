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
              printableContent: `Senior DevOps Engineer with over 10 years of experience in cloud infrastructure, CI/CD pipelines, 
                        and automation. Proven track record in AWS cloud migrations, containerizing legacy applications, 
                        and optimizing development workflows for scalability and efficiency. 
                        Skilled in collaborating with cross-functional teams to deliver reliable, secure, 
                        and high-performing systems. Enthusiastic, hands-on, and always eager to learn new technologies.`,   
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
                        I prefer working in an environment that is focused on generating results. 
                        I enjoy working in a team with clear communication.
                        <br/>
                        <br/>
                        In my free time, I find joy in tinkering with my smart home setup and exploring culinary delights in the kitchen. 
                        I am happily married to İdil, who has been my companion throughout our relocation to the Netherlands.`,
            },
            {
              type: 'skills',
              title: 'Skills&Languages',
              icon: 'rocket',
              items: [
                { category: 'AWS', 
                  icon: 'aws',
                  column: 'left',
                  skills: [
                   {skill: 'ECS', level: 5},
                   {skill: 'EC2', level: 5},
                   {skill: 'IAM', level: 5},
                   {skill: 'Lambda', level: 5},
                   {skill: 'DynamoDB', level: 5}, 
                   {skill: 'AWS Backup', level: 5},
                   {skill: 'API Gateway', level: 5},
                   {skill: 'IAM Identity Center(AWS SSO)', level: 5},
                   {skill: 'Aurora', level: 5},
                   {skill: 'AmazonMQ', level: 5},
                   {skill: 'Glue', level: 4},
                   {skill: 'EKS', level: 4},
                   {skill: 'Cost Optimisation', level: 3},
                  ]
                },
                { category: 'Infrastructure & Automation', 
                  icon: 'tooling',
                  column: 'right',
                  skills: [
                   {skill: 'Docker', level: 5},
                   {skill: 'Ansible', level: 5},
                   {skill: 'Cloudformation', level: 5},
                   {skill: 'Jenkins', level: 5},
                   {skill: 'Linux', level: 4},
                   {skill: 'Terraform', level: 4},
                   {skill: 'Kubernetes', level: 4},
                   {skill: 'Windows', level: 3},
                   {skill: 'PostgreSQL', level: 3},
                   {skill: 'RabbitMQ', level: 3},
                   {skill: 'CDK', level: 3},
                   {skill: 'ELK', level: 3},
                   {skill: 'Cassandra', level: 2},
                  ]
                }, 
                { category: 'Azure', 
                  icon: 'azure',
                  column: 'right',
                  skills: [
                   {skill: 'Entra ID', level: 3},
                  ]
                },   
                
                { category: 'Programming Languages', 
                  icon: 'code',
                  column: 'left',
                  skills: [
                   {skill: 'Python', level: 5},
                   {skill: 'Java', level: 4},
                   {skill: 'JavaScript', level: 3},
                   {skill: 'Bash', level: 3},
                   {skill: 'Powershell', level: 3},
                  ]
                },
                { category: 'Languages',
                  icon: 'language',
                  column: 'right',
                  skills: [
                    {skill: 'English', level: 5},
                    {skill: 'Turkish', level: 5},
                    {skill: 'Dutch', level: 1},
                  ]
                },
             ]
            },
            {
              type: 'experiences',
              title: 'Experiences',
              icon: 'archive',
              items: [
                {
                  title: 'Senior Cloud Engineer',
                  company: 'Coolblue',
                  description: '<ul>' +
                    '<li>Designed a <b>shared VPC</b> to streamline networking between Coolblue and Coolblue Energie.</li>' +
                    '<li>Implemented <b>cross VPC connectivity</b> using AWS Transit Gateway.</li>' +
                    '<li><b>Enhanced security monitoring and threat detection</b> by implementing advanced security features such as GuardDuty.</li>' +
                    '<li>Migrated <b>SSO systems</b> to a new <b>Azure Entra ID tenant</b>, improving authentication workflows and identity management.</li>' +
                    '<li>Designing the adoption of <b>Azure cloud services</b>, enabling new business capabilities and integrating with existing infrastructure for hybrid cloud solutions.</li>' +
                    '</ul>',
                  companyWebSite: 'https://www.coolblue.nl',
                  datesBetween: '2023.12 - Present',
                  descriptionTags: [
                    'Techical Lead',
                    'Agile',
                    'AWS',
                    'Azure',
                    'Transit Gateway',
                    'CDK',
                    'Crowdstrike',
                    'Teamcity',
                    'TGW',
                    'Terraform',
                    'Azure Foundations'
                  ]
                },
                {
                  title: 'Senior DevOps Engineer',
                  company: 'ServiceHouse',
                  description: '<ul>' +
                    '<li><b>Self service AWS cloud implementation</b>, enabling teams to autonomously manage cloud resources without dealing with AWS complexities like setting up external exposure using API Gateway or integration with <b>self service business intelligence system</b>.</li>' +
                    '<li><b>Migrated workload services, databasess, and RabbitMQ brokers</b> to AWS, improving scalability and cost-efficiency. After migrations <b>Enhanced security</b> by implementing <b>WAF</b> and <b>CloudTrail</b>.</li>' +
                    '<li>Developed and managed <b>Central CI/CD pipelines</b> with configurable deployment options to streamline the development process.</li>' +
                    '<li><b>Co-chaired platform future features meetings</b>, gathering feedback, managing developer expectations, and providing regular platform updates.</li>'+
                    '<li>Implemented <b>keystore and truststore management</b> solution using Ansible, streamlined certificate management and mutual TLS configuration across environments.</li>' +
                    '<li>Implemented <b>SSO systems</b> using AWS IAM Identity Center and Azure Entra ID.</li>' +
                    '<li>Built an <b>access request system</b> using DynamoDB, Lambda for managing access to restricted resources securely.</li>' +
                    '<li>Led <b>AWS cloud modernization efforts</b>, optimizing cloud infrastructure for performance and cost-effectiveness.</li>' +
                    '<li>Designed and implemented a <b>resource lifecycle management system</b> to automatically delete unused or expired resources, improving efficiency.</li>' +
                    '<li>Led <b>platform Lambda unit, integration test</b> efforts, improving test coverage and reducing deployment risks by implementing a simplified testing framework.</li>' +
                    '</ul>',
                  companyWebSite: 'https://servicehouse.nl/',
                  datesBetween: '2019.09 - 2023.12',
                  descriptionTags: [
                    'Techical Lead',
                    'Agile',
                    'AWS',
                    'ECS',
                    'EKS',
                    'SNS',
                    'IAM',
                    'API Gateway',
                    'DynamoDB',
                    'Glue',
                    'Quicksight',
                    'S3',
                    'Redshift',
                    'IAM Identity Center(AWS SSO)',
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
                    'RabbitMQ',
                    'Gradle',
                  ]
                },
                {
                  title: 'DevOps Engineer',
                  company: 'ICterra',
                  description: '<ul>' +
                    '<li><b>Developed and maintained robust CI/CD pipelines</b> to automate and streamline the development and deployment processes across various projects.</li>' +
                    '<li>Established and managed DTAP environments (Development, Testing, Acceptance, and Production)</b>, ensuring consistency and stability throughout the software development lifecycle.</li>' + 
                    '<li><b>Implemented Windows containers</b> that communicated with proprietary hardware, ensuring seamless integration and enhancing system functionality.</li>' +
                    '</ul>',
                  companyWebSite: 'https://www.icterra.com',
                  companyMeta: '',
                  datesBetween: '2018.11 - 2019.09',
                  descriptionTags: ['Docker', 'Swarm', 'Windows Containers', 'RabbitMQ', 'GitLab']
                },
                {
                  title: 'DevOps Engineer',
                  company: 'Notary Union of Turkey',
                  description: '<ul>' +
                    '<li><b>Managed infrastructure</b> for high-volume, self-developed software used by notaries across Turkey, ensuring system stability and performance.</li>' +
                    '<li><b>Assisted in containerizing software solutions</b>, streamlining deployment processes and improving scalability.</li>' +
                    '<li><b>Optimized system efficiency</b> by leveraging containerization expertise, enabling smoother operations and faster deployments.</li>' +
                    '</ul>',
                  companyWebSite: 'https://portal.tnb.org.tr',
                  datesBetween: '2018.06 - 2018.11',
                  descriptionTags: ['Docker', 'Swarm', 'Bitbucket', 'Prometheus', 'Grafana']
                },
                {
                  title: 'Software Configuration Manager',
                  company: 'TUBITAK',
                  description: '<ul>' +
                    '<li><b>Leveraged AWS</b> to implement load testing environment.</li>' +
                    '<li><b>Participated in CMMI level 3 and 5 review processes.</b></li>' +
                    '<li><b>Managed configuration</b> across development, testing and production environments, <b>orchestrated CI pipelines</b>, <b>automated developer setups</b>, and ensured adherence to CMMI level 5 processes.</li>' +
                    '<li><b>Developed and managed infrastructure to Turkey-wide high-volume projects</b>, including the track and trace system for all medical devices.</li>' +
                    '</ul>',
                  companyWebSite: 'https://tubitak.gov.tr',
                  companyMeta: 'The Scientific and Technological Research Council Of Turkey',
                  datesBetween: '2012.05 - 2018.06',
                  descriptionTags: [
                    'Agile',
                    'Java',
                    'EC2',
                    'Cloudformation',
                    'ELK',
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
                    'Cassandra',
                    'JSF',
                     'Maven',
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
