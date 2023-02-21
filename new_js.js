// const change=document.getElementById("title_p");
// console.log(change);


// const titles=document.querySelectorAll("h3");

//SET ATTRIBUTE-------------------------------------------------
// titles[2].setAttribute("class","title");
// titles[2].className="my_title";
// console.log(titles);

//WITHOUT SET ATTRIBUTE----------------------------------------
// titles[2].class="my_title";
// console.log(titles);

//TEXT CONTENT CHANGE-----------------------------------------
//titles[2].textContent="Hello World!";
    //using for each


    // titles.forEach(function change(title,i) {
    //     title.fontSize="50px";
    //     if(i%2 == 0)
    //         title.style.color="green";
    //     else    
    //         title.style.color="red";
    // })

//CREATE ELEMENT--------------------------------------------
// var new_element=document.createElement("p");
// new_element.textContent="Hello World";
// document.body.appendChild(new_element);     //adding it to the last of body tag

//WORKING 1-100 BLOCKS--------------------------------------
// let big_container = document.createElement('div');

// for(var i=1;i<101;i++){

//     //container for number
//     var sing_container=document.createElement('div');
//     sing_container.style.marginLeft="10px"
//     sing_container.style.height="150px";
//     sing_container.style.width="150px";
//     sing_container.style.margin="20px";
//     if(i%2==0){
//         sing_container.style.backgroundColor="lightgreen";
//     }
//     else{
//         sing_container.style.backgroundColor="lightblue";
//     }
//     sing_container.style.display="flex";
    
//     //<p> tag inside little container
//     var num=document.createElement('p');

//     //add num to little container
//     sing_container.appendChild(num);

//     num.textContent=i;
//     num.style.textAlign="center";
//     num.style.margin="70px";  

//     //add little container to big container
//     big_container.appendChild(sing_container);
// }
// document.body.append(big_container);

//EVENT LISTENERS--CLICK--------------------------------------

document.getElementById("my_Click").addEventListener("click",myfunc);

function myfunc(){
    console.log("Hello");
}

//EVENT LISTENERS----HOVER----------------------------------

document.getElementById("mouseOver").addEventListener("mouseover",new_func);

document.getElementById("mouseOver").addEventListener("mouseout",func_out);

function new_func(){
    document.getElementById("mouseOver").style.color="red";
}

function func_out(){
    document.getElementById("mouseOver").style.color="black";
}

//Image Changing------------------------------------------------
var img_value=0;
document.getElementById("change_image").addEventListener("click",change_image);

function change_image(){
    if(img_value==0){
        document.getElementById("my_image").src="images/open.jpg";
        img_value=1;
    }
    else{
        document.getElementById("my_image").src="images/close.jpg";
        img_value=0;
    }
}

//Shape changing
var sh_value = 0;
document.getElementById("shape_container").addEventListener("mouseover",change_shape_small);
document.getElementById("shape_container").addEventListener("mouseout",change_shape_large);


function change_shape_small(){
    document.getElementById("shape_container").style.width="80px";
    document.getElementById("shape_container").style.height="80px";
    document.getElementById("shape_container").style.borderRadius="50%";
}

function change_shape_large(){
    document.getElementById("shape_container").style.width="150px";
    document.getElementById("shape_container").style.height="150px";
    document.getElementById("shape_container").style.borderRadius="50%";
}



