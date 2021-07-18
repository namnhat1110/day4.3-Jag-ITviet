function gotoPage(id) {
  console.log('hi', id)
  window.location.replace('http://localhost:5500/job.html?id=' + id)
}


function renderJob(j) {
  return `
  <div class="col" onclick="gotoPage('${j.id}')">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>${j.title}</title>
                <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                  dy=".3em">Thumbnail</text>
              </svg>
              <div class="card-body">
                <p class="card-text">${j.title} ${j.city}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
  `
}

let jobs = []

async function getJobs() {
  const response = await fetch("http://localhost:3000/api/jobs");
  const json = await response.json();
  jobs = json.slice(0, 20)
  renderJobs()
}
getJobs();

function renderJobs() {
  const jobsHTML = []
  for (const job of jobs) {
    jobsHTML.push(renderJob(job))
  }
  document.getElementById('jobList').innerHTML = jobsHTML.join('')
}

getJobs();


const form = document.getElementById('jobCreate')

form.addEventListener('submit', (e) => {
  console.log({ e });
  e.preventDefault();
  const title = document.getElementById('title').value;
  const city = document.getElementById('city').value;
  createJob({ title, city })
})

async function createJob(j) {
  const resp = await fetch('http://localhost:3000/api/jobs', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(j)
  })
  const json = await resp.json()
  console.log({ json })
  console.log({ jsonFoo: json })
  jobs.unshift(json)
  renderJobs()
}
