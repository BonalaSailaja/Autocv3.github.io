const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// import all the fields from the form.
// eg.
 const name = document.getElementById("name");
 const email = document.getElementById("email");
 const phone = document.getElementById("phone");
 const github = document.getElementById("github");
 const Linkedin = document.getElementById("Linkedin");
 //Education
 
 const College = document.getElementById("College");
 const Degree = document.getElementById("Degree");
 const StartingYear = document.getElementById("StartingYear");
 const PassingYear = document.getElementById("PassingYear");
 const CGPA = document.getElementById("CGPA");
 //Skills
 const Skills = document.getElementById("Skills");
 //Project
 const Project = document.getElementById("Project");
 const Description = document.getElementById("Description");
 const Link = document.getElementById("Link");
 //Experience
 const Company = document.getElementById("Company");
 const Designation = document.getElementById("Designation");
 const Duration = document.getElementById("Duration");
 const Description1 = document.getElementById("Description1");

function handleSubmit(e) {
  e.preventDefault();
  //   here get the values from the form and set it to the resume
  // eg.
    const name_resume = document.getElementById("name_resume");
    name_resume.innerHTML = name.value;
    document.getElementById("name_resume").style.fontSize='30px';
    document.getElementById("name_resume").style.color='gray';
    const email_resume = document.getElementById("email_resume");
    email_resume.innerHTML = email.value;
    document.getElementById("email_resume").style.color='blue';
    const phone_resume = document.getElementById("phone_resume");
    phone_resume.innerHTML = phone.value;
    document.getElementById("phone_resume").style.color='blue';
    const github_resume = document.getElementById("github_resume");
    github_resume.innerHTML = github.value;
    document.getElementById("github_resume").style.color='blue';
    const Linkedin_resume = document.getElementById("Linkedin_resume");
    Linkedin_resume.innerHTML = Linkedin.value;
    document.getElementById("Linkedin_resume").style.color='blue';
    //Education
   
    const  College_resume = document.getElementById("College_resume");
    College_resume.innerHTML =  College.value;
    document.getElementById("College_resume").style.fontSize='25px';
    document.getElementById("College_resume").style.fontWeight='600';
    const Degree_resume = document.getElementById("Degree_resume");
    Degree_resume.innerHTML = Degree.value;
    document.getElementById("Degree_resume").style.fontSize='20px';
    document.getElementById("Degree_resume").style.fontWeight='600';
    const StartingYear_resume = document.getElementById("StartingYear_resume");
    StartingYear_resume.innerHTML = StartingYear.value;
    const PassingYear_resume = document.getElementById("PassingYear_resume");
    PassingYear_resume.innerHTML = PassingYear.value;
    const CGPA_resume = document.getElementById("CGPA_resume");
    CGPA_resume.innerHTML = CGPA.value;
    //Skills
    const Skills_resume = document.getElementById("Skills_resume");
    Skills_resume.innerHTML = Skills.value;
    document.getElementById("Skills_resume").style.fontSize='25px';
    document.getElementById("Skills_resume").style.fontWeight='600';
    //Projects
    const Project_resume = document.getElementById("Project_resume");
    Project_resume.innerHTML = Project.value;
    document.getElementById("Project_resume").style.fontSize='25px';
    document.getElementById("Project_resume").style.fontWeight='600';
    const Description_resume = document.getElementById("Description_resume");
    Description_resume.innerHTML = Description.value;
    const Link_resume = document.getElementById("Link_resume");
    Link_resume.innerHTML =Link.value;
    //Experince
    
    const  Designation_resume = document.getElementById("Designation_resume");
    Designation_resume.innerHTML = Designation.value;
    document.getElementById("Designation_resume").style.fontSize='25px';
    document.getElementById("Designation_resume").style.fontWeight='600';
    const Company_resume = document.getElementById("Company_resume");
    Company_resume.innerHTML = Company.value;
    document.getElementById("Company_resume").style.fontSize='20px';
    document.getElementById("Company_resume").style.fontWeight='600';
    const Duration_resume = document.getElementById("Duration_resume");
    Duration_resume.innerHTML = Duration.value;
    const Description1_resume = document.getElementById("Description1_resume");
    Description1_resume.innerHTML =Description1.value;

    
  //   similarly for all the other fields
}

function handleLeft() {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const print = document.querySelector(".print");
  left.style.display = "none";
  right.style.width = "100%";
  print.style.display = "block";
};
function handlePrint() {
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const print = document.querySelector(".print");
// write more codes here

window.print();
right.classList.add("reduced");
left.classList.remove("hidden");
print.classList.add("hidden");
}