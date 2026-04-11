import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';

// CV Data
export const cvData = {
  name: "Dr. Rachael Ununuma Chidugu-Ogborigbo",
  title: "Senior Lecturer in Biological Sciences",
  institution: "UWE Bristol",
  contact: {
    email: "Rachael.Chidugu-Ogborigbo@uwe.ac.uk",
    phone: "+44 117 328 1078",
    address: "HAS - Applied Sciences, UWE Bristol, Frenchay Campus, Bristol, BS16 1QY, UK"
  },
  education: [
    {
      degree: "PhD in Environmental Toxicology",
      institution: "University of Birmingham, UK",
      year: "Completed"
    },
    {
      degree: "MSc in Parasitology",
      institution: "University of Port Harcourt, Nigeria",
      year: "Completed"
    },
    {
      degree: "BSc in Biological Science",
      institution: "Ahmadu Bello University, Zaria, Nigeria",
      year: "Completed"
    }
  ],
  experience: [
    {
      title: "Senior Lecturer in Biological Sciences",
      institution: "UWE Bristol",
      period: "December 2019 - Present",
      details: "Specialist in ecogenotoxicology, marine natural products, and environmental justice. Leading research on marine biomonitoring using sea sponges as sentinel organisms."
    },
    {
      title: "Postdoctoral Researcher",
      institution: "University of Birmingham",
      period: "Post PhD",
      details: "One-year post-doctoral role conducting environmental toxicology research"
    },
    {
      title: "Lecturer",
      institution: "University of Port Harcourt, Nigeria",
      period: "3 years",
      details: "Department of Animal and Environmental Biology"
    }
  ],
  research: [
    "Ecogenotoxicology",
    "Marine natural products for therapeutics/drug discovery",
    "Aquatic pollution biomonitoring using sea sponges",
    "Environmental justice and community engagement",
    "Cellular and molecular toxicology"
  ],
  grants: [
    {
      title: "Commonwealth Scholarship Commission UK Studentship",
      amount: "£100,000",
      period: "2014-2017",
      role: "Recipient"
    },
    {
      title: "UKEMS Small Grant for Early Career Research",
      amount: "£10,000",
      period: "2018-2021",
      role: "Principal Investigator"
    },
    {
      title: "UWE Bristol Partnership PhD Funding",
      amount: "£41,923",
      period: "2021-2024",
      role: "Principal Investigator/Director of Studies"
    }
  ],
  publications: {
    peerReviewed: 15,
    inPress: 2,
    preprints: 1,
    books: 1,
    conferences: 6
  },
  awards: [
    {
      title: "Appreciation Plaque for Guest Speaker",
      organization: "CBAS Conference",
      year: "2025"
    },
    {
      title: "Best Poster Award",
      organization: "European Environmental Mutagenesis and Genomics Society (EEMGS)",
      year: "2016"
    },
    {
      title: "Travel Grant and Bursary",
      organization: "British Toxicology Society",
      year: "2017"
    }
  ],
  teaching: {
    undergraduate: "7+ modules across Biology, Biomedical Science, Science Communication",
    postgraduate: "4 MSc programs with 45+ students",
    pastoral: "Personal tutor, PhD supervision, academic adviser"
  },
  skills: [
    "Environmental monitoring and bioassay development",
    "Molecular and cellular biology techniques",
    "Marine organism cultivation and cryopreservation",
    "Data analysis and scientific communication",
    "Pedagogical expertise with 100% student satisfaction",
    "Leadership and research team management"
  ]
};

// Styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#006BA6',
    paddingBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#006BA6',
  },
  title: {
    fontSize: 12,
    marginBottom: 8,
    color: '#333',
  },
  contact: {
    fontSize: 9,
    color: '#666',
    marginBottom: 2,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#006BA6',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 4,
  },
  entryContainer: {
    marginBottom: 8,
  },
  entryTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333',
  },
  entrySubtitle: {
    fontSize: 10,
    color: '#666',
    fontStyle: 'italic',
  },
  entryDetail: {
    fontSize: 10,
    color: '#444',
    marginTop: 2,
  },
  bulletPoints: {
    marginLeft: 10,
    marginTop: 4,
  },
  bulletPoint: {
    fontSize: 10,
    color: '#444',
    marginBottom: 4,
  },
});

