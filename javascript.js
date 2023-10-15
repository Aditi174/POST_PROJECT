const titleinput = document.getElementById('titleinput');
const bodyinput = document.getElementById('bodyinput');
const userdata = document.getElementById('userid');
const postbutton = document.getElementById('Buttons');

postbutton.addEventListener("click", async () => {
    const input1 = titleinput.value;
    const input2 = bodyinput.value;
    const input3 = userdata.value;

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: input1,
            body: input2,
            userId: input3, // Make sure the key is 'userId' not 'userid'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });


    const data = await response.json();
    console.log(data);

    titleinput.value = "";
    bodyinput.value = "";
    userdata.value = "";

});
