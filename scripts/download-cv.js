function downloadCV(){
    fetch('http://localhost:4000/static/CV.pdf',
    {
        method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/pdf'
            })
    })
    .then((data) => data.blob())
    .then((blob) => {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = "cv-gm.pdf";
        document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
        a.click();    
        a.remove();  //afterwards we remove the element again        
    });
}