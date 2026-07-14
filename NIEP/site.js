const currentYear = document.getElementById("year");
if (currentYear) currentYear.textContent = new Date().getFullYear();

const imageTag = (person) => `<img src="${person.image}" alt="${person.name}" loading="lazy">`;

const linkedinLink = (person) => {
  if (!person.linkedin) return "";
  return `<a class="profile-link" href="${person.linkedin}" target="_blank" rel="nofollow noopener noreferrer">LinkedIn profile</a>`;
};

const mentorCard = (person, index = 0) => `
  <article class="mentor-card">
    <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
    <div class="mentor-photo">${imageTag(person)}</div>
    <div class="mentor-body">
      <h3>${person.name}</h3>
      <p>${person.designation}</p>
      ${linkedinLink(person)}
    </div>
  </article>
`;

const chiefCard = (person) => `
  <article class="chief-card">
    <div class="chief-identity">
      ${imageTag(person)}
      <div class="chief-nameplate">
        <h3>${person.name}</h3>
        <p class="role">${person.designation}</p>
      </div>
    </div>
    <div class="chief-body">
      <span class="badge">Chief expert</span>
      <p class="bio">${person.bio}</p>
      ${person.highlights ? `<ul class="chief-highlights">${person.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
    </div>
  </article>
`;

const chiefMentors = mentors.filter((person) => person.category === "chief");
const otherMentors = mentors.filter((person) => person.category !== "chief");

const chiefGrid = document.getElementById("chiefMentorGrid");
if (chiefGrid) chiefGrid.innerHTML = chiefMentors.map(chiefCard).join("");

const previewGrid = document.getElementById("mentorPreviewGrid");
if (previewGrid) previewGrid.innerHTML = otherMentors.slice(0, 8).map(mentorCard).join("");

const allGrid = document.getElementById("allMentorGrid");
if (allGrid) allGrid.innerHTML = otherMentors.map(mentorCard).join("");
