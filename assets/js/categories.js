/*
Structure: 

Collection { 
  category: { // name convention: CapitalizedCollectionTypeName => "capitalized collection type name"
    projectID: {
      title: "",
      image: "relative path",
      client: "",
      clientURL: "direct url",
      date: "month year",
      desctiption: "",
      link: "relative path",
      linkName: "",
      type: constructor name,
      featured: [], // same id by default
    } 
  } 
}

Type extends Project (id, title, client, description, date, clientURL, linkName) 
Type.addFeatured(...references)

Collection.addProjects(...projects)

Projects can be filtered by category:
logo
brochure
business card
presentation
apperal: {
  TMCCGrad: {},
}
art: {
    book: {},
    painting: {},
    pencil: {},
    ai: {},
  },
uiux
website
 */

class Collection {
  constructor(category) {
    Collection.categories[category] = this;
  }
  static categories = {};

  addProjects(...projects) {
    let category = projects[0].constructor.name
      .replace(/([A-Z])/g, " $1")
      .trim()
      .toLowerCase();
    projects.forEach((project) => {
      this[project.id] = project;
    });

    console.log(category, "includes", Collection.categories[category], "\n");
  }
}

class Project {
  constructor(
    id,
    title,
    client,
    description,
    date,
    clientURL,
    linkName,
    link = clientURL
  ) {
    this.id = id;
    this.title = title;
    this.client = client;
    this.clientURL = clientURL;
    this.date = date;
    this.description = description;
    this.featured = [];
    this.linkName = linkName;
    this.type = this.constructor.name;
    this.image = `./assets/img/${this.type}_Mockup_${id}.jpg`;
    switch (linkName) {
      case "Case Study":
      case "Brand Review":
      case "Details":
        this.link = `./assets/cases/${id}.html#${this.type.toLowerCase()}`;
        break;
      case "Website":
        this.link = link;
    }
  }
  setFeatured(...references) {
    for (let category in Collection.categories) {
      let project = Collection.categories[category][this.id];
      if (project !== undefined && project !== this) {
        this.featured.push(project);
      }
    }
    if (references.length > 0) this.addFeatured(references);
  }

  addFeatured(...references) {
    this.featured = [...this.featured, references];
  }
}

/* Logo */
class Logo extends Project {}

let logo = new Collection("logo");
logo.addProjects(
  new Logo(
    "LAEC",
    "Logo for a Non-profit",
    "Legal Advocacy and Education Comission",
    "Redesign of a logo for a non-profit targeting education, advocacy, and justice reforms.",
    "Septrmber 2022",
    "thelaec.org",
    "Brand Review"
  ),
  new Logo(
    "AllThingsClean",
    "Logo Redesign for a Vacuum Store",
    "All Things Clean",
    "Redesign of a local vacuum and appliance store logo",
    "May 2020",
    "allthingsclean.com",
    "Brand Review"
  ),
  new Logo(
    "DarkMode",
    "Development Agency Logo",
    "DarkMode Devs",
    "Dark take on the web development agency's brand image, designed for a techy, modern, and slick feel.",
    "March 2022",
    "darkmodedevs.com",
    "Brand Review"
  ),
  new Logo(
    "ShakingCups",
    "Shaking Cups App Logo",
    "DarkMode Devs",
    "With a passion for delicious beverages, we crave them at the worst time of the day when the bar closes or gets too expensive for our party. With Shaking Cups, the problem is solved! Shake up these drink recepies at home with a step by step guides and suggestions for necessary tools!",
    "March 2022",
    "darkmodedevs.com",
    "Case Study"
  ),
  new Logo(
    "LotusList",
    "Lotus List App Logo",
    "DarkMode Devs",
    "Make peace with your productivity and build work-life balance with a web app that puts all worries into a journal, the to-do list, and focuses you on meditation and stress-free work environment.",
    "December 2023",
    "darkmodedevs.com",
    "Case Study"
  )
);

class Brochure extends Project {}
let brochure = new Collection("brochure");

brochure.addProjects(
  new Brochure(
    "LAEC",
    "Marketing assets for the Community Outreach",
    "Legal Advocacy and Education Comission",
    "Trifold brochures for active engagement diring community outreach.",
    "October 2023",
    "thelaec.org",
    "Brand Review"
  ),
  new Brochure(
    "MissionCollege",
    "Billboard Poster",
    "Mission College",
    "Large-scaled posters designed to make an impact and raise awareness about the college campus.",
    "April 2021",
    "missioncollege.edu",
    "Case Study"
  ),
  new Brochure(
    "Mozart",
    "Event Poster",
    "Mission College",
    "Broadcast the event with compelling musicians and orchestra with a contrasting poster of custom size.",
    "April 2021",
    "missioncollege.edu",
    "Case Study"
  )
);

