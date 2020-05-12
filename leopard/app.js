$(document).ready(function () {

    setTimeout(headertext, 2000)

    var headers = ["SPECIES", "OUR CAUSE"]

    for (let i = 0; i < headers.length; i++) {

        let nav = $("#nav")
        let div = $("<div>").addClass("box" + i).html(headers[i])

        $(div).appendTo(nav);
    }
    infoBox();


    $(".box0").click(function () {

        $(".info0").fadeToggle("slow", "linear");

    });

    $(".box1").click(function () {
        $(".info1").fadeToggle("slow", "linear");


    });



})

function infoBox() {

    var info = [" SPECIES: <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus neque, hendrerit vel augue ut, euismod lacinia lacus. Quisque aliquet lorem nec nunc tincidunt pharetra. Nam ornare gravida odio, at rhoncus metus dictum sed. Morbi at eleifend nulla, quis sagittis velit. Integer ut convallis lacus. Aliquam vitae lectus euismod, porttitor diam quis, pellentesque urna. Mauris eget enim eu massa tempor suscipit. Curabitur ex justo, finibus vitae tempus vitae, semper viverra nisi. Vestibulum tristique dui sed odio congue, eu imperdiet odio vehicula..",
        "OUR CAUSE:  <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, mi sit amet efficitur rutrum, urna erat viverra leo, a efficitur augue nibh in nibh. Sed sodales ex vitae mauris pretium pharetra. In et molestie arcu. Nulla facilisi. Nam lectus libero, ornare quis sem eget, consectetur placerat quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In varius ullamcorper elit, tristique egestas ligula interdum at."
    ]

    for (let i = 0; i < info.length; i++) {
        let subjectInfo = $("<div>").addClass("info" + i).html(info[i])
        $(subjectInfo).appendTo(nav)

    }
}

function headertext() {

    $(".hiddenTextPopUp").fadeIn("slow", "linear");
}