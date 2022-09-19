let dataBlog = [];

function addBlog() {
  //   event.preventDefault();

  let title = document.getElementById("inputTitle").value;
  let content = document.getElementById("inputContent").value;
  let image = document.getElementById("inputImage").files;
  let nodejs = document.getElementById("nodejs").checked;
  let react = document.getElementById("react").checked;
  let reacteurope = document.getElementById("reacteurope").checked;
  let js = document.getElementById("js").checked;
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;

  if (nodejs) {
    nodejs = document.getElementById("nodejs").value;
  }
  if (react) {
    react = document.getElementById("react").value;
  }
  if (reacteurope) {
    reacteurope = document.getElementById("reacteurope").value;
  }
  if (js) {
    js = document.getElementById("js").value;
  }

  if (image.length == 0) {
    return alert("Gambar wajib di input !!!");
  }

  image = URL.createObjectURL(image[0]);

  let blog = {
    title,
    content,
    image,
    postAt: "18 September 2022",
    author: "budi aprisal",
    nodejs,
    react,
    reacteurope,
    js,
    startDate,
    endDate,
    duration: duration(new Date(startDate), new Date(endDate)),
  };

  dataBlog.push(blog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("contents").innerHTML += `
        
            <div class="blog-list-item ">
                <div class="blog-image">
                <img src="${dataBlog[index].image}" alt="" />
                </div>
                <div class="blog-content">
                
                <h1>
                    <a href="blog-detail.html" target="_blank"
                    >${dataBlog[index].title}</a
                    >
                </h1>
                <div class="detail-blog-content">
                    Duration : ${dataBlog[index].duration} 
                </div>
                <p>
                    ${dataBlog[index].content}
                </p>
                <i class="fa-brands fa-${dataBlog[index].nodejs} fa-4x"></i>
                <i class="fa-brands fa-${dataBlog[index].react} fa-4x"></i>
                <i class="fa-brands fa-${dataBlog[index].reacteurope}  fa-4x"></i>
                <i class="fa-brands fa-${dataBlog[index].js}  fa-4x"></i>

                
                </div>

                <div class="d-flex justify-content-between" style="z-index: 2; padding-top:30px">
                <a href="/edit-blog/" class="card-link text-decoration-none px-5 py-2 btn btn-outline-warning" >EDIT</a>
                <a href="/delete-blog/" class="card-link text-decoration-none btn btn-danger px-5 py-2">DELETE</a>
            </div>
            </div>

            

        `;
  }
}

function duration(startDate, endDate) {
  let time = endDate - startDate;

  let milisecond = 1000; // milisecond
  let secondInHours = 3600; // 1 jam 3600 detik
  let hoursInDay = 24; // 1 hari 24 jam

  let distanceDay = Math.floor(time / (milisecond * secondInHours * hoursInDay));

  if (distanceDay > 0) {
    return `${distanceDay} day `;
  }
}
