// Array of project objects with a date field
const projects = [
    {
      title: "Skin Cancer Detection",
      description: "A CNN multi classification skin cancer detection model with 84% accuracy.",
      imgSrc: "/assets/img/Blog-Images-Forget-Machine-Learning-Humans-Still-Have-a-Lot-to-Learn-Part-II.jpg",
      tools: "Django, PyTorch, CNN",
      link: "https://github.com/varadbhogayata/visual-question-answering",
      date: "2024-07-10" // YYYY-MM-DD format
    },
    {
      title: "GIS Mapping System",
      description: "A google map clone built from scratch on C++ featuring route finding and solving the TSP problem.",
      imgSrc: "/assets/img/project-quizup-logo-1.png",
      tools: "C++, OpenGL",
      link: "https://github.com/varadbhogayata/QuizUp",
      date: "2024-09-22" // Older date
    },
    {
      title: "YouTube to MP3",
      description: "YouTube to MP3 on Python app done through web scraping.",
      imgSrc: "/assets/img/project-music-player.png",
      tools: "Python, Web Scraping, Django",
      link: "https://galvanic-music.herokuapp.com/",
      date: "2024-09-15" // More recent than GIS but older than Skin Cancer Detection
    }
  ];
  
  // Sort projects by date (most recent first)
  projects.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  let currentIndex = 0; // Tracks how many projects are displayed
  
  // Function to load all remaining projects dynamically
  function loadAllProjects() {
    const recentProjects = document.getElementById('recent-projects');
  
    // Loop through all remaining projects and display them
    for (let i = currentIndex; i < projects.length; i++) {
      const project = projects[i];
  
      const projectHTML = `
        <div class="col s12 m6 l4">
          <div class="card medium">
            <div class="card-image waves-effect waves-block waves-light">
              <img alt="${project.title}" src="${project.imgSrc}" style="height: 100%; width: 100%" class="activator" />
            </div>
            <div class="card-content">
              <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
              <p>${project.description}</p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text"><small>Tools</small><i class="mdi-navigation-close right"></i></span>
              <ul>
                <li><b>Tools:</b> ${project.tools}</li>
              </ul>
              <div class="card-action">
                <a aria-label="Visit the GitHub repo" href="${project.link}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey">
                  <i class="fa fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
  
      // Append the project HTML to the recent-projects div
      recentProjects.innerHTML += projectHTML;
    }
  
    // Update currentIndex to the length of the projects array
    currentIndex = projects.length;
  
    // Hide "Load More" button after displaying all projects
    document.getElementById('load-more').style.display = 'none';
  }
  
  // Event listener for "Load More" button
  document.getElementById('load-more').addEventListener('click', loadAllProjects);
  
  // Load the first project initially
  loadAllProjects();
  