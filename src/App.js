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
          title: 'Freelance Senior DevOps & Cloud Engineer | AWS | Azure | Kubernetes | Terraform | Ansible | Platform & Infra Expert',
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
              printableContent: `Freelance Senior DevOps Engineer and founder of <a href="https://celebronitsolutions.com/#/">Celebron IT Solutions B.V.</a>,
                                 with over 10 years of experience in cloud infrastructure, CI/CD pipelines, and automation.
                                 Proven track record in AWS Azure cloud migrations, containerizing legacy applications, and
                                 designing scalable, secure environments. Specializing in cloud and on-premises solutions, observability,
                                 and infrastructure optimization. Skilled in collaborating with cross-functional teams to deliver high-performing, efficient systems.
                                 Enthusiastic, hands-on, and always eager to learn new technologies.`,
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
                        I established <a href="https://celebronitsolutions.com/#/">Celebron IT Solutions B.V.</a> to provide expert DevOps consulting as an independent consultant.
                        I help businesses create, optimize, and design cloud and on-premises environments, as well as observability solutions.
                        My focus is on delivering efficient, secure, and scalable infrastructure tailored to each organization’s needs.
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
              type: 'certificate',
              title: 'Certificates',
              icon: 'certificate',
              items: [
                {
                  title: 'AZ-104: Azure Administrator Associate',
                  authority: 'Microsoft Learn',
                  badge: './badges/microsoft-certified-administrator-associate-badge.svg',
                  authorityWebSite: 'https://learn.microsoft.com/api/credentials/share/en-us/ethemcemozkan/B6178AB2BF4ABB29?sharingId=E0534A99398541C',
                }
              ]
            },
            {
              type: 'skills',
              title: 'Skills',
              icon: 'rocket',
              breakAfter: true,
              items: [
                { category: 'Programming Languages', 
                  icon: 'code',
                  column: 'left',
                  skills: [
                   {skill: 'Python', level: 5},
                   {skill: 'Java', level: 4},
                   {skill: 'JavaScript', level: 4},
                   {skill: 'Powershell', level: 4},
                   {skill: 'Bash', level: 3},
                  ]
                },
                { category: 'Observability', 
                  icon: 'observability',
                  column: 'right',
                  skills: [
                   {skill: 'Datadog', level: 4},
                   {skill: 'Grafana', level: 4},
                   {skill: 'Elasticsearch Stack(ELK)', level: 3},
                   {skill: 'Dynatrace', level: 3},
                  ]
                },
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
                   {skill: 'Cloudwatch', level: 5},
                   {skill: 'API Gateway', level: 5},
                   {skill: 'IAM Identity Center(AWS SSO)', level: 5},
                   {skill: 'Aurora', level: 5},
                   {skill: 'AmazonMQ', level: 5},
                   {skill: 'Glue', level: 4},
                   {skill: 'EKS', level: 4},
                   {skill: 'Cost Optimisation', level: 3},
                  ]
                },
                
                { category: 'Languages',
                  icon: 'language',
                  column: 'left',
                  skills: [
                    {skill: 'English', level: 5},
                    {skill: 'Turkish', level: 5},
                    {skill: 'Dutch', level: 1},
                  ]
                },
                
                { category: 'Azure', 
                  icon: 'azure',
                  column: 'right',
                  skills: [
                   {skill: 'Function App', level: 4},
                   {skill: 'AKS', level: 4},
                   {skill: 'Virtual Network', level: 4},
                   {skill: 'Bicep', level: 3},
                   {skill: 'Entra ID', level: 3},
                   {skill: 'Azure DevOps', level: 3},
                   {skill: 'Storage Account', level: 3},
        				   {skill: 'Azure Monitor', level: 3},
                  ]
                },   
                
                { category: 'Infrastructure & Automation', 
                  icon: 'tooling',
                  column: 'right',
                  skills: [
                   {skill: 'Docker', level: 5},
                   {skill: 'Ansible', level: 5},
                   {skill: 'RabbitMQ', level: 5},
                   {skill: 'Cloudformation', level: 5},
                   {skill: 'Jenkins', level: 5},
                   {skill: 'Linux', level: 4},
                   {skill: 'Terraform', level: 4},
                   {skill: 'Kubernetes', level: 4},
                   {skill: 'Windows', level: 4},
                   {skill: 'Redis', level: 4},
                   {skill: 'PostgreSQL', level: 4},
                   {skill: 'MySQL', level: 4},
                   {skill: 'Oracle Database', level: 3},
                   {skill: 'CDK', level: 3},
                   {skill: 'Cassandra', level: 2},
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
                  title: 'DevOps & Automation Engineer',
                  company: 'Viterra',
                  description: '<ul>' +
                      '<li>Built <b>AWS</b> platform, using <b>Cloudformation</b> and <b>CodePipeline</b>.</li>' +
                      '<li>Implemented CI/CD pipelines using <b>Azure DevOps</b>.</li>' +
                      '<li>Maintained <b>on-premises Kubernetes</b> clusters using <b>Rancher</b> and <b>Ansible</b>.</li>' +
                      '<li>Implemented <b>Ansible Automation Platform</b> across the organisation.</li>' +
                    '</ul>',
                  companyWebSite: 'https://www.viterra.com',
                  datesBetween: '2024.04 - Present',
                  authorityMeta: 'Freelance',
                  descriptionTags: [
                    'AWS',
                    'Azure DevOps',
                    'Ansible',
                    'Ansible Automation Platform',
                    'Kubernetes',
                    'Rancher',
                    'ServiceNow'
                  ]
                },
                {
                  title: 'DevOps Consultant',
                  company: 'Shipolog',
                  description: '<ul>' +
                      '<li>Implemented AWS based DTAP environments using <b>Terraform Cloud</b>.</li>' +
                      '<li>Configured <b>Auth0</b> tenants.</li>' +
                      '<li>Managed <b>Kubernetes (EKS)</b> environments.</li>' +
                      '<li>Implemented CI/CD pipelines using <b>GitLab</b>.</li>' +
                      '</ul>',
                  companyWebSite: 'https://www.shipolog.com',
                  datesBetween: '2024.03 - Present',
                  authorityMeta: 'Freelance',
                  descriptionTags: [
                    'AWS',
                    'Kubernetes',
                    'Gitlab',
                    'Auth0',
                    'Terraform Cloud'
                  ]
                },
                {
                  title: 'Senior Cloud Engineer',
                  company: 'Coolblue',
                  description: '<ul>' +
                    '<li>Designed and implemented a multi subscription Azure environment using <b>Terraform</b>, <b>Bicep</b>, <b>Virtual Machines</b>, <b>Virtual Networks</b>, <b>Network Manager</b>, <b>AKS</b>, <b>Firewall</b>, <b>Application Gateways</b>.</li>' +
                    '<li>Designed an AWS networking with <b>shared VPCs</b> and Transit Gateways to streamline networking between Coolblue and Coolblue Energie.</li>' +
                    '<li>Implemented a <b>custom AWS landing zone</b> using Python CDK.</li>' +
                    '<li>Integrated <b>AWX(Ansible Tower)</b> with <b>EKS</b> and <b>AKS</b> to support <b>multi cloud</b> infrastructure. </li>'+
                    '<li>Managed <b>Kubernetes (EKS, AKS)</b> environments with a focus on CI/CD integrations, observability tooling, and workload orchestration. </li>' +
                    '<li>Improved security posture by implementing <b>GuardDuty</b> and <b>Crowdstrike</b>.</li>' +
                    '<li>Migrated <b>AWS Identity Center systems</b> to a new <b>Azure Entra ID tenant</b>, improving authentication workflows and identity management.</li>' +
                    '<li>Implemented <b>Datadog</b> for centralized monitoring and performance tracking.</li>' +
                    '</ul>',
                  companyWebSite: 'https://www.coolblue.nl',
                  datesBetween: '2022.12 - 2024.04',
                  descriptionTags: [
                    'Techical Lead',
                    'Agile',
                    'AWS',
                    'Azure',
                    'Landing Zone',
                    'Transit Gateway',
                    'CDK',
                    'Crowdstrike',
                    'Datadog',
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
                    '<li><b>Migrated workload services, PostgreSQL databases, and RabbitMQ brokers</b> from <b>on-premises</b> to <b>AWS</b>, improving scalability and cost-efficiency. After migrations <b>Enhanced security</b> by implementing <b>WAF</b> and <b>CloudTrail</b>.</li>' +
                    '<li>Built and maintained <b>central CI/CD pipelines</b> with configurable options using <b>Jenkins</b> and <b>Groovy</b>, and automated deployment with <b>Helm</b> and <b>Operators</b> on <b>EKS</b>.</li>' +
                    '<li>Integrated <b>AWX(Ansible Tower)</b> with <b>Kubernetes(EKS)</b> to streamline automation workflows and enhance deployment efficiency</li>'+
                    '<li><b>Co-chaired platform future features meetings</b>, gathering feedback, managing developer expectations, and providing regular platform updates.</li>'+
                    '<li>Implemented <b>SSO systems</b> using AWS IAM Identity Center and Azure Entra ID.</li>' +
                    '<li>Implemented <b>SuiteCRM</b> environment using AWS EC2, Aurora Mysql.</li>' +
                    '<li>Built many platform lambda solutions, using <b>DynamoDB</b>, <b>Python</b>. Examples are RabbitMQ Cloudformation custom resource, resource lifecycle management system.</li>' +
                    '<li>Led <b>AWS cloud modernization efforts</b>, optimizing cloud infrastructure for performance and cost-effectiveness.</li>' +
                    '<li>Led <b>platform Python Lambda unit, integration test</b> and <b>Ansible Molecule test</b> efforts, improving test coverage.</li>' +
                    '</ul>',
                  companyWebSite: 'https://servicehouse.nl/',
                  datesBetween: '2019.09 - 2022.12',
                  descriptionTags: [
                    'Techical Lead',
                    'Agile',
                    'AWS',
                    'ECS',
                    'EKS',
                    'SNS',
                    'IAM',
                    'Molecule',
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
                    '<li><b>Developed and maintained robust Gitlab based CI/CD pipelines</b> to automate and streamline the development and deployment processes across various projects.</li>' +
                    '<li>Established and managed <b>on-premises</b> containerized DTAP environments (Development, Testing, Acceptance, and Production)</b>, ensuring consistency and stability throughout the software development lifecycle.</li>' +
                    '<li><b>Implemented Windows containers</b> that communicated with proprietary hardware, ensuring seamless integration and enhancing system functionality.</li>' +
                    '<li>Implemented <b>highly available PostgreSQL</b> environment.</li>' +
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
                    '<li><b>Managed on-premises infrastructure</b> for high-volume, self-developed software used by notaries across Turkey, ensuring system stability and performance.</li>' +
                    '<li><b>Assisted in containerizing software solutions</b>, streamlining deployment processes and improving scalability.</li>' +
                    '<li><b>Optimized system efficiency</b> by leveraging containerization expertise, enabling smoother operations and faster deployments.</li>' +
                    '<li>Implemented <b>Docker Swarm</b> observability solution using <b>Prometheus</b> and <b>Grafana</b>.</li>' +
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
                    '<li>Set up an observability environment using <b>Elasticsearch</b>, <b>Logstash</b>, <b>Kibana (ELK)</b>, and <b>Dynatrace</b>, enabling comprehensive monitoring and logging across systems.</li>' +
                    '<li>Participated in <b>CMMI Level 3 & 5</b> reviews and ensured configuration compliance throughout the software lifecycle.</li>\n' +
                    '<li>Managed <b>Oracle</b> installations.</b></li>' +
                    '<li><b>Developed and managed on-premises infrastructure to Turkey-wide high-volume projects</b>, including the Java based track and trace system for all medical devices.</li>' +
                    '</ul>',
                  companyWebSite: 'https://tubitak.gov.tr/en',
                  companyMeta: 'The Scientific and Technological Research Council Of Turkey',
                  datesBetween: '2012.05 - 2018.06',
                  descriptionTags: [
                    'Agile',
                    'Java',
                    'EC2',
                    'Cloudformation',
                    'ELK',
                    'Dynatrace',
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
