const overlay = document.querySelector('.mobile-overlay');
function mytoggleMenu() {
  overlay.classList.toggle('hide');
}
mytoggleMenu();
const projects = [
  {
    id: 1,
    title: 'Tonic',
    info: {
      client: 'canopy',
      role: 'Back End Dev',
      year: 2015,
    },
    screenshot: 'images/works/image_1.png',
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    skills: ['html', 'css', 'javascript'],
    liveLink: 'https://www.canopy.cr/tonic',
    sourceLink: 'https://www.canopy.cr/tonic',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    info: {
      client: 'Facebook',
      role: 'Full Stack Dev',
      year: 2015,
    },
    screenshot: 'images/works/image_2.png',
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    skills: ['html', 'css', 'Ruby on rails', 'javascript'],
    liveLink: 'https://www.facebook.com/',
    sourceLink: 'https://www.facebook.com/',
  },
  {
    id: 3,
    title: 'Facebook 360',
    info: {
      client: 'Facebook',
      role: 'Full Stack Dev',
      year: 2015,
    },
    screenshot: 'images/works/image_3.png',
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    skills: ['html', 'css', 'Ruby on rails', 'javascript'],
    liveLink: 'https://www.facebook.com/',
    sourceLink: 'https://www.facebook.com/',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    info: {
      client: 'Uber',
      role: 'Lead Developer',
      year: 2018,
    },
    screenshot: 'images/works/image_4.png',
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    skills: ['html', 'css', 'javascript', 'Ruby on rails'],
    liveLink: 'https://www.uber.com/',
    sourceLink: 'https://www.uber.com/',
  },
];
const myContent = document.querySelector('.card-container');
const showInHtml = projects
  .map(
    (project, index) => `<div class="card-layout">
      <div class="image-container">
         <img
          class="image-fluid"
          src=${project.screenshot}
          alt="background_image"
        />
      </div>
      <div class="p-title">
        <h3 class="title">${project.title}</h3>
        <ul class="flex-items">
          <li class="list-item canopy">${project.info.client}</li>
          <li class="list-item role">${project.info.role}</li>
          <li class="list-item year">${project.info.year}</li>
        </ul>
        <p class="text_paragraph">
          ${project.shortDescription}
        </p>
        <ul class="btn-container-flex">
          <li class="btn">
            <button class="btn-sm" type="button">${project.skills[0]}</button>
          </li>
          <li class="btn">
            <button class="btn-md" type="button">${project.skills[1]}</button>
          </li>
          <li class="btn">
            <button class="btn-lg" type="button">${project.skills[2]}</button>
          </li>
        </ul>
        <div class="btn-container">
          <button type="button" id="${index}" class="see-btn">See Project</button>
        </div>
      </div>
     </div>`,
  )
  .join('');
myContent.innerHTML = showInHtml;
/* View Pop Up */
const popUpDetails = projects.map(
  (project) => `<section class="popup">
    <div class="popup-header">
      <h2 class="popup-project-title" id="popup-project-title">${project.title}</h2>
      <span id="cl" class="close">&times;</span>
    </div>
    <div class="popup-project-info" id="project-info"></div>
    <div id="project-image-holder">
      <img
        src=${project.screenshot}
        alt="Tonic project screenshot"
        class="popup-project-image"
        id="popup-project-image"
      />
    </div>
    <div class="popup-project-details">
      <div class="column-left">
        <p class="popup-project-description" id="project-description">${project.description}</p>
      </div>
      <div class="column-right">
        <div class="popup-project-stack" id="popup-project-stack">
        <ul class="btn-container-flex">
          <li class="btn">
            <button class="btn-sm" type="button">${project.skills[0]}</button>
          </li>
          <li class="btn">
            <button class="btn-md" type="button">${project.skills[1]}</button>
          </li>
          <li class="btn">
            <button class="btn-lg" type="button">${project.skills[2]}</button>
          </li>
        </ul>
        </div>
        
        <div class="popup-project-buttons">
          <button type="button" id="see-live-bt" class="newBtn" onclick="">
            See Live
          </button>
          <button type="button" id="see-source-btn" class="newBtn" onclick="">
            See Source
          </button>
        </div>
      </div>
    </div>
   </section>`,
);
/* Pop Up Menu */
const popup = document.getElementById('popup');

function f1() {
  const x = Number(this.id);
  popup.innerHTML = popUpDetails[x];
  popup.style.display = 'block';
  document.getElementById('cl').onclick = function cl() {
    popup.innerHTML = '';
    popup.style.display = 'none';
  };
}

document.getElementById('0').onclick = f1;
document.getElementById('1').onclick = f1;
document.getElementById('2').onclick = f1;
document.getElementById('3').onclick = f1;

const span = document.getElementsByClassName('close')[0];
// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  popup.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};

// Form Validation

const form = document.getElementById('form');
const emailError = document.querySelector('span.error');

const isEmailValid = (email) => {
  const regex = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
  return regex.test(email.value);
};

const checkEmail = (email) => {
  let valid = true;
  if (!isEmailValid(email)) {
    valid = false;
  }
  return valid;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { email } = form.elements;

  if (!checkEmail(email)) {
    email.setCustomValidity(
      'Please enter a valid email address and in lowercase letters.',
    );
    emailError.textContent = 'Please enter a valid email address and in lowercase letters.';
  } else {
    email.setCustomValidity('');
    emailError.textContent = '';
    emailError.className = 'error';
    form.submit();
  }
});

const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const message = document.getElementById('message');

const store = () => {
  const inputs = {
    fullname: fullname.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('formInput', JSON.stringify(inputs));
};

fullname.addEventListener('change', () => {
  store();
});

email.addEventListener('change', () => {
  store();
});

message.addEventListener('change', () => {
  store();
});

const populateForm = () => {
  const storage = localStorage.getItem('formInput');
  fullname.value = JSON.parse(storage).fullname;
  email.value = JSON.parse(storage).email;
  message.value = JSON.parse(storage).message;
};
populateForm();