// CV Document Component
export const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{cvData.name}</Text>
        <Text style={styles.title}>{cvData.title} | {cvData.institution}</Text>
        <Text style={styles.contact}>Email: {cvData.contact.email}</Text>
        <Text style={styles.contact}>Phone: {cvData.contact.phone}</Text>
        <Text style={styles.contact}>{cvData.contact.address}</Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        {cvData.education.map((edu, i) => (
          <View key={i} style={styles.entryContainer}>
            <Text style={styles.entryTitle}>{edu.degree}</Text>
            <Text style={styles.entrySubtitle}>{edu.institution}</Text>
          </View>
        ))}
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>
        {cvData.experience.map((exp, i) => (
          <View key={i} style={styles.entryContainer}>
            <Text style={styles.entryTitle}>{exp.title}</Text>
            <Text style={styles.entrySubtitle}>{exp.institution} | {exp.period}</Text>
            <Text style={styles.entryDetail}>{exp.details}</Text>
          </View>
        ))}
      </View>

      {/* Research Focus */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>RESEARCH FOCUS</Text>
        <View style={styles.bulletPoints}>
          {cvData.research.map((res, i) => (
            <Text key={i} style={styles.bulletPoint}>• {res}</Text>
          ))}
        </View>
      </View>

      {/* Research Funding */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>RESEARCH FUNDING & GRANTS</Text>
        {cvData.grants.map((grant, i) => (
          <View key={i} style={styles.entryContainer}>
            <Text style={styles.entryTitle}>{grant.title}</Text>
            <Text style={styles.entryDetail}>{grant.amount} | {grant.period} | {grant.role}</Text>
          </View>
        ))}
        <Text style={styles.entryDetail}>Total Funding: £151,923</Text>
      </View>
    </Page>

    {/* Page 2 */}
    <Page size="A4" style={styles.page}>
      {/* Publications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PUBLICATIONS</Text>
        <View style={styles.bulletPoints}>
          <Text style={styles.bulletPoint}>• Peer-reviewed articles: {cvData.publications.peerReviewed}</Text>
          <Text style={styles.bulletPoint}>• In Press: {cvData.publications.inPress}</Text>
          <Text style={styles.bulletPoint}>• Preprints: {cvData.publications.preprints}</Text>
          <Text style={styles.bulletPoint}>• Book Contributions: {cvData.publications.books}</Text>
          <Text style={styles.bulletPoint}>• Conference Presentations: {cvData.publications.conferences}</Text>
        </View>
      </View>

      {/* Awards */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>AWARDS & HONORS</Text>
        {cvData.awards.map((award, i) => (
          <View key={i} style={styles.entryContainer}>
            <Text style={styles.entryTitle}>{award.title} ({award.year})</Text>
            <Text style={styles.entrySubtitle}>{award.organization}</Text>
          </View>
        ))}
      </View>

      {/* Teaching */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TEACHING & SUPERVISION</Text>
        <View style={styles.entryContainer}>
          <Text style={styles.entryTitle}>Undergraduate Teaching</Text>
          <Text style={styles.entryDetail}>{cvData.teaching.undergraduate}</Text>
        </View>
        <View style={styles.entryContainer}>
          <Text style={styles.entryTitle}>Postgraduate Teaching</Text>
          <Text style={styles.entryDetail}>{cvData.teaching.postgraduate}</Text>
        </View>
        <View style={styles.entryContainer}>
          <Text style={styles.entryTitle}>Pastoral Roles</Text>
          <Text style={styles.entryDetail}>{cvData.teaching.pastoral}</Text>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>KEY SKILLS & EXPERTISE</Text>
        <View style={styles.bulletPoints}>
          {cvData.skills.map((skill, i) => (
            <Text key={i} style={styles.bulletPoint}>• {skill}</Text>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default CVDocument;
