function openRegistration(course) {
  var registrationContent = document.getElementById('registration-content')

  registrationContent.innerHTML = '';
  
  if (course === 'html') {
    registrationContent.innerHTML = `
      <div class="course-card">
        <img src="/images/images.png" alt="HTML Symbol">
        <h2>HTML Course</h2>
        <p>Duration: 4 weeks</p>
        <p>Course Details: In this module, sets the stage, getting you used to important concepts and syntax, looking at applying HTML to
        text, how to create hyperlinks, and how to use HTML to structure a webpage.</p>
        <button onclick="openPopup()">Register</button>
      </div>
    `;
  } else if (course === 'css') {
    registrationContent.innerHTML = `
      <div class="course-card">
        <img src="/images/css.jpg" alt="CSS Symbol">
        <h2>CSS Course</h2>
        <p>Duration: 3 weeks</p>
        <p>Course Details: In this module, CSS Backgrounds and Borders is a module of CSS that lets you style elements backgrounds and
        borders. Backgrounds can be filled with a color or image, clipped or resized, and otherwise modified. Borders
        can be decorated with lines or images, and made square or rounded.</p>
        <button onclick="openPopup()">Register</button>
      </div>
    `;
  } else if (course === 'js') {
    registrationContent.innerHTML = `
      <div class="course-card">
        <img src="/images/js.jpg" alt="JavaScript Symbol">
        <h2>JavaScript Course</h2>
        <p>Duration: 5 weeks</p>
        <p>Course Details: Scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else..</p>
        <button onclick="openPopup()">Register</button>
      </div>
    `;
  }
}

function openPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}