class BusinessCard extends Project {}
let cards = new Collection("business card");
cards.addProjects(
  new BusinessCard(
    "LAEC",
    "Business Card Redesign",
    "Legal Advocacy and Education Comission",
    "Professionally branded business cards meant to leave a reliable impression.",
    "October 2023",
    "thelaec.org",
    "Case Study"
  ),
  new BusinessCard(
    "AllThingsClean",
    "Business Card Redesign",
    "All Things Clean",
    "Useful Vacuum and Appliance store business cards designed to help the clients keep the genuine service with them at all times to make all things - clean.",
    "May 2020",
    "allthingsclean.com",
    "Case Study"
  ),
  new BusinessCard(
    "DJZvergul",
    "Business Cards for a Music Producer",
    "DJ Zvergul",
    "With his adoration for his puppy, DJ Zvergul is an all-rounded music producer with pieces of different genres.",
    "March 2024",
    "https://music.apple.com/us/artist/dj-zwergul/1548389781",
    "Case Study"
  ),
  new BusinessCard(
    "WFG",
    "Business Cards for a Financial Professional",
    "World Financial Group - Anthony Juni",
    "With a feel for excellence and style, Anthony is a Financial educator, leader, and an ambitious star at World Financial Group.",
    "April 2019",
    "https://music.apple.com/us/artist/dj-zwergul/1548389781",
    "Case Study"
  ),
  new BusinessCard(
    "GaryPaulMartinez",
    "Business Cards for a Guitarist",
    "Gary Paul Martinez",
    "Offering a $10,000 reward for anyone who can play his guitar instrumentals note-by-note, Gary is confident that his skill is one of a kind.",
    "April 2019",
    "garypaulmartinez.com",
    "Website"
  )
);

class Presentation extends Project {}
let presentations = new Collection("presentation");
presentations.addProjects(
  new Presentation(
    "LAEC",
    "Criminal Justice Reform Presentation",
    "Legal Advocacy and Education Comission",
    "Professional presentation for criminal justice reform and nonprofit overview.",
    "April 2023",
    "thelaec.org",
    "Case Study"
  ),
  new Presentation(
    "WFG",
    "Presentations for Financial Workshops",
    "World Financial Group - Hamid Alizadeh",
    "Designed to educate the average American families on financial aspects of cash flow, debt, assets, saving, insurance, and other financial products.",
    "April 2021",
    "https://www.linkedin.com/in/dr-hamid-alizadeh-2038321b0/",
    "Details"
  ),
  new Presentation(
    "stArt",
    "Presentation for Street Art Agency",
    "stArt",
    "Minimalistic overview to showcase services and activities to potential shareholders and clients.",
    "February 2018",
    "https://www.st-artnow.com/",
    "Details"
  )
);

class Apparel extends Project {}
let apparels = new Collection("apparel");
apparels.addProjects(
  new Apparel(
    "LAEC",
    "Organization's T-Shirt Design",
    "Legal Advocacy and Education Comission",
    "With brand options for color, style and fabric, these t-shirt designs are perfect for any volunteering activity.",
    "April 2023",
    "thelaec.org",
    "Brand Review"
  ),
  new Apparel(
    "RoyalRangers",
    "Personal Embroidery Design",
    "Royal Rangers",
    "With roots in Greek Mythology, Royal Rangers combines prestige luxury with traditional roots and makes the embroidary easy to wear for both, casual and formal occasions. ",
    "April 2021",
    "https://www.zazzle.com/royal_rangers_embroidery_t_shirt-256719244890865022",
    "Case Study"
  ),
  new Apparel(
    "MissionCollege",
    "Graduation T-Shirt Design",
    "Mission College",
    "One of the most significant milestones in our careers - graduation. It must be celebrated with a slick style and a bold regognition!",
    "April 2021",
    "missioncollege.edu",
    "Website"
  )
);

class SocialMedia extends Project {}
let socials = new Collection("social media");
socials.addProjects(
  new SocialMedia(
    "LAEC",
    "Social Media Posts",
    "Legal Advocacy and Education Comission",
    "Consistent social media posts with engaging messages and catchy motion graphics developed in collaboration with social media, administrative, and design teams.",
    "2022-2023",
    "thelaec.org",
    "Brand Review"
  ),
  new SocialMedia(
    "AzurAgency",
    "Social Media Posts",
    "Azur Agency",
    "Inviting content for creatives and entrepreneurs to get together in a mission to innovate and create a better future.",
    "January 2024",
    "azur-agency.org",
    "Details"
  ),
  new SocialMedia(
    "AzurAgency",
    "Social Media Posts",
    "Azur Agency",
    "Inviting content for creatives and entrepreneurs to get together in a mission to innovate and create a better future.",
    "January 2024",
    "azur-agency.org",
    "Details"
  ),
  new SocialMedia(
    "RnMCompany",
    "Social Media Posts",
    "R&M Company",
    "Raising awareness and SEO references to drive interest from Facebook to the website and increasing call volume.",
    "January 2024",
    "rnmcompany.com",
    "Details"
  ),
  new SocialMedia(
    "DarkMode",
    "Social Media Posts",
    "DarkMode Devs",
    "Featuring events, programs, offers and deals to raise following and views of a development agency.",
    "January 2024",
    "darkmodedevs.com",
    "Details"
  )
);

