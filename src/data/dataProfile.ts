interface Profile {
  fullname: string;
  dev: string;
  years: string;
  nationality: string;
  linksSocialNetworks: {
    github: string;
    linkedin: string;
    instagram: string;
    freecodecamp: string;
    email: string;
    cv: string;
  };
  skills: {
    frontEnd: string[];
    dataBase: string[];
  };
  profilePicture: string;
}

const dataProfile: Profile = {
  fullname: 'Leandro Daniel Schugurensky',
  dev: 'Front-end Developer',
  years: '23 años',
  nationality: 'argentina',
  linksSocialNetworks: {
    github: "https://github.com/Schugu",
    linkedin: "https://www.linkedin.com/in/leandrodanielschugurensky/",
    instagram: "https://www.instagram.com/leanschugu/",
    freecodecamp: "https://www.freecodecamp.org/certification/Schugu/responsive-web-design",
    email: "mailto:leo.schugu@gmail.com",
    cv: "/CV/CV_Leandro_Daniel_Schugurensky.pdf"
  },
  skills: {
    frontEnd: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind'],
    dataBase: ['MongoDb', 'Firebase']
  },
  profilePicture: 'FotoCVSinFondo.png'
};

export default dataProfile;