class UiUx extends Project {}
let uiuxs = new Collection("ui ux");
uiuxs.addProjects(
  new UiUx(
    "DarkMode",
    "Social Media Posts",
    "DarkMode Devs",
    "Featuring events, programs, offers and deals to raise following and views of a development agency.",
    "January 2024",
    "darkmodedevs.com",
    "Details"
  ),
  new UiUx(
    "ShakingCups",
    "Shaking Cups Web App Wireframe",
    "DarkMode Devs",
    "High Fidelity Wireframe for a web app that shares recipes for home made affordable drinks and offers necessary crafting tools via e-commerce functionality.",
    "September 2023",
    "darkmodedevs.com",
    "Figma",
    "https://www.figma.com/file/kJYstXxmjxIOTfFspRk9Ee/Shaking-Cups-Wireframe?type=design&node-id=0%3A1&mode=design&t=MVhQsDyJ4f8GMMKJ-1"
  ),
  new UiUx(
    "FairGame",
    "Fair Game Web App Wireframe",
    "DarkMode Devs",
    "Low Fidelity Wireframe for a web app that helps create scholar garments with an embedded 3D software when user has an account and provides other fashion services for schools and organizations.",
    "March 2024",
    "darkmodedevs.com",
    "Figma",
    "https://www.figma.com/file/IGNietOQWw0kZKGW8p49mp/Fair-Game?type=design&mode=design&t=fSzk1N13sNdJgjsQ-1"
  ),
  new UiUx(
    "AzurAgency",
    "Azur App User Experience",
    "Azur Agency",
    "User Flow, Feedback and Customer Profile in combination with Brand Identity concepts layed out on an infinite whiteboard with Azur team collaborators. Features approved for development emerge into Low-Fi wireframes and get implemented on the client's website.",
    "March 2024",
    "azur-agency.org",
    "Miro Board",
    "https://miro.com/app/board/uXjVN7t5Z2g=/?share_link_id=163486131541"
  )
);

class Website extends Project {}
let websites = new Collection("website");
websites.addProjects(
  new Website(
    "LAEC",
    "WordPress Website for a Non-Profit",
    "Legal Advocacy and Education Comission",
    "Hosted on SiteGround and built with the Elementor Theme in collaboration with a front-end developer, this website, the graphic assets and the layout components have been carefully considered and implemented.",
    "September 2023",
    "thelaec.org",
    "Website"
  ),
  new Website(
    "ShakingCups",
    "Shaking Cups Web App",
    "DarkMode Devs",
    "Built with Vanilla JavaScript, integrated with Airtable API for the database, this app uses affiliate Amazon store to provide revenue that supplies the cost of Vercel hosting requests.",
    "September 2023",
    "darkmodedevs.com",
    "Website",
    "shakingcups.com"
  ),
  new Website(
    "RnMCompany",
    "Google Site",
    "R&M Company",
    "Built with simple and manageable Google Site content management system, this website is excellent for a small-size business looking to limit hosting expences while having professional online presence.",
    "January 2024",
    "rnmcompany.com",
    "Website"
  ),
  new Website(
    "Bucks4Biz",
    "Google Site",
    "Fernando Gonzalez",
    "As an open door to SEO, financial consultant Fernando needed a page that gets indexed on the web to promote his services. As a result of hosting his website on Google Sites, he reached a thousand unique visits 60 days after deployment.",
    "February 2024",
    "bucks4biz.com",
    "Website"
  ),
  new Website(
    "DarkMode",
    "Google Site",
    "DarkMode Devs",
    "Funnel page for the direct Mentorship program, this webpage is easily managed by Google Sites and customizable in a matter of minutes for quick edits and changes for the fast evolving startup.",
    "February 2024",
    "darkmodedevs.com",
    "Website",
    "https://sites.google.com/view/darkmode-mentorship/home"
  ),
  new Website(
    "AzurAgency",
    "Nonprofit Website",
    "Azur Agency",
    "Built in collaboration with Azur Agency volunteers and DarkMode Devs experts, this website uses Google Sheets as a back-end to store and display volunteer data on the about page. Take a look!",
    "January 2024",
    "azur-agency.org",
    "Website",
    "azur-agency.org/about"
  )
);

/* Featured */
Object.keys(Collection.categories).forEach((category) => {
  console.log(category);
  Object.keys(Collection.categories[category]).forEach((id) => {
    Collection.categories[category][id].setFeatured();
  });
});
